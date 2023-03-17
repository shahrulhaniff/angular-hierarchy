import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    // canActivate: [AuthenticationService],
    loadChildren: () =>
    import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "home",
    // canActivate: [AuthenticationService],
    loadChildren: () =>
    import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "hierarchy",
    // canActivate: [AuthenticationService],
    loadChildren: () =>
    import("./pages/hierarchy/hierarchy.module").then((m) => m.HierarchyModule),
  },
  {
    path: '',
    // component: MenuComponent, //⬅️ untuk menubar, backspace lepas copy
    // canActivate: [AuthGuardService],
    children: [
      {
        path: "vierarchy-inside",
        // canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/hierarchy/hierarchy.module").then((m) => m.HierarchyModule),
      }
    ]
  },
  { path: 'haha', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
  // {
  //   path: '',
  //   redirectTo: 'hierarchy',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
