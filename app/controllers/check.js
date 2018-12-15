const express = require('express');

const router = express.Router();
const md5 = require('md5');
const fs = require('fs');

router.post('/',(req, res, next) =>{
	fs.readFile('./DB/user.json','utf8' ,function(err, data){
		if(err) throw err;
		let users = JSON.parse(data).users;
		// users
		let flag = 0;
		users.forEach(user=>{
			if(user.username === req.body.username.toLowerCase() ){
				if(user.password === md5(req.body.password)){
					flag = 1;
				}
			}
		})
		flag === 1 ? res.redirect('/') : res.redirect('/login');
	})
});

module.exports = router;
