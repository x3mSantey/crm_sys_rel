export class JournalInq {
    constructor(dataInq) {
        this.columnListInq = [{
                headerName: 'Названия запросов',
                field: 'name_inq',
                sortable: true
            },
            {
                headerName: 'Услуга',
                field: 'service_inq',
                sortable: true
            },
            {
                headerName: 'Реф номер',
                field: 'ref_number_inq',
                sortable: true
            },
            {
                headerName: 'Дата создания',
                field: 'date_creating_inq',
                sortable: true
            },
            {
                headerName: 'Статус',
                field: 'status_inq',
                sortable: true
            }
        ]
        this.rowDataListInq = dataInq
        this.gridOptions = {
            columnDefs: this.columnListInq,
            rowData: this.rowDataListInq,
            getRowStyle: (params) => {
                switch (params.data.status_inq) {
                    case 'В работе':
                        return { 'background-color': '#FFF2CC', color: '#000', 'border': '2px solid #D6B656' }
                    case 'Активный':
                        return { 'background-color': '#F8CECC', color: '#000', 'border': '2px solid #BF2119' }
                    case 'Не разобран':
                        return { 'background-color': '#D5E8D4', color: '#000', 'border': '2px solid #669900' }
                    case 'test':
                        return { 'background-color': '#fff', color: '#000', 'border': '2px solid #000' }
                }
            },
            rowHeight: 40,
            onRowDoubleClicked: function(params) { window.open('file://D:/PROJECTS/crm_sys_rel/page_inquiry/page_inquiry.html') },
            onGridReady: function(params) {
                params.api.sizeColumnsToFit();

                window.addEventListener('resize', function() {
                    setTimeout(function() {
                        params.api.sizeColumnsToFit();
                    })
                })
            }
        }
    }
    showJournalInq(id_conteiner) {
        $('.ag-theme-balham').remove()
        $(`#filter_text_table`).remove()
        this.renderJournalInq(id_conteiner)
        $(`.navigation_table`).append(`<input type="text" value="" id="filter_text_table" placeholder="Поиск" class="filter_table"/>`)
        $(`#filter_text_table`).on('input', () => { this.onFilterTextBoxChanged() })
    }
    renderJournalInq(id_conteiner) {
        $(id_conteiner).append('<div id="list_inq" class="list_inq__grid ag-theme-balham"></div>')
        let gridDiv = $('#list_inq')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    onFilterTextBoxChanged() {
        this.gridOptions.api.setQuickFilter($('#filter_text_table').val())
    }
}