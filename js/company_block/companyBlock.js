export class CompanyBlock {
    constructor() {
        this.currentCompanyInfo = {
            inn_company: "",
            mail_company: "",
            name_company: "",
            numb_company: "",
            site_company: "",
            social_company_inpt: ""
        }
        this.newCompanyInfo = {
            inn_company: "",
            mail_company: "",
            name_company: "",
            numb_company: "",
            site_company: "",
            social_company_inpt: ""
        }
        this.arr = []
    }
    addNewTelNumb() {
        let val = $('.tel_company_conteiner').val()
        ++val

        $('.tel_company_conteiner').append(`<div class="info_string" id="company_tel_block_${val}"></div>`)
        $(`#company_tel_block_${val}`).append(`<p>Тел.</p><div class="edit_block edit_nomb_company_${val}"></div>`)
        
        $(`.edit_nomb_company_${val}`).append(`<input type="number" name="dob_numb_company_${val}" placeholder="доб." style="width: 60px; margin-right: 10px" class="dob_company_info_inpt edit_info_inpt" id="dob_company_numb_inpt_${val}">`)                    
        $(`.edit_nomb_company_${val}`).append(`<input type="number" name="numb_company_${val}" placeholder="Введите номер" style="width: 130px" class="company_info_inpt edit_info_inpt" id="company_numb_inpt_${val}">`)                    
        $(`.edit_nomb_company_${val}`).append(`<input type="button" style="display: block" id="del_numb_company_${val}" class="del_btn del_btn_info">`)           
        
        $('.tel_company_conteiner').val(val)

        $(`#del_numb_company_${val}`).on('click', () => {
            this.delCompanyField(`#company_tel_block_${val}`)
            this.delCompanyField(`#dob_company_numb_inpt_${val}`)
        })
    }
    delCompanyField(id) {
        $(id).remove()
    }
    clearInpt() {
        $(`.del_btn_comp`).on('mousemove', (el) => {
            let name = $(el.target).attr('name')
            $(`#del_${name}`).on('click', () => {$(`#${name}_inpt`).val('')})
        })
    }
    addNewSocial() {
        let val = $('.tel_company_conteiner').val()
        ++val

        $(`.social_company_conteiner`).append(`<div class="info_string" id="company_social_block_${val}"></div>`)
        $(`#company_social_block_${val}`).append(`<p>Соц. сеть</p><div class="edit_block" id="edit_social_company_${val}"></div>`)

        $(`#edit_social_company_${val}`).append(`<a name="social_company_inpt" class="company_social_hyper_${val}"></a>`)
        $(`#edit_social_company_${val}`).append(`<input type="text" name="social_company_inpt" placeholder="Укажите соц. сеть" class="company_info_inpt edit_info_inpt" id="social_company_inpt_${val}">`)
        $(`#edit_social_company_${val}`).append(`<input type="button" style="display: block"  name="social_company" id="del_social_company_${val}" class="del_btn del_btn_comp">`)                        
                                
        $('.tel_company_conteiner').val(val)
        
        $(`#del_social_company_${val}`).on('click', () => {
            this.delCompanyField(`#company_social_block_${val}`)
        })
    }
    saveInfoChanges() {
        let text = $('.lid_info_company_block input[type=text]')
        let numb = $('.lid_info_company_block input[type=number]')
        
        text.each((el) => {
            let name = text[el].name
            this.newCompanyInfo[name] = $(text[el]).val()
        })
        numb.each((el) => {
            let name = numb[el].name
            this.newCompanyInfo[name] = $(numb[el]).val()
        })
        console.log(this.newCompanyInfo)
        console.log(this.currentCompanyInfo)

        let arr = Object.keys(this.newCompanyInfo)
        $(arr).each( (el)=> {
            if (this.newCompanyInfo[arr[el]] === this.currentCompanyInfo[arr[el]]) {
                console.log('no')
            } else {
                //Отправить изменения в объект со всей информацией по лиду
                console.log('yes')
            }
        })
    }
}