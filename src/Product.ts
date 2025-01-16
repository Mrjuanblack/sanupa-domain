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

export class NewProductWithCodeRequestEntity implements NewProductWithCodeRequest {
    subcategoryId: number
    imgPath: string
    gtin: string
    description: string
    brand: string
    gpc: string
    quantity: string
    measurement: string
    market: string

    constructor(
        subcategoryId: number,
        imgPath: string,
        gtin: string,
        description: string,
        brand: string,
        gpc: string,
        quantity: string,
        measurement: string,
        market: string
    ) {
        this.subcategoryId = subcategoryId
        this.imgPath = imgPath
        this.gtin = gtin
        this.description = description
        this.brand = brand
        this.gpc = gpc
        this.quantity = quantity
        this.measurement = measurement
        this.market = market
    }
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
    subcategoryId: number
    imgPath: string

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

export class NewProductWithoutCodeRequestEntity implements NewProductWithoutCodeRequest {
    subcategoryId: number
    imgPath: string
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

    constructor(
        subcategoryId: number,
        imgPath: string,
        description: string | null,
        brand: string | null,
        measurement: MeasurementWithDataEntity | null,
        productType: ProductTypeEntity | null,
        zone: ZoneEntity | null,
        area: number | null,
        condition: Condition | null,
        stratum: Estratum | null,
        antiquity: number | null,
        bathrooms: number | null,
        rooms: number | null,
        parkingLots: number | null,
        cylinderCapacity: number | null,
        mileage: number | null
    ) {
        this.subcategoryId = subcategoryId
        this.imgPath = imgPath
        this.description = description
        this.brand = brand
        this.measurement = measurement
        this.productType = productType
        this.zone = zone
        this.area = area
        this.condition = condition
        this.stratum = stratum
        this.antiquity = antiquity
        this.bathrooms = bathrooms
        this.rooms = rooms
        this.parkingLots = parkingLots
        this.cylinderCapacity = cylinderCapacity
        this.mileage = mileage
    }
}

export class ProductWithCodeEntity implements ProductWithCode {
    constructor(
        public id: number,
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