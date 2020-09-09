import React  from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

const Calendario = ({numberOfMonths, getInitialState,setGetInitialState}) => {

  numberOfMonths=3
  
  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, getInitialState);
    setGetInitialState(range)
  };
  const handleResetClick = () => {
    setGetInitialState({
      from: undefined,
      to: undefined
    });
  };
  
  const { from, to } = getInitialState;
  const modifiers = { start: from, end: to };

  console.log(getInitialState)
  
  return (
    <div className="RangeExample">
        <h3>Selecciona la fecha de publicación:</h3>
      <p>
        {!from && !to && "Please select the first day."}
        {from && !to && "Please select the last day."}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
        {from && to && (
          <button className="link" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </p>
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      <Helmet>
        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
      </Helmet>
    </div>
  );
};
export default Calendario;