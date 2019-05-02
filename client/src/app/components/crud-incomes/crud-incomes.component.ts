import { Component, OnInit } from "@angular/core";
import { CrudIncomesService } from "src/app/services/crud-incomes.service";

@Component({
  selector: "app-crud-incomes",
  templateUrl: "./crud-incomes.component.html",
  styleUrls: ["./crud-incomes.component.css"]
})
export class CrudIncomesComponent implements OnInit {
  constructor(private crudService: CrudIncomesService) {}
  data;
  ngOnInit() {
    this.crudService.getIncomes().subscribe(dataFromApi => {
      this.data = dataFromApi;
      console.log(this.data);
    });
  }
}
