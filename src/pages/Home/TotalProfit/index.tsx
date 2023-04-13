import ChevronDown from "assets/chevron_down.svg";
import TotalProfitChart from "assets/Charts/totalprofit_chart.svg";
import ReportChart from "assets/Charts/report_chart.svg";

const TotalProfit = () => {
  return (
    <div className="bg-sec flex pt-5 rounded-md">
      <div className="flex flex-col gap-9 pb-6 border-r border-[#2E4B85] px-5 -mt-5">
        <div className="flex justify-between pt-5">
          <div className="text-white font-bold">Total profit</div>
          <div className="flex gap-6 text-sm text-[#828282]">
            <div className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] rounded-full bg-accg" />
              Earning
            </div>
            <div className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] rounded-full bg-acco" />
              Expense
            </div>
          </div>
        </div>
        <img
          src={TotalProfitChart}
          alt="Total profit chart"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center basis-2/6 mx-auto">
        <div className="flex gap-2 py-1 px-2 text-accg text-xs font-semibold border border-accg rounded-[5px] cursor-pointer">
          2023 <img src={ChevronDown} alt="Chevron down" />
        </div>
        <div className="text-3xl font-bold text-white mt-[60px]">$842.98</div>
        <div className="text-xs font-semibold text-[#828282] mt-3">
          Latest Month Balance $426.20k
        </div>
        <div className="flex w-full justify-end my-3 px-4">
          <img
            src={ChevronDown}
            alt="Chevron down"
            className="cursor-pointer"
          />
        </div>
        <img src={ReportChart} alt="Report chart" className="cursor-pointer" />
        <button
          type="button"
          className="mt-12 bg-accg rounded-[5px] py-2 px-5 text-sm font-bold text-white"
        >
          View Report
        </button>
      </div>
    </div>
  );
};

export default TotalProfit;
