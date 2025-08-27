import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './booking.html',
  //  styleUrls: ['./booking.css'],
  standalone: true,
})
export class BookingComponent {
  loading = false;
  submitted = false;
  scriptURL =
    'https://script.google.com/macros/s/AKfycbxCxc9tkbN4nkzY7atFM5oGSxZ3Almy8cVG27LRz_s3X0AoNivOxxGqUg0Hh_eDbsTN/exec';

  formData = {
    // age: false,
    ex: false,
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;

    const data = new FormData();
    Object.keys(form.value).forEach((key) => {
      data.append(key, form.value[key]);
    });

    // convert checkboxes
    //   data.append('age', this.formData.age ? 'Yes' : 'No');
    data.append('ex', this.formData.ex ? 'Yes' : 'No');

    fetch(this.scriptURL, { method: 'POST', body: data, mode: 'no-cors' })
      .then(() => {
        this.loading = false;
        this.submitted = true; // hide form & show success message
        form.resetForm();
        this.formData = { ex: false }; // this.formData = { age: false, ex: false };
        // Navigate back after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      })
      .catch(() => {
        this.loading = false;
        alert('Something went wrong. Please try again!');
      });
  }
}
