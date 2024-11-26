import * as Icons from 'lucide-react';
import { Service } from '../types';
import { fetchServicesData } from '../api/servicesData';
import { useEffect, useState } from 'react';

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getServiceData = async () => {
      try {
        const data = await fetchServicesData();
        setServices(data);
      } catch (err) {
        setError("err");
      } finally {
        setLoading(false);
      }
    };

    getServiceData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!location || !services) {
    return <div>No Serivces data available</div>;
  }


  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((services) => {
          const IconComponent = Icons[services.icon as unknown as keyof typeof Icons] as React.ElementType; 
          return (
            <div key={services.id} className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-sky-100 rounded-lg">
                  <IconComponent className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{services.name}</h3>
                <p className="text-gray-600">{services.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}