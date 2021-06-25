import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { BemoDataService } from 'src/app/shared/bemo-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allCentral  = [ 'Cairo' , 'Banha'  ]
  allTubeColor = ['Red' ,  'Orange' ,'Yellow' ]
  constructor(public dialogRef: MatDialogRef<CreateComponent>,
    private notificationService: NotificationService, public service: BemoDataService) { }

  ngOnInit() {
  }

  onFormSubmit() {

    this.service.insertOrUpdate(
      this.allCentral,
      this.allTubeColor
      ).subscribe(
        data => {
          debugger
          console.log(data)
          if (data.status === 'Done'){
            this.notificationService.success('Saved Successfully');
            this.onClose();
          }
          else {
            console.log(data.errorMessage)
            this.notificationService.warn(data.errorMessage);
          }

          
        },
        error => {
          console.log(error)
          this.notificationService.warn(error.message);
        }

      );


  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
