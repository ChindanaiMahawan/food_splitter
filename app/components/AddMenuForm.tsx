"use client";
import { useState } from "react";
type Props = {
    onAdd:(name:string, price:number)=>void;
};  

export default function AddMenuForm({onAdd}:Props) {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const handleSubmit = () => {
        onAdd(name, parseFloat(price));
        setName("");
        setPrice("");
    };

    return(
        <div className="flex gap-2 flex-wrap">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name of food" className="flex-1 min-w-32 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="price" className="w-28 border-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            <><button onClick={handleSubmit} className="bg-orange-500 text-white px-4 py-2 round-lg text-sm hover:bg-orange-600 transition">+ Add</button></>
        </div>
    );
}