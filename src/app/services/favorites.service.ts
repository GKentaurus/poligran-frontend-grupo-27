import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'favorites';
  private favoritesSubject = new BehaviorSubject<Service[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.favoritesSubject.next(JSON.parse(stored));
    }
  }

  private saveFavorites(favorites: Service[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  addToFavorites(service: Service): void {
    const current = this.favoritesSubject.value;
    if (!current.find(s => s.id === service.id)) {
      this.saveFavorites([...current, service]);
    }
  }

  removeFromFavorites(serviceId: string): void {
    const current = this.favoritesSubject.value;
    this.saveFavorites(current.filter(s => s.id !== serviceId));
  }

  isFavorite(serviceId: string): boolean {
    return this.favoritesSubject.value.some(s => s.id === serviceId);
  }

  getFavorites(): Observable<Service[]> {
    return this.favorites$;
  }

  getFavoritesValue(): Service[] {
    return this.favoritesSubject.value;
  }
}
