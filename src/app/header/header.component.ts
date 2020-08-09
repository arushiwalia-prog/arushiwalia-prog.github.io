import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
// import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {

    console.log(this.isAuthenticated);
    this.userSub = this.authService.user.subscribe(user => {
      console.log(user);
      this.isAuthenticated = !!user; // ? false : true; // !!user;
      console.log(!user);
      console.log(!!user);
    });
   
  }

  OnSaveData() {
    this.dataStorageService.storeRecipe();
  }

  OnFetchData() {
    this.dataStorageService.fecthRecipe().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  OnLogOut() {
    this.authService.logOut();
  }
}
