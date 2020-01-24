export class RatesTable {
    constructor(conteiner, table, height_table) {
        this.id_conteiner = conteiner
        this.id_table = table
        this.height_table = height_table

        this.journalColW = {
            user_op: 120,
            summ_rates: 100,
            currency_rates: 100,
            comment_rates: 185,
            checkbox_rates: 65,
            date_rates: 120,
        }
        this.columnTypes = {
            dateColumn: {}
        }
        this.columnListRoute = [{
                headerName: 'Менеджер ОП',
                field: 'user_op',
                width: this.journalColW.user_op,
            },
            {
                headerName: 'Сумма',
                field: 'summ_rates',
                width: this.journalColW.summ_rates,
            },
            {
                headerName: 'Валюта',
                field: 'currency_rates',
                width: this.journalColW.currency_rates,
            },
            {
                headerName: 'Примечание',
                field: 'comment_rates',
                width: this.journalColW.comment_rates,
                editable: true,
            },
            {
                headerName: 'ok',
                field: 'checkbox_rates',
                width: this.journalColW.checkbox_rates,
                type: 'checkbox',
                checkboxSelection: true,
            },
            {
                headerName: 'Дата',
                field: 'date_rates',
                width: this.journalColW.date_rates,
            },
        ]
        this.rowDataListRoute = [{
            user_op: 'Иванов Иван',
            summ_rates: '124 453',
            currency_rates: 'usd',
            comment_rates: '',
            checkbox_rates: '',
            date_rates: ''
        }]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            rowSelection: 'single'
        }
    }
    showJournal() {
        $(`#${this.id_table}`).remove()
        this.renderJournalRouteDel()
    }
    renderJournalRouteDel() {
        $(`.${this.id_conteiner}`).prepend(`<div id="${this.id_table}" style="height: ${this.height_table}px" class="list_rates__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#${this.id_table}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    addNewRate(sum_id, cur_id) {
        let summ = $(`#${sum_id}`).val()
        let cur = $(`#${cur_id} :selected`).val()
            // let user - узнать кто авториз пользователь

        let dt = new Date()
        let hours = dt.getHours()
        let min = dt.getMinutes()
        let day = dt.getDate()
        let month = dt.getMonth()
        let year = dt.getFullYear()

        this.rowDataListRoute.push({
            user_op: 'Иванов Иван',
            summ_rates: summ,
            currency_rates: cur,
            comment_rates: '',
            checkbox_rates: '',
            date_rates: `${hours}:${min} / ${day}.${month}.${year}`
        })

        this.showJournal()
    }
    openRatesOnRouteBlock() {

        let val = $(`.list_route_conteiner`).attr('value')

        $(`.main_conteiner`).append(`<div class="rates_conteiner"></div>`)

        $(`.rates_conteiner`).append(`<div class="rates_background" onclick="${this.hideRatesBlock()}"></div>`)
        $(`.rates_conteiner`).append(`<div class="rates_block"></div>`)

        $(`.rates_block`).append(`<div class="rates_block"></div>`)
        $(`.rates_block`).append(`<div class="rates_item"></div>`)

        $(`.rates_item`).append(`<div class="recomm_rates__header rates_header"></div>`)
        $(`.recomm_rates__header`).append(`<p>Рекомендованная ставка</p>`)

        $(`.rates_item`).append(`<div class="recomm_rates__table_${val} rates_table"></div>`)

        $(`.rates_block`).append(`<div class="hor_line"></div>`)

        //Ставка оперативного отдела
        $(`.rates_block`).append(`<div class="car_rates_item"></div>`)
        $(`.car_rates_item`).append(`<div class="carrier_rates__header rates_header"></div>`)
        $(`.carrier_rates__header`).append(`<p>Ставки перевозчиков</p>`)

        $(`.car_rates_item`).append(`<div class="carrier_rates__table rates_table"></div>`)
        $(`.car_rates_item`).append(`<div class="carrier_rates__edit_${val} rates_edit_block">`)

        $(`.carrier_rates__edit_${val}`).append(`<input type="text" placeholder="сумма" id="summ_carr_rate">`)
        $(`.carrier_rates__edit_${val}`).append(`<select name="" id="carr_currency_list_${val}"><option value="USD">USD</option><option value="EUR">EUR</option></select>`)

        $(`.carrier_rates__edit_${val}`).append(`<button class="btn" onclick="carrierRatesTable.addNewRate('summ_carr_rate', 'carr_currency_list')">Добавить ставку</button>`)
    }
    hideRatesBlock() {
        $('.name_block').css({ 'display': 'block' })
        $('.rates_conteiner').css({ 'display': 'none' })
    }
}