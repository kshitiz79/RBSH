import "./Clents.css"; // Ensure you have the correct CSS file name

import React from 'react';

const clients = [
  { name: 'EPS', logo: './clients2.png', alt: 'EPS logo' },
  { name: 'Active Sine', logo: './clients1.png', alt: 'Active Sine logo' },
  { name: 'Himtaj Jewelry', logo: './clients4.png', alt: 'Himtaj Jewelry logo' },
  { name: 'Glucks Finance', logo: './clients5.png', alt: 'Glucks Finance logo' },
  { name: 'Glucks Finance', logo: './clients6.png', alt: 'Glucks Finance logo' },
  { name: 'Glucks Wealth', logo: './clients3.png', alt: 'Glucks Wealth logo' },
];

const ClientSection = () => {
  return (
    <section className="bg-white lg:py-[4rem] w-full text-center relative overflow-hidden">
      <div className="logo-slider">
        {/* Left shadow overlay */}
        <div className="shadow-left"></div>
        
        <div className="logo-track">
          {clients.map((client, index) => (
            <div
              key={index}
              className="logo-item"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="py-10 w-36 sm:w-36 lg:w-56 md:w-40 mx-auto"
              />
            </div>
          ))}
          {/* Duplicate the list for smooth infinite scrolling */}
          {clients.map((client, index) => (
            <div
              key={index + 60 +clients.length}
              className="logo-item"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="py-10 w-36 sm:w-36 lg:w-56 md:w-40 mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Right shadow overlay */}
        <div className="shadow-right"></div>
      </div>
    </section>
  );
};

export default ClientSection;
