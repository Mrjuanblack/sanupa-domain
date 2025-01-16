import { ZoneEntity } from "./Location";
import { MeasurementWithDataEntity } from "./MeasurementType";
import { ProductTypeEntity } from "./ProductType";
import { SubcategoryEntity } from "./Subcategory";
export declare enum OfferType {
    Sale = 1,
    Lease = 2,
    Rental = 3
}
export declare enum Condition {
    New = 1,
    Used = 2
}
export declare enum Estratum {
    Zero = 1,
    One = 2,
    Two = 3,
    Three = 4,
    Four = 5,
    Five = 6,
    Six = 7
}
interface BaseProduct {
    id: number;
    subcategory: SubcategoryEntity;
    imgPath: string;
}
export interface ProductWithCode extends BaseProduct {
    gtin: string;
    description: string;
    brand: string;
    gpc: string;
    quantity: string;
    measurement: string;
    market: string;
    measurementAlt: MeasurementWithDataEntity | null;
}
export interface NewProductWithCodeRequest {
    subcategoryId: number;
    imgPath: string;
    gtin: string;
    description: string;
    brand: string;
    gpc: string;
    quantity: string;
    measurement: string;
    market: string;
}
export declare class NewProductWithCodeRequestEntity implements NewProductWithCodeRequest {
    subcategoryId: number;
    imgPath: string;
    gtin: string;
    description: string;
    brand: string;
    gpc: string;
    quantity: string;
    measurement: string;
    market: string;
    constructor(subcategoryId: number, imgPath: string, gtin: string, description: string, brand: string, gpc: string, quantity: string, measurement: string, market: string);
}
export interface ProductWithoutCode extends BaseProduct {
    description: string | null;
    brand: string | null;
    measurement: MeasurementWithDataEntity | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
}
export interface NewProductWithoutCodeRequest {
    subcategoryId: number;
    description: string | null;
    brand: string | null;
    measurement: MeasurementWithDataEntity | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
}
export declare class NewProductWithoutCodeRequestEntity implements NewProductWithoutCodeRequest {
    subcategoryId: number;
    description: string | null;
    brand: string | null;
    measurement: MeasurementWithDataEntity | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
    constructor(subcategoryId: number, description: string | null, brand: string | null, measurement: MeasurementWithDataEntity | null, productType: ProductTypeEntity | null, zone: ZoneEntity | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export declare class ProductWithCodeEntity implements ProductWithCode {
    id: number;
    subcategory: SubcategoryEntity;
    gtin: string;
    description: string;
    brand: string;
    gpc: string;
    imgPath: string;
    quantity: string;
    measurement: string;
    market: string;
    measurementAlt: MeasurementWithDataEntity | null;
    constructor(id: number, subcategory: SubcategoryEntity, gtin: string, description: string, brand: string, gpc: string, imgPath: string, quantity: string, measurement: string, market: string, measurementAlt: MeasurementWithDataEntity | null);
}
export declare class ProductWithoutCodeEntity implements ProductWithoutCode {
    id: number;
    subcategory: SubcategoryEntity;
    imgPath: string;
    description: string | null;
    brand: string | null;
    measurement: MeasurementWithDataEntity | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
    constructor(id: number, subcategory: SubcategoryEntity, imgPath: string, description: string | null, brand: string | null, measurement: MeasurementWithDataEntity | null, productType: ProductTypeEntity | null, zone: ZoneEntity | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export {};
