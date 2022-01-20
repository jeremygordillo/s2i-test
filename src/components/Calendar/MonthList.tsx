type MonthListProps = {
  onClick: (month: string) => void;
  months: string[];
};

const MonthList = ({ onClick, months }: MonthListProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full gap-2">
      {months.map((month) => (
        <button
          key={month}
          className="calendar-month"
          onClick={() => {
            onClick(month);
          }}
        >
          {month}
        </button>
      ))}
    </div>
  );
};

export default MonthList;
