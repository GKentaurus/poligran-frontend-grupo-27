export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  features: Feature[];
  testimonials: Testimonial[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  comment: string;
  rating: number;
  avatar?: string;
}
