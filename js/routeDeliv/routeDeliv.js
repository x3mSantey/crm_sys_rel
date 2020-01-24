export class RouteOfTheDelivery{
    constructor(cargoTable, pointsTable, inqInfo) {
        this.cargoInfoTable = cargoTable
        this.tablePointsRoute = pointsTable
        this.infoRequest = inqInfo
    }
    createRoute() {
        let val = $(`.list_route_conteiner`).attr('value')
        ++val
        $(`.list_route_conteiner`).attr('value', val)

        let town1 = this.tablePointsRoute.rowDataListRoute[0].town_route
        let town2 = this.tablePointsRoute.rowDataListRoute[this.tablePointsRoute.rowDataListRoute.length-1].town_route       
        
        $('.list_route_conteiner').append(`<div class="list-route__item item_route_${val}"></div>`)
        
        //Заголовок маршрута
        $(`.item_route_${val}`).append(`<div class="main_info_route main_info_route_${val}"></div>`)
        $(`.main_info_route_${val}`).append(`<div class="title_route_text" id="title_route_text_${val}"></div>`)
        $(`#title_route_text_${val}`).append(`<h4>Маршрут из </h4><h2 style="color: #30BCED">Погрузка</h2><h4>, куда</h4><h2 style="color: #30BCED">Выгрузка</h2>`)
        $(`.main_info_route_${val}`).append(`<button id="show_route_info_${val}" class="btn" style="display: none">развернуть</button>`)
        $(`.main_info_route_${val}`).append(`<button id="hide_route_info_${val}" class="btn">свернуть</button>`)
        
        $(`.item_route_${val}`).append(`<div class="secnd_info_route_${val}"></div>`)

        $(`.secnd_info_route_${val}`).append(`<div class="hor_line"></div>`)
        
        //Блоки относящиеся к непосредственно маршруту
        $(`.secnd_info_route_${val}`).append(`<div id="cargo_table_conteiner_${val}"></div>`)
        $(`#cargo_table_conteiner_${val}`).append(`<div class="title_route_cargo" id="title_route_cargo_${val}"></div>`)
        $(`#title_route_cargo_${val}`).append(`<h4>Информация о грузе</h4>`)

        $(`.secnd_info_route_${val}`).append(`<div class="hor_line"></div>`)

        //Блоки относящиеся к непосредственно маршруту
        $(`.secnd_info_route_${val}`).append(`<div id="points_table_conteiner_${val}"></div>`)
        $(`#points_table_conteiner_${val}`).append(`<div class="title_route_points" id="title_route_points_${val}"></div>`)
        $(`#title_route_points_${val}`).append(`<h4>Пункты маршрута</h4>`)
        $(`#title_route_points_${val}`).append(`<button class="btn add_point" id="add_point_route_${val}" value="2">Добавить пункт</button>`)
        
        $(`.secnd_info_route_${val}`).append(`<div class="hor_line"></div>`)

        //Ставки
        $(`.secnd_info_route_${val}`).append(`<div class="rates-block_${val}"><button class="btn" id="showRates_${val}">Ставки</button></div>`)

        $(`.secnd_info_route_${val}`).append(`<div class="otdel-perevoz-block_${val}"></div>`)
        $(`.otdel-perevoz-block_${val}`).append(`<div class="transp_block_${val} inq_string"></div>`)
        $(`.transp_block_${val}`).append(`<p>Тип транспорта</p>`)
        $(`.transp_block_${val}`).append(`<select name="type_transp_inq" id=""><option value="1">Тип транспорта 1</option> <option value="2">Тип транспорта 2</option> <option value="2">Тип транспорта 3</option><option value="3">Тип транспорта 4</option></select>`)
        

        $(`.otdel-perevoz-block_${val}`).append(`<div class="loading_block_${val} inq_string"></div>`)
        $(`.loading_block_${val}`).append(`<p>Способ погрузки</p>`)
        $(`.loading_block_${val}`).append(`<select name="loading_inq_${val}" id=""><option value="1">Зад</option><option value="2">Бок</option><option value="3">Верхняя</option><option value="4">Полная растентовка</option></select>`)
        
        $(`.otdel-perevoz-block_${val}`).append(`<div class="transport_block_${val} inq_string"></div>`)
        $(`.transport_block_${val}`).append(`<p>Вид транспорта</p>`)
        $(`.transport_block_${val}`).append(`<select name="view_trans_inq" id="" disabled><option value="FTL">FTL</option><option value="LTL">LTL</option><option value="FCL">FCL</option><option value="Не габарит">Не габарит</option></select>`)



        $(`.secnd_info_route_${val}`).append(`<div class="otdel-perevoz-block_${val} otdel-perevoz-block"></div>`)
        $(`.otdel-perevoz-block_${val}`).append(`<textarea name="" id="info_tranzit_${val}" class="route_text" placeholder="Информация по транзиту"></textarea>`)
        $(`.otdel-perevoz-block_${val}`).append(`<input name="" id="delivery_time_${val}" class="route_text" placeholder="Укажите срок поставки"/>`)                        
        
        //Обработчики для добавленных кнопок
        $(`#show_route_info_${val}`).on('click', () => {this.showRouteInfo(val)})
        $(`#hide_route_info_${val}`).on('click', () => {this.hideRouteInfo(val)})
        $(`#add_point_route_${val}`).on('click', () => {this.tablePointsRoute.addPointRoute(val)})
        $(`#showRates_${val}`).on('click', () => {this.infoRequest.showRatesBlock()})


        this.cargoInfoTable.showJournalRoute(val)
        this.tablePointsRoute.showJournalRoute(val)
        //let tableRoute = new DeliveryPath(rowData)
        //tableRoute.showRoutePath(val)
    }
    showRouteInfo(i) {
        $(`.secnd_info_route_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'block'})
        $(`#show_route_info_${i}`).css({'display':'none'})
    }
    hideRouteInfo(i) {
        $(`.secnd_info_route_${i}`).css({'display':'none'})
        $(`#show_route_info_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'none'})
    }
    
}