"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementWithDataEntity = exports.MeasurementTypeEntity = void 0;
class MeasurementTypeEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.MeasurementTypeEntity = MeasurementTypeEntity;
class MeasurementWithDataEntity {
    constructor(measurementType, quantity) {
        this.measurementType = measurementType;
        this.quantity = quantity;
    }
}
exports.MeasurementWithDataEntity = MeasurementWithDataEntity;
