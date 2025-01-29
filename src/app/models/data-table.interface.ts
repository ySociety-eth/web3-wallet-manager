export interface DataTableColumn {
    label: string;
    property: string;
    sort: 'ascending' | 'descending' | 'none' | 'unavailable'
}