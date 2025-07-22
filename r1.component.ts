import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-r1',
  imports: [UpperCasePipe],
  templateUrl: './r1.component.html',
  styleUrl: './r1.component.css'
})
export class R1Component {
 firstname:string=" raiskha";
 
}
