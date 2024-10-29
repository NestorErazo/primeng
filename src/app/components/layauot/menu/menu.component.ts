
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';



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
            icon: 'pi pi-home',
            routerLink: '/'
            },
          {
          label: 'Ejemplos',
          icon: 'pi pi-star'
          },
            {
            label: 'Ejemplos',
            icon: 'pi pi-search',
            items: [
            {
            label: 'Ejemplo 1',
            icon: 'pi pi-bolt',
            routerLink:'signal-ejemplo1'
           
          },
          {
            label: 'Ejemplo 2',
            icon: 'pi pi-bolt',
            routerLink:'signal-ejemplo2'
           
          },
          
          {
            label: 'Ejemplo 3',
            icon: 'pi pi-bolt',
            routerLink:'signal-ejemplo3'
           
          },
          {
            label: 'Ejemplo 4',
            icon: 'pi pi-bolt',
            routerLink:'signal-ejemplo4'          
          }
          ]}
        ]
      }
}

