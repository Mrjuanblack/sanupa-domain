export interface Subcategory {
    id: number;
    categoryId: number;
    name: string;
    imgPath: string | null;
    usesCode: boolean;
    active: boolean;
    productType: boolean;
    zone: boolean;
    offerType: boolean;
    area: boolean;
    condition: boolean;
    stratum: boolean;
    antiquity: boolean;
    bathrooms: boolean;
    rooms: boolean;
    parkingLots: boolean;
    cylinderCapacity: boolean;
    mileage: boolean;
}
export interface NewSubcategoryRequest {
    categoryId: number;
    name: string;
    usesCode: boolean;
}
export declare class SubcategoryEntity implements Subcategory {
    id: number;
    categoryId: number;
    name: string;
    imgPath: string | null;
    usesCode: boolean;
    active: boolean;
    productType: boolean;
    zone: boolean;
    offerType: boolean;
    area: boolean;
    condition: boolean;
    stratum: boolean;
    antiquity: boolean;
    bathrooms: boolean;
    rooms: boolean;
    parkingLots: boolean;
    cylinderCapacity: boolean;
    mileage: boolean;
    constructor(id: number, categoryId: number, name: string, imgPath: string | null, usesCode: boolean, active: boolean, productType: boolean, zone: boolean, offerType: boolean, area: boolean, condition: boolean, stratum: boolean, antiquity: boolean, bathrooms: boolean, rooms: boolean, parkingLots: boolean, cylinderCapacity: boolean, mileage: boolean);
}
