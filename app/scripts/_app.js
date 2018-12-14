const priorityClass = {
	'N': "normal-priority",
	'L': "low-priority",
	'H': "high-priority"
};

let APP = {
	tables: {
		"tasks-mission": {
			'H': [],
			'N': [],
			'L': []
		},
		"tasks-processing": {
			'H': [],
			'N': [],
			'L': []
		},
		"tasks-done": {
			'H': [],
			'N': [],
			'L': []
		},
	},

	sortObject : {},


	tableId: ['tasks-mission', 'tasks-processing', 'tasks-done'],

	initSortable: function (id, opt) {
		// due to the 'tasks' class is wrap all the task and it self the child of the tasks-type
		// so we need to catch tasks rather than tasks-type
		let root_el = document.getElementById(id);
		let el = root_el.querySelector('.tasks');
		return new Sortable(el, opt);
	},

	getDataFromServer: function () {
		// do some thing to fetch data
		return tasksDB;
	},

	classifyData: function () {
		let tasksDB = APP.getDataFromServer(); // remember this is async function soon.
		tasksDB.forEach(data => {
			let newTask = new Task(data);
			APP.tables[newTask.group][newTask.priority].push(newTask.process());
		})
	},

	sortByPriority: function () {
		APP.tableId.forEach(id => {
			APP.tables[id]['H'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			})
			APP.tables[id]['N'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			})
			APP.tables[id]['L'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			})
		})
	},

	sortData: function () {
		APP.classifyData();
		// we need sort the data base on priority soon
	},

	renderElement: function (parentId, newNode) {
		document.querySelector(parentId + ' .tasks').appendChild(newNode);
	},
	
	render: function () {
		APP.sortByPriority();
	},

	init: function () {
		// init sortable
		APP.tableId.forEach(htmlId => {
			APP.sortObject[htmlId] = APP.initSortable(htmlId, tableConfig[htmlId]);
		})
		// end init sortable
		// console.log(APP.sortObject);
		APP.sortData();
		// APP.render();
	}
}
