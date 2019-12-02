import { InfoLid } from "./info_lid/infoLid";
import { JournalLid } from './journal_lid/journalLid.js'
import { JournalInq } from "./journal_inq/journlaInq";
import { data } from "./journal_lid/dataList";
import { dataInq } from "./journal_inq/dataInq";
import { ContactBlock } from "./contact_block/contactBlock";
import { RouteOfTheDelivery } from "./routeDeliv/routeDeliv";
import { InquireInfo } from "./inqInfo/inqInfo";
import { RatesTable } from "./ratesTable/ratestable";
import { KpForm } from "./kpForm/kpForm";
import { DeliveryPath } from "./delPathBlock/delPathBlock";


const journalLid = new JournalLid(data)
const journalInq = new JournalInq(dataInq)
const contactBlock = new ContactBlock()
const infoLid = new InfoLid()
const routeDeliv = new RouteOfTheDelivery()
const inqInfo = new InquireInfo()
const recomRatesTable = new RatesTable('recomm_rates__table', 'recom_rates_table')
const carrierRatesTable = new RatesTable('carrier_rates__table', 'carrier_rates_table')
const kpForm = new KpForm()


$(document).ready(function() {
    //routeDeliv.showJournalRoute(0)
    //recomRatesTable.showJournal()
    //carrierRatesTable.showJournal()
    



    $('.lid_journal_btn').on('click', function () {
        journalLid.showJournalLid('.table_conteiner')
    })
    $('.inq_journal_btn').on('click', function() {
        journalInq.showJournalInq('.table_conteiner')
    })

    
    //редактирование запроса
    $('#btn_edit_inq_nav').on('click', function() {inqInfo.InqEditModeOn()})
    $('#btn_save_inq_nav').on('click', function() {inqInfo.InqEditModeOff()})

    //добавить маршрут в запросе
    $('#add_point_route').on('click', function() {routeDeliv.addPointRoute()})
    $('#create_route').on('click', function() {routeDeliv.createRoute()})

    //показать страницу ставок
    $('#showRates').on('click', function() {inqInfo.showRatesBlock()})
    //показать страницу доступности
    $('#show_list_access').on('click', function() {inqInfo.showAccessWindow()})

    $('#update_last_connect').on('click', function() {inqInfo.updateLastConnect()})


    //Коммерческое предложение
    $('#create_kp').on('click', function() {kpForm.createKP()})
    $('.comm_offer__background').on('click', function() {kpForm.closeKP()})
    $('#kp_save_changes').on('click', function() {kpForm.saveChanges()})
    $('#kp_switch_info').on('click', function() {kpForm.changeInfo()})
    $('#kp_send').on('click', function() {kpForm.sendOnMail()})

    
    $('#journal_inq_btn').on('click', function() {journalInq.showJournalInq()})
    
    
    /*------------------------------------
    

        
        Обработчики на страницу лида


    ------------------------------------*/ 
    $('#journal_lid_btn').on('click', function() {infoLid.showJournalLid('.journal_lid_conteiner')})
    $('#create_lid').on('click', function() {infoLid.createNewLid()})
    /*$('#create_lid').on('click', () => {
        $('.list_lid_conteiner').css({'display': 'block'})
        journalLid.showJournalLid()
        $('#btn_save_lid_nav').val('new_lid')
        $('.lid_info_conteiner').css({'display': 'block'})
        infoLid.lidEditModeOn()
    })*/

    $('#create_inq').on('click', function() {infoLid.createInq()})
    

    $('#btn_save_lid_nav').on('click', function() {infoLid.saveChangesInLid(journalLid)})
    $('#btn_edit_lid_nav').on('click', () => {infoLid.lidEditModeOn()})
    
    $('.add_new_contact_block').on('click', function() {contactBlock.addNewContact()})

    $('#show_contact0').on('click', function() {contactBlock.showDopInfo(0)})
    $('#hide_contact0').on('click', function() {contactBlock.hideDopInfo(0)})
    
    
    $('.add_new_tag').on('click', function() {infoLid.addNewTag()})

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
