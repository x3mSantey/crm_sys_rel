

class JournalInq {
    constructor() {
        this.journalColW = {
            name_inq: 180,
            service_inq: 90,
            ref_number_inq: 90,
            date_creating_inq: 90,
            status_inq: 90,
        }
        this.cellStyle = {
            'background-color': '#0070B2',
            'color': '#fff',
            'border': '1px solid #000'
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
        this.rowStyle = {
            top: '10px',
            'text-align': 'center',
            'border-radius': '10px',
            'border': "2px solid #1D1F25",
            'font-size': '12px',
            'overflow-y': 'scrolling'
        }
        this.gridOptions = {
            columnDefs: this.columnListInq,
            rowData: this.rowDataListInq,
            rowStyle: this.rowStyle,
            rowHeight: 40,
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
        this.rerenderJournalInq()
    }
    renderJournalInq() {
        $('.list_inq_conteiner').prepend('<div id="list_inq" class="list_inq__grid"></div>')
        let gridDiv = $('#list_inq')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    rerenderJournalInq() {
        $('#list_inq').remove()    
        this.renderJournalInq()
    }
}

class RouteOfTheDelivery{
    constructor() {
        this.journalColW = {
            items_route: 50,
            country_route: 150,
            index_route: 50,
            quadr_route: 50,
            town_route: 150,
            adres_route: 148,
        }
        this.cellStyle = {
            'color': '#000',
            'border': '1px solid #0070B2',
            'outline': 'none',
            'background-color': '#E2E2E2'
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
                cellStyle: this.cellStyle,
                editable: true,
            },
            {
                headerName: 'индекс',
                field: 'index_route',
                width: this.journalColW.index_route,
                cellStyle: this.cellStyle,
                editable: true,
            },
            {
                headerName: 'квадрат',
                field: 'quadr_route',
                width: this.journalColW.quadr_route,
                cellStyle: this.cellStyle,
                editable: true,
            },
            {
                headerName: 'Город',
                field: 'town_route',
                width: this.journalColW.town_route,
                cellStyle: this.cellStyle,
                editable: true,
            },
            {
                headerName: 'Адрес',
                field: 'adres_route',
                width: this.journalColW.adres_route,
                cellStyle: this.cellStyle,
                editable: true,
            },
        ]
        this.rowDataListRoute = [
            {
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
                    quadr_finish: '',
                    town_route: '',
                    adres_route: ''
                }
            },
            {
                
            }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            rowHeight: 20,
            rowStyle: {
                top: '10px',
                'text-align': 'center',
                'font-size': '12px',
                color: '#fff'
            },
            headerHeight: 15  
        }
    }
    showJournalRoute(i) {
        $(`#list_route_deliv${i}`).remove()    
        this.renderJournalRouteDel(i)
    }
    renderJournalRouteDel(i) {
        $(`.route-block__table${i}`).prepend(`<div id="list_route_deliv${i}" class="list_route__grid"></div>`)
        let gridDiv = $(`#list_route_deliv${i}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    showRouteInfo(i) {
        $('.item__block').css({'display':'block'})
        $('.item__block').prepend(`<div class="route-block__table${i}"></div>`)
        $(`.route-block__table${i}`).prepend(`<div class="dop__adres-tamoj${i}"><div class="adres-tamoj__points"><div class="points__place-block"><p>отправление</p><input type="text" name="start_tamoj" id="" placeholder="Адрес таможни" readonly></div><div class="points__place-block"><p>назначение</p><input type="text" name="finish_tamoj" id="" placeholder="Адрес таможни" readonly></div></div>`)
        this.showJournalRoute(i)
    }
    addPointTamoj() {
        let val = $('#adres-tamoj__btn').val()
        if (val < 4) {
            ++val 
            $('#adres-tamoj__btn').val(`${val}`)
            $('.adres-tamoj__points').append(`<div class="points__place-block"><p>пункт ${val}</p><input type="text" name="incedental_tamoj_${val}" id="" placeholder="Адрес таможни" readonly></div>`)
        } else {
            console.log('много пунктов')
        }
    }
    creareRoute() {
        let val = $(`.list_route_conteiner`).attr('value')
        ++val
        $(`.list_route_conteiner`).attr('value', val)
        let town1 = 'город один'
        let town2 = 'город два'
        let conteiner = `<div class="list-route__item item_route_${val}"></div>`
        let mainInfo = `<div class="main_info_route"><h2>Маршрут из ${town1}, куда ${town2}</h2><button id="show_route_info_${val}" class="btn" onclick="routeDeliv.showRouteInfo(${val})">развернуть</button></div>`

        $('.list_route_conteiner').append(`${conteiner}`)
        $(`.item_route_${val}`).append(`${mainInfo}`)
    }
    addPointRoute() {
        let val = $('#add_point_route').val()
        if (val < 5) {
            $('#add_point_route').val(++val)
            let i = this.rowDataListRoute.length
            let n = i-1
            this.rowDataListRoute[i] = this.rowDataListRoute[n] 
            this.rowDataListRoute[n] = {
                items_route: 'пункт B',
                country_route: '',
                index_route: '',
                quadr_route: '',
                town_route: '',
                adres_route: ''
            }
            this.showJournalRoute(0)
        } else {
        }
        
        
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
}

const routeDeliv = new RouteOfTheDelivery()
const journalInq = new JournalInq()
const inqInfo = new InquireInfo()

$(document).ready( () => {
    routeDeliv.showJournalRoute(0)
})