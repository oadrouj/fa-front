import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from '@app/table/table.component';
import { ReferencePrefix } from '@shared/enums/reference-prefix.enum';
import { GlobalEventsService } from '@shared/globalEventsService';
import { DevisServiceProxy, ClientServiceProxy, CatalogueServiceProxy, CreateCatalogueInput, CatalogueDto, UpdateCatalogueInput, ICatalogueDto } from '@shared/service-proxies/service-proxies';
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service';
import { FakeService } from '@shared/services/fake.service';
import { FormatService } from '@shared/services/format.service';
import { ToastService } from '@shared/services/toast.service';
import { CalculationsService } from '@shared/services/calculations.service';
import * as moment from 'moment';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  selectedItem: any;
  dialogTitle: string;

  constructor(
    private _formatService: FormatService,
    private _catalogueServiceProxy: CatalogueServiceProxy,
    private _toastService: ToastService,
    public _fakeService: FakeService,
    private _devisServiceProxy: DevisServiceProxy,
    private _clientServiceProxy: ClientServiceProxy,
    private _confirmDialogService: ConfirmDialogService,
    public globalEventsService: GlobalEventsService,
    private formBuilder: FormBuilder,
    private _calculationsService: CalculationsService
 
  ) { }

  favIcon: HTMLLinkElement = document.querySelector('#favIcon');
  ngOnInit() {
    this.globalEventsService.announcedThePageChangedColorSubject(
      `var(--${this.primaryColor}-color`,
    )
    
    this.favIcon.href = "assets/img/CatalogueLogo.png"

    this.initiateFormGroup();

  }

  @ViewChild(TableComponent, { static: false })
  tableChild: TableComponent
  title = 'Item'
  imageSrc = 'assets/img/CatalogueLogo.png'
  primaryColor = 'purple'
  secondaryColor = ''
  tableSelectionColor = 'var(--light-purple-color)'
  searchText = ''
  typeOptions = [
    { value: 'produit', label: 'produit' },
    { value: 'prestation', label: 'prestation' },
  ]
  selectedType: string
  
  cols = [
    {
      header: 'REFERENCE',
      field: 'reference',
      type: 'text',
      format: (number, customPrefix) =>
      this._formatService.formatReferenceNumber(
        number,
        customPrefix ? customPrefix : ReferencePrefix.Catalogue,
      )
    },
      {
        header: 'DATE D\'AJOUT',
        field: 'addedDate',
        type: 'date',
        format: (date) => (date.toDate()),
        // format: (date) => (date._i ? new Date(date._i) : new Date(date._d)),
      },
      {
        header: 'ITEM',
        field: 'designation',
        type: 'text',
      },
      {
        header: 'PRIX HT',
        field: 'htPrice',
        type: 'currency',
      },
      {
        header: 'UNITE',
        field: 'unity',
        type: 'number',
      },
      {
        header: 'TVA',
        field: 'tva',
        type: 'number',
        suffix: '%'
      },
      {
        header: 'TOTAL VENTES TTC',
        field: 'totalSalesTTC',
        type: 'currency',
      },

        
  ]

  Currency = 'MAD'
  dialogDisplay = false
  catalogueOptions = ['produit', 'prestation']
  formGroup: FormGroup
  tvaOptions = [10, 15, 20]
  unityOptions = ['Heures', 'Kg']

  initiateFormGroup(){
    this.formGroup =  this.formBuilder.group({
      designation: ['', Validators.required],
      description: [''],
      unity: ['Heures'],
      htPrice: [0],
      tva: [0],
      minimalQuantity: [1],
      dialogSelectedType: ['produit']
    })
  }

  getListApi(event, data) {

  let typeFilter = event.filters.type && event.filters.type.value
    return this._catalogueServiceProxy.getAllCatalogues(
        event.first,
        event.rows,
        event.globalFilter,
        event.sortField,
        event.sortOrder,
        typeFilter,
      )
      .pipe(
        map((res) => {
          // data.items.forEach(
            data = res;
          // )
          return {
            items: res.items,
            length: res.items.length,
            montantTotalAllDevis: 0,
          }
        }),
      )
  }  

  // firstTimeCharged = true
  selectionChange(selectionEventObject) {
    this.selectedItem = selectionEventObject.result ? {...selectionEventObject.result}
      : null
      
      this.emitNotificationSelectedDevisChanged(this.selectedItem)
      console.log(this.selectedItem)
  //   this.firstTimeCharged && (this.montantTotalAll = this.tableChild.montantTotalAllDevis);
  //   this.firstTimeCharged = false
  } 

  //Subject events:
  notifySelectedDevisChanged = new Subject<any>()
  emitNotificationSelectedDevisChanged(item: any) {
    this.notifySelectedDevisChanged.next(item)
  }

  filterSubject = new Subject<any>()
  emitFilterEvent(filterType: string, value: any) {
    if (filterType == 'filterByInput') {
      setTimeout(() => {
        this.filterSubject.next({
          type: 'filterByInput',
          value,
        })
      }, 500)
    } else if (filterType == 'filterByButton') {
      this.filterSubject.next({
        type: 'filterByButton',
        value: {
          type: this.selectedType
        },
      })
    }
  }
  
  addToTable(newItem){
    this.tableChild.tableData = [...this.tableChild.tableData, newItem]
    this.tableChild.tableData.sort((a, b) =>
      a.reference < b.reference ? 1 : -1,
    )

    this.tableChild.defaultRowToBeSelected = {
      ...this.selectedItem ,
      rowId: 0
    }
  }

  refreshTable(item){
    let index = this.tableChild.tableData.findIndex(val => val.id == item.id)
    this.tableChild.tableData[index] = {...item}
    this.tableChild.tableData = [...this.tableChild.tableData]

  }

  newCatalogue() {
    this.dialogTitle = 'NOUVEL'
    this.dialogDisplay = true
  }

  closeDialog() {
    this.dialogDisplay = false
    this.formGroup.reset()
  }

  editCatalogue() {
    if(this.selectedItem) {

      this.dialogTitle = 'MODIFIER'
      this.formGroup.setValue({
        'designation': this.selectedItem.designation,
        'description': this.selectedItem.description,
        'unity': this.selectedItem.unity,
        'htPrice': this.selectedItem.htPrice,
        'tva': this.selectedItem.tva,
        'minimalQuantity': this.selectedItem.minimalQuantity,
      })

      this.dialogDisplay = true
  }
  else {
    this.catchNoSelectedItem(this.selectedItem, 'Catalougue') 
  }
  
  
  }

  deleteCatalogue() {
    if(this.selectedItem){
      this._confirmDialogService.deleteConfirm({
        acceptCallback:() => {
          this._catalogueServiceProxy.deleteCatalogue(this.selectedItem.id).subscribe(res => {
            if(res){
              this._toastService.success({
                summary: 'Opération réussie',
                detail:  'Le catalogue est supprimé avec succès',
              })

              this.tableChild.tableData = this.tableChild.tableData.filter(
                (item) => !item || item.id != this.selectedItem.id,
              )
              
              this.selectedItem = this.tableChild.tableData[0]
              this.tableChild.defaultRowToBeSelected = {
                ...this.selectedItem,
                rowId: 0
              }

            }
    
            else {
              //TODO: propagate this method to other components
              this._toastService.deleteInternalError();          
            }
          })
        },
        rejectCallback:() => {
          
        }
      })
    
    }
    else {
      this.catchNoSelectedItem(this.selectedItem, 'catalougue') 
    }
  }

  submit(){
    if(this.formGroup.valid) {
      if(this.dialogTitle == "NOUVEL") {
        let createCatalogInput = new CreateCatalogueInput({
          designation: this.formGroup.value.designation,
          description: this.formGroup.value.description,
          catalogueType: this.formGroup.value.dialogSelectedType,
          unity: this.formGroup.value.unity,
          htPrice: this.formGroup.value.htPrice || 0,
          tva: this.formGroup.value.tva || 0,
          minimalQuantity: this.formGroup.value.minimalQuantity || 1,
        })
        this._catalogueServiceProxy.createCatalogue(createCatalogInput).subscribe(res => {
          if(res){
            this._toastService.success({
              summary: 'Opértion réussie',
              detail: 'Vous avez ajouté un nouvel item',
            })

            this.selectedItem = {
              ...createCatalogInput,
              id: res.id,
              reference: res.reference,
              addedDate: res.addedDate,
              referencePrefix: ReferencePrefix.Catalogue, 
              totalSalesTTC: 0, 
              totalUnitsSold: 0
            }

            this.addToTable(this.selectedItem)
           this.updateTtcPrice('ttcPrice')
            this.dialogDisplay = false;
          }
            else {
              this._toastService.internalError()
          }
        })
      }
      else if(this.dialogTitle == "MODIFIER")
      {
          let updateCatalogInput = new UpdateCatalogueInput({
            id: this.selectedItem.id,
            designation: this.formGroup.value.designation,
            description: this.formGroup.value.description,
            catalogueType:this.formGroup.value.dialogSelectedType,
            unity: this.formGroup.value.unity,
            htPrice: this.formGroup.value.htPrice || 0,
            tva: this.formGroup.value.tva || 0,
            minimalQuantity: this.formGroup.value.minimalQuantity || 1,
          })
          
          this._catalogueServiceProxy.updateCatalogue(updateCatalogInput).subscribe(res => {
            if(res){
              this._toastService.success({
                summary: 'Opértion réussie',
                detail: 'Vous avez modifié ce item avec succès',
              })
              this.selectedItem = {
                ...this.selectedItem,
                ...updateCatalogInput,
              
              }    
              this.refreshTable({...this.selectedItem})
              this.dialogDisplay = false;
            }
              else {
                this._toastService.internalError()
            }
          })
        }
     
    }

    else {
      this._toastService.error({
        summary: 'Erreur', 
        detail: 'Veuillez remplir le chemps Désignation'
      })
    }
  }
  
  catalogueFormatReferenceNumber(catalogue) {
    return  catalogue && this._formatService.formatReferenceNumber(
      catalogue.reference,
      catalogue.referencePrefix ? catalogue.referencePrefix : ReferencePrefix.Catalogue,
    )
  }

  isNullOrEmpty(str: string): boolean {
    return str == undefined || str.toString().trim() == ''
  }

  replaceIfIsNullOrEmpty(key: string): string {
    if (!this.selectedItem || this.isNullOrEmpty(this.selectedItem[key])) {
      return '...'
    } else {
      this.updateTtcPrice(key)
      return this.selectedItem[key]
    }
  }

  updateTtcPrice(key){
    if(key == "ttcPrice"){
      this.selectedItem.ttcPrice = this._calculationsService
        .calculateTTC(this.selectedItem.htPrice, this.selectedItem.tva)
    }
  }
  
  catchNoSelectedItem(selectedItem, element: string){
    if(!selectedItem)
    {
      this._toastService.error({ 
        summary: `Aucun ${element} sélectionné`,
        detail: `Séléctionner un ${element}`
      })
      return false 
    }
  }
}
