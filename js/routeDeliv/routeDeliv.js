export class RouteOfTheDelivery{
    constructor(cargoTable, pointsTable) {
        this.cargoInfoTable = cargoTable
        this.tablePointsRoute = pointsTable
    }
    addPointRoute(y) {
        let val = $(`#add_point_route_${y}`).val()

        if (val < 10) {
            $(`#add_point_route_${y}`).val(++val)
            let i = this.tablePointsRoute.rowDataListRoute.length
            let n = i-1
            this.tablePointsRoute.rowDataListRoute.push(this.tablePointsRoute.rowDataListRoute[n]) 
            this.tablePointsRoute.rowDataListRoute[n] = {
                items_route: 'пункт',
                country_route: '',
                index_route: '',
                quadr_route: '',
                town_route: '',
                adres_route: ''
            }
        }
        this.tablePointsRoute.showJournalRoute(y)
    }
    createRoute() {
        let val = $(`.list_route_conteiner`).attr('value')
        ++val
        $(`.list_route_conteiner`).attr('value', val)

        let town1 = this.tablePointsRoute.rowDataListRoute[0].town_route
        let town2 = this.tablePointsRoute.rowDataListRoute[this.tablePointsRoute.rowDataListRoute.length-1].town_route       
        
        $('.list_route_conteiner').append(`<div class="list-route__item item_route_${val}"></div>`)
        $(`.item_route_${val}`).append(`<div class="main_info_route main_info_route_${val}"></div>`)
        $(`.main_info_route_${val}`).append(`<h2>Маршрут из ${town1}, куда ${town2}</h2>`)
        $(`.main_info_route_${val}`).append(`<button id="show_route_info_${val}" class="btn">развернуть</button>`)
        $(`.main_info_route_${val}`).append(`<button id="hide_route_info_${val}" class="btn" style="display: none">свернуть</button>`)
        
        $(`.item_route_${val}`).append(`<div id="route_block_${val}"></div>`)
        $(`#route_block_${val}`).append(`<div class="route-block__table${val}"></div>`)
        $(`.route-block__table${val}`).append(`<div class="dop__adres-tamoj${val}"></div>`)
        $(`.dop__adres-tamoj${val}`).append(`<div class="adres-tamoj__points adres-tamoj${val}"></div>`)
        
        this.cargoInfoTable.showJournalRoute(val)

        $(`#route_block_${val}`).append(`<h2 style="margin-bottom: 12px;">пункты маршрута</h2>`)
        $(`#route_block_${val}`).append(`<button class="btn add_point" id="add_point_route_${val}" value="2">Добавить пункт</button>`)

        $(`#add_point_route_${val}`).on('click', () => {this.addPointRoute(val)})

        this.tablePointsRoute.showJournalRoute(val)

        $(`#route_block_${val}`).append(`<div class="rates-block_${val}"><button class="btn" id="showRates_${val}">Ставки</button></div>`)

        $(`.otdel-perevoz-block_${val}`).append(`<div class="transp_block_${val} inq_string"></div>`)
        $(`.transp_block_${val}`).append(`<select name="type_transp_inq" id=""><option value="1">Тип транспорта 1</option> <option value="2">Тип транспорта 2</option> <option value="2">Тип транспорта 3</option><option value="3">Тип транспорта 4</option></select>`)
        $(`.transp_block_${val}`).append(`<p>Тип транспорта</p>`)

        $(`.otdel-perevoz-block_${val}`).append(`<div class="loading_block_${val} inq_string"></div>`)
        $(`.loading_block_${val}`).append(`<select name="loading_inq_${val}" id=""><option value="1">Зад</option><option value="2">Бок</option><option value="3">Верхняя</option><option value="4">Полная растентовка</option></select>`)
        $(`.loading_block_${val}`).append(`<p>Способ погрузки</p>`)
        

        $(`#route_block_${val}`).append(`<div class="otdel-perevoz-block_${val} otdel-perevoz-block"></div>`)
        $(`.otdel-perevoz-block_${val}`).append(`<textarea name="" id="info_tranzit_${val}" class="route_text" placeholder="Информация по транзиту"></textarea>`)
        $(`.otdel-perevoz-block_${val}`).append(`<textarea name="" id="delivery_time_${val}" class="route_text" placeholder="Укажите срок поставки"></textarea>`)                        
        
        $(`#show_route_info_${val}`).on('click', () => {this.showRouteInfo(val)})
        $(`#hide_route_info_${val}`).on('click', () => {this.hideRouteInfo(val)})


        
        //let tableRoute = new DeliveryPath(rowData)
        //tableRoute.showRoutePath(val)
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