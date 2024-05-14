import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExploreComponent } from '../components/explore/explore.component';
import { PlayVoiceComponent } from '../components/play-voice/play-voice.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ImmerseComponent } from '../components/immerse/immerse.component';
import { CommonModule } from '@angular/common'; 
import { CorporateComponent } from '../components/corporate/corporate.component';
import { TexttospeachComponent } from '../components/texttospeach/texttospeach.component';
import { FqaComponent } from '../components/fqa/fqa.component';
import { Explore2Component } from '../components/explore2/explore2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreComponent, PlayVoiceComponent, ExperienceComponent, ImmerseComponent, 
            CommonModule, CorporateComponent, TexttospeachComponent, FqaComponent, Explore2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SEO';
  
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
      this.navbarfixed = true;
  }
}
