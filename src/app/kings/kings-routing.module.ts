import { RouterModule, Routes } from "@angular/router";
import { kingsComponent } from "./kings.component";
import { NgModule } from "@angular/core";
import { kingsAddComponent } from "./kings-add.component";

const routes: Routes = [
    {
        path: '',
        component: kingsComponent
    },
    {
        path: 'add',
        component: kingsAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class kingsRoutingModule {}