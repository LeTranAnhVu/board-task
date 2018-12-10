let app = {
  tableId: ['tasks-mission', 'tasks-processing', 'tasks-done'],
  initSortable: function (id, opt) {
    // due to the 'tasks' class is wrap all the task and it self the child of the tasks-type
    // so we need to catch tasks rather than tasks-type
    let root_el = document.getElementById(id);
    let el = root_el.querySelector('.tasks');
    let tb1 = new Sortable(el, opt);
  },
  init: function () {
    app.tableId.forEach(htmlId => {
      app.initSortable(htmlId, {
        group: 'share',
        onStart: function (evt) {}
      });
    });
  }
};

let data = {
  id: 1,
  missionName: "nhiem vu 1",
  priority: "N",
  document: "",
  author: "Vule",
  assignee: "Unknown",
  createdDate: "20/12/2018",
  mainDay: 4,
  material: "sắt",
  projectName: "Dựng phôi thép",
  note: "lorem  rem remrem",
  state: "waiting"
};

function Task(data) {
  this.template = '<div class="task" id="task_' + data.id + ' "><div class="task-box"><div class="main-content"><div class="row"><div class="col-2 item priority-col"><div class="priority"><span class="priority-value">N</span></div></div><div class="col-10 item"><div class="inner-main-content"><div class="title"> <span class="task-code">K-DB-9</span><span class="task-name">ahihi</span></div><div class="desc"><p class="short-desc">Lorem ipsum, dolor sit amet consectetur.</p></div></div><div class="extra-features"><a class="file-link" href="#"> <i class="fa fa-file-pdf"></i><span class="pl-2">Xem PDF</span></a><div class="task-toggle-btn btn btn-primary" data-toggle="collapse" href="#param-01" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><i class="fa fa-angle-down" style="color:white"></i></div></div></div></div></div><div class="collapse-content"><div class="collapse" id="param-01"><div class="card deadline-card"><div class="row"><div class="col-4 item create"><i class="fa fa-play"></i><date class="pl-2">20/10/2018</date></div><div class="col-4 item deadline"><i class="fa fa-stop-circle"></i><date class="pl-2">chua xac dinh</date></div><div class="col-4 item time-left"><i class="fa fa-hourglass-end"></i><span class="pl-2">chua xac dinh</span></div></div></div><div class="card creator-card"><div class="row"><div class="col-4 item"><p class="who"><i class="fa fa-user"></i><span class="creator pl-2">Bao Nguyen</span></p></div><div class="col-4 item offset-4"><p class="time-stamp">6 months ago</p></div></div></div><div class="card employee-card"><div class="row"><div class="col-4 item"><p class="who"><i class="fa fa-cog"></i><span class="creator pl-2">Thanh Tran</span></p></div><div class="col-4 item offset-4"><p class="time-stamp">4 months ago</p></div></div></div></div></div></div><div class="task-move-box"><div class="button task-move-btn"><i class="fa fa-angle-right" style="color:white"></i></div></div></div>';
}

$(document).ready(() => {
  app.init();
  let newTask = new Task(data);
  setTimeout(function () {
    console.log('show out');
    $('#tasks-mission .tasks').append(newTask.template);
  }, 1000);
  // $('#tasks-mission tasks').append(newTask.template);
});
//# sourceMappingURL=main.js.map
