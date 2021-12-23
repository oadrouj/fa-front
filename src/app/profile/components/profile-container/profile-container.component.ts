import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import {GeneralInfoComponent} from '../general-info/general-info.component'
import {ContactInfosComponent} from '../contact-infos/contact-infos.component'
import { AdministrativeInfosComponent } from '../administrative-infos/administrative-infos.component';
import { DefaultAnnotationsComponent } from '../default-annotations/default-annotations.component';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit, AfterViewInit{
 

  constructor(
  ) { }


  @Input() title: string
  @Input() subtitle: string
  @Input() componentName: string
  componentList = [GeneralInfoComponent]
  currentComponent: any
    
  ngOnInit() {
    switch(this.componentName){
      case 'GeneralInfos': this.currentComponent = GeneralInfoComponent;
        break;
      case 'ContactInfos': this.currentComponent = ContactInfosComponent;
        break;
      case 'AdministrativeInfos': this.currentComponent = AdministrativeInfosComponent;
        break;
      case 'DefaultAnnotations': this.currentComponent = DefaultAnnotationsComponent;
        break;

    }
  }

  ngAfterViewInit(){
  }

}
