import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Service } from '../../models/service.model';
import { SERVICES_DATA } from '../../data/services-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: Service[] = [];

  constructor(private router: Router) {
    this.services = SERVICES_DATA.slice(0, 5);
  }

  navigateToDetail(serviceId: string): void {
    this.router.navigate(['/services', serviceId]);
  }

  navigateToServices(): void {
    this.router.navigate(['/services']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
