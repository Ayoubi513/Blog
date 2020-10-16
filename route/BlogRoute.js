const express = require('express');
const BlogControlleur = require('../controllers/BlogController');
const router = express.Router();



//blogs 
router.get('/', BlogControlleur.blog_index);
router.post('/', BlogControlleur.blog_store);
router.get('/create', BlogControlleur.blog_create);
router.get('/:id',BlogControlleur.blog_details);
router.delete('/:id', BlogControlleur.blog_delete); 

module.exports = router;