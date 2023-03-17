import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchyComponent } from './hierarchy.component';
import { NgxOrgChartModule } from 'ngx-org-chart';



@NgModule({
  declarations: [
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    HierarchyRoutingModule,
    NgxOrgChartModule
  ]
})
export class HierarchyModule { }
