
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SignalEjemplo1Component } from '../../signal-ejemplo1/signal-ejemplo1.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
        items: MenuItem[] | undefined;

          ngOnInit() {
            this.items = [
            {
            label: 'Home',
            icon: 'pi pi-home'
            },
          {
          label: 'Features',
          icon: 'pi pi-star'
          },
            {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
            {
            label: 'Ejemplo 1',
            icon: 'pi pi-bolt',
            routerLink:'signal-SignalEjemplo1'
           
          },
          {
            label: 'Ejemplo 2',
            icon: 'pi pi-bolt',
            routerLink:'signal-SignalEjemplo2'
           
          },

            {
          label: 'Blocks',
          icon: 'pi pi-server'
          },
          {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
          },
          {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
          {
          label: 'Apollo',
          icon: 'pi pi-palette'
          },
          {
          label: 'Ultima',
          icon: 'pi pi-palette'
          }   ]
          }   ] },
          {
          label: 'Contact',
          icon: 'pi pi-envelope'
      }   ]
      }
}

