import { Component, Input } from '@angular/core';
import { Testimonial } from '../../models/service.model';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.css'
})
export class TestimonialSliderComponent {
  @Input() testimonials: Testimonial[] = [];
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  getStars(rating: number): string[] {
    return Array(rating).fill('★');
  }
}
