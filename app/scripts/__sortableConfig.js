
// mission option

const missionOpt = {
  group: {
    name: 'share',
  },
  setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
    dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent

  },

  // Element is chosen
  onChoose: function (/**Event*/evt) {
	evt.oldIndex;  // element index within parent
	// console.log(evt.item);
  },

  // Element dragging started
  onStart: function (/**Event*/evt) {
	// console.log(evt.oldIndex );  // element index within paren	t
	// console.log('hulala');
    // console.log(evt.item);
	// console.log(typeof evt.item);
  },

  // Element dragging ended
  onEnd: function (/**Event*/evt) {
    var itemEl = evt.item;  // dragged HTMLElement
    // console.log("=======mission option=========");    // target list
    // console.log(evt.to);    // target list
    // console.log(evt.from);  // previous list
    // console.log(evt.oldIndex);  // element's old index within old parent
    // console.log(evt.newIndex);  // element's new index within new parent
    // console.log("================");    // target list
  },

  // Element is dropped into the list from another list
  onAdd: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Changed sorting within list
  onUpdate: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Called by any change to the list (add / update / remove)
  onSort: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Element is removed from the list into another list
  onRemove: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Attempt to drag a filtered element
  onFilter: function (/**Event*/evt) {
    var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
  },

  // Event when you move an item in the list or between lists
  onMove: function (/**Event*/evt, /**Event*/originalEvent) {
    // Example: http://jsbin.com/tuyafe/1/edit?js,output
    evt.dragged; // dragged HTMLElement
    evt.draggedRect; // TextRectangle {left, top, right и bottom}
    evt.related; // HTMLElement on which have guided
    evt.relatedRect; // TextRectangle
    originalEvent.clientY; // mouse position
    // return false; — for cancel
  },

  // Called when creating a clone of element
  onClone: function (/**Event*/evt) {
    var origEl = evt.item;
    var cloneEl = evt.clone;
  }
}

//end mission option




// processing option

const processingOpt = {
  group: {
    name: 'share',
  },
  setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
    dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
  },

  // Element is chosen
  onChoose: function (/**Event*/evt) {
    evt.oldIndex;  // element index within parent
  },

  // Element dragging started
  onStart: function (/**Event*/evt) {
    evt.oldIndex;  // element index within parent
  },

  // Element dragging ended
  onEnd: function (/**Event*/evt) {
    var itemEl = evt.item;  // dragged HTMLElement
	// console.log("=======processing option=========");    // target list
    // console.log(evt.to);    // target list
    // console.log(evt.from);  // previous list
    // console.log(evt.oldIndex);  // element's old index within old parent
    // console.log(evt.newIndex);  // element's new index within new parent
    // console.log("================");    // target list
},

// Element is dropped into the list from another list
onAdd: function (/**Event*/evt) {
	// same properties as onEnd
	console.log("=======processing onAdd=========");    // target list
	console.log(evt.item);  
  },

  // Changed sorting within list
  onUpdate: function (/**Event*/evt) {
	// same properties as onEnd
	console.log('update');
  },

  // Called by any change to the list (add / update / remove)
  onSort: function (/**Event*/evt) {
	// same properties as onEnd
	console.log("onsort",evt.item)
  },

  // Element is removed from the list into another list
  onRemove: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Attempt to drag a filtered element
  onFilter: function (/**Event*/evt) {
    var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
  },

  // Event when you move an item in the list or between lists
  onMove: function (/**Event*/evt, /**Event*/originalEvent) {
    // Example: http://jsbin.com/tuyafe/1/edit?js,output
    evt.dragged; // dragged HTMLElement
    evt.draggedRect; // TextRectangle {left, top, right и bottom}
    evt.related; // HTMLElement on which have guided
    evt.relatedRect; // TextRectangle
    originalEvent.clientY; // mouse position
    // return false; — for cancel
  },

  // Called when creating a clone of element
  onClone: function (/**Event*/evt) {
    var origEl = evt.item;
    var cloneEl = evt.clone;
  }
}

//end processing option





//done option

const doneOpt = {
  group: {
    name: 'share',
  },
  setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
    dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
  },

  // Element is chosen
  onChoose: function (/**Event*/evt) {
    evt.oldIndex;  // element index within parent
  },

  // Element dragging started
  onStart: function (/**Event*/evt) {
    evt.oldIndex;  // element index within parent
  },

  // Element dragging ended
  onEnd: function (/**Event*/evt) {
    var itemEl = evt.item;  // dragged HTMLElement
    evt.to;    // target list
    evt.from;  // previous list
    evt.oldIndex;  // element's old index within old parent
    evt.newIndex;  // element's new index within new parent
  },

  // Element is dropped into the list from another list
  onAdd: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Changed sorting within list
  onUpdate: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Called by any change to the list (add / update / remove)
  onSort: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Element is removed from the list into another list
  onRemove: function (/**Event*/evt) {
    // same properties as onEnd
  },

  // Attempt to drag a filtered element
  onFilter: function (/**Event*/evt) {
    var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
  },

  // Event when you move an item in the list or between lists
  onMove: function (/**Event*/evt, /**Event*/originalEvent) {
    // Example: http://jsbin.com/tuyafe/1/edit?js,output
    evt.dragged; // dragged HTMLElement
    evt.draggedRect; // TextRectangle {left, top, right и bottom}
    evt.related; // HTMLElement on which have guided
    evt.relatedRect; // TextRectangle
    originalEvent.clientY; // mouse position
    // return false; — for cancel
  },

  // Called when creating a clone of element
  onClone: function (/**Event*/evt) {
    var origEl = evt.item;
    var cloneEl = evt.clone;
  }
}

//end done option



let tableConfig = {
  "tasks-mission": missionOpt,
  "tasks-processing": processingOpt,
  "tasks-done": doneOpt,
};


