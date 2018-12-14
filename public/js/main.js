
$(document).ready(() => {
	APP.init();
	//   $('#dend').append(JSON.stringify(tasksDB));
});

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
		}
	},

	sortObject: {},

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
		});
	},

	sortByPriority: function () {
		APP.tableId.forEach(id => {
			APP.tables[id]['H'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			});
			APP.tables[id]['N'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			});
			APP.tables[id]['L'].forEach(newNode => {
				parentId = "#" + id;
				APP.renderElement(parentId, newNode);
			});
		});
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
		});
		// end init sortable
		// console.log(APP.sortObject);
		APP.sortData();
		// APP.render();
	}
};

let group = ['tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done'];
let projectNames = ["Dựng phôi thép", "Dựng phôi Gang", "Dap thép", "Cán Thép", "Nung Thép", "Tôi Thép", "Mua nguyên liệu", "Chấm công", "Kiểm kho"];
let prior = ['H', 'L', 'N', 'H', 'L', 'N', 'H', 'L', 'N'];
let temp = {
	id: 1,
	missionName: "nhiem vu ",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "12/20/2018",
	deadline: "12/25/2018",
	mainDay: 4,
	material: "sắt",
	projectName: "Dựng phôi thép",
	note: "lorem  rem remrem",
	group: "tasks-mission"
};

function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var tasksDB = [];
// for (let i = 0; i < 20; i++) {
// 	let t = Object.assign({}, temp);
// 	t.id = i;
// 	t.missionName += i;
// 	t.group = group[Math.floor(Math.random() * 8)];
// 	t.priority = prior[Math.floor(Math.random() * 8)];
// 	t.projectName = projectNames[Math.floor(Math.random() * 8)];
// 	t.createdDate = ((randomDate(new Date(2018, 11, 1), new Date(2018, 12, 1))));
// 	t.deadline = ((randomDate(t.createdDate, new Date(2018, 12, 1))));
// 	let timeNow = Date.now();
// 	t.mainDay = parseInt((t.deadline - timeNow) / (1000 * 60 * 60 * 24)) + 1;
// 	tasksDB.push(t);
// }


