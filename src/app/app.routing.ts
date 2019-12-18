import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from 'src/login/login.component';


const appRoute:Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ProductDetailsComponent }]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRouting {}