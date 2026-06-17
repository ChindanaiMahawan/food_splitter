import {useState} from 'react';
import {Person, MenuItem, BillSummary} from '../types';

export function useFoodSplitter() {
    const [persons,setPersons] = useState<Person[]>([]);
    const [menuItems,setMenuItems] = useState<MenuItem[]>([]);

    const addPerson = (name:string) => {
        if(!name.trim()) return;
        const newPerson: Person = {
            id: crypto.randomUUID(),
            name: name.trim()
        };
        setPersons(prev => [...prev,newPerson]);
    };
    const removePerson = (id:string) =>{
        setPersons((prev) => prev.filter((p) => p.id !== id));
        setMenuItems((prev)=> prev.map((item)=>({...item, assignedTo: item.assignedTo.filter((pid)=> pid !== id)})));

    };
    const addMenuItem = (name:string,price:number) => {
        if(!name.trim() || price <= 0) return;
        const newItem : MenuItem = {
            id: crypto.randomUUID(),
            name:name.trim(),
            price,assignedTo:[],
        };
        setMenuItems(prev => [...prev,newItem]);
    };
    const removeMenuItem = (id:string) => {
        setMenuItems(prev => prev.filter((item) => item.id !== id));
    };
    const togglePersonInItem = (itemId:string, personId:string) => {
        setMenuItems((prev)=> prev.map((item)=> {
            if(item.id !== itemId) return item;
            const exits = item.assignedTo.includes(personId);
            return {
                ...item,
                assignedTo: exits ? item.assignedTo.filter((pid) => pid !== personId) : [...item.assignedTo, personId]
            };
        }));
    };
    const calculateSummary = (): BillSummary[] => {
        return persons.map((person)=> {
            const items: {name:string; share:number}[] = [];
            let total = 0;
            menuItems.forEach((item) => {
                if(item.assignedTo.includes(person.id)){
                    const share = item.price / item.assignedTo.length;
                    items.push({name: item.name, share});
                    total += share;
                }
            });
            return { personId: person.id, personName: person.name, total, items};
        });
    };
    const grandTotal = menuItems.reduce((sum, item) => sum + item.price, 0);

    return {persons,menuItems, grandTotal, addPerson, removePerson, addMenuItem, removeMenuItem, togglePersonInItem, calculateSummary};
};