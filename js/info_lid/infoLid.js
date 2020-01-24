export class InfoLid {
    constructor (dataLids) {
        this.inptInn = $('#company_inn_inpt').val()
        this.warningInn = $('#warning_inn')

        //Объекты хранящие информацию по лиду
        this.currentLidInfo = dataLids
        this.variableLidInfo = dataLids

    }
    createNewLid() {
        $('#btn_save_lid_nav').val('new_lid')
        $('.lid_info_conteiner').css({'display': 'block'})
        $('select').val('')
        $('textarea').val('')
        $('input').val('')
        this.lidEditModeOn()
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
        //this.checkAllInpts()
        $('select').attr('disabled', 'disabled')
        $('textarea').attr('readonly', 'readonly')
        $('.add_block').css({'display': 'none'})
        $('.lid_new_tags_conteiner').css({'display': 'none'})
        $('input[type=number]').attr('readonly', 'readonly')
        $('input[type=text]').attr('readonly', 'readonly')
    }
    saveChangesInLid (journalLid, companyBlock) {
        if ($('#btn_save_lid_nav').val() === 'new_lid') {
            //this.checkStatus()
            //this.checkAllInpts()

            $('#btn_save_lid_nav').val('old_lid')
            this.lidEditModeOff()
            //Заглушка для создания первого лида
        } else if ($('#btn_save_lid_nav').val() === 'old_lid') {
            companyBlock.saveInfoChanges()
            //this.checkStatus()
            //this.checkAllInpts()
            this.lidEditModeOff()
        }
    }
    showOrHideBtns (evt) {
        $('.del_btn_info').css({'display': evt})
        $('.del_btn_comp').css({'display': evt})
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
        debugger
        let arrInputLid = $('.edit_info_inpt')
        let arrTextLid = $('.edit_info_text')
        let arrSelectLid = $('.dd_list')

        for(let i=0; i<arrSelectLid.length; i++) {
            this.lidInformation[arrSelectLid[i].name] = ($(arrSelectLid[i].options[arrSelectLid[i].selectedIndex]).text())
        }
        for(let i=0; i<arrInputLid.length; i++) {
            this.lidInformation[arrInputLid[i].name] = arrInputLid[i].value
        }
        console.log(this.lidInformation)
    }
    /*checkStatus() {
         switch () {
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
    }*/
    createInq(typeInq, nameInq, numbInq,typeTrans) {
        let date = new Date()
        let hours = date.getHours()
        let min = date.getMinutes()
        let day = date.getDate()
        let month = date.getMonth() +1
        let year = date.getFullYear()
        
        let val = $('.inq_list_conteiner').val()
        ++val
             
        $('.inq_list_conteiner').val(val);
        $('.inq_list_conteiner').append(`<a href="../page_inquiry/page_inquiry.html" class="lid_inq_${val}"></a>`)
        $(`.lid_inq_${val}`).append(`<div class="inquire_info_block inq_block_${val}" title="Перейти на страницу запроса"></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><h4>${typeInq} / ${nameInq}</h4><select name="" id="" disabled><option value="">Черновик</option><option value="">Не обработан</option><option value="">В обработке</option><option value="">Возврат/уточнение</option><option value="">Обработан</option><option value="">Ожидание обратной связи</option><option value="">Завершен</option><option value="">Перспективы</option></select></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><p>Номер запроса - ${numbInq}</p></div>`)
        $(`.inq_block_${val}`).append(`<div class="lid_string"><p>Вид транспорта - ${typeTrans}</p><p>${hours}:${min} / ${day}.${month}.${year}</p></div>`)

    }
    addNewTag() {
        let inpt = $('.journal_tags_block input:checked')

        inpt.each( (el) => {
            let val = $('.add_new_tag').val()
            ++val
            let name = inpt[el].getAttribute('name')
            $('.lid_tags__list').append(`<div class="list__tag_block" id="tag_block_${val}"></div>`)
            $(`#tag_block_${val}`).append(`<p>${name}</p>`)
            $(`#tag_block_${val}`).append(`<input style="display: block" type="button" id="del_tag_${val}" class="del_btn del_btn_info del_tag">`)
            $(`#del_tag_${val}`).on('click', () => {this.delExistTag(val)})
            $('.add_new_tag').val(val)
        })
    }
    createNewTag() {
        let id = $('.journal_tags_block')[0].childElementCount
        let value = $('.add_new_tag_block input').val()
        $('.journal_tags_block').append(`<div class="journal_item_block" id="journal_tags_${id}"><input type="checkbox" name="${value}" id="journal_tags_check_${id}"><p>${value}</p></div>`)
        $('.add_new_tag_block input').val('')
    }
    delExistTag(id) {
        $(`#tag_block_${id}`).remove()
    }
    fillFields() {
        let listInpt = $(`.lidDataInpt`)
        let listSel = $(`.lidDataSel`)

        //Подставляет в селекты значения к соответствующим именам
        listSel.each((el) => {
            let name = $(listSel[el]).attr('name')
            $(listSel[el]).val(this.variableLidInfo[name])
        })

        //Подставляет в инпуты значения к соответствующим именам
        listInpt.each((el) => {
            let name = $(listInpt[el]).attr('name')
            $(listInpt[el]).val(this.variableLidInfo[name])
        })
    }
}