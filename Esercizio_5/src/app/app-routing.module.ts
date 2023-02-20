
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },

    {
        path: 'customer',
        loadChildren: () => import('./customers/customers.module').then(x => x.CustomersModule)
    },
    {
        path: 'libri',
        loadChildren: () => import('./libri/libri.module').then(x => x.LibriModule)
    },

    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
