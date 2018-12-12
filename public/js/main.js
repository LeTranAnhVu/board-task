var data =[
    {
        id: 1,
        name: 'Tinh Ku To',
        pre: 'T',
        status: 'task-primary'
    },
    {
        id: 2,
        name: 'Tinh Ku To2',
        pre: 'Y',
        status: 'task-danger'
    },
    {
        id: 3,
        name: 'Tinh Ku To3',
        pre: 'P',
        status: 'task-warning'
    },
    {
        id: 4,
        name: 'Tinh Ku5645454',
        pre: 'P',
        status: 'task-success'
    },
]
var APP = {
    list: ['item1','item2','item3'],
    init: () =>{
        APP.createList(APP.list)
    },
    createList: (e) =>{
        e.forEach(element => {
            let tmp = ''
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    tmp = tmp + '<li class="tile__title list-group mt-2"><div class="content '+ data[key].status+'"><div class="info-1 d-flex align-items-center"><div class="icon mr-3"><span>'+ data[key].pre+'</span></div><div class="text"><a href="#"> <span class="font-weight-bold">K-DB-9: </span>'+ data[key].name+'</a><p class="text-muted m-0">Chưa set</p></div><button class="btn btn-coll ml-auto" type="button"><i class="fa fa-angle-down"></i></button><button class="btn btn-trans ml-auto" type="button"><i class="fa fa-angle-right"></i></button></div><div class="info-2"><h2>ndskand</h2></div></div></li>'
                }
            }
            $('#'+element).append(tmp)
            APP.enableSortable(element)
        })
    },
    enableSortable: (e) => {
            let el = document.getElementById(e);
            let sortable = Sortable.create(el,{
                group: "name",
                onEnd: function (evt) {
                   check_task()
                },
            })
    }
}
APP.init()
///APP-Done
$('#maincontent .card .content .btn-coll').on('click',function(){
    if ($(this).parents('.content').find('.info-2').hasClass('active')) {
        $(this).parents('.content').find('.info-2').removeClass('active')
    } else {
        $('#maincontent .card .content .btn-coll').parents('.content').find('.info-2').removeClass('active')
        $(this).parents('.content').find('.info-2').addClass('active')

    }
})
function check_task() {
    if ($('#maincontent ul#item1.list-group').children('li').length == 0 ) {
        $('#maincontent ul#item1').addClass('none')
    }
    else{
        $('#maincontent ul#item1').removeClass('none')
    }
}