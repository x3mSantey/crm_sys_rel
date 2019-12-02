export class ContactBlock {
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
   /* addFormBlock() {
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
    }*/
    addNewContact() {
        let val = $('.add_new_contact_block').val()
        $('.add_new_contact_block').attr('value', ++val)
        $('.add_new_contact_block').val($('.add_new_contact_block').val()+1)
        $('.lid_info__contact_conteiner').append(`<div class="contact_item_block cont_block${val}"></div>`)
        
        $(`.cont_block${val}`).append(`<div class="info_string contact_item__name cont_name${val}"></div>`)
        $(`.cont_name${val}`).append(`<input type="text" name="name_contact" placeholder="Введите имя контакта" class="contact_info_inpt edit_info_inpt" id="contact_name_inpt${val}" style="width: 350px">`)
        $(`.cont_name${val}`).append(`<div class="nav_contact_name" id="nav_contact_name${val}"></div>`)
        $(`#nav_contact_name${val}`).append(`<button class="btn show_info_contact" id="show_contact${val}" onclick="contactBlock.showDopInfo(${val})">развернуть</button>`)
        $(`#nav_contact_name${val}`).append(`<button class="btn hide_info_contact" id="hide_contact${val}" style="display: none" onclick="contactBlock.hideDopInfo(${val})">свернуть</button>`)
        $(`#nav_contact_name${val}`).append(`<input type="button" id="del_name_contact${val}" class=" del_btn del_btn_info" style="display: block" onclick="contactBlock.delContactBlock(${val})">`)
        
        $(`.cont_block${val}`).append(`<div class="info_string cont_numb${val}"></div>`)
        $(`.cont_numb${val}`).append(`<p>Тел.</p><div class="edit_block cont_numb_edit${val}"></div>`)
        $(`.cont_numb_edit${val}`).append(`<input type="button" class="add_btn add_btn_info" id="add_numb_${val}" onclick="contactBlock.addNumb(${val})" style="display: block">`)
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

    }
    delContactBlock(id) {
        $(`.cont_block${id}`).remove()
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
    addNumb(id) {
        let val = $('.add_new_contact_block').val()
        let block = $(`.cont_numb_edit${id}`).after(`<div class="info_string cont_numb${val}"></div>`)
        $(`.cont_numb${val}`).append(`<p>Тел.</p><div class="edit_block cont_numb_edit${val}"></div>`)
        $(`.cont_numb_edit${val}`).append(`<input type="button" class="add_btn add_btn_info" id="add_numb_${val}" onclick="contactBlock.addNumb(${val})" style="display: block">`)
        $(`.cont_numb_edit${val}`).append(`<input type="number" name="numb_contact" placeholder="Введите номер" class="contact_info_inpt edit_info_inpt" id="contact_numb_inpt">`)  
        $(`.cont_numb_edit${val}`).append(`<input type="button" style="display: block" id="del_numb_contact" class="del_btn del_btn_info">`)    
        console.log(block)
    }

}