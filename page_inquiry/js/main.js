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
            rowTop: 555
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
            'background-color': '#0070B2',
            'color': '#fff',
            'border': '1px solid #000'
        }
        this.columnListRoute = [
            {
                headerName: 'пункты',
                field: 'items_route',
                width: this.journalColW.items_route,
                cellStyle: this.cellStyle              
            },
            {
                headerName: 'Страна',
                field: 'country_route',
                width: this.journalColW.country_route,
                cellStyle: {
                    'border': '1px solid #000'
                },
                editable: true,
            },
            {
                headerName: 'индекс',
                field: 'index_route',
                width: this.journalColW.index_route,
                cellStyle: {
                    'border': '1px solid #000'
                },
                editable: true,
            },
            {
                headerName: 'квадрат',
                field: 'quadr_route',
                width: this.journalColW.quadr_route,
                cellStyle: {
                    'border': '1px solid #000'
                },
                editable: true,
            },
            {
                headerName: 'Город',
                field: 'town_route',
                width: this.journalColW.town_route,
                cellStyle: {
                    'border': '1px solid #000'
                },
                editable: true,
            },
            {
                headerName: 'Адрес',
                field: 'adres_route',
                width: this.journalColW.adres_route,
                cellStyle: {
                    'border': '1px solid #000'
                },
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
                items_route: 'пункт A',
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
    showJournalRoute() {
        this.rerenderJournalRouteDel()
    }
    renderJournalRouteDel() {
        $('.route-block__table').append('<div id="list_route_deliv" class="list_route__grid"></div>')
        let gridDiv = $('#list_route_deliv')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    rerenderJournalRouteDel() {
        $('#list_route_deliv').remove()    
        this.renderJournalRouteDel()
    }
}



class InquireInfo {
    constructor() {
        this.inqInformation = {}
        this.name = ['dsd']
    }
    InqEditModeOn() {
        this.showOrHideBtn('block', 'none')
        let sel_val = $('.info-inq__block select')
        let inpt_text = $('.info-inq__block input[type=text]')
        sel_val.each(function() {$(this).removeAttr('disabled')})
        inpt_text.each(function() {$(this).removeAttr('readonly')})
    }
    InqEditModeOff() {
        this.showOrHideBtn('none', 'block')
        this.getInformation()

        let sel_val = $('.info-inq__block select')
        let inpt_text = $('.info-inq__block input[type=text]')
        sel_val.each(function() {
            $(this).attr('disabled', 'disabled')   
        })
        inpt_text.each(function() {
            $(this).attr('readonly', 'readonly')   
        })
    }
    showOrHideBtn(show, hide) {
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
}

const routeDeliv = new RouteOfTheDelivery()
const journalInq = new JournalInq()
const inqInfo = new InquireInfo()

$(document).ready( () => {
    routeDeliv.showJournalRoute()
})