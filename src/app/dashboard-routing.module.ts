
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

import { IndexPageComponent } from "./components/index.component";


const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        children: [
            { path: "index-page", component: IndexPageComponent },
            { path: "**", redirectTo: "index-page" }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
