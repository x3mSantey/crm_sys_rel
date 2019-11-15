class JournalLid {
    constructor () {
        this.juornalColW = {
            name_lid: 235, 
            responsible_user_lid: 165, 
            date_creating_lid: 165, 
            status_lid: 161
        }
        this.columnListLid = [
            {headerName: 'Названия лидов', field: 'name_lid', width: juornalColW.name_lid, sortable: true},
            {headerName: 'Ответственный', field: 'responsible_user_lid', width: juornalColW.responsible_user_lid, sortable: true},
            {headerName: 'Дата создания', field: 'date_creating_lid', width: juornalColW.date_creating_lid, sortable: true},
            {headerName: 'Статус', field: 'status_lid', width: juornalColW.status_lid, sortable: true},
            
        ]
    }
}



let columnListLid = [
    {headerName: 'Названия лидов', field: 'name_lid', width: juornalColW.name_lid, sortable: true},
    {headerName: 'Ответственный', field: 'responsible_user_lid', width: juornalColW.responsible_user_lid, sortable: true},
    {headerName: 'Дата создания', field: 'date_creating_lid', width: juornalColW.date_creating_lid, sortable: true},
    {headerName: 'Статус', field: 'status_lid', width: juornalColW.status_lid, sortable: true},
]

let rowDataListLid = [
    {name_lid: 'Название лида', responsible_user_lid: 'Иванов Иван', date_creating_lid: '21.10.2019', status_lid: 'В работе',},
    {name_lid: 'sdffdsfdsfdsf', responsible_user_lid: 'Сидоров Петр', date_creating_lid: '21.10.2019', status_lid: 'В работе'},
    {name_lid: 'fdsfdsfsdf', responsible_user_lid: 'Главный командир', date_creating_lid: '21.10.2019', status_lid: 'В работе'},
    {name_lid: 'Название красивое', responsible_user_lid: 'Имя Фамилия', date_creating_lid: '21.10.2019', status_lid: 'В работе'},
    {name_lid: 'Межоса', responsible_user_lid: 'Создатель', date_creating_lid: '21.10.2019', status_lid: 'Не разобран'},
    {name_lid: 'Международный/помеоса', responsible_user_lid: 'Пользователь', date_creating_lid: '21.10.2019', status_lid: 'Не разобран'},
    {name_lid: 'Экспетка запроса', responsible_user_lid: 'Ковальчук Максим', date_creating_lid: '21.10.2019', status_lid: 'Активный'},
    {name_lid: 'РФа', responsible_user_lid: 'Имя Фамилия 2', date_creating_lid: '21.10.2019', status_lid: 'Активный'},
]

let gridOptions = {
    columnDefs: columnListLid,
    rowData: rowDataListLid,
    rowHeight: 40,
    onRowClicked: function() {
        $('.lid_info_conteiner').css({'display': 'block'})
    }

}

gridOptions.rowStyle = {
    top: '10px',
    color: '#fff',
    'text-align': 'center',
    'background-color': '#1D1F25',
    'border-radius': '10px',
    'border': "2px solid red",
    'font-size': '12px',
    'overflow-y': 'scrolling'
}


//console.log(gridOptions.columnApi.sizeColumnsToFit())
console.log(gridOptions)

gridOptions.getRowStyle = (params) => {
    switch (params.data.status_lid) {
        case 'В работе':
            return {'background-color': '#FFF2CC', color: '#000', 'border': '2px solid #D6B656'}
        case 'Активный':
            return {'background-color': '#F8CECC', color: '#000', 'border': '2px solid #BF2119'}
        case 'Не разобран':
            return {'background-color': '#D5E8D4', color: '#000', 'border': '2px solid #669900'}
        case 'test':
            return {'background-color': '#fff', color: '#000', 'border': '2px solid #000'}
    }
}

$('#btn_save_lid_nav').on('click', () => {
    
})

function renderJournalLid() {
    $('.list_lid_conteiner').prepend('<div id="list_lid" class="list_lid__grid"></div>')
    let gridDiv = $('#list_lid')[0]
    new agGrid.Grid(gridDiv, gridOptions)
}

function rerenderJournalLid() {
    $('#list_lid').remove()    
    renderJournalLid()
}

