import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
    {
      name: "EMILIANO AQUILANI",
      image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
      quote:
        "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.",
    },
    {
      name: "TIMON JOHN",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=faces&fit=crop&w=200&h=200",
      quote:
        "Professionally cultivate one-to-one customer service with robust ideas. Efficiently unleash cross-media information without cross-media value.",
    },
    {
        name: "IAN OWEN",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&w=200&h=200",
        quote:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
    },
    {
        name: "LARA ATKINSON",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
      quote:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      name: "MICHAEL TEDDY",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=200&h=200",
      quote:
        "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions.",
    },
  ];

const Testimonials = () => {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 8500,
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
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
    <section className="flex flex-col items-center justify-center py-10 px-20 bg-white">
    <h1 className='text-headings mb-10'>What they say about us?</h1>
    <div className="max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className=" h-80 bg-menu-light-cream p-6 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 text-base mb-4">{testimonial.quote}</p>
              <div className="bg-warm-brown text-white py-2 px-6 rounded-full inline-block shadow-md font-semibold">
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  )
}
export default Testimonials