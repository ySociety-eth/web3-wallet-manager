
export interface DataTableColumn {
    label: string;
    property: string;
    useTemplate?: boolean;
    sort: 'ascending' | 'descending' | 'none' | 'unavailable';
    truncate?: 'middle' | [number, 'end'];
    copyToClipboard?: boolean;
    highlighData?: boolean;
    href?: (data: any) => string; //it should be called like this: href(data): `https://url.com/${data}`
    hrefTarget?: '_blank' | '_self';
}