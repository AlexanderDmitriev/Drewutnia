export type IDishesType = {
    id?:string,
    image: string,
    name:string,
    about:string,
    price:string
};

export type IDishesArray = {dishesList:IDishesType[]};