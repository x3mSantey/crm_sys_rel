class JournalInq {
    constructor() {
        this.journalColW = {
            name_inq: 180,
            service_inq: 90,
            ref_number_inq: 90,
            date_creating_inq: 90,
            status_inq: 90,
        }
        this.columnListInq = [
            {
                headerName: 'Названия запросов',
                field: 'name_inq',
                width: this.journalColW.name_inq,
                sortable: true
            },
            {
                headerName: 'Услуга', 
                field: 'service_inq',
                width: this.journalColW.service_inq,
                sortable: true
            },
            {
                headerName: 'Реф номер',
                field: 'ref_number_inq',
                width: this.journalColW.ref_number_inq,
                sortable: true
            },
            {
                headerName: 'Дата создания', 
                field: 'date_creating_inq', 
                width: this.journalColW.date_creating_inq,
                sortable: true
            },
            {
                headerName: 'Статус', 
                field: 'status_inq',
                width: this.journalColW.status_inq,
                sortable: true
            }
        ]
        this.rowDataListInq = [
            {
                name_inq: 'Название запроса',
                service_inq: 'Импорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе',
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Экспорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Экспорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Импорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Международный',
                ref_number_inq: '12321321', 
                date_creating_inq: '21.10.2019',
                status_inq: 'Не разобран'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Международный',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'Не разобран'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Экспорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'Активный'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'РФ',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'Активный'
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Импорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе',
            },
            {
                name_inq: 'Название запроса',
                service_inq: 'Импорт',
                ref_number_inq: '12321321',
                date_creating_inq: '21.10.2019',
                status_inq: 'В работе',
            },
        ]
        this.gridOptions = {
            columnDefs: this.columnListInq,
            rowData: this.rowDataListInq,
            getRowStyle: (params) => {
                switch (params.data.status_inq) {
                    case 'В работе':
                        return {'background-color': '#FFF2CC', color: '#000', 'border': '2px solid #D6B656'}
                    case 'Активный':
                        return {'background-color': '#F8CECC', color: '#000', 'border': '2px solid #BF2119'}
                    case 'Не разобран':
                        return {'background-color': '#D5E8D4', color: '#000', 'border': '2px solid #669900'}
                    case 'test':
                        return {'background-color': '#fff', color: '#000', 'border': '2px solid #000'}
                }
            },
        }
        
    }
    showJournalInq() {
        $('#list_inq').remove() 
        this.renderJournalInq()
    }
    renderJournalInq() {
        $('.list_inq_conteiner').prepend('<div id="list_inq" class="list_inq__grid ag-theme-balham"></div>')
        let gridDiv = $('#list_inq')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}

class RouteOfTheDelivery{
    constructor() {
        this.name
        this.journalColW = {
            items_route: 50,
            country_route: 150,
            index_route: 50,
            quadr_route: 50,
            town_route: 150,
            adres_route: 148,
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
        ]
        this.rowDataListRoute = [
                {
                    items_route: 'откуда',
                    country_route: '',
                    index_route: '',
                    quadr_route: '',
                    town_route: '',
                    adres_route: ''
                },
                {
                    items_route: 'куда',
                    country_route: '',
                    index_route: '',
                    quadr_route: '',
                    town_route: '',
                    adres_route: ''
                }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
        }
    }
    showJournalRoute(i) {
        $(`#list_route_deliv${i}`).remove()    
        this.renderJournalRouteDel(i)
    }
    renderJournalRouteDel(i) {
        $(`.route-block__table`).prepend(`<div id="list_route_deliv${i}" class="list_route__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    addPointTamoj() {
        let val = $('#adres-tamoj__btn').val()
        if (val < 4) {
            ++val 
            $('#adres-tamoj__btn').val(`${val}`)
            $('.adres-tamoj__points').append(`<div class="points__place-block"><p>пункт ${val}</p><input type="text" name="point_tamoj_${val}" id="" placeholder="Адрес таможни" readonly></div>`)
        } else {
            console.log('много пунктов')
        }
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
        $(`.main_info_route_${val}`).append(`<button id="show_route_info_${val}" class="btn" onclick="routeDeliv.showRouteInfo(${val})">развернуть</button>`)
        $(`.main_info_route_${val}`).append(`<button id="hide_route_info_${val}" class="btn" onclick="routeDeliv.hideRouteInfo(${val})" style="display: none">свернуть</button>`)

        
        $(`.item_route_${val}`).append(`<div class="route_block_${val}" style="display: none"></div>`)
        $(`.route_block_${val}`).prepend(`<div class="route-block__table${val}"></div>`)
        $(`.route-block__table${val}`).prepend(`<div class="dop__adres-tamoj${val}"></div>`)
        $(`.dop__adres-tamoj${val}`).append(`<div class="adres-tamoj__points adres-tamoj${val}"></div>`)

        
        let points = $('#tamoj_points').children().length
        console.log(points)

        $(`.adres-tamoj${val}`).append(`<div class="points__place-block"><p>пункт ${val}</p><input type="text" name="point_tamoj_${val}" id="" placeholder="Адрес таможни" readonly></div>`)
        

                /*<div class="points__place-block start_tamoj">
                    <p>отправление</p>
                    <input type="text" name="start_tamoj" id="" placeholder="Адрес таможни" readonly>
                </div>
                <div class="points__place-block finish_tamoj">
                    <p>назначение</p>
                    <input type="text" name="finish_tamoj" id="" placeholder="Адрес таможни" readonly>
                </div>*/
        
        let tableRoute = new DeliveryPath(rowData)
        tableRoute.showRoutePath(val)
        
        ++val
        $(`.list_route_conteiner`).attr('value', val)
    }
    showRouteInfo(i) {
        $(`.route_block_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'block'})
        $(`#show_route_info_${i}`).css({'display':'none'})
        
    }
    hideRouteInfo(i) {
        $(`.route_block_${i}`).css({'display':'none'})
        $(`#show_route_info_${i}`).css({'display':'block'})
        $(`#hide_route_info_${i}`).css({'display':'none'})
    }
    
}

