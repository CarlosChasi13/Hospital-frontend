import { RouterModule, Routes } from '@angular/router';
import { Nabvar } from './modules/global/components/nabvar/nabvar';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Nabvar,
        loadChildren: ()=> import('./rutas.module').then(m => m.RutasModule)
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}