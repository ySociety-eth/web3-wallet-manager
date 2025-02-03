export interface DataTableColumn {
    label: string;
    property: string;
    useTemplate?: boolean;
    sort: 'ascending' | 'descending' | 'none' | 'unavailable';
    truncate?: 'middle' | [number, 'end'];
    copyToClipboard?: boolean;
}