var RAW = [{
	id: 0,
	missionName: "nhiem vu 0",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-30T08:08:38.405Z",
	deadline: "2018-12-30T22:33:49.439Z",
	mainDay: 18,
	material: "sắt",
	projectName: "Dựng phôi thép",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 1,
	missionName: "nhiem vu 1",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-04T19:54:49.723Z",
	deadline: "2018-12-06T03:17:10.064Z",
	mainDay: -6,
	material: "sắt",
	projectName: "Tôi Thép",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 2,
	missionName: "nhiem vu 2",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-29T21:00:11.762Z",
	deadline: "2018-12-30T04:53:42.466Z",
	mainDay: 17,
	material: "sắt",
	projectName: "Chấm công",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 3,
	missionName: "nhiem vu 3",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-19T15:26:56.461Z",
	deadline: "2018-12-29T17:57:47.914Z",
	mainDay: 17,
	material: "sắt",
	projectName: "Dựng phôi thép",
	note: "lorem rem remrem",
	group: "tasks-done"
}, {
	id: 4,
	missionName: "nhiem vu 4",
	priority: "N",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-09T11:54:49.925Z",
	deadline: "2018-12-28T00:34:25.790Z",
	mainDay: 15,
	material: "sắt",
	projectName: "Dap thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 5,
	missionName: "nhiem vu 5",
	priority: "N",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-06T19:08:08.013Z",
	deadline: "2018-12-09T03:34:59.055Z",
	mainDay: -3,
	material: "sắt",
	projectName: "Nung Thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 6,
	missionName: "nhiem vu 6",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-04T10:35:54.073Z",
	deadline: "2018-12-29T05:27:38.758Z",
	mainDay: 16,
	material: "sắt",
	projectName: "Cán Thép",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 7,
	missionName: "nhiem vu 7",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-11T01:59:37.726Z",
	deadline: "2018-12-21T20:54:24.721Z",
	mainDay: 9,
	material: "sắt",
	projectName: "Cán Thép",
	note: "lorem rem remrem",
	group: "tasks-done"
}, {
	id: 8,
	missionName: "nhiem vu 8",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-23T11:01:53.125Z",
	deadline: "2018-12-27T11:31:15.712Z",
	mainDay: 14,
	material: "sắt",
	projectName: "Nung Thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 9,
	missionName: "nhiem vu 9",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-25T15:05:26.675Z",
	deadline: "2018-12-30T10:05:57.080Z",
	mainDay: 17,
	material: "sắt",
	projectName: "Dap thép",
	note: "lorem rem remrem",
	group: "tasks-done"
}, {
	id: 10,
	missionName: "nhiem vu 10",
	priority: "N",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-02T12:23:48.366Z",
	deadline: "2018-12-28T08:12:44.686Z",
	mainDay: 15,
	material: "sắt",
	projectName: "Mua nguyên liệu",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 11,
	missionName: "nhiem vu 11",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-03T05:18:33.769Z",
	deadline: "2018-12-13T06:41:17.689Z",
	mainDay: 1,
	material: "sắt",
	projectName: "Dựng phôi Gang",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 12,
	missionName: "nhiem vu 12",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-06T01:38:48.142Z",
	deadline: "2018-12-27T17:53:57.195Z",
	mainDay: 15,
	material: "sắt",
	projectName: "Dap thép",
	note: "lorem rem remrem",
	group: "tasks-done"
}, {
	id: 13,
	missionName: "nhiem vu 13",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-15T13:17:27.046Z",
	deadline: "2018-12-29T17:08:59.567Z",
	mainDay: 17,
	material: "sắt",
	projectName: "Dựng phôi thép",
	note: "lorem rem remrem",
	group: "tasks-mission"
}, {
	id: 14,
	missionName: "nhiem vu 14",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-25T01:34:13.711Z",
	deadline: "2018-12-29T14:16:09.229Z",
	mainDay: 17,
	material: "sắt",
	projectName: "Tôi Thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 15,
	missionName: "nhiem vu 15",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-02T12:12:51.643Z",
	deadline: "2018-12-10T14:55:04.894Z",
	mainDay: -1,
	material: "sắt",
	projectName: "Dap thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 16,
	missionName: "nhiem vu 16",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-05T02:13:22.748Z",
	deadline: "2018-12-19T00:58:44.546Z",
	mainDay: 6,
	material: "sắt",
	projectName: "Mua nguyên liệu",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 17,
	missionName: "nhiem vu 17",
	priority: "L",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-29T05:24:47.417Z",
	deadline: "2018-12-31T05:23:26.054Z",
	mainDay: 18,
	material: "sắt",
	projectName: "Tôi Thép",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 18,
	missionName: "nhiem vu 18",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-02T09:49:55.036Z",
	deadline: "2018-12-30T23:50:14.425Z",
	mainDay: 18,
	material: "sắt",
	projectName: "Chấm công",
	note: "lorem rem remrem",
	group: "tasks-processing"
}, {
	id: 19,
	missionName: "nhiem vu 19",
	priority: "H",
	document: "",
	author: "Vule",
	assignee: "Unknown",
	createdDate: "2018-12-16T20:17:23.470Z",
	deadline: "2018-12-28T06:58:15.372Z",
	mainDay: 15,
	material: "sắt",
	projectName: "Chấm công",
	note: "lorem rem remrem",
	group: "tasks-done"
}];

// tasksDB = JSON.parse(RAW);
console.log(RAW);
tasksDB = RAW;

// mission option

