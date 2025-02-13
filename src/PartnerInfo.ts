import { ZoneEntity } from "./Location"

export interface PartnerInfo {
    name: string
    address: string
    workingZones: ZoneEntity[]

    imgPath: string | null
}

export class PartnerInfoEntity implements PartnerInfo {
    constructor(
        public name: string,
        public address: string,
        public workingZones: ZoneEntity[],
        public imgPath: string | null
    ) { }
}