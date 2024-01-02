import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { FormState } from '../transaction.reducer';
import { TransactionService } from '../transaction.service';


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-add-capability',
  templateUrl: './add-capability.component.html',
  styleUrl: './add-capability.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class AddCapabilityComponent {
  totalRtn!: [{
    RTNnumber:'any',
    type: 'any',
    capability: 'any',
    routeId: 'any',
    routeName: 'any',
    range: 'any'
  }];
  displayedColumns: string[] = ['RTNnumber', 'Type','Capability', 'RouteName', 'Range'];
  dataSource = new MatTableDataSource(this.totalRtn);
  constructor(private store: Store<AppState>, private transactionService: TransactionService) { }
  ngOnInit(): void {
    this.transactionService.fechRTN();
    this.store.pipe(select('products')).subscribe((userState: FormState) => {
      this.totalRtn = userState.rtn;
      this.dataSource = new MatTableDataSource(this.totalRtn);
    });
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clickedTab(event: any){
    console.warn(event);
  }

}

