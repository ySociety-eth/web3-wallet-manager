import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BasicCardComponent } from '../../../components/shared/cards/basic-card/basic-card.component';
import { UserDataService } from '../../../services/api/user-data.service';
import { DataTableColumn } from '../../../models/tables.interface';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from '../../../components/shared/custom-table/custom-table.component';
import { UserTransaction } from '../../../models/api/users.interface';
import { map, shareReplay } from 'rxjs';
import { UpdatedTimeService } from '../../../services/updated-time.service';

@Component({
  selector: 'dashboard-page',
  imports: [BasicCardComponent, CommonModule, CustomTableComponent],
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
  },
  {
    label: 'Time',
    property: 'timeStamp',
    isTimestamp: true,
    sort: 'none',
  },
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
      active: true,
      key: 'transactions',
      dataTableColumns: this.transactionColumns,
      dataTableRow: [],
      loadData: this.transactions$.pipe(
        map(data => data.result),
        shareReplay(1)
      )
    },
    {
      label: 'Blocks',
      active: false,
      key: 'blocks',
      dataTableColumns: this.blocksColumns,
      dataTableRow: [],
      loadData: this.blocks$.pipe(map
        (data => data.items),
        shareReplay(1)
      )
    }
  ];
}
