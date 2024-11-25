import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  availableDates: string[];
}

export function Calendar({ selectedDate, onSelect, availableDates }: CalendarProps) {
  const availableDatesAsDate = availableDates.map(date => new Date(date));
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        disabled={[
          { before: new Date() },
          (date) => !availableDatesAsDate.some(
            availableDate => format(availableDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
          )
        ]}
        modifiers={{
          available: availableDatesAsDate
        }}
        modifiersStyles={{
          available: { fontWeight: 'bold', color: '#0ea5e9' }
        }}
        className="custom-calendar"
      />
    </div>
  );
}