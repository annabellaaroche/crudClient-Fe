import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client_id!: number;
  client: Client = new Client();
  form!: FormGroup;

  constructor(
    public clientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['clientId'];
    this.clientService.find(this.client_id).subscribe((data: Client)=>{
      this.client = data;
    }); 
       
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if (!this.form.valid) {
      return;
    }
    let client: Client = this.form.value;
    this.clientService.update(this.client_id, client).subscribe((res:any) => {         
         this.router.navigateByUrl('/');
    })
  }
}
