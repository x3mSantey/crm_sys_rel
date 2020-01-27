export class CarrierTable {
    constructor(recTable) {
        this.recTable = recTable
        this.journalColW = {
            user_op: 120,
            summ_rates: 100,
            currency_rates: 100,
            comment_rates: 185,
            checkbox_rates: 90,
            date_rates: 120,
        }
        this.columnTypes = {
            dateColumn: {}
        }
        this.columnListRoute = [{
                headerName: 'ok',
                field: 'checkbox_rates',
                width: this.journalColW.checkbox_rates,
                type: 'checkbox',
                checkboxSelection: true,
            },
            {
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
                headerName: 'Дата',
                field: 'date_rates',
                width: this.journalColW.date_rates,
            },
        ]
        this.rowDataListRoute = [{
            user_op: 'Иванов Иван',
            summ_rates: 124453,
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
    showTable(val) {
        $(`#carrier_rates_table_${val}`).remove()
        this.renderTable(val)
    }
    renderTable(val) {
        $(`.carrier_rates_table_${val}`).append(`<div id="carrier_rates_table_${val}" style="height: 350px" class="list_rates__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#carrier_rates_table_${val}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    addNewRatePoint(val) {
        let summ = $(`#summ_carr_rate_${val}`).val()
        let cur = $(`#carr_currency_list_${val} :selected`).val()
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
        $(`#summ_carr_rate_${val}`).val('')

        this.showTable(val)
        this.updateRecRate(val)
    }
    updateRecRate(val) {
        let middleRate = []
        let value = this.rowDataListRoute

        value.map((el) => {
            middleRate.push(el.summ_rates * 1)
        })
        let sum = 0

        let newArr = middleRate.map((a) => { sum += a })

        //Функция на изменение данных таблицы рекомендованной ставки
        this.recTable.rowDataListRoute.summ_rates = sum / middleRate.length

        this.recTable.showTable(val)

    }
}