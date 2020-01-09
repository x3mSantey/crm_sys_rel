export class AccessBlock {
    constructor() {
        this.allSysUsers = [
            {
                id: 221,
                name: 'Test Name 1',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 21,
                name: 'Test Name 2',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 241,
                name: 'Test Name 3',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 251,
                name: 'Test Name 4',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 485,
                name: 'Test Name 5',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 2418,
                name: 'Test Name 6',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 2170,
                name: 'Test Name 7',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 2441,
                name: 'Test Name 8',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 24771,
                name: 'Test Name 9',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            },
            {
                id: 2471,
                name: 'Test Name 10',
                position: 'Менеджер',
                url_img: 'http://placehold.it/60x60',
                status: 'god'
            }
        ]
        this.executorsUsers = []
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

        this.loadUsersInJournal('.all_users_list', this.allSysUsers)
        this.loadUsersInJournal('.executor_list', this.executorsUsers)

        $('.access_user__background').on('click', () => {this.hideAccessBlock()})
        $(`#add_user_executor`).on('click', () => {this.addNewExecutors()})
        $(`#del_user_executor`).on('click', () => {this.delExecutors()})
    }
    hideAccessBlock() {
        $(`.name_lid_block`).css({'display': 'block'})
        $(`.access_users_conteiner`).remove()
    }
    loadUsersInJournal(conteiner, list) {
        $(list).each((el) => {
            this.createUserBlock(conteiner, el)
        })
    }
    createUserBlock(conteiner, el, arr) {
        $(conteiner).append(`<div class="user_item_block" id="user_item_${this.allSysUsers[el].id}"></div>`)

        $(`#user_item_${this.allSysUsers[el].id}`).append(`<input id="${arr[el].id}" class="user_selector" type="checkbox">`)
        $(`#user_item_${this.allSysUsers[el].id}`).append(`<label for="${arr[el].id}" class="selector_indicator" id="selector_indicator_${this.allSysUsers[el].id}"></label>`)
        $(`#user_item_${this.allSysUsers[el].id}`).append(`<div class="user_item_photo"><img src="${this.allSysUsers[el].url_img}"/></div>`)
        $(`#user_item_${this.allSysUsers[el].id}`).append(`<div class="user_info_block" id="user_info_block_${this.allSysUsers[el].id}"></div>`)
        
        $(`#user_info_block_${this.allSysUsers[el].id}`).append(`<div class="user_info_name">${this.allSysUsers[el].name}</div>`)
        $(`#user_info_block_${this.allSysUsers[el].id}`).append(`<div class="user_info_position">${this.allSysUsers[el].position}</div>`)        
    }
    addNewExecutors() {
        let check = $(`.all_users_list .user_selector:checkbox:checked`)

        check.each((el) => {
            let id = $(check[el]).attr('id')*1

            $(`.access__list #user_item_${id}`).remove()

            let index = this.allSysUsers.map( el => el.id).indexOf(id)

            //Добавляет объект пользователя в массив соисполнителей
            this.allSysUsers[index].status = 'executor'
            this.executorsUsers.push(this.allSysUsers[index])

            this.createUserBlock('.executor_list', index)

            //Удаляет из объект пользователя из списка всех сотрудников полученного от базы
            this.allSysUsers.splice(index, 1)      
        })    
        
        console.log(this.allSysUsers)  
        console.log(this.executorsUsers) 
    }
    delExecutors() {
        let check = $(`.executor_list .user_selector:checkbox:checked`)

        check.each((el) => {
            let id = $(check[el]).attr('id')*1

            $(`.access__list #user_item_${id}`).remove()

            let index = this.executorsUsers.map( el => el.id).indexOf(id)

            //Добавляет объект пользователя в массив всех юзеров
            this.executorsUsers[index].status = 'god'
            this.allSysUsers.push(this.executorsUsers[index])

            //Удаляет из объект пользователя из списка всех сотрудников полученного от базы
            this.executorsUsers.splice(index, 1)

            index = this.allSysUsers.length

            this.createUserBlock('.all_users_list', index)  
        })
        console.log(this.allSysUsers)  
        console.log(this.executorsUsers) 
    }
}