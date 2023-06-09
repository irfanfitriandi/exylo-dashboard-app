import { useEffect, useState } from "react";

import ArrowDown from "assets/arrow_down.svg";
import DoughnutChart from "components/DoughnutChart";

const OPTION_TIME = [
  {
    label: "This Week",
  },
  {
    label: "Last Week",
  },
  {
    label: "2 Weeks ago",
  },
  {
    label: "Last Month",
  },
];

interface IEarnings {
  showDropdown: boolean;
  handleShowDropdown: () => void;
}

const Earnings = ({ showDropdown, handleShowDropdown }: IEarnings) => {
  const [optionTime, setOptionTime] = useState("This Week");
  const [sales, setSales] = useState(151);
  const [orders, setOrders] = useState(113);

  const data = {
    dataSales: [
      { name: "Non Sales", value: 200 - sales },
      { name: "Total Sales", value: sales },
    ],
    dataOrders: [
      { name: "Non Orders", value: 200 - orders },
      { name: "Total Orders", value: orders },
    ],
  };

  useEffect(() => {
    if (optionTime === "This Week") {
      setSales(151);
      setOrders(113);
    } else if (optionTime === "Last Week") {
      setSales(98);
      setOrders(90);
    } else if (optionTime === "2 Weeks ago") {
      setSales(60);
      setOrders(30);
    } else {
      setSales(180);
      setOrders(160);
    }
  }, [optionTime]);

  return (
    <div className="bg-sec flex justify-center gap-5 pt-5 px-5 rounded-md basis-[40%]">
      <div className="flex flex-col gap-6">
        <div className="text-white font-bold">Earnings</div>
        <DoughnutChart
          dataSales={data.dataSales}
          dataOrders={data.dataOrders}
        />
      </div>
      <div className="flex flex-col gap-7">
        <div
          onClick={handleShowDropdown}
          className="text-xs text-[#5C6CA5] flex flex-col pl-6 relative"
        >
          <div className="flex gap-2 cursor-pointer whitespace-nowrap">
            {optionTime} <img src={ArrowDown} alt="Arrow down" />
          </div>
          <div
            className={`absolute mt-5 bg-[#2E4B85] text-white flex flex-col rounded-md whitespace-nowrap ${
              !showDropdown && "hidden"
            }`}
          >
            {OPTION_TIME.map((data, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setOptionTime(data.label);
                }}
                className="cursor-pointer flex items-center justify-between gap-4 hover:bg-[#546B9B] px-[10px] py-[5px] first:rounded-t-md last:rounded-b-md first:pt-[10px] last:pb-[10px] ease-in duration-300"
              >
                {data.label}
                <span
                  className={`w-[5px] h-[15px] rounded-[4px] ${
                    optionTime === data.label ? "bg-[#1C243F]" : null
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-accg" />
          <div className="whitespace-nowrap">
            <div className="text-sm text-white">Total Sales</div>
            <div className="text-sm text-[#8A92A6]">{sales}K</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-acco" />
          <div className="whitespace-nowrap">
            <div className="text-sm text-white">Total Orders</div>
            <div className="text-sm text-[#8A92A6]">{orders}K</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
