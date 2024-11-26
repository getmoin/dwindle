// FILE: App.tsx
import { useState, useEffect } from 'react';
import { AppointmentForm } from './components/AppointmentForm';
import { ClientHeader } from './components/ClientHeader';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { fetchClientData } from './api';
import { Calendar } from './components/Calendar';
import type { Client } from './types';


const App: React.FC = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const getClientData = async () => {
      try {
        const data = await fetchClientData();
        setClient(data);
      } catch (err) {
        setError("err");
      } finally {
        setLoading(false);
      }
    };

    getClientData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!client) {
    return <div>No client data available</div>;
  }

  const handleAppointmentSubmit = (formData: any) => {
    console.log('Appointment submitted:', formData);
  };

  return (
      <div className="container mx-auto p-4">
        <ClientHeader client={client} />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white centre shadow-lg border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 centre">Select Appointment Date</h2>
            <Calendar
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              availableDates={client.availableDates}
            />
          </div>
          {selectedDate && (
            <div className="p-4 bg-white shadow-lg border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
              <AppointmentForm
                selectedDate={selectedDate}
                availableTimeSlots={client.availableTimeSlots}
                onSubmit={handleAppointmentSubmit}
              />
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-white shadow-lg border rounded-lg">
          <Services />
        </div>
        <div className="mt-8 p-4 bg-white shadow-lg border rounded-lg">
          <Achievements />
        </div>
        <div className="mt-8 p-4 bg-white shadow-lg border rounded-lg">
          <Reviews reviews={client.reviews} />
        </div>
        <div className="mt-8 p-4 bg-white shadow-lg border rounded-lg">
          <LocationSection address={client.address} />
        </div>
      </div>
  );
};

export default App;