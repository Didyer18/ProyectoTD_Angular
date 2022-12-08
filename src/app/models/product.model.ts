import { CategoryModel } from "./category.model"


export interface IProduct {

    id:number
    title:string
    price:number,
    description:string,
    images:string[]
    category:CategoryModel

}
