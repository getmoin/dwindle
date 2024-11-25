import { MapPin, Phone, Mail } from 'lucide-react';

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
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5978441004493!2d-75.7027851!3d45.4245293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0451a5bed41f%3A0x2007983353933798!2sParliament%20Hill!5e0!3m2!1sen!2sca!4v1625761234567!5m2!1sen!2sca";
  
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
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