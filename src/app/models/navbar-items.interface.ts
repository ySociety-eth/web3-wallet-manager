export interface SidebarSections {
    label: string;
    collapsed: boolean;
    items: SidebarItem[];
}

export interface SidebarItem {
    name: string;
    icon: {
        active: string;
        inactive: string;
    }
    route: string;
}