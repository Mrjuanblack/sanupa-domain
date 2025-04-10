import { ZoneEntity } from "./Location";
import { MeasurementType, MeasurementTypeEntity } from "./MeasurementType";
import { ProductTypeEntity } from "./ProductType";
import { SubcategoryEntity } from "./Subcategory";
import { SubcategoryBrandEntity } from "./Subcategory_Brand";
import { SubcategoryProductType } from "./Subcategory_ProductType";
export declare function getComplementaryInfo(quantityString: string, unitsString: string): string | null;
export declare function getQuantityBasedOnUnits(quantityString: string, unitsString: string): number | null;
export declare enum ProductState {
    PreCreated = 1,
    Created = 2,
    Verified = 3,
    Error = 4,
    Finalized = 5
}
export declare const ProductStateList: ProductState[];
export declare function getProductStateString(productState: ProductState): string;
export declare enum GS1_Unit {
    CM = "CMT",
    CMQ = "CMQ",
    GRM = "GRM",
    KG = "KGM",
    LBR = "LBR",
    LTR = "LTR",
    MTR = "MTR",
    MGM = "MGM",
    MLT = "MLT",
    MMT = "MMT",
    OZA = "OZA",
    ONZ = "ONZ",
    SET = "SET",
    H87 = "H87",
    PTN = "PTN",
    KT = "KT",
    G26 = "G26",
    EA = "EA",
    U_1N = "1N",
    UNDF = "-----"
}
export declare function parseStringToGS1_Unit(value: string): GS1_Unit;
export declare function isSingularUnit(value: GS1_Unit): boolean;
export declare function getGS1UnitString(unit: GS1_Unit): string;
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
    subcategory: SubcategoryEntity;
    imgPath: string;
    minImgPath: string;
}
export interface ProductWithCode extends BaseProduct {
    productState: ProductState;
    gtin: string;
    name: string;
    description: string;
    brand: string;
    gpc: string;
    quantity: string;
    measurement: string;
    market: string;
    s_productType: SubcategoryProductType | null;
    s_brand: SubcategoryBrandEntity | null;
    complementaryInfo: string | null;
    secondImgPath: string;
    thirdImgPath: string | null;
    codeImgPath: string | null;
    measurementType: MeasurementType | null;
    measurementQuantity: number | null;
}
export interface NewProductWithCodeRequest {
    subcategoryId: number;
    imgPath: string;
    gtin: string;
    name: string;
    description: string;
    brand: string;
    gpc: string;
    quantity: string;
    measurement: string;
    market: string;
    productTypeId: number | null;
    brandId: number | null;
    complementaryInfo: string | null;
}
export interface NewProductJustCode {
    code: string;
    subcategoryId: number;
}
export interface NewProduct_GS1 {
    code: string;
    subcategoryId: number;
    productTypeId: number;
    brandId: number;
    complementaryInfo: string | null;
    quantity: number | null;
    description: string;
}
export interface UpdateProduct_GS1 {
    productId: number;
    productTypeId: number;
    brandId: number;
    complementaryInfo: string | null;
    quantity: number | null;
    description: string;
}
export interface ProductWithoutCode extends BaseProduct {
    name: string;
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
    id: number;
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
    id: number;
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
    constructor(id: number, name: string, description: string | null, brand: string | null, measurementTypeId: number | null, measurementQuantity: number | null, productTypeId: number | null, zoneId: number | null, offerType: OfferType | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export interface UpdateProductWithCodeRequest {
    id: number;
    name: string;
    description: string;
    brand: string;
    measurementId: number | null;
    measurementQuantity: number | null;
}
export declare class UpdateProductWithCodeRequestEntity implements UpdateProductWithCodeRequest {
    id: number;
    imgPath: string;
    name: string;
    description: string;
    brand: string;
    measurementId: number | null;
    measurementQuantity: number | null;
    constructor(id: number, imgPath: string, name: string, description: string, brand: string, measurementId: number | null, measurementQuantity: number | null);
}
export declare class ProductWithCodeEntity implements ProductWithCode {
    id: number;
    subcategory: SubcategoryEntity;
    gtin: string;
    name: string;
    description: string;
    brand: string;
    gpc: string;
    s_productType: SubcategoryProductType | null;
    s_brand: SubcategoryBrandEntity | null;
    complementaryInfo: string | null;
    imgPath: string;
    minImgPath: string;
    secondImgPath: string;
    thirdImgPath: string | null;
    codeImgPath: string | null;
    quantity: string;
    measurement: string;
    market: string;
    measurementType: MeasurementTypeEntity | null;
    measurementQuantity: number | null;
    productState: ProductState;
    constructor(id: number, subcategory: SubcategoryEntity, gtin: string, name: string, description: string, brand: string, gpc: string, s_productType: SubcategoryProductType | null, s_brand: SubcategoryBrandEntity | null, complementaryInfo: string | null, imgPath: string, minImgPath: string, secondImgPath: string, thirdImgPath: string | null, codeImgPath: string | null, quantity: string, measurement: string, market: string, measurementType: MeasurementTypeEntity | null, measurementQuantity: number | null, productState: ProductState);
}
export declare class ProductWithoutCodeEntity implements ProductWithoutCode {
    id: number;
    name: string;
    subcategory: SubcategoryEntity;
    imgPath: string;
    minImgPath: string;
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
    constructor(id: number, name: string, subcategory: SubcategoryEntity, imgPath: string, minImgPath: string, description: string | null, brand: string | null, measurementType: MeasurementTypeEntity | null, measurementQuantity: number | null, productType: ProductTypeEntity | null, zone: ZoneEntity | null, offerType: OfferType | null, area: number | null, condition: Condition | null, stratum: Estratum | null, antiquity: number | null, bathrooms: number | null, rooms: number | null, parkingLots: number | null, cylinderCapacity: number | null, mileage: number | null);
}
export interface UrlUploadRequest {
    url: string;
}
export {};
