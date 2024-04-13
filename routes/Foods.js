const FoodsControllers = require('../controllers/Foods');

const router = require('express').Router();

router.get('/', FoodsControllers.getFoods);
router.get('/:id', FoodsControllers.getFoodsById);
router.post('/', FoodsControllers.newFood);
router.patch('/:id', FoodsControllers.updateFood);
router.delete('/:id', FoodsControllers.deleteFood);

module.exports = router;
