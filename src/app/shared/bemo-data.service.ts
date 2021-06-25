import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class BemoDataService {

  serviceUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    region: new FormControl('', Validators.required),
    central: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    passiveId: new FormControl(''),
    fromPath: new FormControl('', Validators.required),
    toPath: new FormControl('', Validators.required),
    fromRoom: new FormControl('', Validators.required),
    toRoom: new FormControl('', Validators.required),
    cableCapacity: new FormControl('', Validators.required),
    cableLength: new FormControl('', Validators.required),
    brahchNumber: new FormControl('', Validators.required),
    tubeColor: new FormControl('', Validators.required),
    freeBranch: new FormControl('', Validators.required),
    fiberJunctionNumber: new FormControl('', Validators.required),

  });


  initializeFormGroup() {
    this.form.setValue({
      id: null,
      region: null,
      central: null,
      code: null,
      passiveId: null,
      fromPath: null,
      toPath: null,
      fromRoom: null,
      toRoom: null,
      cableCapacity: null,
      cableLength: null,
      brahchNumber: null,
      tubeColor: null,
      freeBranch: null,
      fiberJunctionNumber: null,
    });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  filterExactName(areasAll, val) {
    return areasAll.filter((ele) => {
      return ele.name == val
    })
  }


  insertOrUpdate(
    allFeatureNames,
    allUserTypes) {
    console.log(this.form.value)
    console.log(`${this.serviceUrl}create`)
    return this.http.post<any>(`${this.serviceUrl}create`, this.form.value).pipe(catchError(this.errorHandler));
  }


  getAll() {
    console.log(`${this.serviceUrl}all`)
    return this.http.get<any>(`${this.serviceUrl}all`).pipe(catchError(this.errorHandler));
  }



  deleteById(id): Observable<any> {
    console.log(`${this.serviceUrl}deleteById/${id}`)
    return this.http.delete(`${this.serviceUrl}deleteById/${id}`).pipe(catchError(this.errorHandler));
  }

  populateForm(row) {

    this.form.setValue({
      id: row.id,
      region: row.region,
      central: row.central ? row.central : '',
      code: row.code,
      passiveId: row.passiveId,
      fromPath: row.fromPath,
      toPath: row.toPath,
      fromRoom: row.fromRoom,
      toRoom: row.toRoom,
      cableCapacity: row.cableCapacity,
      cableLength: row.cableLength,
      brahchNumber: row.brahchNumber,
      tubeColor: row.tubeColor ? row.tubeColor : '',
      freeBranch: row.freeBranch,
      fiberJunctionNumber: row.fiberJunctionNumber,
    })

  }
}
