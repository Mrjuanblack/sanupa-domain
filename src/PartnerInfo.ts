import { ZoneEntity } from "./Location"
import { PartnerWorkingZone } from "./PartnerWorkingZone"

export interface PartnerInfo {
    name: string
    address: string
    workingZones: PartnerWorkingZone[]

    imgPath: string | null
}

export class PartnerInfoEntity implements PartnerInfo {
    constructor(
        public name: string,
        public address: string,
        public workingZones: PartnerWorkingZone[],
        public imgPath: string | null
    ) { }
}

export interface SimplePartnerInfo {
    name: string
    imgPath: string | null
}

export class SimplePartnerInfoEntity implements SimplePartnerInfo {
    constructor(
        public name: string,
        public imgPath: string | null
    ) { }
}

export interface NewPartnerInfoRequest {
    name: string,
    address: string
}

export class NewPartnerInfoRequestEntity implements NewPartnerInfoRequest {
    constructor(
        public name: string,
        public address: string
    ) { }
}