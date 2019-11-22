class JournalLid {
    constructor () {
        this.juornalColW = {    
            name_lid: 235, 
            responsible_user_lid: 165, 
            date_creating_lid: 165, 
            status_lid: 161
        }
        this.columnListLid = [
            {
                headerName: 'Названия лидов',
                field: 'name_lid', 
                width: this.juornalColW.name_lid, 
                sortable: true
            },
            {
                headerName: 'Ответственный', 
                field: 'responsible_user_lid', 
                width: this.juornalColW.responsible_user_lid, 
                sortable: true
            },
            {
                headerName: 'Дата создания', 
                field: 'date_creating_lid', 
                width: this.juornalColW.date_creating_lid, 
                sortable: true
            },
            {
                headerName: 'Статус', 
                field: 'status_lid',
                width: this.juornalColW.status_lid, 
                sortable: true
            },
        ]
        this.rowDataListLid = [
            {
                name_lid: 'Название лида', 
                responsible_user_lid: 'Иванов Иван', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе',
            },
            {
                name_lid: 'sdffdsfdsfdsf', 
                responsible_user_lid: 'Сидоров Петр', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'fdsfdsfsdf', 
                responsible_user_lid: 'Главный командир', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'Название красивое', 
                responsible_user_lid: 'Имя Фамилия', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'Межоса', 
                responsible_user_lid: 'Создатель', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Не разобран'
            },
            {
                name_lid: 'Международный/помеоса', 
                responsible_user_lid: 'Пользователь', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Не разобран'
            },
            {
                name_lid: 'Экспетка запроса', 
                responsible_user_lid: 'Ковальчук Максим', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Активный'
            },
            {
                name_lid: 'РФа', 
                responsible_user_lid: 'Имя Фамилия 2',
                date_creating_lid: '21.10.2019', 
                status_lid: 'Активный'
            },
        ]
        this.rowDataListLid = [
            {
                name_lid: 'Название лида', 
                responsible_user_lid: 'Иванов Иван', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе',
            },
            {
                name_lid: 'sdffdsfdsfdsf', 
                responsible_user_lid: 'Сидоров Петр', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'fdsfdsfsdf', 
                responsible_user_lid: 'Главный командир', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'Название красивое', 
                responsible_user_lid: 'Имя Фамилия', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'В работе'
            },
            {
                name_lid: 'Межоса', 
                responsible_user_lid: 'Создатель', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Не разобран'
            },
            {
                name_lid: 'Международный/помеоса', 
                responsible_user_lid: 'Пользователь', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Не разобран'
            },
            {
                name_lid: 'Экспетка запроса', 
                responsible_user_lid: 'Ковальчук Максим', 
                date_creating_lid: '21.10.2019', 
                status_lid: 'Активный'
            },
            {
                name_lid: 'РФа', 
                responsible_user_lid: 'Имя Фамилия 2',
                date_creating_lid: '21.10.2019', 
                status_lid: 'Активный'
            },
        ]
        this.gridOptions = {
            columnDefs: this.columnListLid,
            rowData: this.rowDataListLid,
            rowHeight: 40,
            rowStyle: {
                top: '10px',
                'text-align': 'center',
                'background-color': '#fff',
                'border-radius': '10px',
                'border': "2px solid #1D1F25",
                'font-size': '12px',
                'overflow-y': 'scrolling'
            },
            getRowStyle: (params) => {
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
            },
            onRowClicked: function() {
                $('.lid_info_conteiner').css({'display': 'block'})
                $('.inq_list_conteiner').css({'display': 'block'})
            }
        }
    }
    showJournalLid() {
        $('#list_lid').remove() 
        this.renderJournalLid()
    }
    renderJournalLid() {
        $('.list_lid_conteiner').prepend('<div id="list_lid" class="list_lid__grid"></div>')
        let gridDiv = $('#list_lid')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}

class InfoLid {
    constructor () {
        this.inptInn = $('#company_inn_inpt').val()
        this.warningInn = $('#warning_inn')

        this.btnSaveLid = $('#btn_save_lid_nav')

        this.lidInformation = {}
    }
    lidEditModeOn() {
        this.showOrHideBtns('block')
        this.switchBtnInNav('none', 'block')
        $('select').removeAttr('disabled')
        $('textarea').removeAttr('readonly')
        $('.add_block').css({'display': 'flex'})
        $('.lid_new_tags_conteiner').css({'display': 'flex'})
        $('input[type=number]').removeAttr('readonly')
        $('input[type=text]').removeAttr('readonly')
        
    }
    lidEditModeOff() {
        this.showOrHideBtns('none')
        this.switchBtnInNav('block', 'none')
        this.checkAllInpts()
        $('select').attr('disabled', 'disabled')
        $('textarea').attr('readonly', 'readonly')
        $('.add_block').css({'display': 'none'})
        $('.lid_new_tags_conteiner').css({'display': 'none'})
        $('input[type=number]').attr('readonly', 'readonly')
        $('input[type=text]').attr('readonly', 'readonly')
    }
    saveChangesInLid (journalLid) {
        if (this.btnSaveLid.val() === 'new_lid') {
            this.checkStatus()
            this.checkAllInpts()
            journalLid.rowDataListLid.push({name_lid: `${this.lidInformation.name_lid}`,
                                            responsible_user_lid: `${this.lidInformation.response}`,
                                            date_creating_lid: `${this.lidInformation.date_creating}`,
                                            status_lid: `${this.lidInformation.status_lid}`})
            journalLid.showJournalLid()
            this.btnSaveLid.val('old_lid')
            this.lidEditModeOff()
            //Заглушка для создания первого лида
        } else if (this.btnSaveLid.val() === 'old_lid') {
            console.log('старый отредактирован лид')
            this.checkStatus()
            this.checkAllInpts()
            console.log(this.lidInformation)
            this.lidEditModeOff()
            //Заглушка для редактирования существующего лида
        }
    }
    showOrHideBtns (evt) {
        $('.del_btn_info').css({'display': evt})
        $('.add_btn_info').css({'display': evt})
    }
    switchBtnInNav (edit, save) {
        $('#btn_edit_lid_nav').css({'display': edit})
        $('#btn_save_lid_nav').css({'display': save})
    }
    switchInptBetweenText () {
        $('input[type=text]').attr('readonly', 'readonly')
        $('input[type=number]').attr('readonly', 'readonly')
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
    }
    checkStatus() {
         switch ($('#status_lid')[0].options[$('#status_lid')[0].selectedIndex].innerHTML) {
            case 'Не разобран':
                //изменения если лид перешел в статус
                break
            case 'В работе':
                //изменения если лид перешел в статус
                break
            case 'Активный':
                //изменения если лид перешел в статус
                break
            case '':
                //изменения если лид перешел в статус
                break
         }
    }
    createInq() {
        
    }
}

class ContactBlock {
    constructor () {
    }
    formBlock(id) {
        $('.add_new_contact_block').val('1')
            $('.lid_info__contact_conteiner').append(`<div class="contact_item_block" id='contact_item_block${id}'></div>`)
            $(`#contact_item_block${id}`).append(`<div class="info_string contact_item__name${id}"></div>`)
            $(`.contact_item__name${id}`).append(`<h4 id="contact_name_text${id}" name="name_contact" class="contact_info_text edit_info_text" style="display: none"></h4>`)
            $(`.contact_item__name${id}`).append(`<input type="text" name="name_contact" placeholder="Введите имя контакта" class="contact_info_inpt edit_info_inpt" id="contact_name_inpt${id}" style="display: flex; width: 350px">`)
            $(`.contact_item__name${id}`).append(`<input type="button" id="del_name_contact${id}" class=" del_btn del_btn_info"  style="display: flex">`)
            $(`.contact_item__name${id}`).append(`<button class="btn show_info_contact" id='show_info_contact${id}'>развернуть</button>`)
            $(`.contact_item__name${id}`).append(`<button class="btn hide_info_contact" id='hide_info_contact${id}' style="display: none">свернуть</button>`)
    }
    addFormBlock() {
        console.log('was')
        if($('.add_new_contact_block').val() == 0) {
            console.log($('.add_new_contact_block').val() +'odin')
            $('.add_new_contact_block').attr('value','1')        
            this.formBlock(1)
            console.log($('.add_new_contact_block').val() +'odin')
        } else if ($('.add_new_contact_block').val() == 1) {
            $('.add_new_contact_block').attr('value','2') 
            this.formBlock(2)
            console.log($('.add_new_contact_block').val() +'dva')
        } else if ($('.add_new_contact_block').val() == 2) {
            return console.log('max contacts')
        }
    }
    showDopInfo(id) {
        $(`.cont_block${id}`).css({'height': '115px'})
        $(`#show_contact${id}`).css({'display': 'none'})
        $(`#hide_contact${id}`).css({'display': 'block'})
    }
    hideDopInfo(id) {
        $(`.cont_block${id}`).css({'height': '25px'})
        $(`#show_contact${id}`).css({'display': 'block'})
        $(`#hide_contact${id}`).css({'display': 'none'})
    }

}
let contactBlock = new ContactBlock()

$(document).ready(function () {

    let journalLid = new JournalLid()
    let infoLid = new InfoLid()

    $('#create_inq').on('click', () => {
        console.log('was')
        let val = $('.inq_list_conteiner').val()
        ++val
        $('.inq_list_conteiner').val(val)
        $('.inq_list_conteiner').append(`<a href="../page_inquiry/page_inquiry.html" class="lid_inq_${val}"></a>`)
        $(`.lid_inq_${val}`).append(`<div class="inquire_info_block inq_block_${val}" title="Перейти на страницу запроса"></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><h4>Импорт / Пометка по запросу</h4><select name="" id=""><option value="">Черновик</option><option value="">Не обработан</option><option value="">В обработке</option><option value="">Возврат/уточнение</option><option value="">Обработан</option><option value="">Ожидание обратной связи</option><option value="">Завершен</option><option value="">Перспективы</option></select></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><p>Номер запроса - 321312442132</p></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><p>Вид транспорта - Не габарит</p><p>12:15  12.06.2129</p></div>`)
    })

    
    //Вызов журнала лидов
    $('#journal_lid_btn').on('click', () => {
        $('.list_lid_conteiner').css({'display': 'block'})
        journalLid.showJournalLid()
    })
    //Вызов журнала запросов
    $('#journal_inq_btn').on('click', () => {
        journalLid.showJournalLid()
    })

    //Создание лида
    $('#create_lid').on('click', () => {
        $('.list_lid_conteiner').css({'display': 'block'})
        journalLid.showJournalLid()
        $('#btn_save_lid_nav').val('new_lid')
        $('.lid_info_conteiner').css({'display': 'block'})
        infoLid.lidEditModeOn()
    })
    //Нажатие на кнопку редактирования в панели навигации сверху
    $('#btn_edit_lid_nav').on('click', () => {
        infoLid.lidEditModeOn()
    })
    //Нажатие на кнопку сохранения в панели навигации сверху
    $('#btn_save_lid_nav').on('click', () => {
        infoLid.saveChangesInLid(journalLid)
    })



    //Добавление нового контакта
    $('.add_new_contact_block').on('click', () => {
        let val = $('.add_new_contact_block').val()
        $('.add_new_contact_block').attr('value', ++val)
        $('.add_new_contact_block').val($('.add_new_contact_block').val()+1)
        $('.lid_info__contact_conteiner').append(`<div class="contact_item_block cont_block${val}"></div>`)
        $(`.cont_block${val}`).append(`<div class="info_string contact_item__name cont_name${val}"></div>`)
        $(`.cont_name${val}`).append(`<input type="text" name="name_contact" placeholder="Введите имя контакта" class="contact_info_inpt edit_info_inpt" id="contact_name_inpt${val}" style="width: 350px">`)
        $(`.cont_name${val}`).append(`<input type="button" id="del_name_contact" class=" del_btn del_btn_info" style="display: block">`)
        $(`.cont_name${val}`).append(`<button class="btn show_info_contact" id="show_contact${val}" onclick="contactBlock.showDopInfo(${val})">развернуть</button>`)
        $(`.cont_name${val}`).append(`<button class="btn hide_info_contact" id="hide_contact${val}" style="display: none" onclick="contactBlock.hideDopInfo(${val})">свернуть</button>`)
        
        $(`.cont_block${val}`).append(`<div class="info_string cont_numb${val}"></div>`)
        $(`.cont_numb${val}`).append(`<p>Тел.</p><div class="edit_block cont_numb_edit${val}"></div>`)
        $(`.cont_numb_edit${val}`).append(`<input type="button" class="add_btn add_btn_info">`)
        $(`.cont_numb_edit${val}`).append(`<input type="number" name="numb_contact" placeholder="Введите номер" class="contact_info_inpt edit_info_inpt" id="contact_numb_inpt">`)  
        $(`.cont_numb_edit${val}`).append(`<input type="button" style="display: block" id="del_numb_contact" class="del_btn del_btn_info">`)    
                        
        $(`.cont_block${val}`).append(`<div class="info_string cont_mail${val}"></div>`)
        $(`.cont_mail${val}`).append(`<p>Почта</p><div class="edit_block cont_mail_edit${val}"></div>`)
        $(`.cont_mail_edit${val}`).append(`<input type="text" name="mail_contact" placeholder="Введите почту" class="contact_info_inpt edit_info_inpt" id="contact_mail_inpt">`)  
        $(`.cont_mail_edit${val}`).append(`<input type="button" style="display: block" id="del_mail_contact" class="del_btn del_btn_info">`)                    
                            
        $(`.cont_block${val}`).append(`<div class="info_string cont_social${val}"></div>`)
        $(`.cont_social${val}`).append(`<p>Соц. сеть</p><div class="edit_block cont_social_edit${val}"></div>`)
        $(`.cont_social_edit${val}`).append(`<input type="text" name="social_contact" placeholder="Укажите соц. сеть" class="contact_info_inpt edit_info_inpt" id="contact_social_inpt">`)  
        $(`.cont_social_edit${val}`).append(`<input type="button" style="display: block" id="del_social_contact" class="del_btn del_btn_info">`)                    
                        
        
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



    //Добавить новый тег
    $('.add_new_tag').on('click', ()=> {
        let inpt = $('.journal_tags_block input:checked')
        for (let i = 0; i < inpt.length; i++) {
            let name = inpt[i].getAttribute('name')
            $('.lid_tags__list').append(`<div class="list__tag_block" id=""><p>${name}</p><input style="display: block" type="button" class="del_btn del_btn_info del_tag"></div>`)
            
        }
    })

    $('.del_tag').on('click', () => {
        console.log($('.del_tag'))
    })
    
    //Добавить в список тегов,новый тег
    $('#add_in_journal_tag').on('click', () => {
        let id = $('.journal_tags_block')[0].childElementCount
        let value = $('.add_new_tag_block input').val()
        $('.journal_tags_block').append(`<div class="journal_item_block" id="journal_tags_${id}"><input type="checkbox" name="${value}" id="journal_tags_check_${id}"><p>${value}</p></div>`)
        $('.add_new_tag_block input').val('')
    })

    
}) 





