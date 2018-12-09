$(document).ready(() => {
		console.log('ready ahihi !');
});

// var el_1 = document.getElementById('sortObj-1');
// var el_2 = document.getElementById('sortObj-2');
// var el_3 = document.getElementById('sortObj-3');
// var tb1 = Sortable.create(el_1);

// let tb1 = new Sortable(el_1,{
//   group: "share",
//   onStart: function (evt) {
// 		console.log('hello');
// 		console.log(evt);
// 	},
// })
// let tb2 = new Sortable(el_2,{
//   group: "share",
//   onStart: function (evt) {
//     console.log('hello');
// 		console.log(evt);
// 	},
// })
// let tb3 = new Sortable(el_3,{
//   group: "share1",
//   onStart: function (evt) {
// 		console.log('hello');
// 		console.log(evt);
// 	},
// })


var mission = document.getElementById('tasks-mission');
var processing = document.getElementById('tasks-processing');
var done = document.getElementById('tasks-done');

let tb1 = new Sortable(mission, {
		group: "share",
		onStart: function (evt) {
				console.log('hello');
				console.log(evt);
		}
});
let tb2 = new Sortable(processing, {
		group: "share",
		onStart: function (evt) {
				console.log('hello');
				console.log(evt);
		}
});
let tb3 = new Sortable(done, {
		group: "share",
		onStart: function (evt) {
				console.log('hello');
				console.log(evt);
		}
});
//# sourceMappingURL=main.js.map
