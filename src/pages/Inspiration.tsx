 import React from "react";
 import im1 from "../assets/images/DSC_3894.jpg";
 import im6 from "../assets/images/testimony1.jpg";
 import im2 from "../assets/images/testmony2.jpg";
 import im3 from "../assets/images/weeding2.jpg";
 import im4 from "../assets/images/3U8A0855.jpg";
 import im5 from "../assets/images/3U8A1253.jpg";
 import testmony from "../assets/images/testimony1.jpg";
 import testmony1 from "../assets/images/testmony2.jpg";

 interface Testimonial {
   id: number;
   name: string;
   role: string;
   comment: string;
   rating: number;
   avatar: string;
 }

 interface Inspiration {
   title: string;
   image: string;
 }

 const InspirationPage: React.FC = () => {
   const inspirations: Inspiration[] = [
     { title: "Pamella Wedding", image: im1 },
     { title: "Annie Black Show Offs", image: im6 },
     { title: "Lounge Party", image: im2 },
     { title: "Kigali Summer Vegas", image: im3 },
     { title: "Kigali Point Up Show", image: im4 },
     { title: "Davi House Port", image: im5 },
   ];

   const testimonials: Testimonial[] = [
     {
       id: 1,
       name: "Sarah Johnson",
       role: "Corporate Executive",
       comment: "The team anticipated my needs perfectly!",
       rating: 5,
       avatar: testmony,
     },
     {
       id: 2,
       name: "Sarah",
       role: "Corporate Executive",
       comment: "The team anticipated my needs perfectly!",
       rating: 5,
       avatar: testmony1,
     },
   ];

   return (
     <div className="text-white min-h-screen">
       <div className="bg-black">
         <section
           className="banniere animation-section opacity-70 mt-24 min-h-screen flex items-center justify-center py-20 bg-cover bg-center"
           id="banniere"
           style={{
             backgroundImage: "url('src/assets/images/ourTeam.jpg')",
           }}
         >
           <div className="contenu text-center p-10 rounded-md">
             <h2 className="text-4xl font-bold mb-2">GET INSPIRED</h2>
             <label className="text-2xl text-yellow-500 font-bold">By</label>
             <p className="text-3xl font-bold text-yellow-500 mb-10">
               Muhe Hospitality Services
             </p>
             <a
               href="/contactus"
               className="btn animate-bounce px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition duration-300"
             >
               LET'S CONNECT
             </a>
           </div>
         </section>
       </div>

       {/* Second Section */}
       <section className="py-10">
         <h1 className="page_title text-center text-4xl font-bold text-gray-200 mb-10">
           GRAB SOME INSPIRATION
         </h1>

         <div className="row grid sm:grid-cols-3 grid-cols-2 w-full justify-center">
           {inspirations.map((item, index) => (
             <div
               key={index}
               className="test_box w-full bg-opacity-20 bg-black h-72 p-4"
             >
               <div
                 className="inner rounded-lg p-6 w-full h-full text-center transition transform hover:scale-105 bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${item.image})`,
                 }}
               >
                 <a href="#" className="test_click">
                   <h1 className="test_title text-2xl font-semibold text-white mb-4 bg-opacity-60 p-2 rounded">
                     {item.title}
                   </h1>
                   <span className="test_link text-gray-300 text-3xl">
                     <i className="fa fa-heart"></i>
                   </span>
                 </a>
               </div>
             </div>
           ))}
         </div>
       </section>

       {/* Third Section - Instagram Feed */}
       <section className="section3_content container-fluid p-10 ml-20 mr-20 mb-5 bg-yellow-600">
         <div id="instafeed-container" className="flex justify-center">
           <p>
             "At Muhe Hospitality Services, we believe that true inspiration
             comes from dedication, passion, and an unwavering commitment to
             excellence. Every moment is an opportunity to create experiences
             that resonate, connecting us deeply with our clients and their
             journeys. Let’s work together to inspire, serve, and exceed
             expectations, one exceptional experience at a time."
           </p>
         </div>
       </section>

       {/* Fourth Section */}
       <section
         className="bg-cover bg-center h-96 py-20"
         style={{
           backgroundImage: "url('src/assets/images/service_background.jpg')",
         }}
       ></section>

       {/* Fifth Section - Testimonials */}
       <section className="mb-12 text-center">
         <h2 className="text-2xl font-bold mb-6 text-yellow-500">
           Client Testimonials
         </h2>
         <div className="grid gap-6 md:grid-cols-2 p-10">
           {testimonials.map((testimonial) => (
             <article
               key={testimonial.id}
               className="bg-white p-6 rounded-lg shadow-md"
             >
               <div className="flex items-center mb-4">
                 <img
                   src={testimonial.avatar}
                   alt={`${testimonial.name}'s avatar`}
                   className="w-20 h-20 rounded-full mr-4"
                 />
                 <div>
                   <h3 className="font-semibold">{testimonial.name}</h3>
                   <p className="text-sm text-gray-600">{testimonial.role}</p>
                 </div>
               </div>
               <div className="flex mb-2">
                 {Array.from({ length: testimonial.rating }).map((_, i) => (
                   <i key={i} className="fa fa-star text-yellow-400"></i>
                 ))}
               </div>
               <p className="text-gray-700">{testimonial.comment}</p>
             </article>
           ))}
         </div>
       </section>
     </div>
   );
 };
 export default InspirationPage;