import { Component, OnInit, ViewChild, SimpleChanges, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ExcelService } from 'src/app/helper/excel.service';
import { BemoDataService } from 'src/app/shared/bemo-data.service';
import { CreateComponent } from '../create/create.component';
// import { MatTableFilter } from 'mat-table-filter';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  displayedColumns: string[] = ['UPDATE',
    'REGION',
    'CENTRAL',
    'CODE',
    'PASSIVEID',
    'FROMPATH',
    'TOPATH',
    'FROMROOM',
    'TOROOM',
    'CABLECAPACITY',
    'CABLELENGTH',
    'BRAHCHNUMBER',
    'TUBECOLOR',
    'FREEBRANCH',
    'FIBERJUNCTIONNUMBER',
    'STOREDATE'
  ];
  checker;
  dataArray: MatTableDataSource<any>;
  tableData = []
  start_date = new Date();
  end_date = new Date();
  searchKey;
  
  
  // filterType: MatTableFilter;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: false }) sort: MatSort;

  constructor(private service: BemoDataService,
    private notificationService: NotificationService, private dialog: MatDialog,
    private dialogService: DialogService, private excelService: ExcelService) { }

  setEndDate(event): void {
    this.end_date = event;
  }

  setStartDate(event): void {
    this.start_date = event;
  }
  ngOnInit() {
    // this.filterType = MatTableFilter.ANYWHERE;
    this.loadData();
  }
  loadData() {
    debugger
    this.service.getAll().subscribe(data => {
      if (data) {
        this.tableData = []
        this.dataArray = new MatTableDataSource<any>(this.tableData);
        this.dataArray.filterPredicate = (data: any, filterValue: string) => {
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.indexOf(filterValue) != -1;
        }
        this.dataArray.filter = ''
        this.dataArray.paginator = this.paginator;

        if (data.length > 0) {
          console.table(data)

          data.forEach(element => {
            this.tableData.push(element)
          });

          this.dataArray = new MatTableDataSource<any>(this.tableData);
          this.dataArray.filterPredicate = (data: any, filterValue: string) => {
            const dataStr = JSON.stringify(data).toLowerCase();
            return dataStr.indexOf(filterValue) != -1;
          }
          this.dataArray.filter = ''
          this.dataArray.paginator = this.paginator;
        }

      }

    },
      error => {
        //  this.successMsg = NaN
        //  this.errorMsg = error.message
        this.notificationService.warn(error.message)
      });
  }


  onSearchClear() {
    this.applyFilter("");
  }


  applyFilter(filterValue: string) {
    this.dataArray.filter = filterValue.trim().toLowerCase();
  }


  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(CreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {

      this.loadData();
    });
  }


  onEdit(row) {
    debugger
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(CreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {

      this.loadData();
    });
  }

  onDelete($key) {
    this.dialogService.openConfirmDialog('Are You Sure?')
      .afterClosed().subscribe(res => {

        if (res) {
          this.service.deleteById($key).subscribe(() => {
            this.notificationService.success('Successfully Delete');
            this.loadData();
          },
            error => {
              this.notificationService.warn(error.message)

            });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('gggggggggggggggg')
    this.loadData();

  }

  exportAsXLSX(): void {
    debugger
    this.excelService.exportAsExcelFile('Bemo Data' ,this.dataArray.data );
  }
}
