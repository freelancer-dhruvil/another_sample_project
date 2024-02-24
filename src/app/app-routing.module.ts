import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    {
        path:"home",
        component: HomeComponent
    },
    {
        path: "",
        component: AppComponent
    },
    {
        path: "error",
        component: ErrorComponent
    },
    {
        path: "**",
        redirectTo: "/error"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
