import { Routes } from '@angular/router';
import { Nabvar } from './modules/global/components/nabvar/nabvar';

export const routes: Routes = [
    {
        path: '',
        component: Nabvar,
        loadChildren: ()=> import('./rutas.module').then(m => m.RutasModule)
    }
];
