import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component'

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const appRouterModule = RouterModule.forRoot(routes, { useHash: false });
