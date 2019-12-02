export class JournalInq {
    constructor(dataInq) {
        this.columnListInq = [
            {
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
                        return {'background-color': '#FFF2CC', color: '#000', 'border': '2px solid #D6B656'}
                    case 'Активный':
                        return {'background-color': '#F8CECC', color: '#000', 'border': '2px solid #BF2119'}
                    case 'Не разобран':
                        return {'background-color': '#D5E8D4', color: '#000', 'border': '2px solid #669900'}
                    case 'test':
                        return {'background-color': '#fff', color: '#000', 'border': '2px solid #000'}
                }
            },
            onRowDoubleClicked: function(params) {
                window.open('file://D:/PROJECTS/CRM_sys_rel/page_inquiry/page_inquiry.html')
            }
        }    
    }
    showJournalInq(id_conteiner) {
        $('.ag-theme-balham').remove() 
        this.renderJournalInq(id_conteiner)
    }
    renderJournalInq(id_conteiner) {
        $(id_conteiner).prepend('<div id="list_inq" class="list_inq__grid ag-theme-balham"></div>')
        let gridDiv = $('#list_inq')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
}