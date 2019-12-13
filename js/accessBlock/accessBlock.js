export class AccessBlock {
    constructor() {
        this.currentUserList = [
            {
                id: '221',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '21',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '241',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '251',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '485',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2418',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2170',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2441',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '24771',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2471',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2411',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: '2451',
                name: 'Test Name',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
        ]
        this.newUserList = []
    }
    showAccessBlock() {
        $(`.name_lid_block`).css({'display': 'none'})
        $(`.main_conteiner`).append(`<div class="access_users_conteiner"></div>`)

        $(`.access_users_conteiner`).append(`<div class="access_user__background"></div>`)
        $(`.access_users_conteiner`).append(`<div class="users_window_conteiner"></div`)

        $(`.users_window_conteiner`).append(`<div class="access_users__executor_block"></div>`)
        $(`.users_window_conteiner`).append(`<div class="list_all_users_conteiner"></div>`)
                    
        $(`.access_users__executor_block`).append(`<div class="access__title"><h4>Соисполнители</h4><div class="access_title__nav"></div></div><div class="executor_list access__list"></div>`)
        
        $(`.list_all_users_conteiner`).append(`<div class="access__title"><h4>Все пользователи</h4></div><div class="access__list all_users_list"></div>`)

        $(`.access_title__nav`).append(`<button class="btn" id="add_user_executor">Добавить</button>`)
        $(`.access_title__nav`).append(`<button class="btn" id="del_user_executor">Удалить</button>`)

        this.loadUsersInJournal('.all_users_list', this.currentUserList)
        $('.access_user__background').on('click', () => {this.hideAccessBlock()})
        $(`#add_user_executor`).on('click', () => {
            this.addNewExecutors()
        })
    }
    hideAccessBlock() {
        $(`.name_lid_block`).css({'display': 'block'})
        $(`.access_users_conteiner`).remove()
    }
    loadUsersInJournal(conteiner, list) {
        console.log($(list))

        $(list).each((el) => {
            this.createUserBlock(conteiner, el)
        })
    }
    createUserBlock(conteiner, el) {
        $(conteiner).append(`<div class="user_item_block" id="user_block_${this.currentUserList[el].id}"></div>`)

        $(`#user_block_${this.currentUserList[el].id}`).append(`<input id="user_selector_${this.currentUserList[el].id}" class="user_selector" type="checkbox">`)
        $(`#user_block_${this.currentUserList[el].id}`).append(`<label for="user_selector_${this.currentUserList[el].id}" class="selector_indicator" id="selector_indicator_${this.currentUserList[el].id}"></label>`)
        $(`#user_block_${this.currentUserList[el].id}`).append(`<div class="user_item_photo"><img src="${this.currentUserList[el].url_img}"/></div>`)
        $(`#user_block_${this.currentUserList[el].id}`).append(`<div class="user_info_block" id="user_info_block_${this.currentUserList[el].id}"></div>`)
        
        $(`#user_info_block_${this.currentUserList[el].id}`).append(`<div class="user_info_name">${this.currentUserList[el].name}</div>`)
        $(`#user_info_block_${this.currentUserList[el].id}`).append(`<div class="user_info_position">${this.currentUserList[el].position}</div>`)

        
    }
    addNewExecutors() {
        let check = $(`.all_users_list .user_item_block input`)
        let user = $(`.all_users_list`)

        check.each((el) => {
            if (check[el].checked === true) {
                let id = user[el].attr('id')
                $(`#${id}`).remove()
            } else {

            }
        })
        
    }
}