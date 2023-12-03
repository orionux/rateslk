interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}
export interface Rates {
    [x: string]: any;
    [x: string]: any;
    title: string;
    sellRate: number;
    buyRate: number;
    mainImage: Image;
  }