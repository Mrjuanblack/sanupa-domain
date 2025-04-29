import { ZoneEntity } from "./Location"
import { MeasurementType, MeasurementTypeEntity } from "./MeasurementType"
import { ProductTypeEntity } from "./ProductType"
import { SubcategoryEntity } from "./Subcategory"
import { SubcategoryBrandEntity } from "./Subcategory_Brand";
import { SubcategoryProductType } from "./Subcategory_ProductType";
import { SubcategorySubunitType } from "./Subcateogry_SubunitType";
import { parseStringToNumber } from "./Utils";

export function getComplementaryInfo(quantityString: string, unitsString: string): string | null {
    const units = parseStringToGS1_Unit(unitsString);
    const quantity = parseStringToNumber(quantityString) ?? 1;
    if (isSingularUnit(units)) {
        return null;
    }
    if (units === GS1_Unit.UNDF) {
        return null;
    }
    return `${quantity} ${getGS1UnitString(units)}`
}

export function getQuantityBasedOnUnits(quantityString: string, unitsString: string): number | null {
    const units = parseStringToGS1_Unit(unitsString);
    const quantity = parseStringToNumber(quantityString) ?? 1;
    if (isSingularUnit(units)) {
        return quantity;
    }
    return null
}

export enum ProductState {
    PreCreated = 1,
    Created = 2,
    Verified = 3,
    Error = 4,
    Finalized = 5
}
export const ProductStateList = Object.values(ProductState).filter(value => typeof value === 'number');
export function getProductStateString(productState: ProductState): string {
    switch (productState) {
        case ProductState.PreCreated:
            return "Pre-Creado";
        case ProductState.Created:
            return "Creado";
        case ProductState.Verified:
            return "Verificado";
        case ProductState.Error:
            return "Error";
        case ProductState.Finalized:
            return "Finalizado";
    }
}

export enum GS1_Unit {
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
    UNDF = "-----"
}

export function parseStringToGS1_Unit(value: string): GS1_Unit {
    const findResult = Object.values(GS1_Unit).find(x => x.toLowerCase() === value.toLowerCase());
    if (findResult === undefined) return GS1_Unit.UNDF;
    return findResult;
}

export function isSingularUnit(value: GS1_Unit): boolean {
    switch (value) {
        case GS1_Unit.H87:
        case GS1_Unit.PTN:
        case GS1_Unit.KT:
        case GS1_Unit.G26:
        case GS1_Unit.EA:
            return true;
        default:
            return false;
    }
}

export function getGS1UnitString(unit: GS1_Unit): string {
    switch (unit) {
        case GS1_Unit.CM:
            return "cm";
        case GS1_Unit.CMQ:
            return "cm3";
        case GS1_Unit.GRM:
            return "gramos";
        case GS1_Unit.KG:
            return "Kg";
        case GS1_Unit.LBR:
            return "Libra";
        case GS1_Unit.LTR:
            return "Litro";
        case GS1_Unit.MTR:
            return "metros";
        case GS1_Unit.MGM:
            return "mg";
        case GS1_Unit.MLT:
            return "mL";
        case GS1_Unit.MMT:
            return "mm";
        case GS1_Unit.OZA:
            return "Onzas";
        case GS1_Unit.ONZ:
            return "Onzas";
        case GS1_Unit.SET:
            return "Set";
        case GS1_Unit.H87:
        case GS1_Unit.PTN:
        case GS1_Unit.KT:
        case GS1_Unit.G26:
        case GS1_Unit.EA:
            return "Und";
        case GS1_Unit.UNDF:
            return "";
    }
}

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
    lastUpdated: Date
}
export interface ProductWithCode extends BaseProduct {
    productState: ProductState
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
    s_subunitType: SubcategorySubunitType | null
    measurementInfo: string | null
    complementaryInfo: string | null


    //Aditional Img
    secondImgPath: string
    thirdImgPath: string | null
    codeImgPath: string | null
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

    productTypeId: number | null
    brandId: number | null
    complementaryInfo: string | null
}

export interface NewProductJustCode {
    code: string
    subcategoryId: number
}

export interface NewProduct_GS1 {
    code: string
    subcategoryId: number

    productTypeId: number
    brandId: number
    subunitTypeId: number | null
    complementaryInfo: string | null
    quantity: number | null

    description: string
}

export interface UpdateProduct_GS1 {
    productId: number
    subcategoryId: number

    productTypeId: number | null
    brandId: number | null
    subunitTypeId: number | null
    measurementInfo: string | null
    complementaryInfo: string | null
    name: string | null
    quantity: number | null

    description: string
}

export interface ProductWithoutCode extends BaseProduct {
    name: string
    description: string | null

    s_productType: SubcategoryProductType | null
    s_brand: SubcategoryBrandEntity | null
    s_subunitType: SubcategorySubunitType | null
    measurementInfo: string | null

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
    productTypeId: number
    brandId: number
    subunitTypeId: number | null
    quantity: number | null
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
    productTypeId: number
    brandId: number
    subunitTypeId: number | null
    quantity: number | null
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
        public productTypeId: number,
        public brandId: number,
        public subunitTypeId: number | null,
        public quantity: number | null,
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
        public lastUpdated: Date,
        public gtin: string,
        public name: string,
        public description: string,
        public brand: string,
        public gpc: string,
        public s_productType: SubcategoryProductType | null,
        public s_brand: SubcategoryBrandEntity | null,
        public s_subunitType: SubcategorySubunitType | null,
        public measurementInfo: string | null,
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
        public productState: ProductState
    ) { }
}

export class ProductWithoutCodeEntity implements ProductWithoutCode {

    constructor(
        public id: number,
        public name: string,
        public subcategory: SubcategoryEntity,
        public lastUpdated: Date,
        public imgPath: string,
        public minImgPath: string,
        public description: string | null,
        public s_productType: SubcategoryProductType | null,
        public s_brand: SubcategoryBrandEntity | null,
        public s_subunitType: SubcategorySubunitType | null,
        public measurementInfo: string | null,
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