const express = require('express');

const router = express.Router();


router.get('/',(req, res, next) =>{
	res.render('login',{
		title :'Login Page'
	})
});

module.exports = router;