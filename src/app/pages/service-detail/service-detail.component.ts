import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { FavoritesService } from '../../services/favorites.service';
import { ServiceDetailCardComponent } from '../../components/service-detail-card/service-detail-card.component';
import { TestimonialSliderComponent } from '../../components/testimonial-slider/testimonial-slider.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, ServiceDetailCardComponent, TestimonialSliderComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceService.getServiceById(id).subscribe(service => {
        this.service = service;
        this.loading = false;
      });
    } else {
      this.router.navigate(['/services']);
    }
  }

  toggleFavorite(): void {
    if (this.service) {
      if (this.favoritesService.isFavorite(this.service.id)) {
        this.favoritesService.removeFromFavorites(this.service.id);
      } else {
        this.favoritesService.addToFavorites(this.service);
      }
    }
  }

  isFavorite(): boolean {
    return this.service ? this.favoritesService.isFavorite(this.service.id) : false;
  }
}
