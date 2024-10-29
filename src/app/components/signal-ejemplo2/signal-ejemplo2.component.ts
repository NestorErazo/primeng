
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ejemplo2',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo2.component.html',
  styleUrl: './signal-ejemplo2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo2Component {
  nombre= signal('');

  updateName(nombre: string){
    this.nombre.set(nombre)
  }
}

