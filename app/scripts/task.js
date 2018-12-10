
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
  }
}
