import { Component, inject, input, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/api/user-data.service';
import { UserTransaction } from '../../../models/api/users.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  public columns = input<string[]>();
  public data = input<any[]>();


  
  // columns = ['Coluna1', 'Coluna2', 'c3'];
  // data: any[] = [
  //   ['a', 'b', 'c'],
  //   ['d', 'e', 'f'],
  //   ['as', 'bs', 'cs']
  // ];


//   private userDataService = inject(UserDataService);
//   public transactions$ = this.userDataService.getTransaction();

//   userTransactions: UserTransaction[] = [];

// ngOnInit(): void {
//   this.transactions$.subscribe(data => {
//   for(let i = 0; i < 5; i++){
//     const transaction = data.result[i];
//     this.userTransactions.push(transaction)
//   }
//   })
//   console.log(this.userTransactions)
// }

//   printData(){
//     console.log(this.transactions$);
//   }
}
