import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  constructor(
    public postService: ClientsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Client[])=>{
      this.clients = data;
    })  
  }

  viewProduct(id:number){
    this.router.navigateByUrl('client-view/' + id );
  }

  editProduct(id:number){
    this.router.navigateByUrl('client-edit/' + id);
  }

  deleteProduct(id:number){
    this.postService.delete(id).subscribe(res => {
         this.clients = this.clients.filter(item => item.id !== id);
         alert("Cliente eliminado correctamente");
    })
  }
}
