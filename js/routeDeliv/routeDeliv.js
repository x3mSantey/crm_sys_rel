export class RouteOfTheDelivery{
    constructor() {
        this.journalColW = {
            items_route: 70,
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
                    items_route: 'откуда',
                    country_route: '',
                    index_route: '',
                    quadr_route: '',
                    town_route: '',
                    adres_route: '',
                    adres_tamoj: ''
                },
                {
                    items_route: 'куда',
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
        $(`.route-block__table${i}`).prepend(`<div id="list_route_deliv${i}" class="list_route__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    addPointRoute() {
        let val = $('#add_point_route').val()
        if (val < 5) {
            $('#add_point_route').val(++val)
            let i = this.rowDataListRoute.length
            let n = i-1
            this.rowDataListRoute[i] = this.rowDataListRoute[n] 
            this.rowDataListRoute[n] = {
                items_route: 'пункт',
                country_route: '',
                index_route: '',
                quadr_route: '',
                town_route: '',
                adres_route: ''
            }
            this.showJournalRoute(0)
        }
    }
    createRoute() {
        let val = $(`.list_route_conteiner`).attr('value')

        let rowData = this.gridOptions.rowData
        console.log(rowData)

        let town1 = this.gridOptions.rowData[0].town_route
        let town2 = this.gridOptions.rowData[this.gridOptions.rowData.length-1].town_route       
        
        $('.list_route_conteiner').append(`<div class="list-route__item item_route_${val}"></div>`)
        $(`.item_route_${val}`).append(`<div class="main_info_route main_info_route_${val}"></div>`)
        $(`.main_info_route_${val}`).append(`<h2>Маршрут из ${town1}, куда ${town2}</h2>`)
        $(`.main_info_route_${val}`).append(`<button id="show_route_info_${val}" class="btn">развернуть</button>`)
        $(`.main_info_route_${val}`).append(`<button id="hide_route_info_${val}" class="btn" style="display: none">свернуть</button>`)
        
        $(`.item_route_${val}`).append(`<div id="route_block_${val}"></div>`)
        $(`#route_block_${val}`).prepend(`<div class="route-block__table${val}"></div>`)
        $(`.route-block__table${val}`).prepend(`<div class="dop__adres-tamoj${val}"></div>`)
        $(`.dop__adres-tamoj${val}`).append(`<div class="adres-tamoj__points adres-tamoj${val}"></div>`)
        
        $(`#route_block_${val}`).prepend(`<div class="otdel-perevoz-block_${val}"></div>`)

        $(`.otdel-perevoz-block_${val}`).prepend(`<div class="rates-block_${val}"><button class="btn" id="showRates_${val}">Ставки</button></div>`)
        $(`.otdel-perevoz-block_${val}`).prepend(`<div class="tranzit-block_${val} inq_string"><textarea name="" id="" placeholder="Информация по транзиту" readonly></textarea></div>`)
        $(`.otdel-perevoz-block_${val}`).prepend(`<div class="delivery-block_${val} inq_string"><textarea name="" id="" placeholder="Укажите срок поставки" readonly></textarea></div>`)                        
         
        $(`#show_route_info_${val}`).on('click', () => {this.showRouteInfo(val)})
        $(`#hide_route_info_${val}`).on('click', () => {this.hideRouteInfo(val)})

        this.renderJournalRouteDel(val)
        //let tableRoute = new DeliveryPath(rowData)
        //tableRoute.showRoutePath(val)
        debugger
        

        ++val
        $(`.list_route_conteiner`).attr('value', val)
    }
    showRouteInfo(i) {
        $(`#route_block_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'block'})
        $(`#show_route_info_${i}`).css({'display':'none'})
    }
    hideRouteInfo(i) {
        $(`route_block_${i}`).css({'display':'none'})
        $(`#show_route_info_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'none'})
    }
    
}