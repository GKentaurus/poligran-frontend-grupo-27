import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() isFavorite = false;
  @Output() toggleFavorite = new EventEmitter<Service>();
  @Output() viewDetails = new EventEmitter<string>();
}