const missionOpt = {
	group: {
		name: 'share'
	},
	setData: function ( /** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	},

	// Element is chosen
	onChoose: function ( /**Event*/evt) {
		evt.oldIndex; // element index within parent
		// console.log(evt.item);
	},

	// Element dragging started
	onStart: function ( /**Event*/evt) {
		// console.log(evt.oldIndex );  // element index within paren	t
		// console.log('hulala');
		// console.log(evt.item);
		// console.log(typeof evt.item);
	},

	// Element dragging ended
	onEnd: function ( /**Event*/evt) {
		var itemEl = evt.item; // dragged HTMLElement
		// console.log("=======mission option=========");    // target list
		// console.log(evt.to);    // target list
		// console.log(evt.from);  // previous list
		// console.log(evt.oldIndex);  // element's old index within old parent
		// console.log(evt.newIndex);  // element's new index within new parent
		// console.log("================");    // target list
	},

	// Element is dropped into the list from another list
	onAdd: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Changed sorting within list
	onUpdate: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Called by any change to the list (add / update / remove)
	onSort: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Element is removed from the list into another list
	onRemove: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Attempt to drag a filtered element
	onFilter: function ( /**Event*/evt) {
		var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
	},

	// Event when you move an item in the list or between lists
	onMove: function ( /**Event*/evt, /**Event*/originalEvent) {
		// Example: http://jsbin.com/tuyafe/1/edit?js,output
		evt.dragged; // dragged HTMLElement
		evt.draggedRect; // TextRectangle {left, top, right и bottom}
		evt.related; // HTMLElement on which have guided
		evt.relatedRect; // TextRectangle
		originalEvent.clientY; // mouse position
		// return false; — for cancel
	},

	// Called when creating a clone of element
	onClone: function ( /**Event*/evt) {
		var origEl = evt.item;
		var cloneEl = evt.clone;
	}

	//end mission option


	// processing option

};const processingOpt = {
	group: {
		name: 'share'
	},
	setData: function ( /** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	},

	// Element is chosen
	onChoose: function ( /**Event*/evt) {
		evt.oldIndex; // element index within parent
	},

	// Element dragging started
	onStart: function ( /**Event*/evt) {
		evt.oldIndex; // element index within parent
	},

	// Element dragging ended
	onEnd: function ( /**Event*/evt) {
		var itemEl = evt.item; // dragged HTMLElement
		// console.log("=======processing option=========");    // target list
		// console.log(evt.to);    // target list
		// console.log(evt.from);  // previous list
		// console.log(evt.oldIndex);  // element's old index within old parent
		// console.log(evt.newIndex);  // element's new index within new parent
		// console.log("================");    // target list
	},

	// Element is dropped into the list from another list
	onAdd: function ( /**Event*/evt) {
		// same properties as onEnd
		console.log("=======processing onAdd========="); // target list
		console.log(evt.item);
	},

	// Changed sorting within list
	onUpdate: function ( /**Event*/evt) {
		// same properties as onEnd
		console.log('update');
	},

	// Called by any change to the list (add / update / remove)
	onSort: function ( /**Event*/evt) {
		// same properties as onEnd
		console.log("onsort", evt.item);
	},

	// Element is removed from the list into another list
	onRemove: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Attempt to drag a filtered element
	onFilter: function ( /**Event*/evt) {
		var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
	},

	// Event when you move an item in the list or between lists
	onMove: function ( /**Event*/evt, /**Event*/originalEvent) {
		// Example: http://jsbin.com/tuyafe/1/edit?js,output
		evt.dragged; // dragged HTMLElement
		evt.draggedRect; // TextRectangle {left, top, right и bottom}
		evt.related; // HTMLElement on which have guided
		evt.relatedRect; // TextRectangle
		originalEvent.clientY; // mouse position
		// return false; — for cancel
	},

	// Called when creating a clone of element
	onClone: function ( /**Event*/evt) {
		var origEl = evt.item;
		var cloneEl = evt.clone;
	}

	//end processing option


	//done option

};const doneOpt = {
	group: {
		name: 'share'
	},
	setData: function ( /** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	},

	// Element is chosen
	onChoose: function ( /**Event*/evt) {
		evt.oldIndex; // element index within parent
	},

	// Element dragging started
	onStart: function ( /**Event*/evt) {
		evt.oldIndex; // element index within parent
	},

	// Element dragging ended
	onEnd: function ( /**Event*/evt) {
		var itemEl = evt.item; // dragged HTMLElement
		evt.to; // target list
		evt.from; // previous list
		evt.oldIndex; // element's old index within old parent
		evt.newIndex; // element's new index within new parent
	},

	// Element is dropped into the list from another list
	onAdd: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Changed sorting within list
	onUpdate: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Called by any change to the list (add / update / remove)
	onSort: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Element is removed from the list into another list
	onRemove: function ( /**Event*/evt) {
		// same properties as onEnd
	},

	// Attempt to drag a filtered element
	onFilter: function ( /**Event*/evt) {
		var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
	},

	// Event when you move an item in the list or between lists
	onMove: function ( /**Event*/evt, /**Event*/originalEvent) {
		// Example: http://jsbin.com/tuyafe/1/edit?js,output
		evt.dragged; // dragged HTMLElement
		evt.draggedRect; // TextRectangle {left, top, right и bottom}
		evt.related; // HTMLElement on which have guided
		evt.relatedRect; // TextRectangle
		originalEvent.clientY; // mouse position
		// return false; — for cancel
	},

	// Called when creating a clone of element
	onClone: function ( /**Event*/evt) {
		var origEl = evt.item;
		var cloneEl = evt.clone;
	}

	//end done option


};let tableConfig = {
	"tasks-mission": missionOpt,
	"tasks-processing": processingOpt,
	"tasks-done": doneOpt
};

