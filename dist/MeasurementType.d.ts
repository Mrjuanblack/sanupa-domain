export interface MeasurementType {
    id: number;
    name: string;
}
export interface NewMeasurementTypeRequest {
    name: string;
}
export interface MeasurementWithData {
    measurementType: MeasurementTypeEntity;
    quantity: number;
}
export declare class MeasurementTypeEntity implements MeasurementType {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
