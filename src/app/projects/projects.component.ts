import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  configUrl = '';
  repos: any;

  constructor(private http: HttpClient ) {

  }

  getConfig() {
  return this.http.get("https://api.github.com/users/MohamedAlDeep/repos");
  }
  showConfig() {
    this.getConfig()
      .subscribe((data) => {
        this.repos = data
        })
    }

  ngOnInit(){
    this.showConfig()
  }

}
