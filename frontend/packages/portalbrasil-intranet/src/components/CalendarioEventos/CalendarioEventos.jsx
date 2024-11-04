import {
  Calendar as RACCalendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from 'react-aria-components';

const CalendarioEventos = (props) => {
  const { items } = props;
  const hasEvents = Object.keys(items);
  return (
    <div className={'calendarioEventos'}>
      <RACCalendar {...props}>
        <header>
          <Heading />
        </header>
        <CalendarGrid>
          {(date) => {
            const className =
              hasEvents.indexOf(date.toString()) > -1 ? 'hasEvents' : '';
            return (
              <CalendarCell
                date={date}
                className={`${className} react-aria-CalendarCell`}
              />
            );
          }}
        </CalendarGrid>
      </RACCalendar>
    </div>
  );
};

export default CalendarioEventos;
