/* eslint-disable arrow-body-style */
import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgFor, NgIf } from "@angular/common";
import { switchMap, distinctUntilChanged, catchError, map, take } from "rxjs/operators";
import { forkJoin, of, takeUntil, ReplaySubject, Observable, lastValueFrom  } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
    selector: "hardware-engineer",
    templateUrl: "./hardware-engineer.component.html",
    styleUrls: ["./hardware-engineer.component.css"],
    imports: [
        NgIf,
        NgFor,
        FormsModule
    ],
    standalone: true
})

export class HardwareEngineeringComponent implements OnInit, OnDestroy {
    private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    public mobile_layout: boolean = false;

    public data: any;

    constructor(private responsive: BreakpointObserver, private changeDetectorRef: ChangeDetectorRef) {

    }

    public ngOnInit() {
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

    public ngOnDestroy() {
        this._destroyed$.next(true);
        this._destroyed$.complete();
    }
}
