import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  client_id!: number;
  client: Client = new Client();

  constructor(
    private ClientsService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['clientId'];
         
    this.ClientsService.find(this.client_id).subscribe((data: Client)=>{
      this.client = data;
    });
  }
}
