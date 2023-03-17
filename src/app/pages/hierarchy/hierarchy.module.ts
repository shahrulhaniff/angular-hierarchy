import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchyComponent } from './hierarchy.component';



@NgModule({
  declarations: [
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    HierarchyRoutingModule
  ]
})
export class HierarchyModule { }
