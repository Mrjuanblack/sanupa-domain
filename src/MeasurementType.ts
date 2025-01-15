export interface MeasurementType {
    id: number
    name: string
}

export interface NewMeasurementTypeRequest {
    name: string
}

export interface MeasurementWithData {
    measurementType: MeasurementTypeEntity
    quantity: number
}

export class MeasurementTypeEntity implements MeasurementType {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class MeasurementWithDataEntity implements MeasurementWithData {
    measurementType: MeasurementTypeEntity
    quantity: number

    constructor(measurementType: MeasurementTypeEntity, quantity: number) {
        this.measurementType = measurementType
        this.quantity = quantity
    }
}