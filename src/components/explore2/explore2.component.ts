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
  changeColor(event: any) {
    const slider = event.target;
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, skyblue ${value}%, #d3d3d3 ${value}%)`;
  }
}
