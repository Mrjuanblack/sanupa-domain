"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneEntity = exports.CityEntity = exports.RegionEntity = exports.CountryEntity = void 0;
class CountryEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.CountryEntity = CountryEntity;
class RegionEntity {
    constructor(id, country, name) {
        this.id = id;
        this.country = country;
        this.name = name;
    }
}
exports.RegionEntity = RegionEntity;
class CityEntity {
    constructor(id, region, name) {
        this.id = id;
        this.region = region;
        this.name = name;
    }
}
exports.CityEntity = CityEntity;
class ZoneEntity {
    constructor(id, city, name) {
        this.id = id;
        this.city = city;
        this.name = name;
    }
}
exports.ZoneEntity = ZoneEntity;
