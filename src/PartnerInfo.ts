import { ZoneEntity } from "./Location"
import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Zone } from "./PartnerWorkingZone"

export interface PartnerInfo {
    name: string
    address: string
    workingArea_Zones: PartnerWorking_Zone[]
    workingArea_Communities: PartnerWorking_Community[]
    workingArea_Cities: PartnerWorking_City[]

    imgPath: string | null
}

export class PartnerInfoEntity implements PartnerInfo {
    constructor(
        public name: string,
        public address: string,
        public workingArea_Zones: PartnerWorking_Zone[],
        public workingArea_Communities: PartnerWorking_Community[],
        public workingArea_Cities: PartnerWorking_City[],
        public imgPath: string | null
    ) { }
}

export interface SimplePartnerInfo {
    name: string
    address: string
    imgPath: string | null
}

export class SimplePartnerInfoEntity implements SimplePartnerInfo {
    constructor(
        public name: string,
        public address: string,
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