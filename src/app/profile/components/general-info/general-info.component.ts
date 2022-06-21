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
  CreateInfosEntrepriseInput,
  FileApiServiceProxy,
  FileParameter,
  GeneralInfosDto,
  InfosEntrepriseServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service'
import { ToastService } from '@shared/services/toast.service'
import { AppSessionService } from '@shared/session/app-session.service'
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper'
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
  displayedImage: any
  formGroup: FormGroup


  @ViewChild('fu') fileUpload: FileUpload

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  imageCroppedInstance : ImageCroppedEvent;
  cropperCleanImageURL:any;

  constructor(
    private _formBuider: FormBuilder,
    private _fileApiServiceProxy: FileApiServiceProxy,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
    private _sanitizer: DomSanitizer,
    private _toastService: ToastService,
    private _confirmDialogService: ConfirmDialogService,
    private _sessionService: AppSessionService,

  ) {}


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
        if(res) {
          this.dto = res
          this.fillForm(res)
        }
      
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
      companyName: [''],
      activityArea: [''],
    })
  }

  fillForm(dto: GeneralInfosDto) {
    return this.formGroup.setValue({
      companyName: dto.raisonSociale || '',
      activityArea: dto.secteurActivite || ''
    })
  }

  onSelectFile(event) {
    this.displayedImage = event.files[0].objectURL
    this.uploadedImage = event.files[0]
    this.shouldShowDefaultImage = false

    this.cropperCleanImageURL = this._sanitizer.bypassSecurityTrustUrl(event.files[0].objectURL);
    console.log(this.cropperCleanImageURL);
    console.log(this.cropperCleanImageURL.changingThisBreaksApplicationSecurity);
    this.imageChangedEvent = event.originalEvent;

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
    console.log(this.uploadedImage);
    if (this.formGroup.valid) {
      if (!!this.uploadedImage) {
        //Upload Image
        let file: FileParameter = {
          fileName: this.uploadedImage.name,
          data: base64ToFile(this.displayedImage),
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

            } else {
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
    }
    else {
      this._toastService.error({
        detail: 'Veuillez remplir tous les chemps',
      })
    }
  }

  updateGeneralInfos() {
    if(this.dto.id){
      let generalInfosDto = new GeneralInfosDto({
        ...this.dto,
        raisonSociale: this.formGroup.value.companyName,
        secteurActivite: this.formGroup.value.activityArea,
      })
      this._infosEntrepriseService
        .updateGeneralInfos(generalInfosDto)
        .subscribe((res) => {
          if (res) {
            this._sessionService.entrepriseName = generalInfosDto.raisonSociale
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

    else {

      let createInfosEntrepriseInput = new CreateInfosEntrepriseInput({
        raisonSociale: this.formGroup.value.companyName,
        secteurActivite: this.formGroup.value.activityArea,
      })
      if(!createInfosEntrepriseInput.raisonSociale && !createInfosEntrepriseInput.secteurActivite)
         this._toastService.error({
              detail: 'Vous devez remplir au moins un chemps',
            })
      else { 
        this._infosEntrepriseService.createInfosEntreprise(createInfosEntrepriseInput).subscribe((res) => {
          // console.log(res);
          // if (res) {
            this._toastService.success({
              detail: 'Les informations générales sont ajoutées',
            })
          // } 
          // else {
            // this._toastService.error({
              // detail: 'Une erreur s\'est produite lors de l\' ajout',
            // })
          // }
        })
      }
    
    }
   
    
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event, base64ToFile(event.base64));
   
    this.displayedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }
  onUpload(event) {
   /*  console.log("test upload cropeer");
    console.log(event);
    this.imageChangedEvent = event; */
  }


}
