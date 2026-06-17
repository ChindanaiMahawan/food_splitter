import { MenuItem, Person } from "../types";

type Props = {
  item: MenuItem;
  persons: Person[];
  onToggle: (itemId: string, personId: string) => void;
  onRemove: (itemId: string) => void;
};

export default function MenuItemCard({ item, persons, onToggle, onRemove }: Props) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{item.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-semibold">฿{item.price}</span>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-400 hover:text-red-600 text-xs"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {persons.map((person) => {
          const selected = item.assignedTo.includes(person.id);
          return (
            <button
              key={person.id}
              onClick={() => onToggle(item.id, person.id)}
              className={`px-3 py-1 rounded-full text-xs border transition ${
                selected
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {selected ? "✓" : "+"} {person.name}
            </button>
          );
        })}
      </div>

      {item.assignedTo.length > 0 && (
        <p className="text-xs text-gray-400 mt-2">
          หารกัน {item.assignedTo.length} คน = คนละ ฿
          {(item.price / item.assignedTo.length).toFixed(2)}
        </p>
      )}
    </div>
  );
}