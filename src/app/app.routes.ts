import { Routes } from '@angular/router';
import { SignalEjemplo1Component } from './components/signal-ejemplo1/signal-ejemplo1.component';
import { SignalEjemplo2Component } from './components/signal-ejemplo2/signal-ejemplo2.component';

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
    }
    
];
