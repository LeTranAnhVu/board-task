
let tasksDB = [{
  id: 1,
  missionName: "nhiem vu 1",
  priority: "L",
  document: "",
  author: "Vule",
  assignee: "Unknown",
  createdDate: "20/12/2018",
  deadline: "25/12/2018",
  mainDay: 4,
  material: "sắt",
  projectName: "Dựng phôi thép",
  note: "lorem  rem remrem",
  group: "tasks-mission"
}, {
  id: 2,
  missionName: "nhiem vu 2",
  priority: "H",
  document: "",
  author: "Vule",
  assignee: "Unknown",
  createdDate: "20/12/2015",
  deadline: "25/12/2020",
  mainDay: 4,
  material: "",
  projectName: "Mua nguyen lieu",
  note: "lorem  rem remrem",
  group: "tasks-processing"
}, {
  id: 3,
  missionName: "nhiem vu 3",
  priority: "N",
  document: "",
  author: "Vule",
  assignee: "Tien Nguyen",
  createdDate: "20/12/2013",
  deadline: "25/12/2014",
  mainDay: 4,
  material: "sắt, thep, carbon",
  projectName: "Dựng phôi gang",
  note: "gap",
  group: "tasks-done"
}];

const priorityClass = {
  'N': "normal-priority",
  'L': "low-priority",
  'H': "high-priority"
};

let app = {
  tables: {
    "tasks-mission": [],
    "tasks-processing": [],
    "tasks-done": []
  },

  tableId: ['tasks-mission', 'tasks-processing', 'tasks-done'],

  initSortable: function (id, opt) {
    // due to the 'tasks' class is wrap all the task and it self the child of the tasks-type
    // so we need to catch tasks rather than tasks-type
    let root_el = document.getElementById(id);
    let el = root_el.querySelector('.tasks');
    let tb1 = new Sortable(el, opt);
  },

  getDataFromServer: function () {
    // do some thing to fetch data
    return tasksDB;
  },

  classifyData: function () {
    let tasksDB = app.getDataFromServer(); // remember this is async function soon.
    tasksDB.forEach(data => {
      let newTask = new Task(data);
      app.tables[newTask.group].push(newTask.process());
    });
  },

  sortData: function () {
    app.classifyData();
    // we need sort the data base on priority soon
  },

  render: function () {
    app.tableId.forEach(id => {
      app.tables[id].forEach(newNode => {
        parentId = "#" + id;
        document.querySelector(parentId + ' .tasks').appendChild(newNode);
      });
    });
  },

  init: function () {
    // init sortable
    app.tableId.forEach(htmlId => {
      app.initSortable(htmlId, {
        group: 'share',
        onStart: function (evt) {}
      });
    });
    // end init sortable
    app.sortData();
    app.render();
  }
};

$(document).ready(() => {
  app.init();
});

function Task(data) {
  let taskId = 'task_' + data.id;
  let collapsedBtnId = 'collapsed-btn-' + data.id;
  let moveBtnId = 'move-btn-' + data.id;
  this.priorityClass = priorityClass[data.priority];
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
