// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import {SHOP_DIRECTIVES} from './directives';
import {SHOP_PROVIDERS} from './providers';
import {SHOP_PIPES} from './pipes';
import {SHOP_COMPONENTS} from './routes';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {SHARED_IMPORTS} from '../shared/imports';

export * from './directives';
export * from './providers';
export * from './pipes';
export * from './routes';

@NgModule({
    imports: [
        ...SHARED_IMPORTS,
        SharedModule
    ],
    providers: SHOP_PROVIDERS,
    declarations: [
        ...SHOP_DIRECTIVES,
        ...SHOP_PIPES,
        ...SHOP_COMPONENTS
    ]
})
export class ShopModule {}