class InquireInfo {
    constructor() {
        this.inqInformation = {}
    }
    InqEditModeOn() {
        this.showOrHideBtn('block', 'none')
        let sel = $('.info-inq__block select')
        let inpt = $('.info-inq__block input[type=text]')
        let textarea = $('.info-inq__block textarea')
        sel.each(function() {$(this).removeAttr('disabled')})
        inpt.each(function() {$(this).removeAttr('readonly')})
        textarea.each(function() {$(this).removeAttr('readonly')})
    }
    InqEditModeOff() {
        this.showOrHideBtn('none', 'block')
        this.getInformation()
        $('.info-inq__block select').each(function() {$(this).attr('disabled', 'disabled')})
        $('.info-inq__block input[type=text]').each(function() {$(this).attr('readonly', 'readonly')})
        $('.info-inq__block textarea').each(function() {$(this).attr('readonly', 'readonly')})
    }
    showOrHideBtn(show, hide) {
        $('.del_btn').css({'display': show})
        $('#btn_edit_inq_nav').css({'display': hide})
        $('#btn_save_inq_nav').css({'display': show})
    }
    getInformation() {
        let sel_val = $('.info-inq__block select')
        let inpt_val = $('.info-inq__block input[type=text]')
        inpt_val.each(function () {
            let key = $(this).attr('name')
            let val = $(this).val()
            inqInfo.inqInformation[key] = val
        })
        sel_val.each(function () {
            let key = $($(this)[0]).attr('name')
            let val = $($(this)[$(this)[0].selectedIndex]).val()
            inqInfo.inqInformation[key] = val
        })
        console.log(this.inqInformation)
    }
    updateLastConnect() {
        let date = new Date()
        let hours = date.getHours()
        let min = date.getMinutes()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        $('#text_last_connect').text(`${hours}:${min} / ${day}.${month}.${year}`)
    }
    showAccessWindow() {
        $('.access_users_conteiner').css({'display': 'block'})
        
        
    }
    closeAccessWindow() {
        $('.access_users_conteiner').css({'display': 'none'})
    }
    showRatesBlock() {
        $('.name_block').css({'display': 'none'})
        $('.rates_conteiner').css({'display': 'block'})
    }
    hideRatesBlock() {
        $('.name_block').css({'display': 'block'})
        $('.rates_conteiner').css({'display': 'none'})
    }
    createKp() {
        $('.comm_offer_conteiner').css({'display': 'block'})
    }
}

