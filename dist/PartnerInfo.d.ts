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
export interface SimplePartnerInfo {
    name: string;
    imgPath: string | null;
}
export declare class SimplePartnerInfoEntity implements SimplePartnerInfo {
    name: string;
    imgPath: string | null;
    constructor(name: string, imgPath: string | null);
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
