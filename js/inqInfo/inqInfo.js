export class InquireInfo {
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