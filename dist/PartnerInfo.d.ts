import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Zone } from "./PartnerWorkingZone";
export interface PartnerInfo {
    name: string;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    imgPath: string | null;
}
export declare class PartnerInfoEntity implements PartnerInfo {
    name: string;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    imgPath: string | null;
    constructor(name: string, address: string, workingArea_Zones: PartnerWorking_Zone[], workingArea_Communities: PartnerWorking_Community[], workingArea_Cities: PartnerWorking_City[], imgPath: string | null);
}
export interface SimplePartnerInfo {
    name: string;
    address: string;
    imgPath: string | null;
}
export declare class SimplePartnerInfoEntity implements SimplePartnerInfo {
    name: string;
    address: string;
    imgPath: string | null;
    constructor(name: string, address: string, imgPath: string | null);
}
export interface NewPartnerInfoRequest {
    name: string;
    address: string;
}
export declare class NewPartnerInfoRequestEntity implements NewPartnerInfoRequest {
    name: string;
    address: string;
    constructor(name: string, address: string);
}
