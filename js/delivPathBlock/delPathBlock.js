class DeliveryPath{
    constructor(rowData) {
        this.journalColW = {
            items_route: 50,
            country_route: 150,
            index_route: 50,
            quadr_route: 50,
            town_route: 150,
            adres_route: 148,
            adres_tamoj: 150
        }
        this.columnListRoute = [
            {
                headerName: 'пункты',
                field: 'items_route',
                width: this.journalColW.items_route,
                cellStyle: {
                    'border': '1px solid #0070B2',
                    'color': '#fff',
                    'outline': 'none',
                    'background-color': '#0070B2'
                },            
            },
            {
                headerName: 'Страна',
                field: 'country_route',
                width: this.journalColW.country_route,
                editable: true,
            },
            {
                headerName: 'индекс',
                field: 'index_route',
                width: this.journalColW.index_route,
                editable: true,
            },
            {
                headerName: 'квадрат',
                field: 'quadr_route',
                width: this.journalColW.quadr_route,
                editable: true,
                type: 'numericColumn'
            },
            {
                headerName: 'Город',
                field: 'town_route',
                width: this.journalColW.town_route,
                editable: true,
            },
            {
                headerName: 'Адрес',
                field: 'adres_route',
                width: this.journalColW.adres_route,
                editable: true,
            },
            {
                headerName: 'Адреса таможни',
                field: 'adres_tamoj',
                width: this.journalColW.adres_tamoj,
                editable: true,
                resizable: true
            }
        ]
        this.rowDataListRoute = rowData
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
        }
    }
    showRoutePath(i) {
        $(`list_route_deliv${i}`).remove()    
        this.renderRoutePath(i)
    }
    renderRoutePath(i) {
        $(`.route-block__table${i}`).prepend(`<div id="list_route_deliv${i}" class="list_route__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}