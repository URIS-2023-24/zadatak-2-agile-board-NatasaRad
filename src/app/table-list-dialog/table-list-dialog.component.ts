import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskDialogData } from 'app/models/task-dialog-data';


@Component({
  selector: 'app-table-list-dialog',
  templateUrl: './table-list-dialog.component.html',
  styleUrls: ['./table-list-dialog.component.scss']
})
export class TableListDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TableListDialogComponent>, //kreira se isti dijalog svaki put
    @Inject(MAT_DIALOG_DATA) public data : TaskDialogData ) { } //za transfer podataka matdialogref , podaci koji traju dok traje dialog

  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();//unistavamo ga iz memorije metodom close
  }

}
