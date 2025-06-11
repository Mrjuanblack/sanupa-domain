import { Zone } from "./Location";
import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Zone } from "./PartnerWorkingZone";
export interface PartnerInfo {
    name: string;
    zone: Zone;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    imgPath: string | null;
}
export declare class PartnerInfoEntity implements PartnerInfo {
    name: string;
    zone: Zone;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    imgPath: string | null;
    constructor(name: string, zone: Zone, address: string, workingArea_Zones: PartnerWorking_Zone[], workingArea_Communities: PartnerWorking_Community[], workingArea_Cities: PartnerWorking_City[], imgPath: string | null);
}
export interface SimplePartnerInfo {
    name: string;
    address: string;
    zone: Zone;
    imgPath: string | null;
}
export declare class SimplePartnerInfoEntity implements SimplePartnerInfo {
    name: string;
    address: string;
    zone: Zone;
    imgPath: string | null;
    constructor(name: string, address: string, zone: Zone, imgPath: string | null);
}
export interface NewPartnerInfoRequest {
    name: string;
    address: string;
    zoneId: number;
}
