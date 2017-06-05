import { NgModule } from '@angular/core';
import {
    MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
    MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule
} from '@angular/material';


@NgModule({
    imports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdButtonModule, MdTabsModule, MdOptionModule, MdAutocompleteModule],
    exports: [MdDialogModule, MdCheckboxModule, MdCardModule, MdInputModule,
        MdAutocompleteModule, MdButtonModule, MdTabsModule, MdOptionModule],
    declarations: [],
    providers: [],
})
export class PenshiruMaterialModule { }
