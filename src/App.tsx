import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar } from './components/Calendar';
import { AppointmentForm } from './components/AppointmentForm';
import { ClientHeader } from './components/ClientHeader';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import type { AppointmentFormData, Client } from './types';

// Simulated API call - replace with actual API endpoint
const fetchClientData = async (): Promise<Client> => {
  return {
    id: '1',
    name: 'Acme Auto Service',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5Yl8Y17JjFZnFEySotX7S97ZMgKzkbqEOg&s?w=128&h=128&fit=crop',
    description: 'Leading provider of automotive services with over 20 years of experience. Trust our certified mechanics for all your vehicle maintenance and repair needs.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1674375344746-2f27c4720440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600',
    address: {
      street: '123 Auto Service Lane',
      city: 'Ottawa',
      state: 'ON',
      zip: 'K1P 1J1'
    },
    availableDates: [
      '2024-11-26',
      '2024-11-27',
      '2024-11-28',
      '2024-12-01',
      '2024-12-02',
    ],
    availableTimeSlots: [
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM',
    ],
    reviews: [
      {
        id: '1',
        author: 'John Smith',
        rating: 5,
        comment: 'Excellent service! They fixed my car quickly and the price was very reasonable.',
        date: '2024-02-15',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop'
      },
      {
        id: '2',
        author: 'Sarah Johnson',
        rating: 5,
        comment: 'Very professional team. They explained everything clearly and did a great job.',
        date: '2024-02-10',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop'
      },
      {
        id: '3',
        author: 'Mike Wilson',
        rating: 4,
        comment: 'Reliable service and friendly staff. Would recommend to others.',
        date: '2024-02-05',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop'
      }
    ]
  };
};

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { data: client, isLoading, error } = useQuery({
    queryKey: ['clientData'],
    queryFn: fetchClientData,
  });

  const handleAppointmentSubmit = async (data: AppointmentFormData) => {
    console.log('Appointment data:', { ...data, date: selectedDate });
    alert('Appointment scheduled successfully!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
      </div>
    );
  }

  if (error || !client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading client data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientHeader client={client} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Services />
        
        <div className="mt-16">
          <Achievements />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select Appointment Date</h2>
            <Calendar
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              availableDates={client.availableDates}
            />
          </div>
          
          {selectedDate && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
              <AppointmentForm
                selectedDate={selectedDate}
                availableTimeSlots={client.availableTimeSlots}
                onSubmit={handleAppointmentSubmit}
              />
            </div>
          )}
        </div>

        <div className="mt-16">
          <Reviews reviews={client.reviews} />
        </div>

        <div className="mt-16">
          <LocationSection address={client.address} />
        </div>
      </main>
    </div>
  );
}

export default App;