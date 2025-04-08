import { ZoneEntity } from "./Location"
import { MeasurementType, MeasurementTypeEntity } from "./MeasurementType"
import { ProductTypeEntity } from "./ProductType"
import { SubcategoryEntity } from "./Subcategory"
import { SubcategoryBrandEntity } from "./Subcategory_Brand";
import { SubcategoryProductType } from "./Subcategory_ProductType";

export enum OfferType {
    Sale = 1,
    Lease = 2,
    Rental = 3
}
export const OfferTypeList = Object.values(OfferType).filter(value => typeof value === 'number');
export function getOfferTypeString(offerType: OfferType): string {
    switch (offerType) {
        case OfferType.Sale:
            return "Venta";
        case OfferType.Lease:
            return "Arriendo";
        case OfferType.Rental:
            return "Alquiler";
    }
}

export enum Condition {
    New = 1,
    Used = 2
}
export const ConditionList = Object.values(Condition).filter(value => typeof value === 'number');
export function getConditionString(condition: Condition): string {
    switch (condition) {
        case Condition.New:
            return "Nuevo";
        case Condition.Used:
            return "Usado";
    }
}
export enum Estratum {
    Zero = 1,
    One = 2,
    Two = 3,
    Three = 4,
    Four = 5,
    Five = 6,
    Six = 7
}
export const EstratumList = Object.values(Estratum).filter(value => typeof value === 'number');
export function getEstratumString(estratum: Estratum): string {
    switch (estratum) {
        case Estratum.Zero:
            return "Estrato 0";
        case Estratum.One:
            return "Estrato 1";
        case Estratum.Two:
            return "Estrato 2";
        case Estratum.Three:
            return "Estrato 3";
        case Estratum.Four:
            return "Estrato 4";
        case Estratum.Five:
            return "Estrato 5";
        case Estratum.Six:
            return "Estrato 6";
    }
}

interface BaseProduct {
    id: number
    subcategory: SubcategoryEntity
    imgPath: string
    minImgPath: string
}
export interface ProductWithCode extends BaseProduct {
    verifiedByAdmin: boolean
    awaitingVerification: boolean
    //GS1 data
    gtin: string
    name: string
    description: string
    brand: string
    gpc: string
    quantity: string
    measurement: string
    market: string

    s_productType: SubcategoryProductType | null
    s_brand: SubcategoryBrandEntity | null
    complementaryInfo: string | null


    //Aditional Img
    secondImgPath: string
    thirdImgPath: string | null
    codeImgPath: string | null

    //Measurement data that will be used if the measurement and quantity data is updated
    measurementType: MeasurementType | null
    measurementQuantity: number | null
}
export interface NewProductWithCodeRequest {
    subcategoryId: number
    imgPath: string

    gtin: string
    name: string
    description: string
    brand: string
    gpc: string
    quantity: string
    measurement: string
    market: string

    productTypeId: number
    brandId: number
    complementaryInfo: string | null
}

export interface NewProductJustCode {
    code: string

    subcategoryId: number
}

export interface NewProduct_GS1 {
    code: string
    subcategoryId: number

    name: string
    description: string
}

export interface UpdateProduct_GS1 {
    productId: number

    name: string
    description: string
}

export interface ProductWithoutCode extends BaseProduct {
    name: string
    description: string | null
    brand: string | null
    measurementType: MeasurementType | null
    measurementQuantity: number | null
    productType: ProductTypeEntity | null
    zone: ZoneEntity | null
    offerType: OfferType | null
    area: number | null
    condition: Condition | null
    stratum: Estratum | null
    antiquity: number | null
    bathrooms: number | null
    rooms: number | null
    parkingLots: number | null
    cylinderCapacity: number | null
    mileage: number | null
}

export interface NewProductWithoutCodeRequest {
    name: string
    subcategoryId: number

    description: string | null
    brand: string | null
    measurementTypeId: number | null
    measurementQuantity: number | null
    productTypeId: number | null
    zoneId: number | null
    offerType: OfferType | null
    area: number | null
    condition: Condition | null
    stratum: Estratum | null
    antiquity: number | null
    bathrooms: number | null
    rooms: number | null
    parkingLots: number | null
    cylinderCapacity: number | null
    mileage: number | null
}

export interface UpdateProductWithoutCodeRequest {
    id: number

    name: string
    description: string | null
    brand: string | null
    measurementTypeId: number | null
    measurementQuantity: number | null
    productTypeId: number | null
    zoneId: number | null
    offerType: OfferType | null
    area: number | null
    condition: Condition | null
    stratum: Estratum | null
    antiquity: number | null
    bathrooms: number | null
    rooms: number | null
    parkingLots: number | null
    cylinderCapacity: number | null
    mileage: number | null
}

export class UpdateProductWithoutCodeRequestEntity implements UpdateProductWithoutCodeRequest {
    constructor(
        public id: number,
        public name: string,
        public description: string | null,
        public brand: string | null,
        public measurementTypeId: number | null,
        public measurementQuantity: number | null,
        public productTypeId: number | null,
        public zoneId: number | null,
        public offerType: OfferType | null,
        public area: number | null,
        public condition: Condition | null,
        public stratum: Estratum | null,
        public antiquity: number | null,
        public bathrooms: number | null,
        public rooms: number | null,
        public parkingLots: number | null,
        public cylinderCapacity: number | null,
        public mileage: number | null
    ) { }
}

export interface UpdateProductWithCodeRequest {
    id: number

    name: string
    description: string
    brand: string
    measurementId: number | null
    measurementQuantity: number | null
}

export class UpdateProductWithCodeRequestEntity implements UpdateProductWithCodeRequest {
    constructor(
        public id: number,
        public imgPath: string,
        public name: string,
        public description: string,
        public brand: string,
        public measurementId: number | null,
        public measurementQuantity: number | null,
    ) { }
}

export class ProductWithCodeEntity implements ProductWithCode {
    constructor(
        public id: number,
        public subcategory: SubcategoryEntity,
        public gtin: string,
        public name: string,
        public description: string,
        public brand: string,
        public gpc: string,
        public s_productType: SubcategoryProductType | null,
        public s_brand: SubcategoryBrandEntity | null,
        public complementaryInfo: string | null,
        public imgPath: string,
        public minImgPath: string,
        public secondImgPath: string,
        public thirdImgPath: string | null,
        public codeImgPath: string | null,
        public quantity: string,
        public measurement: string,
        public market: string,
        public measurementType: MeasurementTypeEntity | null,
        public measurementQuantity: number | null,
        public verifiedByAdmin: boolean,
        public awaitingVerification: boolean
    ) { }
}

export class ProductWithoutCodeEntity implements ProductWithoutCode {

    constructor(
        public id: number,
        public name: string,
        public subcategory: SubcategoryEntity,
        public imgPath: string,
        public minImgPath: string,
        public description: string | null,
        public brand: string | null,
        public measurementType: MeasurementTypeEntity | null,
        public measurementQuantity: number | null,
        public productType: ProductTypeEntity | null,
        public zone: ZoneEntity | null,
        public offerType: OfferType | null,
        public area: number | null,
        public condition: Condition | null,
        public stratum: Estratum | null,
        public antiquity: number | null,
        public bathrooms: number | null,
        public rooms: number | null,
        public parkingLots: number | null,
        public cylinderCapacity: number | null,
        public mileage: number | null,
    ) { }
}

export interface UrlUploadRequest {
    url: string
}