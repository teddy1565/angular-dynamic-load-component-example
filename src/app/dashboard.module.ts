import { NgModule } from "@angular/core";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";  // <<<< import it here

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        DashboardComponent
    ]
})
export class DashboardModule { }
