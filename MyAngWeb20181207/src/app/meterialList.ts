import { NgModule } from '@Angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSliderModule
    ],
    exports: [
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSliderModule
    ]
})
export class MeterialListModule {
}