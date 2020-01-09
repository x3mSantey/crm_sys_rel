export class RouteOfTheDelivery{
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
    createRoute(cargoInfoTable) {
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
        
        $(`#route_block_${val}`).prepend(`<button class="btn" id="add_point_route_${val}" value="2">Добавить пункт</button>`)

        cargoInfoTable.showJournalRoute(val)
        this.renderJournalRouteDel(val)

        $(`#route_block_${val}`).append(`<div class="rates-block_${val}"><button class="btn" id="showRates_${val}">Ставки</button></div>`)

        $(`.otdel-perevoz-block_${val}`).append(`<div class="transp_block_${val} inq_string"></div>`)
        $(`.transp_block_${val}`).append(`<select name="type_transp_inq" id=""><option value="1">Тип транспорта 1</option> <option value="2">Тип транспорта 2</option> <option value="2">Тип транспорта 3</option><option value="3">Тип транспорта 4</option></select>`)
        $(`.transp_block_${val}`).append(`<p>Тип транспорта</p>`)

        //$(`.otdel-perevoz-block_${val}`).prepend(`<div class="loading_block_${val} inq_string"></div>`)
        //$(`.loading_block_${val}`).prepend(`<select name="loading_inq_${val}" id=""><option value="1">Зад</option><option value="2">Бок</option><option value="3">Верхняя</option><option value="4">Полная растентовка</option></select>`)
        //$(`.loading_block_${val}`).prepend(`<p>Способ погрузки</p>`)
        

        $(`#route_block_${val}`).append(`<div class="otdel-perevoz-block_${val} otdel-perevoz-block"></div>`)
        $(`.otdel-perevoz-block_${val}`).append(`<textarea name="" id="info_tranzit_${val}" class="route_text" placeholder="Информация по транзиту"></textarea>`)
        $(`.otdel-perevoz-block_${val}`).append(`<textarea name="" id="delivery_time_${val}" class="route_text" placeholder="Укажите срок поставки"></textarea>`)                        
        
        
        //$(`#show_route_info_${val}`).on('click', function() {routeDeliv.showRouteInfo()})
        //$(`#hide_route_info_${val}`).on('click', () => {console.log('was')})


        
        //let tableRoute = new DeliveryPath(rowData)
        //tableRoute.showRoutePath(val)
        
        ++val
        $(`.list_route_conteiner`).attr('value', val)
    }
    showRouteInfo(i) {
        $(`#route_block_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'block'})
        $(`#show_route_info_${i}`).css({'display':'none'})
    }
    hideRouteInfo(i) {
        $(`#route_block_${i}`).css({'display':'none'})
        $(`#show_route_info_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'none'})
    }
    
}