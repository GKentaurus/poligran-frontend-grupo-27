import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models/service.model';
import { SERVICES_DATA } from '../data/services-data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getServices(): Observable<Service[]> {
    return of(SERVICES_DATA);
  }

  getServiceById(id: string): Observable<Service | undefined> {
    const service = SERVICES_DATA.find(s => s.id === id);
    return of(service);
  }
}
