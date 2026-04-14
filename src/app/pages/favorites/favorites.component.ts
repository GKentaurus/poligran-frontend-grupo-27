import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites: Service[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  removeFromFavorites(serviceId: string): void {
    this.favoritesService.removeFromFavorites(serviceId);
  }

  navigateToDetail(serviceId: string): void {
    this.router.navigate(['/services', serviceId]);
  }
}
