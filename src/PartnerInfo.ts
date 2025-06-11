import { Zone } from "./Location"
import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Zone } from "./PartnerWorkingZone"

export interface PartnerInfo {
    name: string
    zone: Zone
    address: string
    workingArea_Zones: PartnerWorking_Zone[]
    workingArea_Communities: PartnerWorking_Community[]
    workingArea_Cities: PartnerWorking_City[]

    imgPath: string | null
}

export class PartnerInfoEntity implements PartnerInfo {
    constructor(
        public name: string,
        public zone: Zone,
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
    zone: Zone
    imgPath: string | null
}

export class SimplePartnerInfoEntity implements SimplePartnerInfo {
    constructor(
        public name: string,
        public address: string,
        public zone: Zone,
        public imgPath: string | null
    ) { }
}

export interface NewPartnerInfoRequest {
    name: string,
    address: string,
    zoneId: number
}