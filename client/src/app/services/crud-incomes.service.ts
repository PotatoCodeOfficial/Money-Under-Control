import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CrudIncomesService {
  constructor(private http: HttpClient) {}

  getIncomes() {
    return this.http.get("/incomes");
  }
}
