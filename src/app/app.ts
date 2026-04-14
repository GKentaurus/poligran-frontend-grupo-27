import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceDetailCardComponent } from './components/service-detail-card/service-detail-card.component';
import { TestimonialSliderComponent } from './components/testimonial-slider/testimonial-slider.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    ServiceCardComponent,
    ServiceDetailCardComponent,
    TestimonialSliderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('poligran-frontend-grupo-27');
}
