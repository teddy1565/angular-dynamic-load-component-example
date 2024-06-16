import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { distinctUntilChanged, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { ComponentHostDirective } from './component-host.directive';

import { Service, ServiceComponentType, servicesComponentFactory, ServiceTypes } from "./services-factory";

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [ComponentHostDirective, FormsModule, NgIf, NgFor],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexPageComponent implements OnInit, OnDestroy {
  @ViewChild(ComponentHostDirective, { static: true }) componentHost!: ComponentHostDirective;


  public service_args: Service = {
      id: 0,
      title: "Hardware Engineering",
      description: "testing"
  }

  constructor(private readonly route: ActivatedRoute,) {

  }

  destroy: Subject<void> = new Subject<void>();

  ngOnInit(): void {
  }

  loadComponent(service: Service): void {
    const { viewContainerRef }: ComponentHostDirective = this.componentHost;
    viewContainerRef.clear();
    if (service.id !== 0 && service.id !== 1) {
        service.id = 0;
        return;
    }
    const { instance } = viewContainerRef.createComponent<ServiceComponentType>(servicesComponentFactory[service.id as ServiceTypes]);
    instance.data = service;
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
