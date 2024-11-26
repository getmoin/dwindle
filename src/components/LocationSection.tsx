import { MapPin, Phone, Mail } from 'lucide-react';
import { fetchLocationData } from '../api/locationData';
import type { Location } from '../types';
import { useEffect, useState } from 'react';


interface LocationSectionProps {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export function LocationSection({ address }: LocationSectionProps) {
  // Using Parliament Hill, Ottawa as the sample location
  const [mapSrc, setMapSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocationData = async () => {
      try {
        const data = await fetchLocationData();
        setMapSrc(data.mapSrc);
      } catch (err) {
        setError("err");
      } finally {
        setLoading(false);
      }
    };

    getLocationData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!location || !mapSrc) {
    return <div>No location data available</div>;
  }

  return (
    <section className="bg-white rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-sky-500 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  {address.street}<br />
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-sky-500 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">(613) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-sky-500 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">contact@acmeauto.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p className="text-gray-600">8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p className="text-gray-600">9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p className="text-gray-600">Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}