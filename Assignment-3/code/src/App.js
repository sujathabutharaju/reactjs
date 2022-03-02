import React from 'react';
import logo from './logo.svg';
import './App.css';
var arrow = "<"
var arrow_right='>'
function App() {
  // const { Appointment } = props
const Appointment= {
  name: 'Robert hook',
  Number:'123456789',
  Time:'10:00',
  newTime:'11:00 ',
  Date:'07/02/2022',
  newDate:'08/02/2022',
  Email:'roberthook123@gmail.com',
  phonenumber: '+919004002891',
  Door: 'hook',
  PrevTime:'9:30',
  Status: 'In Progress',
  productImg: 'https://www.w3schools.com/howto/img_avatar.png',
  ProductName:'cart blue',
  ProductDescription:'Vjoije Njpce Mnjdncoi jivfjifsj lofghdkfh fjvdjfhv uhufdvh uohdsfnes ,nuoh fvhufv.'
}
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='top-info'>
        <a href="#"> {arrow} </a>
        <div className='name-id'>
        <strong>{Appointment.name}</strong>
        <label>{Appointment.Number}</label></div>
        <button> Print</button>
      </div>
      <div className='customer-info'>
         <p><strong>Appointment :</strong> <label>{Appointment.Time} ({Appointment.Date})</label></p>
          <p><strong>Email :</strong> <label>{Appointment.Email}</label></p>
          <p><strong>Phone:</strong> <label>{Appointment.phonenumber}</label></p>
      </div>
      <div className='order-info'>
        <div className='col'><h3>Status</h3>
          <ul>
            <h5><li>In Progress</li></h5>
          </ul>
        </div>
        <div className='col'>
          <h3>Door</h3>
          <h5>Mark</h5>
        </div>
        <div className='col'><h3>Time</h3>
          <h5>{Appointment.newTime}  ({Appointment.newDate})</h5>
        </div>
      </div>
      <div className='product-info'>
        <input type="checkbox"></input>
        <img className='picture' src={Appointment.productImg} width='100' height='100' />
        <div className='description'>
          <strong>{Appointment.ProductName} </strong><br></br>
          <label>{Appointment.ProductDescription}</label>
          </div>
          <a href='#'  >{arrow_right}</a>
      </div>
    </div>
  );
}
export default App;
