export interface Client {
  id: string;
  name: string;
  logo: string;
  description: string;
  heroImage: string;
  availableDates: string[];
  availableTimeSlots: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  services: Service[];
  achievements: Achievement[];
  reviews: Review[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Location {
  id: string;
  mapSrc: string;  
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  message: string;
}