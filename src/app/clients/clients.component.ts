import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GlobalEventsService } from '@shared/globalEventsService';
import { ClientDto, ClientServiceProxy } from '@shared/service-proxies/service-proxies';
import csc, { ICountry } from 'country-state-city';
import { environment } from 'environments/environment';
import { MessageService, ConfirmationService, LazyLoadEvent, SortEvent } from 'primeng/api';

interface Category {
  name: string,
  code: string
}
interface Type {
  name: string,
  code: string
}
interface Devise {
  name: string,
  code: string
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent extends AppComponentBase implements OnInit {
  display: boolean = false;
  nouveau: boolean = true;
  titreFormulaire: string = "";
  rSClass: string = "";
  nomClass: string = "";

  formClient: ClientDto = new ClientDto();

  champsRecherche: string = "";
  categories: Category[];
  categories2: Category[];
  types: Type[];

  client: ClientDto;
  clientApercu: ClientDto = new ClientDto();
  clients: ClientDto[];

  selectedCategory: string;
  selectedType: string;

  countries: ICountry[];

  telRegEx: RegExp = /^[^<>*!]+$/

  devises: Devise[];

  isFormProfetionnel: boolean = true;
  isInsert: boolean;
  constructor(injector: Injector,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _clientServiceProxy: ClientServiceProxy,
    private _globalEventsService: GlobalEventsService) {
    super(injector);
  }

  scrollHeight: string = "0px";
  ngOnInit(): void {
    this._globalEventsService.announcedThePageChangedColorSubject("#2A95D1");
    
    this.categories = [
      { name: 'Catégorie', code: '0' },
      { name: 'Particulier', code: 'PRTC' },
      { name: 'Professionnel', code: 'PRFS' }
    ];
    this.selectedCategory = '0';
    this.categories2 = [
      { name: 'PROFESSIONNEL', code: 'PRFS' },
      { name: 'PARTICULIER', code: 'PRTC' }
    ];
    this.formClient.categorieClient = 'PRFS';
    this.types = [
      { name: 'Type', code: '0' },
      { name: 'Client', code: 'CLNT' },
      { name: 'Prospect', code: 'PRSP' }
    ];
    this.selectedType = '0';
    this.devises = [
      { name: 'MAD', code: 'MAD' },
      { name: 'EUR', code: 'EUR' },
      { name: 'DOL', code: 'DOL' }
    ];
    
    this.chargerListeClients();

    this.countries = csc.getAllCountries();
    this.initialiseForm();

    console.log(document.body.offsetHeight);
    var height = Math.max(document.body.offsetHeight, 770);
    console.log(height);

    this.scrollHeight = (height - 356).toString() + "px";
    console.log(this.scrollHeight);
  }

  sortField: string;
  sortOrder: number;
  chargerListeClients(): void {
    this._clientServiceProxy.getAllClients(this.champsRecherche, this.selectedCategory, this.selectedType,
      this.sortField, this.sortOrder).subscribe((listResult) => {
        this.clients = [];
        this.clients = listResult.items;
        if (this.clients.length != 0) {
          this.fillClientApercu(this.clients[0]);
        } else {
          this.clientApercu = new ClientDto();
        }
      });
  }

  loadClientsLazy(event: LazyLoadEvent) {
    //simulate remote connection with a timeout
    console.log("onlazy");
    setTimeout(() => {
      // //load data of required page
      // let loadedCars = this.cars.slice(event.first, (event.first + event.rows));

      // //populate page of virtual cars
      // Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);

      // //trigger change detection
      // this.virtualCars = [...this.virtualCars];
    }, Math.random() * 1000 + 250);
  }

  customSort(event: SortEvent) {
    this.sortField = event.field;
    this.sortOrder = event.order;
    this.chargerListeClients();
  }

  initialiseForm(): void {
    this.formClient = new ClientDto();
    this.formClient.pays = 'MA';
    this.formClient.deviseFacturation = 'MAD';
    this.formClient.categorieClient = 'PRFS';
    this.onFormCategorySelected();
  }

  isClientProfetionnel: boolean = false;
  onRowSelect(event) {
    this.fillClientApercu(this.client);
  }
  fillClientApercu(client): void {
    this.isClientProfetionnel = client.categorieClient == 'PRFS';
    this.clientApercu = client;
  }
  getPaysFromIsoCode(): string {
    return csc.getCountryByCode(this.clientApercu.pays).name;
  }

  showDialogNouveau() {
    this.isInsert = true;
    this.nouveau = true;
    this.titreFormulaire = "NOUVEAU CLIENT";
    this.initialiseForm();
    this.display = true;
  }
  showDialogModifier() {
    this.isInsert = false;
    this.nouveau = false;
    this.titreFormulaire = "MODIFIER CLIENT";
    this._clientServiceProxy.getByIdClient(this.clientApercu.id).subscribe((result) => {
      this.formClient = result;
      this.onFormCategorySelected();
      this.display = true;
    });
  }

  onFormCategorySelected(): void {
    this.isFormProfetionnel = this.formClient.categorieClient == 'PRFS';
  }

  isNullOrEmpty(str: string): boolean {
    return str == undefined || str.toString().trim() == "";
  }
  replaceIfIsNullOrEmpty(str: string): string {
    if (this.isNullOrEmpty(str)) {
      return "...";
    } else {
      return str;
    }
  }

  isFormValid: boolean;
  validateForm(): void {
    this.isFormValid = false;

    var isRaisonSocialeValide = !this.isFormProfetionnel || !this.isNullOrEmpty(this.formClient.raisonSociale);
    var isNomValide = this.isFormProfetionnel || !this.isNullOrEmpty(this.formClient.nom);

    this.rSClass = isRaisonSocialeValide ? "" : "rSClass";
    this.nomClass = isNomValide ? "" : "nomClass";

    if (!isRaisonSocialeValide) {
      this.messageService.add({ key: 'default', severity: 'error', summary: 'Champs requis !', detail: 'Veuillez remplir le champs : Raison sociale' });
    }
    else if (!isNomValide) {
      this.messageService.add({ key: 'default', severity: 'error', summary: 'Champs requis !', detail: 'Veuillez remplir le champs : Nom' });
    }
    else {
      this.formClient.raisonSociale = this.isFormProfetionnel ? this.formClient.raisonSociale : "";
      this.formClient.ice = this.isFormProfetionnel ? this.formClient.ice : "";
      this.formClient.secteurActivite = this.isFormProfetionnel ? this.formClient.secteurActivite : "";
      this.formClient.nom = !this.isFormProfetionnel ? this.formClient.nom : "";
      this.isFormValid = true;
    }
  }

  getReferenceFromReferenceNumber(referenceNumber: number): string {
    let reference = referenceNumber + "";
    while (reference.length < 5) reference = "0" + reference;
    return referenceNumber == undefined || referenceNumber == 0 ? "..." : "C" + reference;
  }

  getNomFromClient(client: ClientDto): string {
    if (client.categorieClient == 'PRFS') {
      return client.raisonSociale;
    } else if (client.categorieClient == 'PRTC') {
      return client.nom;
    }
  }

  getCreationDateFromClient(client: ClientDto): string {
    return client.creationTime.toDate().toLocaleDateString();
  }

  valider() {
    this.validateForm();
    if (this.isFormValid) {
      if (this.isInsert) {
        this._clientServiceProxy.createClient(this.formClient).subscribe((result) => {
          if (result != undefined) {
            this.display = false;
            var referenceClient = this.getReferenceFromReferenceNumber(result.reference);
            this.chargerListeClients();
            this.messageService.add({ key: 'default', severity: 'success', summary: 'Opération réussite !', detail: 'Le client est ajouté avec la référence : ' + referenceClient });
          }
          else {
            this.messageService.add({ key: 'default', severity: 'error', summary: 'Opération échouée !', detail: 'Une erreur serveur est parvenue ! Veuillez reessayer plutard.' });
          }
        });
      }
      else {
        this._clientServiceProxy.updateClient(this.formClient).subscribe((result) => {
          if (result != undefined) {
            this.display = false;
            var referenceClient = this.getReferenceFromReferenceNumber(result.reference);
            this.chargerListeClients();
            this.messageService.add({ key: 'default', severity: 'success', summary: 'Opération réussite !', detail: 'Le client ' + referenceClient + ' est modifié avec succès.' });
          }
          else {
            this.messageService.add({ key: 'default', severity: 'error', summary: 'Opération échouée !', detail: 'Une erreur serveur est parvenue ! Veuillez reessayer plutard.' });
          }
        });
      }
    }
  }
  confirmerSuppression() {
    this.confirmationService.confirm({
      header: "Cette action est irréversible !",
      message: 'êtes vous sûre de vouloir supprimer ce client ?',
      accept: () => {
        this.supprimerClient();
      }
    });
  }
  supprimerClient(): void {
    this._clientServiceProxy.deleteClient(this.clientApercu.id).subscribe(() => {
      var referenceClient = this.getReferenceFromReferenceNumber(this.clientApercu.reference);
      this.chargerListeClients();
      this.messageService.add({ key: 'default', severity: 'success', summary: 'Opération réussite !', detail: 'Le client ' + referenceClient + ' a été supprimé avec succès.' });

    });
  }
}
