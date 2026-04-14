import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SERVICES_DATA } from '../../data/services-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.services = SERVICES_DATA;
  }

  toggleFavorite(service: Service): void {
    if (this.favoritesService.isFavorite(service.id)) {
      this.favoritesService.removeFromFavorites(service.id);
    } else {
      this.favoritesService.addToFavorites(service);
    }
  }

  isFavorite(serviceId: string): boolean {
    return this.favoritesService.isFavorite(serviceId);
  }

  navigateToDetail(serviceId: string): void {
    this.router.navigate(['/services', serviceId]);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
