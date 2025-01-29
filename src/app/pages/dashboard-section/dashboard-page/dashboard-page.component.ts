import { Component, inject, OnInit } from '@angular/core';
import { BasicCardComponent } from '../../../components/shared/cards/basic-card/basic-card.component';
import { DataTableComponent } from "../../../components/shared/data-table/data-table.component";
import { UserDataService } from '../../../services/api/user-data.service';
import { UserTransaction } from '../../../models/api/users.interface';
import { DataTableColumn } from '../../../models/data-table.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-page',
  imports: [BasicCardComponent, DataTableComponent, CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
private userDataService = inject(UserDataService);
public transactions$ = this.userDataService.getTransaction();
userTransactions: UserTransaction[] = [];

ngOnInit(): void {
  this.transactions$.subscribe(data => {
    for(let i = 0; i < 5; i++){
      const transaction = data.result[i];
      this.userTransactions.push(transaction)
    }
  })
}

colunas: DataTableColumn[] = [
  {
    label: 'Block Number',
    property: 'blockNumber'
  },
  {
    label: 'From',
    property: 'from'
  },
  {
    label: 'To',
    property: 'to'
  },
]

}

