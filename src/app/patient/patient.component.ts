import { Component, OnInit } from '@angular/core';
import { ApiCallingsService } from '../api-callings.service';
import { Statics } from '../statics';
import { PatientModel } from './patient.model';
import { error } from 'util';
declare var $ :any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private service: ApiCallingsService) { }
  availablePatientDetails: Array<PatientModel>;
  displayPatientsDetails: Array<PatientModel>;
  viewMorePatient: PatientModel;
  newPatient: PatientModel;

  ngOnInit() {
    this.availablePatientDetails = new Array<PatientModel>();
    this.displayPatientsDetails = new Array<PatientModel>();
    this.viewMorePatient = new PatientModel();
    this.newPatient = new PatientModel();
    this.getAllPatientInformations();
  }

  getAllPatientInformations() {
    this.displayPatientsDetails = [];
    this.availablePatientDetails = [];
    this.service.get(Statics.PATIENT_API, false).subscribe(data => {
      data.data.forEach(patient => {
        let newPatient = new PatientModel();
        newPatient.civilStatus = patient.civilStatus;
        newPatient.dateOfBirth = patient.dateOfBirth;
        newPatient.gender = patient.gender;
        newPatient.patientAddress = patient.patientAddress;
        newPatient.patientFulName = patient.patientFulName;
        newPatient.patientNIC = patient.patientNIC;
        newPatient.patientTitle = patient.patientTitle;
        newPatient.patientUserName = patient.patientUserName;
        newPatient.preferedLanguage = patient.preferedLanguage;
        newPatient.telephoneNumber = patient.telephoneNumber;
        this.availablePatientDetails.push(newPatient);
      })
      this.displayPatientsDetails = this.availablePatientDetails;
    })
  }

  loadMoreDetails(patient) {
    this.viewMorePatient = patient;
    $('#viewMore').modal('show');
  }

  preAddNewPatient() {
    this.newPatient = new PatientModel();
    $('#addNew').modal('show');
  }

  savePatientDetail() {
    this.service.post(Statics.PATIENT_API, false, this.newPatient).subscribe(data => {
      alert(data.message);
      $('#addNew').modal('hide');
      this.getAllPatientInformations();
    }, error => {
      alert(error);
    })
  }

}
