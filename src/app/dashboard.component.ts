import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgFor, NgIf } from "@angular/common";
import { switchMap, distinctUntilChanged, catchError, map } from "rxjs/operators";
import { forkJoin, of, takeUntil, ReplaySubject, Observable, lastValueFrom  } from "rxjs";

interface LabelContent {
    [key: string]: string;
}

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
    host: {
        "[attr.data-component]": "dashboard"
    }
})
export class DashboardComponent implements OnInit, OnDestroy {

    public readonly software_version: string = "v0.0.6";

    private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    public label_content: LabelContent = {
        "TEG Meter Reader": "TEG Meter Reader",
        "Dashboard": "Dashboard",
        "Chart": "Chart",
        "General chart": "General chart",
        "Device": "Device",
        "Group01": "Group01",
        "Group02": "Group02",
        "System": "System",
        "Close Application": "Close Application",
        "Historical Record": "Historical Record"
    };

    constructor() {
    }

    public ngOnInit() {
    }

    public ngOnDestroy() {
        this._destroyed$.next(true);
        this._destroyed$.complete();
    }

    public close_application(): void {
    }
}
