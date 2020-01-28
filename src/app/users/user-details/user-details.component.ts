import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as UsersActions from "../store/users.actions";
import * as UsersSelectors from "../store/users.selectors";
import { ActivatedRoute, Params } from "@angular/router";
import { map, skip, take, mergeMap } from "rxjs/operators";
import { User } from "src/app/shared/models/user.model";
import { FormGroup, FormControl } from "@angular/forms";
import { of, Observable, forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";

const AVAILABLE_CARS = [
  {
    id: 1,
    name: "Opel Astra"
  },
  {
    id: 2,
    name: "Fiat Punto"
  },
  {
    id: 3,
    name: "Audi A6"
  }
];

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  user: User;
  isLoading = true;
  isError = false;
  userEditForm: FormGroup;
  availableCars = AVAILABLE_CARS;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.experimentalMethod();

    this.createForm();

    this.store
      .pipe(map(state => UsersSelectors.selectUser(state)))
      .subscribe(userData => {
        this.user = userData.user;
        this.isLoading = userData.isLoading;
        this.isError = userData.isError;
      });

    this.route.params.subscribe((params: Params) => {
      this.isLoading = true;
      this.getUserDetailsById(+params.id);
    });
  }

  private createForm(): void {
    this.userEditForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      car: new FormControl("")
    });
  }

  private getUserDetailsById(id: number): void {
    this.store.dispatch(UsersActions.loadUserDetails({ id }));
  }

  public onCarChange(value: string): void {
    console.log(value);
  }

  // Experiments with rxjs

  private getCars(): Observable<any> {
    return this.http.get<any>("/api/cars");
  }

  private getUsers(): Observable<any> {
    return this.http.get<any>("/api/users");
  }

  public experimentalMethod(): void {
    forkJoin([this.getCars(), this.getUsers()]).subscribe(results => {
      const [cars, users] = results;

      console.log(cars, users);
    });
  }
}
