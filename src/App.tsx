import { endOfMonth, format, getDay, isToday, startOfMonth } from "date-fns";
import { useLilius } from "use-lilius";
import Header from "./components/Header";
import "./styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const {
    calendar,
    inRange,
    isSelected,
    toggle,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
  } = useLilius();

  return (
    <div className="w-96 m-auto h-screen p-2 pt-6">
      <Header />
      <div className="flex items-center justify-between mt-8">
        <button className="" onClick={viewPreviousMonth}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="flex-grow">{format(viewing, "MMMM yyyy")}</button>
        <button className="" onClick={viewNextMonth}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        {calendar[0][0].map((day) => (
          <button key={`${day}`} className="w-10 h-10">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][getDay(day)]}
          </button>
        ))}
      </div>

      {calendar[0].map((week) => (
        <div
          className="flex flex-nowrap items-center justify-between"
          key={`week-${week[0]}`}
        >
          {week.map((day) => (
            <div
              data-in-range={inRange(
                day,
                startOfMonth(viewing),
                endOfMonth(viewing)
              )}
              data-selected={isSelected(day)}
              data-today={isToday(day)}
              key={`${day}`}
              onClick={() => toggle(day, true)}
              className="w-10 text-center"
            >
              <span>{format(day, "dd")}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
