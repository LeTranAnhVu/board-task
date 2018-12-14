let group = ['tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done'];
let projectNames = [
	"Dựng phôi thép",
	"Dựng phôi Gang",
	"Dap thép",
	"Cán Thép",
	"Nung Thép",
	"Tôi Thép",
	"Mua nguyên liệu",
	"Chấm công",
	"Kiểm kho",
]
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
}

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
}]


// tasksDB = JSON.parse(RAW);
console.log(RAW)
tasksDB = RAW;
