import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Region, PartnerWorking_Zone } from "api-loc-domain";
import { DeliveryWorking_Zone, DeliveryWorking_City, DeliveryWorking_Community } from "./DeliveryWorkingZone";
import { Zone } from "./Location";
export interface PartnerInfo {
    zone: Zone;
    name: string;
    address: string;
    partnerId: number;
    imgPath: string | null;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Cities: PartnerWorking_City[];
    workingArea_Regions: PartnerWorking_Region[];
    deliveryWorking_Zones: DeliveryWorking_Zone[];
    deliveryWorking_Cities: DeliveryWorking_City[];
    workingArea_Communities: PartnerWorking_Community[];
    deliveryWorking_Communities: DeliveryWorking_Community[];
}
export declare class PartnerInfoEntity implements PartnerInfo {
    zone: Zone;
    name: string;
    address: string;
    partnerId: number;
    imgPath: string | null;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Regions: PartnerWorking_Region[];
    workingArea_Cities: PartnerWorking_City[];
    deliveryWorking_Zones: DeliveryWorking_Zone[];
    deliveryWorking_Cities: DeliveryWorking_City[];
    workingArea_Communities: PartnerWorking_Community[];
    deliveryWorking_Communities: DeliveryWorking_Community[];
    constructor(zone: Zone, name: string, address: string, partnerId: number, imgPath: string | null, workingArea_Zones: PartnerWorking_Zone[], workingArea_Regions: PartnerWorking_Region[], workingArea_Cities: PartnerWorking_City[], deliveryWorking_Zones: DeliveryWorking_Zone[], deliveryWorking_Cities: DeliveryWorking_City[], workingArea_Communities: PartnerWorking_Community[], deliveryWorking_Communities: DeliveryWorking_Community[]);
}
export interface SimplePartnerInfo {
    zone: Zone;
    name: string;
    address: string;
    partnerId: number;
    imgPath: string | null;
}
export declare class SimplePartnerInfoEntity implements SimplePartnerInfo {
    zone: Zone;
    name: string;
    address: string;
    partnerId: number;
    imgPath: string | null;
    constructor(zone: Zone, name: string, address: string, partnerId: number, imgPath: string | null);
}
export interface NewPartnerInfoRequest {
    name: string;
    zoneId: number;
    address: string;
}
