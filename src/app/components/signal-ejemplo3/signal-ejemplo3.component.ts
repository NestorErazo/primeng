import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal-ejemplo3',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo3.component.html',
  styleUrl: './signal-ejemplo3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class SignalEjemplo3Component {
  contador =signal(0);
  doubleCount = computed( () => this.contador() + 2);
  
  incrementar(){
    this.contador.update(()=> this.contador()+1);
  }

}
