import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-handler',
  templateUrl: './file-handler.component.html' 
})
export class FileHandlerComponent implements OnInit {
  url: any;

  constructor() { }

  ngOnInit() {
  }

  getURL(){
    return this.url;
  }

  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
}

}
