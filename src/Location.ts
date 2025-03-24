export interface Country {
    id: number,
    name: string
}

export interface Region {
    id: number
    country: Country
    name: string
}
export interface NewRegionRequest {
    country: Country
    name: string
}

export interface City {
    id: number
    region: Region
    name: string
}
export interface NewCityRequest {
    region: Region
    name: string
}

export interface Community {
    id: number
    city: City
    name: string
}

export interface NewCommunityRequest {
    city: City
    name: string
}

export interface Zone {
    id: number
    community: Community
    name: string
}
export interface NewZoneRequest {
    community: Community
    name: string
}

export class CountryEntity implements Country {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

export class RegionEntity implements Region {
    id: number
    country: Country
    name: string

    constructor(id: number, country: Country, name: string) {
        this.id = id
        this.country = country
        this.name = name
    }
}

export class CityEntity implements City {
    id: number
    region: Region
    name: string

    constructor(id: number, region: Region, name: string) {
        this.id = id
        this.region = region
        this.name = name
    }
}

export class CommunityEntity implements Community {
    id: number
    city: City
    name: string

    constructor(id: number, city: City, name: string) {
        this.id = id
        this.city = city
        this.name = name
    }
}

export class ZoneEntity implements Zone {
    id: number
    community: Community
    name: string
    constructor(id: number, community: Community, name: string) {
        this.id = id
        this.community = community
        this.name = name
    }
}