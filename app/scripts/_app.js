const priorityClass = {
  'N': "normal-priority",
  'L': "low-priority",
  'H': "high-priority"
};

let app = {
  tables: {
    "tasks-mission" : {
      'H': [],
      'N': [],
      'L': []
    },
    "tasks-processing" : {
      'H': [],
      'N': [],
      'L': []
    },
    "tasks-done" : {
      'H': [],
      'N': [],
      'L': []
    },
  },


  tableId: ['tasks-mission', 'tasks-processing', 'tasks-done'],

  initSortable: function (id, opt) {
    // due to the 'tasks' class is wrap all the task and it self the child of the tasks-type
    // so we need to catch tasks rather than tasks-type
    let root_el = document.getElementById(id);
    let el = root_el.querySelector('.tasks');
    let tb1 = new Sortable(el, opt);
  },

  getDataFromServer: function(){
    // do some thing to fetch data
    return tasksDB;
  },

  classifyData: function(){
    let tasksDB = app.getDataFromServer(); // remember this is async function soon.
    tasksDB.forEach(data=>{
      let newTask = new Task(data);
      app.tables[newTask.group][newTask.priority].push(newTask.process());
    })
  },

  sortData: function(){
    app.classifyData();
    // we need sort the data base on priority soon
  },

  renderElement: function(parentId, newNode){
    document.querySelector( parentId + ' .tasks').appendChild(newNode);
  },

  render: function(){
    app.tableId.forEach(id=>{
      app.tables[id]['H'].forEach(newNode=>{
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      })
      app.tables[id]['N'].forEach(newNode=>{
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      })
      app.tables[id]['L'].forEach(newNode=>{
        parentId = "#" + id;
        app.renderElement(parentId, newNode);
      })
    })
  },

  init: function () {
    // init sortable
    app.tableId.forEach(htmlId => {
      app.initSortable(htmlId, tableConfig[htmlId]);
    })
    // end init sortable
    app.sortData();
    app.render();
  }
}


