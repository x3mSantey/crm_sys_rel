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
import { CompanyBlock } from "./company_block/companyBlock"
import { AccessBlock } from "./accessBlock/accessBlock";
import { dataLids } from './info_lid/dataLids'
import { CargoInfoTable } from './cargoInfoTable/cargoInfoTable'
import { TablePointsRoute } from './tablePointsRoute/tablePointsRoute'
//import { IventBlock } from './iventBlock/iventBlock'


const journalLid = new JournalLid(data)
const journalInq = new JournalInq(dataInq)
const contactBlock = new ContactBlock()
const infoLid = new InfoLid(dataLids.lidNumberOne) 
const inqInfo = new InquireInfo()
const recomRatesTable = new RatesTable('recomm_rates__table', 'recom_rates_table', 80)
const carrierRatesTable = new RatesTable('carrier_rates__table', 'carrier_rates_table', 350)
const kpForm = new KpForm()
const companyBlock = new CompanyBlock()
const accessBlock = new AccessBlock()
const tablePointsRoute = new TablePointsRoute()
const cargoInfoTable = new CargoInfoTable()
//const iventBlock = new IventBlock()
const routeDeliv = new RouteOfTheDelivery( cargoInfoTable, tablePointsRoute, inqInfo)


$(document).ready(function() {
    //routeDeliv.showJournalRoute(0)
    recomRatesTable.showJournal()
    carrierRatesTable.showJournal()

    //Заполнить поля из полученного объекта
    infoLid.fillFields()

    //Нажатие на кнопки навигации
    $('.lid_journal_btn').on('click', function () {
        $('.btn').attr('id','')
        $('.lid_journal_btn').attr('id','btn_selected')
        $('.table_conteiner').empty()
        journalLid.showJournalLid('.table_conteiner')
    })
    $('.inq_journal_btn').on('click', function() {
        $('.btn').attr('id','')
        $('.inq_journal_btn').attr('id','btn_selected')
        $('.table_conteiner').empty()
        journalInq.showJournalInq('.table_conteiner')
    })
    $('.op_journal_btn').on('click', function() {
        $('.btn').attr('id','')
        $('.op_journal_btn').attr('id','btn_selected')
        $('.table_conteiner').empty()
        alert('список запросов для оперативного отдела')
    })


    
    //редактирование запроса
    $('#btn_edit_inq').on('click', function() {inqInfo.InqEditModeOn()})
    $('#btn_save_inq').on('click', function() {inqInfo.InqEditModeOff()})

    //добавить маршрут в запросе
    $('#add_point_route').on('click', function() {routeDeliv.addPointRoute()})
    $('#create_route').on('click', function() {routeDeliv.createRoute()})
 
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
    $('#journal_lid_btn').on('click', () => {infoLid.showJournalLid('.journal_lid_conteiner')})
    $('#create_lid').on('click', () => {infoLid.createNewLid()})
    /*$('#create_lid').on('click', () => {
        $('.list_lid_conteiner').css({'display': 'block'})
        journalLid.showJournalLid()
        $('#btn_save_lid_nav').val('new_lid')
        $('.lid_info_conteiner').css({'display': 'block'})
        infoLid.lidEditModeOn()
    })*/

    $('#create_inq').on('click', () => {infoLid.createInq()})
    

    $('#btn_save_lid_nav').on('click', () => {infoLid.saveChangesInLid(journalLid, companyBlock)})
    $('#btn_edit_lid_nav').on('click', () => {infoLid.lidEditModeOn()})
    
    $('.add_new_contact_block').on('click', () => {contactBlock.addNewContact()})

    $('#show_contact0').on('click', () => {contactBlock.showDopInfo(0)})
    $('#hide_contact0').on('click', () => {contactBlock.hideDopInfo(0)})
    
    
    $('.add_new_tag').on('click', () =>  {infoLid.addNewTag()})

    //добавить поле Телефона у контакта
    $('#add_company_tel').on('click', () => {companyBlock.addNewTelNumb()})

    

    //Открыть и закрыть окно пользователя
    $('#access_btn').on('click', () => {accessBlock.showAccessBlock()})
    //$('.access_user__background').on('click', () => {accessBlock.hideAccessBlock()})

    
    //Добавить пользователя в список соисполнители
    /*$('#add_user_executor').on('click', () => {
        $('.executor_list').append('<div class="user_item_block"><input id="user_selector" class="user_selector" type="checkbox"><label for="user_selector" class="selector_indicator"></label><div class="user_item_photo"><a href="#"><img src="http://placehold.it/60x60"/></a></div><div class="user_info_block"><a href="#"><div class="user_info_name">Имя пользователя</div></a><div class="user_info_position">должность</div></div></div>')
    })*/

    //Кнопки очистить или удалить поля компании у Лида
    companyBlock.clearInpt()
    
    $(`#add_company_social`).on('click', () => {companyBlock.addNewSocial()})


    //Кнопки очистить или удалить поля контакты у Лида
    $('#del_name_contact').on('click', () => {$('#contact_name_inpt').val('')})
    $('#del_numb_contact').on('click', () => {$('#contact_numb_inpt').val('')})
    $('#del_mail_contact').on('click', () => {$('#contact_mail_inpt').val('')})
    $('#del_social_contact').on('click', () => {$('#contact_social_inpt').val('')})
    

    $('.del_tag').on('click', () => {console.log($('.del_tag'))})
    
    //Добавить в список тегов,новый тег
    $('#add_in_journal_tag').on('click', () => {infoLid.createNewTag()})
})
