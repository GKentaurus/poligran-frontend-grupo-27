import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  title = 'Our Services';
  description = 'Discover our wide range of professional services';

  constructor(
    private serviceService: ServiceService,
    private favoritesService: FavoritesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe((data) => {
      this.services = data;
    });
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
}
