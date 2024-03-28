import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationModel } from '../../core/models/pagination.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input({required:true}) data!:PaginationModel
  @Output() onGetNumberPage:EventEmitter<number>=new EventEmitter<number>()
    
    paginate(page: number) {
       this.onGetNumberPage.emit(page)
    }
}
