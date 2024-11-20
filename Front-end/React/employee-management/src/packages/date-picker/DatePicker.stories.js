import React, { useState, Fragment } from 'react';

import DatePickerComponent from './src';
import { sizes } from '../theme';
import Spacer from '../spacer/lib';

export default {
  title: 'Components/Date Picker',
  component: DatePickerComponent
};

const today = new Date();

const oneMonthAgo = new Date().setMonth(today.getMonth() - 1);

const Template = (args) => {
  const [startDate, setStartDate] = useState(oneMonthAgo);
  const [endDate, setEndDate] = useState(today);
  const [value, setValue] = useState(today);
  const [time, setTime] = useState(today);

  return (
    <Fragment>
      Individual
      <div>
        <DatePickerComponent
          value={value}
          onChange={(date) => setValue(date)}
          maxDate={today}
          labelText="Pick a date"
          id="individualDate"
          {...args}
        />
      </div>
      Range pickers
      <div style={{ display: 'flex' }}>
        <DatePickerComponent
          value={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          maxDate={endDate || today}
          id="rangeStart"
          labelText="Starting date"
          {...args}
        />
        <Spacer itemWidth={sizes.xxLarge} />
        <DatePickerComponent
          value={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          id="rangeEnd"
          labelText="Ending date"
          {...args}
        />
      </div>
        Time picker
      <div>
        <DatePickerComponent
          value={time}
          onChange={(date) => setTime(date)}
          labelText="Pick a time"
          id="timeOnly"
          timePickerOnly={true}
          {...args}
        />
      </div>
    </Fragment>
  );
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  disabled: false,
  externalError: false,
  externalErrorText: 'Invalid Date',
  maxDate: today
};
