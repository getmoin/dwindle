import { Calendar as CalendarIcon } from 'lucide-react';
import { Client } from '../types';

interface ClientHeaderProps {
  client: Client;
}

export function ClientHeader({ client }: ClientHeaderProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0">
        <img
          src={client.heroImage}
          alt={`${client.name} hero`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="flex items-center space-x-6">
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="h-20 w-20 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">{client.name}</h1>
            <div className="flex items-center mt-2 text-sky-300">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>Online Appointment Booking</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-lg text-gray-200 max-w-3xl">
          {client.description}
        </p>
      </div>
    </div>
  );
}