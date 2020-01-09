export class cargoInfoTable {
    constructor() {
        this.columnListRoute = [
            {
                headerName: 'Хаактер груза',
                field: 'type',
                editable: true
            },
            {
                headerName: 'Стоимость груза',
                field: 'price',
                editable: true
            },
            {
                headerName: 'Вес груза',
                field: 'weigth',
                editable: true
            },
            {
                headerName: 'Страна в инвойсах',
                field: 'invoice',
                editable: true
            },
            {
                headerName: 'Кол-во кодов ТНВЭД',
                field: 'tnved',
                editable: true,
            },
            {
                headerName: 'Упаковка',
                field: 'packing',
                editable: true
            },
            {
                headerName: 'Класс опастности',
                field: 'danjerous',
                editable: true
            },
            {
                headerName: 'Регулярность грузоперевозок',
                field: 'frequency',
                editable: true
            },
            {
                headerName: 'Температурный режим',
                field: 'tempreture',
                editable: true
            },
            {
                headerName: 'Габариты груза',
                field: 'size',
                editable: true
            }
        ]
        this.rowDataListRoute = [
                {
                    type: '',
                    price: '',
                    weigth: '',
                    invoice: '',
                    tnved: '',
                    packing: '',
                    danjerous: '',
                    frequency: '',
                    tempreture: '',
                    size: ''
                }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            enableColResize: true,
            autoSizeColumns:true,
        }
    }
    showJournalRoute(i) {
        $(`#list_route_deliv${i}`).remove()    
        this.renderJournalRouteDel(i)
    }
    renderJournalRouteDel(i) {
        $(`.route-block__table${i}`).prepend(`<div id="list_route_deliv${i}" class="list_route__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}