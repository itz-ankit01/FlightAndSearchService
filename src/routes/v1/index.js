const express = require("express");
const { CityController, FlightController, AirportController } = require("../../controllers/index");
const {FlightMiddlewares} = require('../../middlewares/index')

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);

router.get("/city", CityController.getAll);

router.post(
    "/flights",
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get("/flights", FlightController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;
