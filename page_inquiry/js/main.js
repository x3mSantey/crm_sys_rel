let columnListInq = [
    {headerName: 'Названия запросов', field: 'name_inq', sortable: true},
    {headenName: 'Реф номер', field: 'ref_number_inq', sortable: true},
    {headerName: 'Дата создания', field: 'date_creating_inq', sortable: true},
    {headerName: 'Статус', field: 'status_inq', sortable: true},
]

let rowDataListInq = [
    {name_inq: 'Импорт/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'В работе',},
    {name_inq: 'Экспорт/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'В работе'},
    {name_inq: 'Экспорт/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'В работе'},
    {name_inq: 'Импорт/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'В работе'},
    {name_inq: 'Международный/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'Не разобран'},
    {name_inq: 'Международный/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'Не разобран'},
    {name_inq: 'Экспорт/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'Активный'},
    {name_inq: 'РФ/пометка запроса', ref_number_inq: '12321321', date_creating_inq: '21.10.2019', status_inq: 'Активный'},
]

let gridOptions = {
    columnDefs: columnListInq,
    rowData: rowDataListInq

}

gridOptions.rowStyle = {
    height: '25px',
    color: '#fff',
    padding: '15px 0 0 0',
    background: '#000',
    border: '1px solid #red',
}

gridOptions.getRowStyle = (params) => {
    switch (params.data.status_inq) {
        case 'Не разобраные'
    }
    
    console.log(params)
}

$(document).ready( () => {
    let gridDiv = $('#list_inq')[0];
    new agGrid.Grid(gridDiv, gridOptions);
})