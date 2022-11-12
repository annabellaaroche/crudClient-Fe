import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-cilindro',
  templateUrl: './cilindro.component.html',
  styleUrls: ['./cilindro.component.css']
})
export class CilindroComponent implements OnInit {
  form!: FormGroup;
  volumen = 0;
  
  constructor(
    private clientService: ClientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      radio: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
      user_id: new FormControl(4)
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if (!this.form.valid) {
      return;
    }
    this.clientService.cilindro(this.form.value).subscribe((res:any) => {
      this.volumen = res.volumen;
      console.log(this.volumen);
      
    })
  }
}
