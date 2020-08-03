import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavComponent, TopNavComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule],
  exports: [TopNavComponent],
})
export class NavModule {}
