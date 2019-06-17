import { Component, Input, SimpleChanges, OnChanges, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnChanges {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  @Input('parentData') public contrasteOn = true;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

}
