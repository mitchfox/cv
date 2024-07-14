import React from 'react';

interface Skill {
  name: string;
  value: number;
}

interface BarChartProps {
  name: string;
  data: Skill[];
}

const BarChart: React.FC<BarChartProps> = ({ name, data }) => {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
      <div className="font-aspekta font-[650] mb-3">{name}</div>
      <ul className="space-y-3">
        {data.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="grow inline-flex mr-1 truncate">
              <span className="text-sky-500 mr-2">—</span>
              <a className="font-aspekta font-[650] text-sm truncate">{item.name}</a>
            </div>
            <div
              className="shrink-0 relative w-20 h-1 bg-slate-200 dark:bg-slate-700"
              role="progressbar"
              aria-valuenow={item.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute inset-0 bg-sky-500"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BarChart;
