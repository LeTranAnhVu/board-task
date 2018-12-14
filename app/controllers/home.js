const express = require('express');

const router = express.Router();
const Utils = require('../helpers/utils');
const fs = require('fs');


router.get('/', (req, res, next) => {

	fs.readFile('./DB/task.json','utf8',(err, data)=>{
		if(err) throw err;
		let tasks = JSON.parse(data).tasks;
		res.render('index', {
			title: 'Bảng công việc',
			tasks: tasks
		});
	});

});

module.exports = router;




