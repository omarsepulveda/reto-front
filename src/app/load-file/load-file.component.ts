import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit {

  selectedFile: any;
  fileJSON: {};

  constructor(private serFire: FirestoreService,
    public appService: AppService) { }

  ngOnInit() {
    this.appService.getOffers();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      //console.log(JSON.parse(fileReader.readAsText));
      this.appService.data = JSON.parse(JSON.stringify(fileReader.result));
      console.log(JSON.parse(JSON.stringify(fileReader.result)));
      //this.fileJSON = JSON.parse(fileReader.result)
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  onUpload() {
    this.serFire.loadJSON(this.fileJSON).then(() => {
      console.log("Info arriba");
    });
  }

}
