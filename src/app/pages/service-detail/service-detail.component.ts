import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Service } from '../../models/service.model';
import { FavoritesService } from '../../services/favorites.service';
import { SERVICES_DATA } from '../../data/services-data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service = SERVICES_DATA.find(s => s.id === id);
      if (!this.service) {
        this.router.navigate(['/services']);
      }
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

  navigateToContact(): void {
    if (this.service) {
      this.router.navigate(['/contact'], { queryParams: { serviceId: this.service.id } });
    }
  }
}
