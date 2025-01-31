import { ZoneEntity } from "./Location";
import { MeasurementType, MeasurementTypeEntity } from "./MeasurementType";
import { ProductTypeEntity } from "./ProductType";
import { SubcategoryEntity } from "./Subcategory";
export declare enum OfferType {
    Sale = 1,
    Lease = 2,
    Rental = 3
}
export declare const OfferTypeList: OfferType[];
export declare function getOfferTypeString(offerType: OfferType): string;
export declare enum Condition {
    New = 1,
    Used = 2
}
export declare const ConditionList: Condition[];
export declare function getConditionString(condition: Condition): string;
export declare enum Estratum {
    Zero = 1,
    One = 2,
    Two = 3,
    Three = 4,
    Four = 5,
    Five = 6,
    Six = 7
}
export declare const EstratumList: Estratum[];
export declare function getEstratumString(estratum: Estratum): string;
interface BaseProduct {
    id: number;
    name: string;
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
    measurementType: MeasurementType | null;
    measurementQuantity: number | null;
}
export interface NewProductWithCodeRequest {
    name: string;
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
export interface NewProductJustCode {
    name: string;
    code: string;
    subcategoryId: number;
}
export interface ProductWithoutCode extends BaseProduct {
    description: string | null;
    brand: string | null;
    measurementType: MeasurementType | null;
    measurementQuantity: number | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    offerType: OfferType | null;
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
    name: string;
    subcategoryId: number;
    description: string | null;
    brand: string | null;
    measurementTypeId: number | null;
    measurementQuantity: number | null;
    productTypeId: number | null;
    zoneId: number | null;
    offerType: OfferType | null;
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
export interface UpdateProductWithoutCodeRequest {
    name: string;
    description: string | null;
    brand: string | null;
    measurementTypeId: number | null;
    measurementQuantity: number | null;
    productTypeId: number | null;
    zoneId: number | null;
    offerType: OfferType | null;
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
export declare class UpdateProductWithoutCodeRequestEntity implements UpdateProductWithoutCodeRequest {
    name: string;
    description: string | null;
    brand: string | null;
    measurementTypeId: number | null;
    measurementQuantity: number | null;
    productTypeId: number | null;
    zoneId: number | null;
    offerType: OfferType | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
    constructor(name: string, description: string | null, brand: string | null, measurementTypeId: number | null, measurementQuantity: number | null, productTypeId: number | null, zoneId: number | null, offerType: OfferType | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export interface UpdateProductWithCodeRequest {
    id: number;
    description: string;
    brand: string;
    measurementId: number | null;
    measurementQuantity: number | null;
    market: string;
}
export declare class UpdateProductWithCodeRequestEntity {
    id: number;
    imgPath: string;
    description: string;
    brand: string;
    measurementId: number | null;
    measurementQuantity: number | null;
    market: string;
    constructor(id: number, imgPath: string, description: string, brand: string, measurementId: number | null, measurementQuantity: number | null, market: string);
}
export declare class ProductWithCodeEntity implements ProductWithCode {
    id: number;
    name: string;
    subcategory: SubcategoryEntity;
    gtin: string;
    description: string;
    brand: string;
    gpc: string;
    imgPath: string;
    quantity: string;
    measurement: string;
    market: string;
    measurementType: MeasurementTypeEntity | null;
    measurementQuantity: number | null;
    constructor(id: number, name: string, subcategory: SubcategoryEntity, gtin: string, description: string, brand: string, gpc: string, imgPath: string, quantity: string, measurement: string, market: string, measurementType: MeasurementTypeEntity | null, measurementQuantity: number | null);
}
export declare class ProductWithoutCodeEntity implements ProductWithoutCode {
    id: number;
    name: string;
    subcategory: SubcategoryEntity;
    imgPath: string;
    description: string | null;
    brand: string | null;
    measurementType: MeasurementTypeEntity | null;
    measurementQuantity: number | null;
    productType: ProductTypeEntity | null;
    zone: ZoneEntity | null;
    offerType: OfferType | null;
    area: number | null;
    condition: Condition | null;
    stratum: Estratum | null;
    antiquity: number | null;
    bathrooms: number | null;
    rooms: number | null;
    parkingLots: number | null;
    cylinderCapacity: number | null;
    mileage: number | null;
    constructor(id: number, name: string, subcategory: SubcategoryEntity, imgPath: string, description: string | null, brand: string | null, measurementType: MeasurementTypeEntity | null, measurementQuantity: number | null, productType: ProductTypeEntity | null, zone: ZoneEntity | null, offerType: OfferType | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export {};