class RatesTable {
    constructor(conteiner, table) {
        this.id_conteiner = conteiner
        this.id_table = table

        this.journalColW = {
            user_op: 120,
            summ_rates: 100,
            currency_rates: 100,
            comment_rates: 185,
            checkbox_rates: 65,
            date_rates: 120,
        }
        this.columnTypes = {
            dateColumn: {}
        }
        this.columnListRoute = [
            {
                headerName: 'Менеджер ОП',
                field: 'user_op',
                width: this.journalColW.user_op,           
            },
            {
                headerName: 'Сумма',
                field: 'summ_rates',
                width: this.journalColW.summ_rates,
            },
            {
                headerName: 'Валюта',
                field: 'currency_rates',
                width: this.journalColW.currency_rates,
            },
            {
                headerName: 'Примечание',
                field: 'comment_rates',
                width: this.journalColW.comment_rates,
                editable: true,
            },
            {
                headerName: 'ok',
                field: 'checkbox_rates',
                width: this.journalColW.checkbox_rates,
                type: 'checkbox',
                checkboxSelection: true,
            },
            {
                headerName: 'Дата',
                field: 'date_rates',
                width: this.journalColW.date_rates,
            },
        ]
        this.rowDataListRoute = [
                {
                    user_op: 'Иванов Иван',
                    summ_rates: '124 453',
                    currency_rates: 'usd',
                    comment_rates: '',
                    checkbox_rates: '',
                    date_rates: ''
                }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            rowSelection: 'single'
        }
    }
    showJournal() {
        $(`#${this.id_table}`).remove()    
        this.renderJournalRouteDel()
    }
    renderJournalRouteDel() {
        $(`.${this.id_conteiner}`).prepend(`<div id="${this.id_table}" class="list_rates__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#${this.id_table}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    addNewRate(sum_id, cur_id) {
        let summ = $(`#${sum_id}`).val()
        let cur = $(`#${cur_id} :selected`).val()
        // let user - узнать кто авториз пользователь


        let dt = new Date()
        let hours = dt.getHours()
        let min = dt.getMinutes()
        let day = dt.getDate()
        let month = dt.getMonth()
        let year = dt.getFullYear()

        this.rowDataListRoute.push({
                user_op: 'Иванов Иван',
                summ_rates: summ,
                currency_rates: cur,
                comment_rates: '',
                checkbox_rates: '',
                date_rates: `${hours}:${min} / ${day}.${month}.${year}`
            })

        this.showJournal()
        
        console.log(summ)
        console.log(cur)
    }
}

class KpForm {
    constructor() {
        this.columnListRoute = [
            {
                headerName: 'Маршрут',
                field: 'route',
                editable: true        
            },
            {
                headerName: 'Тип',
                field: 'type_carrier',
                editable: true
            },
            {
                headerName: 'Ставка фрахта',
                field: 'stavka_fraxta',
                editable: true
            },
        ]
        this.rowDataListRoute = [
                {
                    route: 'маршрут ....',
                    type_carrier: '....',
                    stavka_fraxta: 'u.....',
                }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            rowHeight: 40
        }
    }
    showPriceKP() {
        $(`#price_kp_table`).remove()    
        this.renderPriceKP()
    }
    renderPriceKP() {
        $(`.price_table_block`).prepend(`<div id="price_kp_table" class="list_price_kp__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#price_kp_table`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    createKP() {
        $('.comm_offer_conteiner').css({'display': 'block'})
        $('.name_block').css({'display': 'none'})
        $('.redct_span').css({'display': 'none'})
        kpForm.showPriceKP()
    }
    closeKP() {
        $('.comm_offer_conteiner').css({'display': 'none'})
        $('.name_block').css({'display': 'block'})
    }
    saveChanges() {
        let textarea = $('.comm_offer_block textarea')
        let inpt = $('.comm_offer_block input')

        textarea.each(function(el) {
            let text = $(textarea[el]).text()
            let name = $(textarea[el]).attr('name')
            
            $(`.${name}`).text(`•	${text}`)
            $(textarea[el]).css({'display': 'none'})
        })
        inpt.each(function(el) {
            let text = $(inpt[el]).val()
            let name = $(inpt[el]).attr('name')
            
            $(`.${name}`).text(`${text}`)
            $(inpt[el]).css({'display': 'none'})
        })
        
        $('.redct_span').css({'display': 'block'})
    }
    changeInfo() {
        let textarea = $('.comm_offer_block textarea')
        let inpt = $('.comm_offer_block input')

        textarea.each(function(el) {            
            $(textarea[el]).css({'display': 'block'})
        })
        inpt.each(function(el) {            
            $(inpt[el]).css({'display': 'block'})
        })

        $('.redct_span').css({'display': 'none'})
    }
    sendOnMail() {

    }
}

class DeliveryPath{
    constructor(rowData) {
        this.journalColW = {
            items_route: 50,
            country_route: 150,
            index_route: 50,
            quadr_route: 50,
            town_route: 150,
            adres_route: 148,
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

const routeDeliv = new RouteOfTheDelivery()
const journalInq = new JournalInq()
const inqInfo = new InquireInfo()
const recomRatesTable = new RatesTable('recomm_rates__table', 'recom_rates_table')
const carrierRatesTable = new RatesTable('carrier_rates__table', 'carrier_rates_table')
const kpForm = new KpForm()


$(document).ready( () => {
    routeDeliv.showJournalRoute(0)
    recomRatesTable.showJournal()
    carrierRatesTable.showJournal()
})