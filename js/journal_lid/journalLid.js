export class JournalLid {
    constructor (rowData) {
        this.columnListLid = [
            {
                headerName: 'Названия лидов',
                field: 'name_lid', 
                sortable: true
            },
            {
                headerName: 'Ответственный', 
                field: 'responsible_user_lid',  
                sortable: true
            },
            {
                headerName: 'Дата создания', 
                field: 'date_creating_lid', 
                sortable: true
            },
            {
                headerName: 'Статус', 
                field: 'status_lid',
                sortable: true
            },
            {
                headerName: 'Название компании', 
                field: 'name_comp',
                sortable: true
            },
            {
                headerName: 'Источник', 
                field: 'source_lid',
                sortable: true
            },
        ]
        this.rowDataListLid = rowData
        this.gridOptions = {
            columnDefs: this.columnListLid,
            rowData: this.rowDataListLid,
            getRowStyle: (params) => {
                switch (params.data.status_lid) {
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
                window.open('../../page_lid/page_lid.html')
            },
            onGridReady: function (params) {
                params.api.sizeColumnsToFit();
        
                window.addEventListener('resize', function() {
                  setTimeout(function() {
                    params.api.sizeColumnsToFit();
                  })
                })
            }
        }
    }
    showJournalLid(id_conteiner) {
        $('.ag-theme-balham').remove() 
        this.renderJournalLid(id_conteiner)
    }
    renderJournalLid(id_conteiner) {
        $(id_conteiner).append('<div id="list_lid" class="list_lid__grid ag-theme-balham"></div>')
        let gridDiv = $('#list_lid')[0]
        new agGrid.Grid(gridDiv, this.gridOptions)
    }
    showThisLid(info) {
        console.log(infoLid.lidInformation)
    }
}