import { Category } from "./category";

export class Product {
    constructor(
        public productId: number,
        public productName: string,
        public category: Category,
        public brand: string,
        public price: number
    ){}
}
