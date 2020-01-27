export class RecomTable {
    constructor() {
        this.journalColW = {
            user_op: 120,
            summ_rates: 100,
            currency_rates: 100,
            comment_rates: 185,
            checkbox_rates: 90,
            date_rates: 120,
        }
        this.columnListRoute = [{
                headerName: 'accept',
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
            summ_rates: '1453',
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
        $(`#recom_rates_table_${val}`).remove()
        this.renderTable(val)
    }
    renderTable(val) {
        $(`.recomm_rates_table_${val}`).append(`<div id="recom_rates_table_${val}" style="height: 80px" class="list_rates__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#recom_rates_table_${val}`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}