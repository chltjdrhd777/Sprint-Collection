const express = require('express');
const router = express.Router();
const linkController = require('../controllers/links');

/* GET links listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
router.get('/', linkController.get)
router.post('/', linkController.post)
router.get('/:id', linkController.redirect)

module.exports = router