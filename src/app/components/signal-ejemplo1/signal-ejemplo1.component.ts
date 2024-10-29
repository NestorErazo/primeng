
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-signal-ejemplo1',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo1.component.html',
  styleUrl: './signal-ejemplo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalEjemplo1Component {
   contador = signal<number>(0);
  


   incrementarContador() {
    this.contador.update(conta=>conta+1);
    
   }
   decrementarContador() {
    this.contador.update(conta=>conta-1);
    
   }

}
