const { Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }
    // if (data.minPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    // }
    // if (data.maxPrice) {
    //   Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    // }

    // another method to filter

    let priceFilter = [];
    if(data.minPrice){
        priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if(data.maxPrice){
        priceFilter.push({ price: { [Op.lte]: data.maxPrice } })
    }
    Object.assign(filter, {[Op.and]: priceFilter})

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const fliterObject = this.#createFilter(filter);
      const flights = await Flight.findAll({
        where: fliterObject,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
