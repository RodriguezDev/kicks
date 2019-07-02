export class Product {
    public title: string;
    public description: string;
    public price: number;
    public brand: string;
    public imagePath: string;
    public sizes: Array<string>;

    constructor(newTitle: string, newDesc: string, newPrice: number, newBrand: string, newImage: string, newSizes: Array<string>) {
        this.title = newTitle;
        this.description = newDesc;
        this.price = newPrice;
        this.brand = newBrand;
        this.imagePath = newImage;
        this.sizes = newSizes;
    }
}