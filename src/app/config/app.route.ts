import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "../login/index";
import { RegisterComponent } from "../login/index";
import { DashboardComponent } from "../dashboard/index";

export const APP_ROUTES: Routes = [{
    path: '',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
}
    , {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard',
    },    
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
}];

export const BASEAPI_URL: string = "http://arjunmeherwade.svarks.com/admin/api/";
