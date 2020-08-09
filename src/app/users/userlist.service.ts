import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
    providedIn : 'root',
})

export class userService{
    constructor(private http: HttpClient) {}

    getUserDetails(){
    return this.http
    .get('https://api.github.com/users')
    .pipe(
        map(data =>{
        const postArray = [];
        let dataArray = {};
        for(const key in data){
            dataArray = {
                'id' : data[key]['id'],
                'login' : data[key]['login'],
                'avatar_url' : data[key]['avatar_url']
            }
            postArray.push(dataArray);
        }
        return postArray;
      
    }));
    }
}