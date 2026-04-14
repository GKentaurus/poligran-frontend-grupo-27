import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import { FavoritesService } from '../../services/favorites.service';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
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
