export class RatesTable {
    constructor(carrierTable, recomTable) {
        this.carrierTable = carrierTable
        this.recomTable = recomTable
    }
    openRatesOnRouteBlock() {
        let val = $(`.list_route_conteiner`).attr('value')

        $('.name_block').css({ 'display': 'none' })

        $(`.main_conteiner`).append(`<div class="rates_conteiner"></div>`)

        $(`.rates_conteiner`).append(`<div class="rates_background"></div>`)
        $(`.rates_conteiner`).append(`<div class="rates_block"></div>`)

        $(`.rates_block`).append(`<div class="rates_item"></div>`)

        $(`.rates_item`).append(`<div class="recomm_rates__header rates_header"></div>`)
        $(`.recomm_rates__header`).append(`<p>Рекомендованная ставка</p>`)

        $(`.rates_item`).append(`<div class="recomm_rates_table_${val} rates_table"></div>`)

        $(`.rates_block`).append(`<div class="hor_line"></div>`)

        //Ставка оперативного отдела
        $(`.rates_block`).append(`<div class="car_rates_item"></div>`)
        $(`.car_rates_item`).append(`<div class="carrier_rates__header rates_header"></div>`)
        $(`.carrier_rates__header`).append(`<p>Ставки перевозчиков</p>`)

        $(`.car_rates_item`).append(`<div class="carrier_rates_table_${val} rates_table"></div>`)
        $(`.car_rates_item`).append(`<div class="carrier_rates__edit_${val} rates_edit_block">`)

        $(`.carrier_rates__edit_${val}`).append(`<input type="text" placeholder="сумма" id="summ_carr_rate_${val}">`)
        $(`.carrier_rates__edit_${val}`).append(`<select name="" id="carr_currency_list_${val}"><option value="USD">USD</option><option value="EUR">EUR</option></select>`)
        $(`.carrier_rates__edit_${val}`).append(`<button class="btn" id="add_carrier_rate_${val}">Добавить ставку</button>`)

        this.carrierTable.showTable(val)
        this.recomTable.showTable(val)

        $(`.rates_background`).on('click', () => { this.hideRatesBlock() })
        $(`#add_carrier_rate_${val}`).on('click', () => { this.carrierTable.addNewRatePoint(val) })
    }
    hideRatesBlock() {
        $('.rates_conteiner').remove()
        $('.name_block').css({ 'display': 'block' })
    }
}