import { CategoryEntity } from "./Category";
export interface Subcategory {
    id: number;
    category: CategoryEntity;
    name: string;
    imgPath: string | null;
    usesCode: boolean;
    active: boolean;
    description: boolean;
    brand: boolean;
    measurement: boolean;
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
    description: boolean;
    brand: boolean;
    measurement: boolean;
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
export declare class SubcategoryEntity implements Subcategory {
    id: number;
    category: CategoryEntity;
    name: string;
    imgPath: string | null;
    usesCode: boolean;
    active: boolean;
    description: boolean;
    brand: boolean;
    measurement: boolean;
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
    constructor(id: number, category: CategoryEntity, name: string, imgPath: string | null, usesCode: boolean, active: boolean, description: boolean, brand: boolean, measurement: boolean, productType: boolean, zone: boolean, offerType: boolean, area: boolean, condition: boolean, stratum: boolean, antiquity: boolean, bathrooms: boolean, rooms: boolean, parkingLots: boolean, cylinderCapacity: boolean, mileage: boolean);
}
