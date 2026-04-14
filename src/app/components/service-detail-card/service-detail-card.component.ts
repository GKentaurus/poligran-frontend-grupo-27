import { Component, Input } from '@angular/core';
import { Feature } from '../../models/service.model';

@Component({
  selector: 'app-service-detail-card',
  standalone: true,
  imports: [],
  templateUrl: './service-detail-card.component.html',
  styleUrl: './service-detail-card.component.css'
})
export class ServiceDetailCardComponent {
  @Input() feature!: Feature;
}
