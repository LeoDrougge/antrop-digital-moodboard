import { useState } from 'react';
import './DateTimePicker.css';

export function DateTimePicker() {
  const [date, setDate] = useState({ day: '15', month: '03', year: '2024' });
  const [time, setTime] = useState({ hour: '14', minute: '30' });
  const [activeField, setActiveField] = useState(null);

  return (
    <div className="datetime-picker">
      <div className="datetime-picker__section">
        <div className="datetime-picker__label">Date</div>
        <div className="datetime-picker__inputs">
          <input
            type="text"
            className={`datetime-picker__input ${activeField === 'day' ? 'datetime-picker__input--active' : ''}`}
            value={date.day}
            onChange={(e) => setDate({ ...date, day: e.target.value })}
            onFocus={() => setActiveField('day')}
            onBlur={() => setActiveField(null)}
            maxLength={2}
          />
          <input
            type="text"
            className={`datetime-picker__input ${activeField === 'month' ? 'datetime-picker__input--active' : ''}`}
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
            onFocus={() => setActiveField('month')}
            onBlur={() => setActiveField(null)}
            maxLength={2}
          />
          <input
            type="text"
            className={`datetime-picker__input datetime-picker__input--year ${activeField === 'year' ? 'datetime-picker__input--active' : ''}`}
            value={date.year}
            onChange={(e) => setDate({ ...date, year: e.target.value })}
            onFocus={() => setActiveField('year')}
            onBlur={() => setActiveField(null)}
            maxLength={4}
          />
        </div>
      </div>
      <div className="datetime-picker__section">
        <div className="datetime-picker__label">Time</div>
        <div className="datetime-picker__inputs">
          <input
            type="text"
            className={`datetime-picker__input ${activeField === 'hour' ? 'datetime-picker__input--active' : ''}`}
            value={time.hour}
            onChange={(e) => setTime({ ...time, hour: e.target.value })}
            onFocus={() => setActiveField('hour')}
            onBlur={() => setActiveField(null)}
            maxLength={2}
          />
          <span className="datetime-picker__separator">:</span>
          <input
            type="text"
            className={`datetime-picker__input ${activeField === 'minute' ? 'datetime-picker__input--active' : ''}`}
            value={time.minute}
            onChange={(e) => setTime({ ...time, minute: e.target.value })}
            onFocus={() => setActiveField('minute')}
            onBlur={() => setActiveField(null)}
            maxLength={2}
          />
        </div>
      </div>
    </div>
  );
}

