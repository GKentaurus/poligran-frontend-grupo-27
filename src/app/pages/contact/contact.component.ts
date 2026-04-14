import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../models/service.model';
import { SERVICES_DATA } from '../../data/services-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  services: Service[] = [];
  formSent = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.services = SERVICES_DATA;

    // Check if serviceId is passed in query params
    this.route.queryParams.subscribe(params => {
      if (params['serviceId']) {
        this.contactForm.patchValue({ 
          service: params['serviceId'],
          message: '¡Hola!\nQuisiera saber más información al respecto.\nPor favor contáctame.'
        });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      // Here you would typically send the form data to a backend
      this.contactForm.reset();
      this.submitted = false;
      this.formSent = true;
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get service() {
    return this.contactForm.get('service');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
