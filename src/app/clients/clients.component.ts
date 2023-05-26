import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Client[]>('https://my-json-server.typicode.com/esley/demo/clientes').subscribe((data) => {
      this.clients = data;
    });
  }
}

interface Client {
  name: string;
  cpf: string;
  phone: string;
  address: string;
  zipCode: string;
}
