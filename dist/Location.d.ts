export interface Country {
    id: number;
    name: string;
}
export interface Region {
    id: number;
    country: Country;
    name: string;
}
export interface NewRegionRequest {
    country: Country;
    name: string;
}
export interface City {
    id: number;
    region: Region;
    name: string;
}
export interface NewCityRequest {
    region: Region;
    name: string;
}
export interface Community {
    id: number;
    city: City;
    name: string;
}
export interface NewCommunityRequest {
    city: City;
    name: string;
}
export interface Zone {
    id: number;
    community: Community;
    name: string;
}
export interface NewZoneRequest {
    community: Community;
    name: string;
}
export declare class CountryEntity implements Country {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
export declare class RegionEntity implements Region {
    id: number;
    country: Country;
    name: string;
    constructor(id: number, country: Country, name: string);
}
export declare class CityEntity implements City {
    id: number;
    region: Region;
    name: string;
    constructor(id: number, region: Region, name: string);
}
export declare class CommunityEntity implements Community {
    id: number;
    city: City;
    name: string;
    constructor(id: number, city: City, name: string);
}
export declare class ZoneEntity implements Zone {
    id: number;
    community: Community;
    name: string;
    constructor(id: number, community: Community, name: string);
}
