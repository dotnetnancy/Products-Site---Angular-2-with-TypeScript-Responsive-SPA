import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Products',
        icon: 'glyphicon-fire',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Free Weights',
                        icon: 'glyphicon-fire',
                        route: '/authenticated/product-detail/3/reload',
                        submenu: null
                    },
                    {
                        text: 'Barbell',
                        icon: 'glyphicon-fire',
                        route: '/authenticated/product-detail/9/reload',
                        submenu: null
                    },
                    {
                        text: 'Straps',
                        icon: 'glyphicon-fire',
                        route: '/authenticated/product-detail/11/reload',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3 Items',
                icon: 'glyphicon-fire',
                route: '/authenticated/product-list/3',
                submenu: null
            },
            {
                text: 'Top 10 Items',
                icon: 'glyphicon-fire',
                route: '/authenticated/product-list/10',
                submenu: null
            },
            {
                text: 'All Items',
                icon: 'glyphicon-fire',
                route: '/authenticated/product-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Product Maint',
                icon: 'glyphicon-th-list',
                route: '/authenticated/product-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: '/authenticated/settings',
                submenu: null
            }
        ]
    }
];
