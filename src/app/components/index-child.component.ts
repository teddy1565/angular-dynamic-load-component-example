import { Component, Input, Output, ViewChild, ViewChildren, ElementRef, OnInit, EventEmitter,
  AfterViewChecked, AfterViewInit, AfterContentChecked, ChangeDetectorRef, inject, Inject,
  OnDestroy } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { NgIf, NgFor } from "@angular/common";

import { interval, takeUntil, ReplaySubject } from "rxjs";

@Component({
  selector: "index-child",
  templateUrl: "./index-child.component.html",
  imports: [FormsModule, NgFor, NgIf],
  standalone: true,
  styleUrls: ["./index-child.component.css"]
})



export class IndexChildComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() custom_component: any;
  @ViewChild("container") dynamic_container: any;
  private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public mobile_layout: boolean = false;

  constructor(private responsive: BreakpointObserver, private ref: ChangeDetectorRef) {

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
    console.log(this.custom_component)
      this.dynamic_container = inject(this.custom_component);

  }

  public ngOnDestroy() {
      this._destroyed$.next(true);
      this._destroyed$.complete();
  }

  public ngAfterViewChecked(): void {
  }

  public ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }
}
