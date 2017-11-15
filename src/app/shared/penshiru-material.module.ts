import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatDialogModule, MatCheckboxModule, MatCardModule, MatInputModule,
    MatButtonModule, MatTabsModule, MatOptionModule, MatAutocompleteModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule, MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
    imports: [MatDialogModule, MatCheckboxModule, MatCardModule, MatInputModule,
        MatButtonModule, MatTabsModule, MatOptionModule, MatAutocompleteModule,
        MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule, MatProgressSpinnerModule,
        BrowserAnimationsModule],
    exports: [MatDialogModule, MatCheckboxModule, MatCardModule, MatInputModule,
        MatAutocompleteModule, MatButtonModule, MatTabsModule, MatOptionModule,
        MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule, MatProgressSpinnerModule],
    declarations: [],
    providers: [],
})
export class PenshiruMaterialModule { }
