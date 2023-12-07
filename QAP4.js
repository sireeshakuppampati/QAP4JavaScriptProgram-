// QAP 4 Project for Java Script Program
// Creating an Object in Java Script for a Motel Customer
let html;
const HSTRate = '0.15';
const roomRate = '75.00';

// Declaring Customer Attributes
const Customer = {
    firstName : 'Bob',
    lastName : 'Jack',
    birthDate : '1987',
    Gender : 'Male',
    PhoneNum : '709-123-4455',

    MailingAddress :{
        street : '123 Water St.',
        City : 'St. Johns',
        Province : 'NL',
        PostalCode : 'A1A2A3',
        Country : 'CANADA',
        
    },

    RoomPref : ['DoubleBed', 'QueenBed', 'SingleBed', 'ExtraBed', 'ExtraKey', 'EarlyCheck_in','LateCheck_Out' ],
       
        Check_in : {
        Check_inDate : '2023-10-12',
        Check_inTime : '11.30pm',
        CreditCard : '2232-1245-5445-2020',
        CVV : '211',
        
    },
    
    Check_out : {
        Check_outDate : '2023-10-17',
        Check_outTime : '3.00pm',
        CreditCard : '2232-1245-5445-2020',
        CVV : '211',
        No_Of_Days : '5',
    },

    getAge : function() {
        const today = new Date();
        return  today.getFullYear() - this.birthDate;
    },

    getDuration_of_Stay : function() {
        const Tot_Stay = Customer.Check_out.No_Of_Days * roomRate;
        const HST = Tot_Stay * HSTRate;
        return TotalAmt = Tot_Stay + HST;
    },
};

let display;
display = Customer.getAge();
console.log(display);
let totdays;
totdays = Customer.getDuration_of_Stay();
console.log(totdays);

let FullName = "Mr." +" " + Customer.firstName + " " + Customer.lastName;
let FullAddress = Customer.MailingAddress.street + ' ' + Customer.MailingAddress.City + ' ' + Customer.MailingAddress.Province + ' ' + Customer.MailingAddress.PostalCode + ' ' + Customer.MailingAddress.Country;
let Check_inDetails = Customer.Check_in.Check_inDate + ' ' + "Time" + Customer.Check_in.Check_inTime;
let Check_outDetails = Customer.Check_out.Check_outDate + ' ' + "Time" + Customer.Check_out.Check_outTime;
let creditDetails = Customer.Check_in.CreditCard + ' ' + Customer.Check_in.CVV;
html = `
    <ul>
        <li>customer Fullname: ${FullName} <li>
        <li>Customer Birthdate: ${Customer.birthDate} <li>
        <li>customerGender: ${Customer.Gender} <li> 
        <li>Customer PhoneNumber: ${Customer.PhoneNum} <li>
        <li>Customer Mailing Address: ${FullAddress} <li>
        <li>Room Preferences : ${Customer.RoomPref} <li>
        <li>Check-in Details: ${Check_inDetails} <li>
        <li>Chech-out Details: ${Check_outDetails} <li>
        <li>CreditCardDetails: ${creditDetails} <li>
        <li>Calculated Customer Age: ${display} <li>
        <li>Final cost of Motel stay: ${totdays} <li>
    <ul>`;


//console.log(html);
document.body.innerHTML = html;

