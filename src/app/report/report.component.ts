import { Component, OnInit } from '@angular/core';
import { Report } from '../class/report';
import { ReportService } from '../shared/report.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  role:string | undefined;
  listReport: any;
  archivedlistReport: any;
  form : boolean = true;
  report! : Report;
  public chart: any ;
  reports: any;
  constructor(private reportService:ReportService,private router: Router) { }

  ngOnInit(): void {
    this.role = ""+sessionStorage.getItem("Role");

    this.getAllReport();
    this.getCurrentReports();
    this.getAllArchivedReport();
    this.getpercentege();
    this.createChart();


  }
  getAllReport() {
    this.reportService.getAllReport().subscribe((res:any) => this.listReport = res)
  }
  getCurrentReports(){
    this.reportService.getCurrentReports().subscribe((res:any) => this.reports = res)
  }
  getAllArchivedReport(){
    this.reportService.getAllArchivedReport().subscribe((res:any) => {this.archivedlistReport= res;
    });
  }
  redirectToaddReport(){
    this.router.navigate(['addreport']);
  }
  ArchiveReport(id:any){
    this.reportService.archiveReport(id).subscribe((res:any) => this.getAllReport());
    console.log("report Archived")
    window.location.reload();
  }
  RestoreReport(id:any){
    this.reportService.RestoreReport(id).subscribe((res:any) => this.getAllReport()==res);
    console.log("report Restored")
    window.location.reload();
  }
  deletRport(id:number){
      this.reportService.deletReport(id).subscribe();
      this.getAllReport();
      window.location.reload();
}
redirectToaddReponse(reportId:number){
  this.router.navigate(['addreportresponse/'+reportId]);
}
getpercentege() {
  this.reportService.percentage().subscribe(data => {
    // Affiche les données dans la console

    // Récupérer les clés et les valeurs de l'objet data
    const keys = Object.keys(data);
    const values = Object.values(data);
    console.log(data);

    // Mettre à jour les données du graphique avec les résultats de getUserPercentage()
    this.chart.data.labels = keys;
    this.chart.data.datasets[0].data = values;

    // Générer un tableau de couleurs en fonction du nombre de données
    const colors = this.generateColors(values.length);
    this.chart.data.datasets[0].backgroundColor = colors;

    this.chart.update();
  });
}

generateColors(numColors : number) {
  // Générer un tableau de couleurs avec une saturation et une luminosité aléatoires
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturation entre 50% et 100%
    const lightness = Math.floor(Math.random() * 40) + 30; // Luminosité entre 30% et 70%
    colors.push('hsl(${hue}, ${saturation}%, ${lightness}%)');
  }
  return colors;
}

createChart() {
  this.chart = new Chart('MyChart', {
    type: 'pie',
    data: {
      labels: [], // Les étiquettes représentent les identifiants numériques
      datasets: [{
        label: 'My First Dataset',
        data: [], // Les données seront mises à jour à partir de la réponse JSON
        backgroundColor: [], // Les couleurs seront générées à partir des données
        hoverOffset: 4
      }]
    },
    options: {
      aspectRatio: 2.5
    }
  });
}
}
