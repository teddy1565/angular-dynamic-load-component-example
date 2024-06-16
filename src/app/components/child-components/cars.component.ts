import { Component, Input, Output, ViewChild, ViewChildren, ElementRef, OnInit, EventEmitter,
  AfterViewChecked, AfterViewInit, AfterContentChecked,
  OnDestroy } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { NgIf, NgFor } from "@angular/common";

import { interval, takeUntil, ReplaySubject } from "rxjs";

@Component({
  selector: "cars",
  templateUrl: "./cars.component.html",
  imports: [FormsModule, NgFor, NgIf],
  standalone: true,
  styleUrls: ["./cars.component.css"]
})



export class CarsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public mobile_layout: boolean = false;

  constructor(private responsive: BreakpointObserver) {

  }

  public ngOnInit(): void {
      this.responsive.observe([
          Breakpoints.XSmall,
          Breakpoints.Small
      ]).subscribe((result) => {
          if (result.matches) {
              this.mobile_layout = true;
          } else {
              this.mobile_layout = false;
          }
      });
  }

  public ngAfterViewInit(): void {
  }

  public ngOnDestroy() {
      this._destroyed$.next(true);
      this._destroyed$.complete();
  }

  public ngAfterViewChecked(): void {
  }
}
