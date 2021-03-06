// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import Shop from './Shop';
import ProductCart from '../../directives/product-cart';
import ProductList from '../../../shared/directives/product-list';
import ProductDetail from '../../directives/product-detail';
import Budget from '../../directives/budget';
import Orders from '../../directives/orders';
import Compare from '../../directives/compare';

/**
 * @see https://angular.io/docs/ts/latest/api/router/index/Route-interface.html
 * @type {*}
 */
const ROUTE = {
    path: 'shop',
    component: Shop,
    children: [
        {
            path: 'products',
            component: ProductList
        },
        {
            path: 'cart',
            component: ProductCart
        },
        {
            path: 'product/:productId',
            component: ProductDetail
        },
        {
            path: 'orders',
            component: Orders
        },
        {
            path: 'orders/:orderId',
            component: Orders
        },
        {
            path: 'budget',
            component: Budget
        },
        {
            path: 'compare/:products',
            component: Compare
        }
    ]
};

export default ROUTE;
