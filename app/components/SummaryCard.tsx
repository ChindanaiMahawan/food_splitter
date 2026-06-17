import { BillSummary } from "../types";

type Props = {
  summaries: BillSummary[];
  grandTotal: number;
};

export default function SummaryCard({ summaries, grandTotal }: Props) {
  return (
    <div className="space-y-3">
      {summaries.map((s) => (
        <div
          key={s.personId}
          className="border border-gray-700 rounded-xl p-4 bg-gray-800 shadow-md"
        >
          {/* ชื่อคน + ราคารวม */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-base font-bold text-white tracking-wide">
               {s.personName}
            </span>
            <span className="text-lg font-extrabold text-orange-400 bg-gray-700 px-3 py-1 rounded-lg">
              ฿{s.total.toFixed(2)}
            </span>
          </div>

          {/* เส้นคั่น */}
          <div className="border-t border-gray-600 mb-2" />

          {/* รายการอาหารย่อย */}
          <ul className="space-y-1">
            {s.items.map((item, i) => (
              <li
                key={i}
                className="flex justify-between text-sm text-gray-300 bg-gray-700 rounded-lg px-3 py-1.5"
              >
                <span> {item.name}</span>
                <span className="text-yellow-300 font-medium">
                  ฿{item.share.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* ยอดรวมทั้งหมด */}
      <div className="border border-orange-500 rounded-xl bg-gray-900 px-4 py-3 flex justify-between items-center">
        <span className="text-white font-bold text-base"> รวมทั้งหมด</span>
        <span className="text-orange-400 font-extrabold text-xl">
          ฿{grandTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
}