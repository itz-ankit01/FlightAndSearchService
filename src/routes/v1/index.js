const express = require('express');
const {CityController, FlightController} = require('../../controllers/index');


const router = express.Router();

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);

router.get('/city', CityController.getAll);

router.post('/flights', FlightController.create);

module.exports = router;