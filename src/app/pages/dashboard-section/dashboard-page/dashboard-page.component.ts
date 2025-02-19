import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BasicCardComponent } from '../../../components/shared/cards/basic-card/basic-card.component';
import { UserDataService } from '../../../services/api/user-data.service';
import { DataTableColumn } from '../../../models/tables.interface';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from '../../../components/shared/custom-table/custom-table.component';
import { UserTransaction } from '../../../models/api/users.interface';
import { map, shareReplay } from 'rxjs';
import { UpdatedTimeService } from '../../../services/updated-time.service';
import { CardComponent } from '../../../components/shared/cards/card/card/card.component';
import { title } from 'node:process';
import { DataTableTemplateComponent } from "../../../components/shared/data-table/template/data-table-template.component";

@Component({
  selector: 'dashboard-page',
  imports: [BasicCardComponent, CommonModule, CustomTableComponent, CardComponent, DataTableTemplateComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
//injections
private userDataService = inject(UserDataService);
private updatedTimeService = inject(UpdatedTimeService);
//variables
protected transactions$ = this.userDataService.getTransaction();
protected blocks$ = this.userDataService.getBlocks();
protected transactionsData: UserTransaction[] = [] 
protected blocksData: any = {};
protected updatedTime = this.updatedTimeService.getTimeNow();

transactionColumns: DataTableColumn[] = [
  {
    label: 'Block Number',
    property: 'blockNumber',
    sort: 'none',
    useTemplate: true
  },
  {
    label: 'Time',
    property: 'timeStamp',
    isTimestamp: true,
    sort: 'none',
  },
  // {
  //   label: 'Gas Limit',
  //   property: 'gas',
  //   sort: 'none',
  // },
  {
    label: 'From',
    property: 'from',
    sort: 'none',
    truncate: 'middle',
    copyToClipboard: true,
    highlighData: true,
    href: (address: any) => `https://etherscan.io/address/${address}`,
    hrefTarget: '_blank',
  },
  {
    label: 'To',
    property: 'to',
    sort: 'unavailable',
    truncate: 'middle',
    copyToClipboard: true,
    highlighData: true,
    href: (address: any) => `https://etherscan.io/address/${address}`,
    hrefTarget: '_blank',
  },
]

 blocksColumns: DataTableColumn[] = [
  {
    label: 'Block Number',
    property: 'height',
    sort: 'none',
    useTemplate: true
  },
  {
    label: 'Time',
    property: 'timestamp',
    isTimestamp: true,
    sort: 'none',
  },
  {
    label: 'Hash',
    property: 'hash',
    sort: 'none',
    truncate: 'middle',
    copyToClipboard: true,
    highlighData: true,
    href: (hash: any) => `https://etherscan.io/block/${hash}`,
    hrefTarget: '_blank',
  },
]


  tableList = [
    {
      label: 'Transactions',
      title: 'Recent Transactions',
      active: true,
      key: 'transactions',
      dataTableColumns: this.transactionColumns,
      dataTableRow: [],
      loadData: this.transactions$.pipe(
        map(data => data.result),
        shareReplay(1)
      ),
      page: {
        currentPage: 1,
        totalPages: 50
      }
    },
    {
      label: 'Blocks',
      title: 'Recent Blocks',
      key: 'blocks',
      dataTableColumns: this.blocksColumns,
      dataTableRow: [],
      loadData: this.blocks$.pipe(map
        (data => data.items),
        shareReplay(1)
      ),
      page: {
        currentPage: 1,
        totalPages: 25
      }
    }
  ];
}
