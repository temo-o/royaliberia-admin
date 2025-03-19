import { RouterModule, Routes } from "@angular/router";
import { kingsComponent } from "./kings.component";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'kings',
        component: kingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class kingsRoutingModule {}