function Task(data) {
	let taskId = 'task_' + data.id;
	let collapsedBtnId = 'collapsed-btn-' + data.id;
	let moveBtnId = 'move-btn-' + data.id;
	this.priority = data.priority;
	this.priorityClass = priorityClass[this.priority];
	this.group = data.group;
	this.styleClass = this.priorityClass;
	this.template = '<div class="task-box"><div class="main-content"><div class="row"><div class="col-2 item priority-col"><div class="priority"><span class="priority-value">' + data.priority + '</span></div></div><div class="col-10 item"><div class="inner-main-content"><div class="title"> <span class="task-code">' + data.missionName + '</span><span class="task-name">' + data.projectName + '</span></div><div class="desc"><p class="short-desc">' + data.note + '</p></div></div><div class="extra-features"><a class="file-link" href="#"> <i class="fa fa-file-pdf"></i><span class="pl-2">Xem PDF</span></a><div class="task-toggle-btn btn btn-primary" data-toggle="collapse" href="' + '#' + collapsedBtnId + '" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i class="fa fa-angle-down" style="color:white"></i></div></div></div></div></div><div class="collapse-content"><div class="collapse" id="' + collapsedBtnId + '"><div class="card deadline-card"><div class="row"><div class="col-4 item create"><i class="fa fa-play"></i><date class="pl-2">' + (data.createdDate || 'chưa xác định') + '</date></div><div class="col-4 item deadline"><i class="fa fa-stop-circle"></i><date class="pl-2">' + (data.deadline || 'chưa xác định') + '</date></div><div class="col-4 item time-left"><i class="fa fa-hourglass-end"></i><span class="pl-2">' + (data.mainDay || 'chưa xác định') + '</span></div></div></div><div class="card creator-card"><div class="row"><div class="col-4 item"><p class="who"><i class="fa fa-user"></i><span class="creator pl-2">' + (data.author || 'unknown') + '</span></p></div><div class="col-4 item offset-4"><p class="time-stamp">' + (data.timeStamp || 'chưa xác định') + '</p></div></div></div><div class="card employee-card"><div class="row"><div class="col-4 item"><p class="who"><i class="fa fa-cog"></i><span class="creator pl-2">' + (data.assignee || 'unknown') + '</span></p></div><div class="col-4 item offset-4"><p class="time-stamp">' + (data.timeStamp || 'chưa xác định') + '</p></div></div></div></div></div></div><div class="task-move-box"><div class="button task-move-btn" id="' + moveBtnId + '"><i class="fa fa-angle-right" style="color:white"></i></div></div>';

	this.node = document.createElement('div');
	this.process = () => {
		this.node.className = 'task' + " " + this.styleClass;
		this.node.id = taskId;
		this.node.insertAdjacentHTML('beforeend', this.template);
		return this.node;
	};
}
//# sourceMappingURL=main.js.map
