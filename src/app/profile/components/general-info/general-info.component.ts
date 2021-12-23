import {
  AfterViewInit,
  Component,
  OnInit,
  Sanitizer,
  ViewChild,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser'
import {
  FileApiServiceProxy,
  FileParameter,
  GeneralInfosDto,
  InfosEntrepriseServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ToastService } from '@shared/services/toast.service'
import { FileUpload } from 'primeng/fileupload'
import { zip } from 'rxjs'
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  providers: [ToastService],
})
export class GeneralInfoComponent implements OnInit, AfterViewInit {
  uploadedImage: any
  shouldShowDefaultImage = true
  dto: GeneralInfosDto
  logoIsRemoved: any

  constructor(
    private _formBuider: FormBuilder,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _sanitizer: DomSanitizer,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    
  ) {}

  displayedImage: any
  formGroup: FormGroup

  @ViewChild('fu') fileUpload: FileUpload
  ngOnInit() {
    this.formGroup = this.initiateForm()

    this._infosEntrepriseService
      .getGeneralInfos()
      .pipe(
        map((x) => {
          if (x.hasLogo) {
            this.downloadLogo()
          }
          return x
        }),
      )
      .subscribe((res) => {
        this.dto = res
        this.fillForm(res)
      })
  }

  ngAfterViewInit(): void {}

  downloadLogo() {
    this._fileApiServiceProxy.download().subscribe((res) => {
      if (res) {
        let blob = new File([res.data], res.fileName)
        let objectURL = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res.data))
        ;(blob as any).objectURL = objectURL
        this.fileUpload.clear()
        this.fileUpload.files.push(blob)
        this.displayedImage = objectURL
        this.shouldShowDefaultImage = false
      }
    })
  }
  
  initiateForm() {
    return this._formBuider.group({
      companyName: ['', Validators.required],
      activityArea: ['', Validators.required],
    })
  }

  fillForm(dto: GeneralInfosDto) {
    return this.formGroup.setValue({
      companyName: dto.raisonSociale,
      activityArea: dto.secteurActivite,
    })
  }

  onSelectFile(event) {
    console.log(event.files[0])
    this.displayedImage = event.files[0].objectURL
    this.uploadedImage = event.files[0]
    this.shouldShowDefaultImage = false
  }

  clear() {
    this.shouldShowDefaultImage = true
    this.logoIsRemoved = true
    
    // this._confirmDialogService.confirm({
    //   message: 'Êtes-vous sûr de vouloir supprimer le logo',
    //   acceptCallback: () => {
    //     this.shouldShowDefaultImage = true
    //     this.logoIsRemoved = true
    //   },
    //   rejectCallback:() => { }
    // })
   
  }

  save() {
    if (this.formGroup.valid) {
      if (!!this.uploadedImage) {
        //Upload Image
        let file: FileParameter = {
          fileName: this.uploadedImage.name,
          data: this.uploadedImage,
        }

        this._fileApiServiceProxy
          .upload(file)
          .pipe(
            map((x) => {
              this.dto.hasLogo = true
              this.updateGeneralInfos()
              return x
            }),
          )
          .subscribe((res) => {
            if (res) {
              //Toast success
              console.log(res)
            } else {
              //Toast failed
              this._toastService.error({
                detail: 'Une erreur s\'est produite lors de la chargement du logo',
              })
            }
          })
      }
      else {
        if(this.logoIsRemoved) {
          this._fileApiServiceProxy.delete()
          .pipe(
            map((x) => {
              this.dto.hasLogo = false
              this.updateGeneralInfos()
              return x
            }),
          )
            .subscribe(res => {
            if (res) {
              
            } else {
              this._toastService.error({
                detail: 'Une erreur s\'est produite lors de la suppression du logo ',
              })
            }
          })
         
        }
        else {
          this.updateGeneralInfos()
          
        }
      }
      console.log(this.dto)
    }
    else {
      this._toastService.error({
        detail: 'Veuillez remplir tous les chemps',
      })
    }
  }

  updateGeneralInfos() {
    let generalInfosDto = new GeneralInfosDto({
      ...this.dto,
      raisonSociale: this.formGroup.value.companyName,
      secteurActivite: this.formGroup.value.activityArea,
    })
    this._infosEntrepriseService
      .updateGeneralInfos(generalInfosDto)
      .subscribe((res) => {
        if (res) {
          this._toastService.success({
            detail: 'Les informations générales sont modifiées',
          })
        } else {
          this._toastService.error({
            detail: 'Une erreur s\'est produite lors de la modification',
          })
        }
      })
    
  }

  onUpload(event) {}
}
