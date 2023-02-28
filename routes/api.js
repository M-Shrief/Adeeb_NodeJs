const router = require('express').Router();
const poetController = require('../controllers/PoetController');
const poemController = require('../controllers/PoemController');
const chosenVerseController = require('../controllers/ChosenVerseController');
const orderController = require('../controllers/OrderController');
const proseController = require('../controllers/ProseController');

router.get('/poets', poetController.index);
router.get('/poet/:id', poetController.indexOneWithLiterature);
router.post('/poet', poetController.post);
router.put('/poet/:id', poetController.update);
router.delete('/poet/:id', poetController.destroy);

router.get('/poems', poemController.indexWithPoet);
router.get('/poems_intros', poemController.indexIntrosWithPoetName);
router.get('/poem/:id', poemController.indexOneWithPoet);
router.post('/poem', poemController.post);
router.put('/poem/:id', poemController.update);
router.delete('/poem/:id', poemController.destroy);

router.get('/chosenverses', chosenVerseController.indexWithPoet);
router.get('/chosenverses_random/:size', chosenVerseController.indexRandom);
router.get('/chosenverse/:id', chosenVerseController.indexOneWithPoet);
router.post('/chosenverse', chosenVerseController.post);
router.put('/chosenverse/:id', chosenVerseController.update);
router.delete('/chosenverse/:id', chosenVerseController.destroy);

router.get('/proses', proseController.indexWithPoet);
router.get('/proses_random/:size', proseController.indexRandom);
router.get('/prose/:id', proseController.indexOneWithPoet);
router.post('/prose', proseController.post);
router.put('/prose/:id', proseController.update);
router.delete('/prose/:id', proseController.destroy);

router.get('/orders', orderController.index);
router.get('/order/:name/:phone', orderController.indexOne);
router.post('/order/store', orderController.post);
router.put('/order/:id', orderController.update);
router.delete('/order/:id', orderController.destroy);

module.exports = router;
