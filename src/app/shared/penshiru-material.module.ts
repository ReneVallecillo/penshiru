import { NgModule } from '@angular/core';
import {
    MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
    MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule,
    MdToolbarModule, MdIconModule
} from '@angular/material';


@NgModule({
    imports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule,
        MdToolbarModule, MdIconModule],
    exports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdAutocompleteModule, MdButtonModule, MdTabsModule, MdOptionModule,
        MdToolbarModule, MdIconModule],
    declarations: [],
    providers: [],
})
export class PenshiruMaterialModule { }
