let group = ['tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done'];
let prior = ['H', 'L', 'N', 'H', 'L', 'N' , 'H', 'L', 'N'];
let temp = {
  id: 1,
  missionName: "nhiem vu 1",
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
for (let i = 0; i < 20; i++) {
  let t = Object.assign({},temp);
  t.id = i;
  t.group = group[Math.floor(Math.random() * 8) ];
  t.priority = prior[Math.floor(Math.random() * 8) ];
  t.createdDate = ((randomDate(new Date(2018, 11, 1), new Date(2018, 12, 1))));
  t.deadline = ((randomDate(t.createdDate, new Date(2018, 12, 1))));
  let timeNow = Date.now();
  t.mainDay = parseInt(( t.deadline - timeNow ) / (1000*60*60*24)) + 1;
  tasksDB.push(t);
}

// let tasksDB = [
//   {
//     id: 1,
//     missionName: "nhiem vu 1",
//     priority: "L",
//     document: "",
//     author: "Vule",
//     assignee: "Unknown",
//     createdDate: "20/12/2018",
//     deadline: "25/12/2018",
//     mainDay: 4,
//     material: "sắt",
//     projectName: "Dựng phôi thép",
//     note: "lorem  rem remrem",
//     group: "tasks-mission"
//   },
//   {
//     id: 2,
//     missionName: "nhiem vu 2",
//     priority: "H",
//     document: "",
//     author: "Vule",
//     assignee: "Unknown",
//     createdDate: "20/12/2015",
//     deadline: "25/12/2020",
//     mainDay: 4,
//     material: "",
//     projectName: "Mua nguyen lieu",
//     note: "lorem  rem remrem",
//     group: "tasks-processing"
//   },
//   {
//     id: 3,
//     missionName: "nhiem vu 3",
//     priority: "L",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
//   {
//     id: 4,
//     missionName: "nhiem vu 4",
//     priority: "H",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
//   {
//     id: 5,
//     missionName: "nhiem vu 5",
//     priority: "N",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
//   {
//     id: 6,
//     missionName: "nhiem vu 1",
//     priority: "L",
//     document: "",
//     author: "Vule",
//     assignee: "Unknown",
//     createdDate: "20/12/2018",
//     deadline: "25/12/2018",
//     mainDay: 4,
//     material: "sắt",
//     projectName: "Dựng phôi thép",
//     note: "lorem  rem remrem",
//     group: "tasks-mission"
//   },
//   {
//     id: 7,
//     missionName: "nhiem vu 2",
//     priority: "H",
//     document: "",
//     author: "Vule",
//     assignee: "Unknown",
//     createdDate: "20/12/2015",
//     deadline: "25/12/2020",
//     mainDay: 4,
//     material: "",
//     projectName: "Mua nguyen lieu",
//     note: "lorem  rem remrem",
//     group: "tasks-processing"
//   },
//   {
//     id: 8,
//     missionName: "nhiem vu 3",
//     priority: "L",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
//   {
//     id: 9,
//     missionName: "nhiem vu 4",
//     priority: "H",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
//   {
//     id: 10,
//     missionName: "nhiem vu 5",
//     priority: "N",
//     document: "",
//     author: "Vule",
//     assignee: "Tien Nguyen",
//     createdDate: "20/12/2013",
//     deadline: "25/12/2014",
//     mainDay: 4,
//     material: "sắt, thep, carbon",
//     projectName: "Dựng phôi gang",
//     note: "gap",
//     group: "tasks-done"
//   },
// ]
