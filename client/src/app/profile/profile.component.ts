import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, retry } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  readonly apiUrl = 'https://localhost:7018/api/User';
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  constructor(private http: HttpClient) {

  }
  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }

  onSubmit() {
    console.log(this.profileForm.value);
    if (this.profileForm.invalid) {
      alert('Please fill out the form before submitting');
      return;
    }

    this.http.post(this.apiUrl, this.profileForm.value, { responseType: 'text' })
      .subscribe((data) => {
        alert(data);
      });
  }
}
