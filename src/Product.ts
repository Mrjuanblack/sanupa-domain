import { ZoneEntity } from "./Location"
import { MeasurementType, MeasurementTypeEntity } from "./MeasurementType"
import { ProductTypeEntity } from "./ProductType"
import { SubcategoryEntity } from "./Subcategory"

export enum OfferType {
    Sale = 1,
    Lease = 2,
    Rental = 3
}
export const OfferTypeList = Object.values(OfferType).filter(value => typeof value === 'number');
export function getOfferTypeString(offerType: OfferType): string {
    switch(offerType) {
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
    switch(condition) {
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
    switch(estratum) {
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
    name: string
    subcategory: SubcategoryEntity
    imgPath: string
}
export interface ProductWithCode extends BaseProduct {
    //GS1 data
    gtin: string
    description: string
    brand: string
    gpc: string
    quantity: string
    measurement: string
    market: string

    //Measurement data that will be used if the measurement and quantity data is updated
    measurementType: MeasurementType | null
    measurementQuantity: number | null
}
export interface NewProductWithCodeRequest {
    name: string
    subcategoryId: number
    imgPath: string

    gtin: string
    description: string
    brand: string
    gpc: string
    quantity: string
    measurement: string
    market: string
}
export interface NewProductJustCode {
    code: string
}

export interface ProductWithoutCode extends BaseProduct {
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

export class ProductWithCodeEntity implements ProductWithCode {
    constructor(
        public id: number,
        public name: string,
        public subcategory: SubcategoryEntity,
        public gtin: string,
        public description: string,
        public brand: string,
        public gpc: string,
        public imgPath: string,
        public quantity: string,
        public measurement: string,
        public market: string,
        public measurementType: MeasurementTypeEntity | null,
        public measurementQuantity: number | null
    ) { }
}

export class ProductWithoutCodeEntity implements ProductWithoutCode {

    constructor(
        public id: number,
        public name: string,
        public subcategory: SubcategoryEntity,
        public imgPath: string,
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