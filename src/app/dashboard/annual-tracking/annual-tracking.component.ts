import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core'
import {
  AnnualEstimatesTrackingDto,
  AnnualInvoicesTrackingDto,
  StatisticsServiceProxy,
} from '@shared/service-proxies/service-proxies'
import { Chart, ChartType, IChartistData, IBarChartOptions } from 'chart.js'
import * as moment from 'moment'
@Component({
  selector: 'app-annual-tracking',
  templateUrl: './annual-tracking.component.html',
  styleUrls: ['./annual-tracking.component.css'],
})
export class AnnualTrackingComponent implements OnInit, AfterViewInit {
  constructor(private _statisticsServiceProxy: StatisticsServiceProxy) {}

  @ViewChild('chart') chart: any
  type: ChartType = 'line'
  @Input() currency : string;
  options: IBarChartOptions = {
    axisX: {
      showGrid: false,
    },
    height: 300,
  }

  invoiceDatasets = [
    {
      label: 'Factures en retard de paiement',
      data: [],
      fill: false,
      borderColor: '#E8523F',
      tension: 0.4,
      hidden: false,
    },
    {
      label: 'Factures en attente de paiement',
      data: [],
      fill: false,
      borderColor: '#F8B849',
      tension: 0.4,
      hidden: false,
    },

    {
      label: 'Factures Encaissées',
      data: [],
      fill: false,
      borderColor: '#5CBCA6',
      tension: 0.4,
      hidden: false,
    },
  ]

  estimateDatasets = [
    {
      label: 'Devis validés ',
      data: [],
      fill: false,
      borderColor: '#5CBCA6',
      tension: 0.4,
      hidden: false,
    },
    {
      label: 'Devis transformés',
      data: [],
      fill: false,
      borderColor: '#F8B849',
      tension: 0.4,
      hidden: false,
    },
  ]

  basicData: IChartistData = {
    labels: [
      'Janvier',
      'février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    datasets: this.invoiceDatasets,
  }

  basicOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      legend: false,
    },
  }

  applicationStartDate = 2022
  yearDropdownButtonLabel
  busnissDocumentDropdownButtonLabel
  years: Array<number>
  busnissDocummentImagesSrc: Array<string>

  ngOnInit() {
    let incrementor = this.applicationStartDate
    this.years = Array.from({
      length: moment().year() - this.applicationStartDate + 1,
    }).map((item: number) => incrementor++)
    this.busnissDocummentImagesSrc = [
      'assets/img/total-statistics-estimate.png',
      'assets/img/total-statistics-invoice.png',
    ]
  }

  fillInvoicesTrackingData() {
    this.chart.data.datasets = this.invoiceDatasets
    this._statisticsServiceProxy
      .getAnnualInvoicesTracking(
        this.yearDropdownButtonLabel || this.applicationStartDate,
      )
      .subscribe((res) => {
        this.chart.data.datasets[2].data = this.mapValuesToNull(res.cashedInvoicesSerie)
        this.chart.data.datasets[1].data = this.mapValuesToNull(res.waitingInvoicesSerie)
        this.chart.data.datasets[0].data = this.mapValuesToNull(res.lateInvoicesSerie)
        this.chart.refresh()
      })
  }

  fillEstimatesTrackingData() {
    this.chart.data.datasets = this.estimateDatasets
    this._statisticsServiceProxy
      .getAnnualEstimatesTracking(
        this.yearDropdownButtonLabel || this.applicationStartDate,
      )
      .subscribe((res) => {
        this.chart.data.datasets[0].data = this.mapValuesToNull(res.validatedEstimatesSerie)
        this.chart.data.datasets[1].data = this.mapValuesToNull(res.transformedEstimatesSerie)

        this.chart.refresh()
      })
  }

  mapValuesToNull(array: number[]){
    if(array.every(item => item == 0 )) 
      return []
    else
      return array
  }

  ngAfterViewInit(): void {
    this.fillInvoicesTrackingData()
  }

  toggleLatePaymentInvoices() {
    this.chart.data.datasets[0].hidden = !this.chart.data.datasets[0].hidden
    this.chart.refresh()
  }

  toggleWaitingPaymentInvoices() {
    this.chart.data.datasets[1].hidden = !this.chart.data.datasets[1].hidden
    this.chart.refresh()
  }

  toggleCashedPaymentInvoices() {
    this.chart.data.datasets[2].hidden = !this.chart.data.datasets[2].hidden
    this.refreshChart()
  }

  updateYearValue(data) {
    this.yearDropdownButtonLabel = data
    this.refreshChart()
  }

  updateBusnissDocumentValue(data) {
    this.busnissDocumentDropdownButtonLabel = data
    this.refreshChart()
  }

  refreshChart() {
    if (this.busnissDocumentDropdownButtonLabel == 'Devis') this.fillEstimatesTrackingData()
    else {
      this.fillInvoicesTrackingData()
    }
  }

}
