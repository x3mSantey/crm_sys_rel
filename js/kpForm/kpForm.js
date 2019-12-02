export class KpForm {
    constructor() {
        this.columnListRoute = [
            {
                headerName: 'Маршрут',
                field: 'route',
                editable: true        
            },
            {
                headerName: 'Тип',
                field: 'type_carrier',
                editable: true
            },
            {
                headerName: 'Ставка фрахта',
                field: 'stavka_fraxta',
                editable: true
            },
        ]
        this.rowDataListRoute = [
                {
                    route: 'маршрут ....',
                    type_carrier: '....',
                    stavka_fraxta: 'u.....',
                }
        ]
        this.gridOptions = {
            columnDefs: this.columnListRoute,
            rowData: this.rowDataListRoute,
            rowHeight: 40
        }
    }
    showPriceKP() {
        $(`#price_kp_table`).remove()    
        this.renderPriceKP()
    }
    renderPriceKP() {
        $(`.price_table_block`).prepend(`<div id="price_kp_table" class="list_price_kp__grid ag-theme-balham"></div>`)
        let gridDiv = $(`#price_kp_table`)[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    createKP() {
        $('.comm_offer_conteiner').css({'display': 'block'})
        $('.name_block').css({'display': 'none'})
        $('.redct_span').css({'display': 'none'})
        kpForm.showPriceKP()
    }
    closeKP() {
        $('.comm_offer_conteiner').css({'display': 'none'})
        $('.name_block').css({'display': 'block'})
    }
    saveChanges() {
        let textarea = $('.comm_offer_block textarea')
        let inpt = $('.comm_offer_block input')

        textarea.each(function(el) {
            let text = $(textarea[el]).text()
            let name = $(textarea[el]).attr('name')
            
            $(`.${name}`).text(`•	${text}`)
            $(textarea[el]).css({'display': 'none'})
        })
        inpt.each(function(el) {
            let text = $(inpt[el]).val()
            let name = $(inpt[el]).attr('name')
            
            $(`.${name}`).text(`${text}`)
            $(inpt[el]).css({'display': 'none'})
        })
        
        $('.redct_span').css({'display': 'block'})
    }
    changeInfo() {
        let textarea = $('.comm_offer_block textarea')
        let inpt = $('.comm_offer_block input')

        textarea.each(function(el) {            
            $(textarea[el]).css({'display': 'block'})
        })
        inpt.each(function(el) {            
            $(inpt[el]).css({'display': 'block'})
        })

        $('.redct_span').css({'display': 'none'})
    }
    sendOnMail() {

    }
}