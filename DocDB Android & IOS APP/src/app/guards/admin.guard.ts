import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService } from '../services/auth.service';
import { tap, map, take } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private auth:AuthService,private router:Router,){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => user && user.roles.admin ? true : false),
      tap( isAdmin => {
        if(!isAdmin){
          alert("Acess Denied - Admins are Only Allowed");
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
