import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./Clents.css";

const clients = [
  { name: 'EPS', logo: './clients2.png', alt: 'EPS logo' },
  { name: 'Active Sine', logo: './clients1.png', alt: 'Active Sine logo' },
 
  { name: 'Himtaj Jewelry', logo: './clients4.png', alt: 'Himtaj Jewelry logo' },
  { name: 'Glucks Finance', logo: './clients5.png', alt: 'Glucks Finance logo' },
  { name: 'Glucks Finance', logo: './clients6.png', alt: 'Glucks Finance logo' },
  { name: 'Glucks Wealth', logo: './clients3.png', alt: 'Glucks Wealth logo' },
];

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className="bg-white py-[4rem] w-full text-center relative ">
    <Slider {...settings}>
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-full w-fit relative mb-5 sm:mb-0"
        >
          <img
            src={client.logo}
            alt={client.alt}
            className=" py-10  w-36 sm:w-36 lg:w-56  md:w-40 mx-auto relative z-40 invert grayscale "
          />
        </div>
      ))}
    </Slider>
  </section>
  );
};

export default ClientSection;
