import { GaugeCircle, Wrench, Car, Battery, Cog, Fuel, Hammer, Sparkles } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const services = [
  {
    id: '1',
    name: 'Oil Change',
    description: 'Professional oil change with synthetic oils',
    icon: GaugeCircle
  },
  {
    id: '2',
    name: 'Diagnostics',
    description: 'Computer diagnostics for all makes',
    icon: GaugeCircle
  },
  {
    id: '3',
    name: 'Brake Service',
    description: 'Complete brake inspection and repair',
    icon: Wrench
  },
  {
    id: '4',
    name: 'Tire Service',
    description: 'Rotation, balancing, and installation',
    icon: Car
  },
  {
    id: '5',
    name: 'Battery Service',
    description: 'Testing and replacement services',
    icon: Battery
  },
  {
    id: '6',
    name: 'Engine Repair',
    description: 'Complete engine diagnostics & repair',
    icon: Cog
  },
  {
    id: '7',
    name: 'Fuel System',
    description: 'Fuel system cleaning & maintenance',
    icon: Fuel
  },
  {
    id: '8',
    name: 'Body Work',
    description: 'Dent repair and body maintenance',
    icon: Hammer
  },
  {
    id: '9',
    name: 'Detailing',
    description: 'Interior and exterior detailing',
    icon: Sparkles
  }
];

export function Services() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-sky-100 rounded-lg">
                  <Icon className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}