$(document).ready(function () {

    renderJournalLid()

    //Создание лида
    $('#create_lid').on('click', () => {
        console.log(rowDataListLid)
        rowDataListLid.push({name_lid: 'test_1', responsible_user_lid: 'test', date_creating_lid: 'test', status_lid: 'test',},)
        rerenderJournalLid()

    })


    class InfoLid {
        constructor () {
            this.inptInn = $('#company_inn_inpt').val()
            this.warningInn = $('#warning_inn')

            this.lidInformation = {}
        }
        lidEditModeOn() {
            this.showOrHideBtns('block')
            this.switchBtnInNav('none', 'block')
            this.switchInptBetweenText('block', 'none')
            $('select').removeAttr('disabled')
            $('textarea').removeAttr('readonly')
            $('.add_block').css({'display': 'flex'})
        }
        saveChangesInLid () {
            this.showOrHideBtns('none')
            this.switchBtnInNav('block', 'none')
            this.switchInptBetweenText('none', 'block')
            this.checkAllInpts()
            $('select').attr('disabled', 'disabled')
            $('textarea').attr('readonly', 'readonly')
            $('.add_block').css({'display': 'none'})
        }
        showOrHideBtns (evt) {
            $('.del_btn_info').css({'display': evt})
            $('.add_btn_info').css({'display': evt})
        }
        switchBtnInNav (edit, save) {
            $('#btn_edit_lid_nav').css({'display': edit})
            $('#btn_save_lid_nav').css({'display': save})
        }
        switchInptBetweenText (inpt, text) {
            $('.edit_info_text').css({'display': text})

            $('input[type=text]').css({'display': inpt})
            $('input[type=number]').css({'display': inpt})
        }
        checkAllInpts () {
            let arrInputLid = $('.edit_info_inpt')
            let arrTextLid = $('.edit_info_text')
            let arrSelectLid = $('.dd_list')

            for(let i=0; i<arrSelectLid.length; i++) {
                this.lidInformation[arrSelectLid[i].name] = ($(arrSelectLid[i].options[arrSelectLid[i].selectedIndex]).text())
            }
            for(let i=0; i<arrInputLid.length; i++) {
                this.lidInformation[arrInputLid[i].name] = arrInputLid[i].value
                if (arrInputLid[i].value === '') {
                    $('.edit_info_text').css({'border-bottom': '1px solid #292929'})
                    $(arrTextLid[i]).text('')
                } else {
                    $(arrTextLid[i]).text(arrInputLid[i].value)
                }
            }
            console.log(this.lidInformation)
        }
        checkStatus() {
             switch ($('#status_lid')[0].options[$('#status_lid')[0].selectedIndex].innerHTML) {
                case 'Не разобран':
                    break
                case 'В работе':
                    
                    break
                case 'Активный':
                    break
                case '':
                    break
             }
        }

    



        //checkInn() {
        //    if (this.inptInn.length > 12 || this.inptInn.length < 12) {
        //        this.warningInn.css({'display': 'block'})
        //        this.lidEditModeOn()
        //    } else {
        //        $('#company_inn_text').text($('#company_inn_inpt').val())
        //        this.warningInn.css({'display': 'none'})
        //    }
        //}
    }
    
    
    //Нажатие на кнопку редактирования в панели навигации сверху
    $('#btn_edit_lid_nav').on('click', () => {
        const infoLid = new InfoLid()
        infoLid.lidEditModeOn()
    })
    //Нажатие на кнопку сохранения в панели навигации сверху
    $('#btn_save_lid_nav').on('click', () => {
        const infoLid = new InfoLid()
        infoLid.saveChangesInLid()
    })

    //Показать доп инфо у контакта
    $('.show_info_contact').on('click', () => {
        $('.contact_item_block').css({'height': '115px'})
        $('.show_info_contact').css({'display': 'none'})
        $('.hide_info_contact').css({'display': 'block'})
    })

    //Скрыть доп инфу у контакта
    $('.hide_info_contact').on('click', () => {
        $('.contact_item_block').css({'height': '25px'})
        $('.show_info_contact').css({'display': 'block'})
        $('.hide_info_contact').css({'display': 'none'})
    })


    let contactForm = ''
    $('.add_new_contact_block').on('click', () => {
        $('.lid_info__contact_conteiner').append('<div class="contact_item_block"></div>')
    })

    //добавить поле Телефона у контакта
    $('#add_company_tel').on('click', () => {
        let id = $('.tel_company_conteiner')[0].children.length
        console.log(id)
        let nextId = ++id
        if (nextId <= 3) {
            let tel_company_block = `<div class="info_string" id="company_tel_block_${nextId}"><p>Тел.</p><div class="info_string__block"><p style="display: none" id="company_numb_text" name="numb_company" class="company_info_text edit_info_text">Текст какой-то</p><div style="display: flex" class="edit_block"><input style="display: block" type="number" name="numb_company" placeholder="Введите номер" class="company_info_inpt edit_info_inpt" id="company_numb_inpt_${nextId}"><input style="display: block" type="button" id="del_numb_company_${nextId}" class="del_btn del_btn_info"></div></div></div>`
            $('.tel_company_conteiner').append(tel_company_block)
        }
        $(`#del_numb_company_2`).on('click', () => {
            $(`#company_tel_block_2`).remove()
        })
        $(`#del_numb_company_3`).on('click', () => {
            $(`#company_tel_block_3`).remove()
        })
    })

    //Открыть и закрыть окно пользователя
    $('#access_btn').on('click', () => {
        $('.access_users_conteiner').css({'display': 'block'})
    })
    $('.access_user__background').on('click', () => {
        $('.access_users_conteiner').css({'display': 'none'})
    })

    //Добавить блок пользователя в список Наблюдатели
    $('#add_user_observer').on('click', () => {
        $('.observer_list').append('<div class="user_item_block"><input id="user_selector" class="user_selector" type="checkbox"><label for="user_selector" class="selector_indicator"></label><div class="user_item_photo"><a href="#"><img src="http://placehold.it/60x60"/></a></div><div class="user_info_block"><a href="#"><div class="user_info_name">Имя пользователя</div></a><div class="user_info_position">должность</div></div></div>')
    })

    //Добавить пользователя в список наблюдатели
    $('#add_user_executor').on('click', () => {
        $('.executor_list').append('<div class="user_item_block"><input id="user_selector" class="user_selector" type="checkbox"><label for="user_selector" class="selector_indicator"></label><div class="user_item_photo"><a href="#"><img src="http://placehold.it/60x60"/></a></div><div class="user_info_block"><a href="#"><div class="user_info_name">Имя пользователя</div></a><div class="user_info_position">должность</div></div></div>')
    })

    //Кнопки очистить или удалить поля компании у Лида
    $('#del_name_company').on('click', () => {
        $('#company_name_inpt').val('')
    })
    $('#del_inn_company').on('click', () => {
        $('#company_inn_inpt').val('')
    })
    $(`#del_numb_company_1`).on('click', () => {
        $(`#company_numb_inpt_1`).val('')
    })
    $(`#del_numb_company_2`).on('click', () => {
        $(`#company_numb_inpt_2`).val('')
    })
    $(`#del_numb_company_3`).on('click', () => {
        $(`#company_numb_inpt_3`).val('')
    })
    $('#del_mail_company').on('click', () => {
        $('#company_mail_inpt').val('')
    })
    $('#del_site_company').on('click', () => {
        $('#company_site_inpt').val('')
    })
    $('#del_social_company').on('click', () => {
        $('#company_social_inpt').val('')
    })

    //Кнопки очистить или удалить поля контакты у Лида
    $('#del_name_contact').on('click', () => {
        $('#contact_name_inpt').val('')
    })
    $('#del_numb_contact').on('click', () => {
        $('#contact_numb_inpt').val('')
    })
    $('#del_mail_contact').on('click', () => {
        $('#contact_mail_inpt').val('')
    })
    $('#del_social_contact').on('click', () => {
        $('#contact_social_inpt').val('')
    })



    



    //console.log($('#status_lid')[0].options[$('#status_lid')[0].selectedIndex].innerHTML)
   
    
    let dt = Date.now()
    let finish_dt = dt + 5000
    
    
   /* let indicator = setInterval(() => {
        let dt_now = Date.now()
        let left_time = finish_dt - dt_now

        if (left_time < 3000) {
            console.log("время еще есть")
        } else if (1500 <= left_time <= 3000) {
            console.log("внимание, времени осталось немного")
        } else if (0 <= left_time < 1500) {
            console.log('лид просрочен')
        } else if (left_time < 0) {
            console.log('лид просрочен 2')
            clearInterval(indicator)
        }
    }, 500) */



    //console.log(`${dt.getHours()}:${dt.getMinutes()} / ${dt.getDay()}.${dt.getMonth()}.${dt.getFullYear()}`)
    //console.log(last_dt)


    
})





