
import { Routes } from '@angular/router';
import { SignalEjemplo1Component,
         SignalEjemplo2Component,
         SignalEjemplo3Component,
         SignalEjemplo4Component
     } from './components';

export const routes: Routes = [
    {
        path:'', 
        pathMatch: 'full',
        redirectTo: 'signal-ejemplo1'
    },
    {
        path: 'signal-ejemplo1',
        component: SignalEjemplo1Component
    },
    {
        path: 'signal-ejemplo2',
        component: SignalEjemplo2Component
    },
    {
        path: 'signal-ejemplo3',
        component: SignalEjemplo3Component
    },
    {
        path: 'signal-ejemplo4',
        component: SignalEjemplo4Component
    } 
];


