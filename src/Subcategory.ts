import { CategoryEntity } from "./Category"

export interface Subcategory {
    id: number
    category: CategoryEntity
    name: string
    imgPath: string | null
    usesCode: boolean
    usesSizeMeasurement: boolean
    usesSubunits: boolean
    uniqueName: boolean
    active: boolean

    // Fields that will be available for products and for filtering
    description: boolean
    brand: boolean
    measurement: boolean

    productType: boolean
    zone: boolean
    offerType: boolean
    area: boolean
    condition: boolean
    stratum: boolean
    antiquity: boolean
    bathrooms: boolean
    rooms: boolean
    parkingLots: boolean
    cylinderCapacity: boolean
    mileage: boolean
}

// Images will be included in the file property of the request
export interface NewSubcategoryRequest {
    categoryId: number
    name: string
    usesCode: boolean
    uniqueName: boolean

    description: boolean
    brand: boolean
    measurement: boolean

    productType: boolean
    zone: boolean
    offerType: boolean
    area: boolean
    condition: boolean
    stratum: boolean
    antiquity: boolean
    bathrooms: boolean
    rooms: boolean
    parkingLots: boolean
    cylinderCapacity: boolean
    mileage: boolean
}

export class SubcategoryEntity implements Subcategory {
    constructor(
        public id: number,
        public category: CategoryEntity,
        public name: string,
        public imgPath: string | null,
        public usesCode: boolean,
        public usesSizeMeasurement: boolean,
        public usesSubunits: boolean,
        public uniqueName: boolean,
        public active: boolean,
        public description: boolean,
        public brand: boolean,
        public measurement: boolean,
        public productType: boolean,
        public zone: boolean,
        public offerType: boolean,
        public area: boolean,
        public condition: boolean,
        public stratum: boolean,
        public antiquity: boolean,
        public bathrooms: boolean,
        public rooms: boolean,
        public parkingLots: boolean,
        public cylinderCapacity: boolean,
        public mileage: boolean) {

    }
}