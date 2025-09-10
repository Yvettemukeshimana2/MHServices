import React from "react";
 
import partyImage from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg";
const specialtiesData = [
  {
    title: "VENUES",
    description:
      " MHS,Recommends and secures the perfect location based on your event type and guest sizeHandles venue setup, seating, lighting, and technical arrangements  .",
    image: "https://fivetofivehotel.com/wp-content/uploads/2021/06/ubukwe11.jpg",
  },
  {
    title: "VENDORS",
    description:
      "Looking for amazing vendors to make your day truly spectacular? With our top-notch, vetted resources, we provide MUHE vendor services tailored to weddings and events of all kinds. Our trusted network of professionals ensures your event has the perfect dream team, delivering excellence and creativity at every step.",
    image: " https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3eJ5JFEJvH4Ls2NJKT3n4HZnwUtMWhJ6lXfJxH0sEf8yqkAac",
  },
  {
    title: "RENTALS",
    description:
      "Muhe Rentals provides and sources high-quality materials tailored to your event’s theme, ensuring everything aligns with your color scheme, brand, or occasion. We handle the setup and teardown of all materials, delivering a seamless and stress-free experience from start to finish.",
    image: partyImage,
  },
];
const Specialties: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <h2 className="lg:text-2xl text-5xl font-bold text-center text-yellow-500 mt-10">
        Our Specialties
      </h2>
      <h1 className="text-sm">
        At Muhe Hospitality Services (MHS), our specialty is simple: “We plan
        your event – or help you plan it yourself, just the way you wish!”
        Whether you want a fully-managed experience or prefer to be involved in
        every detail, MHS offers flexible, personalized concierge-style support
        tailored to your needs.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            <img
              src={specialty.image}
              loading="lazy"
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="lg:text-lg text-3xl  font-semibold 
            text-yellow-500">
              {specialty.title}
            </h3>
            <p className="lg:text-sm text-xl text-gray-700">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Specialties;