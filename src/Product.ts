import { ZoneEntity } from "./Location"
import { MeasurementTypeEntity, MeasurementWithDataEntity } from "./MeasurementType"
import { ProductTypeEntity } from "./ProductType"
import { SubcategoryEntity } from "./Subcategory"

export enum OfferType {
    Sale = 1,
    Lease = 2,
    Rental = 3
}
export enum Condition {
    New = 1,
    Used = 2
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
    measurementAlt: MeasurementWithDataEntity | null
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

export interface ProductWithoutCode extends BaseProduct {
    description: string | null
    brand: string | null
    measurement: MeasurementWithDataEntity | null
    productType: ProductTypeEntity | null
    zone: ZoneEntity | null
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
    measurement: MeasurementWithDataEntity | null
    productType: ProductTypeEntity | null
    zone: ZoneEntity | null
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
        public measurementAlt: MeasurementWithDataEntity | null
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
        public measurement: MeasurementWithDataEntity | null,
        public productType: ProductTypeEntity | null,
        public zone: ZoneEntity | null,
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