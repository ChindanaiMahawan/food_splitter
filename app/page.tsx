"use client";
import { useState } from "react";
import { useFoodSplitter } from "./hooks/useFoodSplitter";
import AddPersonForm from "./components/AddPersonForm";
import AddMenuForm from "./components/AddMenuForm";
import MenuItemCard from "./components/MenuItemCard";
import SummaryCard from "./components/SummaryCard";

export default function Home() {
  const [tab, setTab] = useState<"setup" | "summary">("setup");
  const {
    persons, menuItems, grandTotal,
    addPerson, removePerson,
    addMenuItem, removeMenuItem,
    togglePersonInItem, calculateSummary,
  } = useFoodSplitter();

  return (
    <main className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-white font-bold text-center mb-6 text-xl">หารค่าอาหาร</h1>

        <div className="flex rounded-xl overflow-hidden border border-gray-700 mb-6">
          {(["setup", "summary"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 text-sm font-medium transition ${
                tab === t
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {t === "setup" ? "ตั้งค่าบิล" : "สรุปยอด"}
            </button>
          ))}
        </div>

        {tab === "setup" ? (
          <div className="space-y-6">
            <section className="bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700">
              <h2 className="text-white font-semibold mb-3">คนที่ร่วมกินด้วย</h2>
              <AddPersonForm onAdd={addPerson} />
              <div className="flex flex-wrap gap-2 mt-3">
                {persons.map((p) => (
                  <span
                    key={p.id}
                    className="flex items-center gap-1 bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {p.name}
                    <button onClick={() => removePerson(p.id)} className="hover:text-red-400">✕</button>
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700">
              <h2 className="text-white font-semibold mb-3">รายการอาหาร</h2>
              <AddMenuForm onAdd={addMenuItem} />
              <div className="mt-4 space-y-3">
                {menuItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    persons={persons}
                    onToggle={togglePersonInItem}
                    onRemove={removeMenuItem}
                  />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700">
            <h2 className="text-white font-semibold mb-4">สรุปยอดแต่ละคน</h2>
            <SummaryCard summaries={calculateSummary()} grandTotal={grandTotal} />
          </section>
        )}
      </div>
    </main>
  );
}