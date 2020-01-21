export class TablePointsRoute {
    constructor() {
        this.journalColW = {
            items_route: 80,
            index_route: 70,
            quadr_route: 70,
        }
        this.columnListRoute = [
            {
                headerName: 'пункты',
                field: 'items_route',
                width: this.journalColW.items_route,
                cellStyle: {
                    'color': '#fff',
                    'outline': 'none',
                    'background-color': '#0070B2'
                }
            },
            {
                headerName: 'Страна',
                field: 'country_route',
                editable: true
            },
            {
                headerName: 'индекс',
                field: 'index_route',
                width: this.journalColW.index_route,
                editable: true
            },
            {
                headerName: 'квадрат',
                width: this.journalColW.quadr_route,
                field: 'quadr_route',
                editable: true
            },
            {
                headerName: 'Город',
                field: 'town_route',
                editable: true,
            },
            {
                headerName: 'Адрес',
                field: 'adres_route',
                editable: true
            },
            {
                headerName: 'Адреса таможни',
                field: 'adres_tamoj',
                editable: true
            }
        ]
        this.rowDataListRoute = [
                {
                    items_route: 'погрузка',
                    country_route: '',
                    index_route: '',
                    quadr_route: '',
                    town_route: '',
                    adres_route: '',
                    adres_tamoj: ''
                },
                {
                    items_route: 'выгрузка',
                    country_route: '',
                    index_route: '',
                    quadr_route: '',
                    town_route: '',
                    adres_route: '',
                    adres_tamoj: ''
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
        $(`#route_block_${i}`).append(`<div id="list_route_deliv${i}" class="list_route__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}