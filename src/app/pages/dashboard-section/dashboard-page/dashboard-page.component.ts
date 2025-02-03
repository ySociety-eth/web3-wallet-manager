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
export class DashboardPageComponent{
private userDataService = inject(UserDataService);
public transactions$ = this.userDataService.getTransaction();
userTransactions: UserTransaction[] = [];



colunas: DataTableColumn[] = [
  {
    label: 'Block Number',
    property: 'blockNumber',
    sort: 'none',
    useTemplate: true,
  },
  {
    label: 'From',
    property: 'from',
    sort: 'none',
    truncate: 'middle',
    useTemplate: true,
    copyToClipboard: true
  },
  {
    label: 'To',
    property: 'to',
    sort: 'unavailable',
    truncate: 'middle'
  },
]
  x(e:any) {
    console.log(e)
  }
}

