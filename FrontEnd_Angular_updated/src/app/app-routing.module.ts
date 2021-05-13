import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracinglistComponent } from './tracinglist/tracinglist.component';
import { TracingaddComponent } from './tracingadd/tracingadd.component';
import { OutingComponent } from './outing/outing.component';
import { OutingaddComponent } from './outingadd/outingadd.component';
import { OutingupdateComponent } from './outingupdate/outingupdate.component';
import { PermissionComponent } from './permission/permission.component';
import { PermissionaddComponent } from './permissionadd/permissionadd.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'tracinglist',
        component: TracinglistComponent
    },
    {
        path: 'tracingadd',
        component: TracingaddComponent
    },
    // {
    //     path: 'tracingupdate/:id',
    //     component: TracingupdateComponent
    // },
    {
        path: 'outing',
        component: OutingComponent
    },
    {
        path: 'outingadd',
        component: OutingaddComponent
    },
    {
        path: 'outingupdate/:id',
        component: OutingupdateComponent
    },
    {
        path: 'permission',
        component: PermissionComponent
    },
    {
        path: 'permissionadd',
        component: PermissionaddComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
