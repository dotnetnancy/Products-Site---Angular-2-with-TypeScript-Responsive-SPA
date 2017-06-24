import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductMaintComponent } from './product-maint/product-maint.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard], 
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'product-list/:count', component: ProductListComponent },
          { path: 'product-detail/:id', component: ProductDetailComponent },
          { path: 'product-detail/:id/:operation', component: ProductDetailComponent },
          { path: 'product-maint', component: ProductMaintComponent },
          { path: 'settings', component: SettingsComponent }
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
