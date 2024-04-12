const FoodsControllers = require('../controllers/Foods');

const router = require('express').Router();

router.get('/', FoodsControllers.getFoods);
router.get('/:id', FoodsControllers.getFoodsById);
router.post('/', FoodsControllers.newFood);

module.exports = router;
