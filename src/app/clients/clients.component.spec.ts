import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsComponent } from './clients.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch clients from API', () => {
    const mockClients = [
      {
        name: 'John Doe',
        cpf: '123.456.789-00',
        phone: '(11) 1234-5678',
        address: '123 Main Street',
        zipCode: '12345-678'
      },
      {
        name: 'Jane Smith',
        cpf: '987.654.321-00',
        phone: '(11) 8765-4321',
        address: '456 Elm Street',
        zipCode: '98765-432'
      }
    ];

    component.ngOnInit();

    const req = httpTestingController.expectOne('URL_DA_API');
    expect(req.request.method).toBe('GET');
    req.flush(mockClients);

    expect(component.clients).toEqual(mockClients);
  });
});
