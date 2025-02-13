import { ZoneEntity } from "./Location";
export interface PartnerInfo {
    name: string;
    address: string;
    workingZones: ZoneEntity[];
    imgPath: string | null;
}
export declare class PartnerInfoEntity implements PartnerInfo {
    name: string;
    address: string;
    workingZones: ZoneEntity[];
    imgPath: string | null;
    constructor(name: string, address: string, workingZones: ZoneEntity[], imgPath: string | null);
}
