import { Component, Input, OnInit, Directive, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, from } from 'rxjs';
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/distinct"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Contacts }  from './contacts'

@Pipe({
    name: 'matchesRegion'
})

export class MatchesRegionPipe implements PipeTransform {
    transform(items: Contacts[], region: string): Contacts[] {
        return items.filter(item => item.region === region);
    }
}

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css']

})



export class ContactDetailsComponent implements OnInit {

    public contacts: Contacts[];
    public contactsDirectors: Contacts[];
    public contactsRegionalHealthManagers: Contacts[];
    public contactsHealthSpecialist: Contacts[];
    public contactsByCountry: Contacts[];
    public contactsForRegion: Contacts[];
    public contactsDistinctRegions: string[];
    public errorMessage: string='';
    contactsCountry: string;
    public senderId: string = '';      // the App Part provides a Sender Id in the URL parameters,
    // every time the App Part is loaded, a new Id is generated.
    // The Sender Id identifies the rendered App Part.
    public previousHeight: number = 0; // the height
    minHeight: number = 0;     // the minimal allowed height
    firstResize: boolean = true;
    loaderShow: boolean = false;
    constructor(private http: Http) {
        
        
    }

    ngOnInit() {
       
        let contactsList = this.GetData();
        contactsList.then((success) => {
            this.loaderShow = false;
            let element: HTMLElement = document.getElementById('defaultOpen') as HTMLElement;
            element.click();

            console.log("success");
            let heoght = document.getElementById('contactdetailstabs').clientHeight;
            this.resizeWindow();
            console.log("**height"+heoght)
        }, (error) => {
            this.loaderShow = false;
           this.errorMessage = error ;
            })
        
  }

   


    GetData(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            let listname = decodeURIComponent(this.getQueryStringParameter("ListName"));
            if (listname && listname != undefined && listname != "undefined") {
                this.loaderShow = true;
                this.getSharePointListData("/web/lists/getbytitle('" + listname+"')/items?$orderby = Title", true).subscribe(response => {
                    var picture: string;
                    this.contacts = [];
                    const contents = response;
                    if (contents) {
                        contents.forEach((content) => {


                            this.contacts.push({
                                name: content.Title, emailID: content.Email, jobTitle: content.JobTitle, country: content.Country, businessPhoneNo: content.WorkPhone,
                                mobilePhone: content.HomePhone, region: content.Region, photo: content.Photo, city: content.WorkCity
                            }); // or self.messages.push(m) - if you used self
                            console.log("entry")


                        });

                    }
                    console.log("Contacts" + this.contacts.length);
                    document.getElementById('defaultOpen').click;
                    resolve(this.contacts);

                });
            }
            else
            {
               
                reject("Enter List Name in webpart properties to display contacts");
            }

            });
    
      return promise;
  }


  getContactsforSelectedCountry() {
      console.log("Current Country" + this.contactsCountry);
      this.contactsDistinctRegions = [];
     
      this.contactsByCountry = [];
      this.contactsByCountry = this.contacts.filter(
          contact => contact.country === this.contactsCountry);

      this.contactsDirectors = this.contacts.filter(
          contact => contact.jobTitle === "Safety Director");

      this.contactsRegionalHealthManagers = this.contactsByCountry.filter(
          contact => contact.jobTitle === "Regional Health & Safety Manager");

      this.contactsHealthSpecialist = this.contactsByCountry.filter(
          contact => contact.jobTitle === "Health & Safety Specialist");
      this.contactsForRegion = [];
      this.contactsForRegion=this.contactsForRegion.concat(this.contactsRegionalHealthManagers, this.contactsHealthSpecialist);
      //this.contactsForRegion.push(this.contactsHealthSpecialist);
      let set = new Set();
      this.contactsDistinctRegions = this.contactsByCountry.map(a => a.region);
      this.contactsDistinctRegions = [...new Set(this.contactsDistinctRegions)];
      console.log("Curent country Regions" + this.contactsDistinctRegions.length)

      //this.contactsDistinctRegions = this.contactsByCountry.map(a => a.region).distinct().toArray();
          
      
    
  }

  getSharePointListData(query: string, isCD: boolean): Observable<any> {
      let SPAppWebUrl = decodeURIComponent(this.getQueryStringParameter("SPAppWebUrl"));
      let SPHostUrl = decodeURIComponent(this.getQueryStringParameter("SPHostUrl"));
     
      console.log("appweb" + SPAppWebUrl);
      let url: string = "";
      if (isCD == true)
          url = SPAppWebUrl + "/_api/SP.AppContextSite(@target)" + query + "&@target='" + SPHostUrl + "'";
      else
          url = SPAppWebUrl + "/_api" + query;
      console.log("Final url"+url)
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('accept', "application/json;odata=verbose");
      options.headers.append('Content-Type', "application/json;odata=verbose");

      return this.http.get(url, options).pipe(
          map((res: any) => {
              return res.json().d.results;
          }), catchError((error: any) => Observable.throw(error || 'server error'))
      )

     
  }

  

  getQueryStringParameter(param: string): string {
      try
      {
          var params = (document.URL).split("?")[1].split("&");
          var strParams = "";
          for (var i = 0; i < params.length; i = i + 1)
          {
              var singleParam = params[i].split("=");
              if (singleParam[0] == param)
              {
                  return singleParam[1];
              }
          }


      }

      catch (e) { return null };

  }

  openTab(evt,tabName) {

    var i,tablinks;
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
       
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //document.getElementById(tabName).style.display = "block";
    if (evt.currentTarget != undefined)
        evt.currentTarget.className += " active";
    else
        tablinks[0].className += " active";
    this.contactsCountry = tabName;

    this.getContactsforSelectedCountry();

  }

  resizeWindow()
  {
      this.senderId = decodeURIComponent(this.getQueryStringParameter("SenderId"));
      console.log("Sender ID " + this.senderId);

      this.previousHeight = this.minHeight = document.body.clientHeight;
      console.log("Previousheight** "+this.previousHeight);

      // display the Sender Id
      var message = "<Message senderId=" + this.senderId + ">"
          + "resize(" + 100 % + "," + this.previousHeight + ")</Message>";
      window.parent.postMessage(message, "*");
  }


}
