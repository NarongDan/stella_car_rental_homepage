// eslint-disable-next-line no-unused-vars
import React from 'react';
import Img from "../img/carcontact.jpg";

function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-10 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                icon="address-icon.png" 
                label="Address" 
                text="Suite 721 New York NY 10016" 
              />
              <Card 
                icon="phone-icon.png" 
                label="Phone" 
                text="+668741954xx" 
              />
              <Card 
                icon="email-icon.png" 
                label="Email" 
                text="Stella@yourmail.com" 
              />
            </div>
          </div>
          <div className="flex-1 bg-cover bg-center">
            <img src={Img} alt=''></img>
          </div>
        </div>
        <div className="p-6 flex justify-center items-center bg-white">
          <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded text-lg">Book Now</a>
        </div>
      </div>
    );
  }
  
  function Card({ icon, label, text }) {
    return (
      <div className="p-8 bg-white shadow-md rounded-lg flex items-center">
        <div className="w-15 h-20 bg-cover" style={{ backgroundImage: `url(${icon})` }}></div>
        <div>
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-gray-700">{text}</div>
        </div>
      </div>
    );
  }
  

export default ContactPage
