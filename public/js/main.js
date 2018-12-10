
$(document).ready(() => {
  app.init();
});

const priorityClass = {
  'N': "normal-priority",
  'L': "low-priority",
  'H': "high-priority"
};

let app = {
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
      app.tables[newTask.group][newTask.priority].push(newTask.process());
    });
  },

  sortData: function () {
    app.classifyData();
    // we need sort the data base on priority soon
  },

  renderElement: function (parentId, newNode) {
    document.querySelector(parentId + ' .tasks').appendChild(newNode);
  },

  render: function () {
    app.tableId.forEach(id => {
      app.tables[id]['H'].forEach(newNode => {
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      });
      app.tables[id]['N'].forEach(newNode => {
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      });
      app.tables[id]['L'].forEach(newNode => {
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      });
    });
  },

  init: function () {
    // init sortable
    app.tableId.forEach(htmlId => {
      app.initSortable(htmlId, tableConfig[htmlId]);
    });
    // end init sortable
    app.sortData();
    app.render();
  }
};

let group = ['tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done', 'tasks-mission', 'tasks-processing', 'tasks-done'];
let prior = ['H', 'L', 'N', 'H', 'L', 'N', 'H', 'L', 'N'];
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
};

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var tasksDB = [];
for (let i = 0; i < 20; i++) {
  let t = Object.assign({}, temp);
  t.id = i;
  t.group = group[Math.floor(Math.random() * 8)];
  t.priority = prior[Math.floor(Math.random() * 8)];
  t.createdDate = randomDate(new Date(2018, 11, 1), new Date(2018, 12, 1));
  t.deadline = randomDate(t.createdDate, new Date(2018, 12, 1));
  let timeNow = Date.now();
  t.mainDay = parseInt((t.deadline - timeNow) / (1000 * 60 * 60 * 24)) + 1;
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
  },

  // Element dragging started
  onStart: function ( /**Event*/evt) {
    // console.log(evt.oldIndex );  // element index within parent
    // console.log(evt.item);
    // console.log(typeof evt.item);
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
