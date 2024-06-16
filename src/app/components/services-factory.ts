

import { SoftwareEngineeringComponent } from "./child-components/software-engineer.component";
import { HardwareEngineeringComponent } from "./child-components/hardware-engineer.component";
import { Type } from '@angular/core';


export enum ServiceTypes {
  hardware, // 0
  software // 1
}

export type ServiceComponentType = HardwareEngineeringComponent
| SoftwareEngineeringComponent;

export const servicesComponentFactory:
  Record<ServiceTypes, Type<ServiceComponentType>>
= {
  [ServiceTypes.hardware]: HardwareEngineeringComponent,
  [ServiceTypes.software]: SoftwareEngineeringComponent,
};


export interface Service {
  id: number;
  title: string;
  description: string;
}

