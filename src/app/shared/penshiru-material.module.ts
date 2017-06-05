import { NgModule } from '@angular/core';
import {
    MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
    MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule,
    MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule
} from '@angular/material';


@NgModule({
    imports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule,
        MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule],
    exports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdAutocompleteModule, MdButtonModule, MdTabsModule, MdOptionModule,
        MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule],
    declarations: [],
    providers: [],
})
export class PenshiruMaterialModule { }
