import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    customer: Customer= new Customer();
    // firstName = new FormControl();

    constructor(private fb: FormBuilder){
    }

    ngOnInit(): void{
        this.customerForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            sendCatalog: true
        });

        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     // firstName: this.firstName,
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    populateTestData(){
        // this.customerForm.setValue({
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            // email: 'jack@torchwood.com',
            sendCatalog: true
        })
    }
}