const express = require('express');
const router = express.Router();
const { APP_NAME } = process.env;

const mediaHandler = require('./handler/media')

router.post('/', mediaHandler.create); 
router.get('/', mediaHandler.getAll); 
module.exports = router;
