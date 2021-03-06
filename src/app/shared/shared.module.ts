import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './pipes';

// Material
import { PenshiruMaterialModule } from '../shared/penshiru-material.module';
// Layout
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// Covalent
import { CovalentDataTableModule } from '@covalent/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';


@NgModule({
    imports: [CommonModule, PenshiruMaterialModule, FormsModule, CovalentDataTableModule, ReactiveFormsModule],
    exports: [TitleCasePipe, TruncatePipe, PenshiruMaterialModule, FormsModule, CovalentDataTableModule, ReactiveFormsModule,
        FileUploadComponent, TreeViewComponent, CommonModule, MessagesComponent],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent, FileUploadComponent, TreeViewComponent, MessagesComponent],
    entryComponents: [ConfirmDialogComponent],
    providers: [MessageService],
})
export class SharedModule { }
