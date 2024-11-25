import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { AppointmentFormData } from '../types';
import { Clock, Mail, MessageSquare, Phone, User } from 'lucide-react';

interface AppointmentFormProps {
  selectedDate: Date;
  availableTimeSlots: string[];
  onSubmit: (data: AppointmentFormData) => void;
}

export function AppointmentForm({ selectedDate, availableTimeSlots, onSubmit }: AppointmentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Book Appointment for {format(selectedDate, 'MMMM d, yyyy')}</h3>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register('name', { required: 'Name is required' })}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Your Name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Email Address"
            type="email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Phone Number"
            type="tel"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>

        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            {...register('time', { required: 'Please select a time slot' })}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="">Select Time Slot</option>
            {availableTimeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            {...register('message')}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Additional Message (Optional)"
            rows={4}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-200"
      >
        Book Appointment
      </button>
    </form>
  );
}