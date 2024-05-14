import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-explore2',
  standalone: true,
  imports: [FooterComponent,],
  templateUrl: './explore2.component.html',
  styleUrl: './explore2.component.css'
})
export class Explore2Component {
  updateRangeBackground(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = (Number(inputElement.value) - Number(inputElement.min)) / (Number(inputElement.max) - Number(inputElement.min)) * 100;
    inputElement.style.background = `linear-gradient(to right, skyblue ${value}%, #c6c2c2 ${value}%)`;
  }
}
