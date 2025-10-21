import {
  DeliveryWorking_Zone,
  DeliveryWorking_City,
  DeliveryWorking_Community,
} from "./DeliveryWorkingZone";
import { Zone } from "./Location";
import {
  PartnerWorking_Zone,
  PartnerWorking_City,
  PartnerWorking_Community,
  PartnerWorking_Region,
} from "./PartnerWorkingZone";

export interface PartnerInfo {
  zone: Zone;
  name: string;
  address: string;
  partnerId: number;
  imgPath: string | null;
  workingArea_Zones: PartnerWorking_Zone[];
  workingArea_Cities: PartnerWorking_City[];
  workingArea_Regions: PartnerWorking_Region[];
  // Delivery information
  deliveryWorking_Zones: DeliveryWorking_Zone[];
  deliveryWorking_Cities: DeliveryWorking_City[];
  workingArea_Communities: PartnerWorking_Community[];
  deliveryWorking_Communities: DeliveryWorking_Community[];
}

export class PartnerInfoEntity implements PartnerInfo {
  constructor(
    public zone: Zone,
    public name: string,
    public address: string,
    public partnerId: number,
    public imgPath: string | null,
    public workingArea_Zones: PartnerWorking_Zone[],
    public workingArea_Regions: PartnerWorking_Region[],
    public workingArea_Cities: PartnerWorking_City[],
    public deliveryWorking_Zones: DeliveryWorking_Zone[],
    public deliveryWorking_Cities: DeliveryWorking_City[],
    public workingArea_Communities: PartnerWorking_Community[],
    public deliveryWorking_Communities: DeliveryWorking_Community[]
  ) {}
}

export interface SimplePartnerInfo {
  zone: Zone;
  name: string;
  address: string;
  partnerId: number;
  imgPath: string | null;
}

export class SimplePartnerInfoEntity implements SimplePartnerInfo {
  constructor(
    public zone: Zone,
    public name: string,
    public address: string,
    public partnerId: number,
    public imgPath: string | null
  ) {}
}

export interface NewPartnerInfoRequest {
  name: string;
  zoneId: number;
  address: string;
}
