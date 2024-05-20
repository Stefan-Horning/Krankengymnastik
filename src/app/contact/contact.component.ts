import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [HttpClient]
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  send:boolean = false;
  name:any;
  email:any;
  message:any;
  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(2)]),
    emailInput: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(de|com|net|nl|org|uk|cn|au|dk|pl|cz|at|lu|ru)$')]),
    massageInput: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });


  http = inject(HttpClient)

  post = {
    endPoint: 'https://swetlana-makeueeepartist.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  async sendMail(){
    let contactData = {
      name: this.name,
      email:this.email,
      message:this.message
    }
    this.http.post(this.post.endPoint, this.post.body(contactData))
        .subscribe({
          next: (response) => {
            this.name = '';
            this.email = '';
            this.message = '';
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
  }
}
