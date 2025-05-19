"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneEntity = exports.CommunityEntity = exports.CityEntity = exports.RegionEntity = exports.CountryEntity = void 0;
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
    constructor(id, region, name, shortName) {
        this.id = id;
        this.region = region;
        this.name = name;
        this.shortName = shortName;
    }
}
exports.CityEntity = CityEntity;
class CommunityEntity {
    constructor(id, city, name) {
        this.id = id;
        this.city = city;
        this.name = name;
    }
}
exports.CommunityEntity = CommunityEntity;
class ZoneEntity {
    constructor(id, community, name) {
        this.id = id;
        this.community = community;
        this.name = name;
    }
}
exports.ZoneEntity = ZoneEntity;
