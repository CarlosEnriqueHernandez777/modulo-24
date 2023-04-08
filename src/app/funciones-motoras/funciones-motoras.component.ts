import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-funciones-motoras',
  templateUrl: './funciones-motoras.component.html',
  styleUrls: ['./funciones-motoras.component.css']
})
export class FuncionesMotorasComponent {

  dato1: number | undefined;
dato2: number | undefined;
dato3: number | undefined;
dato4: number | undefined;
dato5: number | undefined;

guardarDatos() {
  console.log(`Dato 1: ${this.dato1}`);
  console.log(`Dato 2: ${this.dato2}`);
  console.log(`Dato 3: ${this.dato3}`);
  console.log(`Dato 4: ${this.dato4}`);
  console.log(`Dato 5: ${this.dato5}`);
}

}
