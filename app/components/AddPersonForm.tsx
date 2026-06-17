"use client";
import { useState } from "react";

type Props = {
    onAdd:(name:string)=>void;
};

export default function AddPersonForm({onAdd}:Props) {
    const [name,setName] = useState("");
    const handleSubmit = () => {
        onAdd(name);
        setName("");
    };
    return (
        <div className="flex gap-2">
            <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            onKeyDown={(e)=> {if(e.key === "Enter") handleSubmit()}}
            placeholder="Enter person's name"
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Add Person
            </button>
        </div>
    );
}