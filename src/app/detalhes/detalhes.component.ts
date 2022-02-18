import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  @Input() selectedPerson: Person;
  @Output() fecharEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onFecharClicked() {
    this.fecharEvent.emit();
  }
}
