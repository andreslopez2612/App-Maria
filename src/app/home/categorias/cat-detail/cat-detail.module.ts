import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatDetailPageRoutingModule } from './cat-detail-routing.module';

import { CatDetailPage } from './cat-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatDetailPageRoutingModule
  ],
  declarations: [CatDetailPage]
})
export class CatDetailPageModule {}
