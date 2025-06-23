import { DeliveryWorking_Zone, DeliveryWorking_Community, DeliveryWorking_City } from "./DeliveryWorkingZone";
import { Zone } from "./Location";
import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Zone } from "./PartnerWorkingZone";
export interface PartnerInfo {
    partnerId: number;
    name: string;
    zone: Zone;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    deliveryWorking_Zones: DeliveryWorking_Zone[];
    deliveryWorking_Communities: DeliveryWorking_Community[];
    deliveryWorking_Cities: DeliveryWorking_City[];
    imgPath: string | null;
}
export declare class PartnerInfoEntity implements PartnerInfo {
    partnerId: number;
    name: string;
    zone: Zone;
    address: string;
    workingArea_Zones: PartnerWorking_Zone[];
    workingArea_Communities: PartnerWorking_Community[];
    workingArea_Cities: PartnerWorking_City[];
    deliveryWorking_Zones: DeliveryWorking_Zone[];
    deliveryWorking_Communities: DeliveryWorking_Community[];
    deliveryWorking_Cities: DeliveryWorking_City[];
    imgPath: string | null;
    constructor(partnerId: number, name: string, zone: Zone, address: string, workingArea_Zones: PartnerWorking_Zone[], workingArea_Communities: PartnerWorking_Community[], workingArea_Cities: PartnerWorking_City[], deliveryWorking_Zones: DeliveryWorking_Zone[], deliveryWorking_Communities: DeliveryWorking_Community[], deliveryWorking_Cities: DeliveryWorking_City[], imgPath: string | null);
}
export interface SimplePartnerInfo {
    partnerId: number;
    name: string;
    address: string;
    zone: Zone;
    imgPath: string | null;
}
export declare class SimplePartnerInfoEntity implements SimplePartnerInfo {
    partnerId: number;
    name: string;
    address: string;
    zone: Zone;
    imgPath: string | null;
    constructor(partnerId: number, name: string, address: string, zone: Zone, imgPath: string | null);
}
export interface NewPartnerInfoRequest {
    name: string;
    address: string;
    zoneId: number;
}
