// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import {provideRoutes} from '@angular/router';
import {ADMIN_ROUTES} from '../routes';
export const ADMIN_PROVIDERS = [
    provideRoutes(ADMIN_ROUTES)
];
