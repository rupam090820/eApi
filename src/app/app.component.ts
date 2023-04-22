import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // import serevice here
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api get methode';
  public ulist: any = [];
  public searchlist: any = [];


  p: any = 1;  // pagination
  public totalulist: any;  // pagination

  public universityList: any = [];  // for dropdown
  constructor(private uservices: ApiService) {

  }
  ngOnInit(): void {
    this.uservices.getApi().subscribe((res: any) => {
      // console.log(res);
      this.ulist = res;
      this.totalulist = res.length;
      // console.log(this.totalulist);


      // -----------------------------start here of searchlist dropdown
      this.searchlist = this.ulist.map((item: any) => {
        return item['state-province'];
      });
      // console.log(this.searchlist);
      // elemeniting duplicate value using unique array concept
      this.searchlist = this.searchlist.filter((item: any, pos: any, self: any) => {
        return self.indexOf(item) == pos
      });
      //  console.log(this.searchlist);

      // for eleminiting null item 
      this.searchlist = this.searchlist.filter(Boolean);
      // console.log(this.searchlist);
      // ---------------------------------end here of searchlist


      // when select any state then work this function

    })
  }
  onSelect(selectdata: any) {

    let SELECTDATA = selectdata.value;
    console.log(SELECTDATA);
    this.universityList = this.ulist.filter((item: any) => {
      return item['state-province'] == SELECTDATA;
    });
    console.log(this.universityList);
  }
}
