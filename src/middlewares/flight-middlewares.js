const {clientErrorCodes} = require('../utils/errorCodes')
const validateCreateFlight = (req, res, next) => {
    if(!req.body.flightNumber || 
       !req.body.airplaneId || 
       !req.body.departureAirportId || 
       !req.body.arrivalAirportId || 
       !req.body.arrivalTime || 
       !req.body.departureTime || 
       !req.body.price 
    ) {
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: true,
            message: 'Invalid request body for creating flight',
            err: 'Missing mandatory properties to create a flight'
        })
    }
    next();
}

module.exports = {
    validateCreateFlight,
}