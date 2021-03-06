// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import {ADMIN_DIRECTIVES} from './directives';
import {ADMIN_PROVIDERS} from './providers';
import {ADMIN_PIPES} from './pipes';
import {ADMIN_COMPONENTS} from './routes';
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
    providers: ADMIN_PROVIDERS,
    declarations: [
        ...ADMIN_DIRECTIVES,
        ...ADMIN_PIPES,
        ...ADMIN_COMPONENTS
    ]
})
export class AdminModule {}
