
// for test
$(function(){
    var columns = [
            {
                field: 'state',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, 
            {
                field: 'id',
                title: 'id',
                sortable: true
            }, {
                title: 'name',
                field: 'name',
                sortable: true
            }, {
                title: 'price',
                field: 'price',
                sortable: true
            }, {
                title: 'price1',
                field: 'price1',
                sortable: true
            }, {
                title: 'price2',
                field: 'price2',
                sortable: true
            }, {
                title: 'price3',
                field: 'price3',
                sortable: true
            }
        ];
    var data = [];

    for(var i=1;i<1000;i++){
        data.push({
            'id': i,
            'name': 'Item ' + i,
            'price': '$' + (i * 10),
            'price1': '$' + (i * 10),
            'price2': '$' + (i * 10),
            'price3': '$' + (i * 10),
        });
    }

    $('#mytable').lightningTable({
        //svgPath
        svgPath: '/dist/icons',

        //Pagination Options
        pagination: true,                   //是否显示分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页
        pageSize: 15,                       //每页的记录行数（*）
        pageList: [15, 50, 100, 200, 500, 1000],        //可供选择的每页的行数（*）

        // Customer toolbar
        toolbar: '#toolbar',                //工具按钮用哪个容器

        // Toolbar options
        search: true,                       //是否显示表格搜索
        showRefresh : true,
        showPaginationSwitch : true,
        showToggle : true,
        showColumns : true,

        // Export Data Options
        // not support now
        showExport: true,                   //是否显示导出
        // exportDataType: 'all',              //basic', 'all', 'selected'.

        // data
        data: data,
        columns: columns
    });
});