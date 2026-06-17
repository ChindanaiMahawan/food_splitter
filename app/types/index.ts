export type Person = {
    id: string;
    name: string;
};

export type MenuItem = {
    id : string;
    name : string;
    price : number;
    assignedTo : string[];
};

export type BillSummary = {
    personId : string;
    personName : string;
    total : number;
    items:{name:string; share:number}[];
};
