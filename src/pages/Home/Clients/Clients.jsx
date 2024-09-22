import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const clients = [
  { name: 'EPS', logo: './4-4.png', alt: 'EPS logo' },
  { name: 'Active Sine', logo: './4-4.png', alt: 'Active Sine logo' },
  { name: 'Glucks Wealth', logo: './2-5.png', alt: 'Glucks Wealth logo' },
  { name: 'Himtaj Jewelry', logo: './3-3.png', alt: 'Himtaj Jewelry logo' },
  { name: 'Glucks Finance', logo: './4-4.png', alt: 'Glucks Finance logo' },
];

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="client-section bg-white py-16 text-center  relative">
     
      
      <Slider {...settings}>
  {clients.map((client, index) => (
    <div key={index} className="client-slide z-20 ">
      <img 
        src={client.logo} 
        alt={client.alt} 
        className="client-logo" 
      />
  
    </div>
  ))}
</Slider>
    </section>
  );
};

export default ClientSection;
