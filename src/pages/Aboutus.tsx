 import img1 from "../assets/images/mettings.jpg"
 import img2 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg"
 import img3 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0701.jpg"
import h1 from "../assets/images/image5.avif";
import h2 from "../assets/images/KGL.jpg";
import ach1 from "../assets/images/testimony1.jpg";
import ach2 from "../assets/images/testmony2.jpg"
 const AboutUs = () => {
   return (
     <div className="p-2 space-y-6">
       {/* Top row with Mission, Culture, and Vision */}
       <div className="grid grid-cols-1 md:grid-cols-3 bg-yellow-500 gap-6 -mt-7">
         {/* Our Mission Section */}
         <div className="relative">
           <img
             src={img2}
             alt="Our Mission"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="text-3xl text-yellow-700 font-bold mb-2">
               Our Mission
             </h3>
             <p className="text-lg px-4">
               Our mission is to deliver exceptional event planning and
               coordination services that prioritize our clients' needs and
               visions. We strive for excellence in every detail, ensuring a
               seamless experience from start to finish.
             </p>
           </div>
         </div>

         {/* Our Culture Section */}
         <div className="relative">
           <img
             src={img1}
             alt="Our Culture"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="text-3xl font-bold mb-2 text-yellow-700">
               Our Culture
             </h3>
             <p className="text-lg px-4">
               Founded in [Year], we have grown from a small team of passionate
               planners to a leading event management company in the region. Our
               diverse portfolio includes weddings, corporate events, and
               community gatherings.
             </p>
           </div>
         </div>

         {/* Our Vision Section */}
         <div className="relative">
           <img
             src={img3}
             alt="Our Vision"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="text-3xl font-bold mb-2 text-yellow-700">
               Our Vision
             </h3>
             <p className="text-lg px-4">
               We envision a world where every event, big or small, is executed
               flawlessly, leaving lasting memories for our clients and their
               guests.
             </p>
           </div>
         </div>
       </div>

       {/* History Section with Text and Images Side by Side */}
       <div className="flex flex-col md:flex-row gap-6 items-center">
         <div className="md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-lg">
           <h3 className="text-3xl font-bold mb-4 text-yellow-700 text-center">
             Our History
           </h3>
           <p className="text-lg text-gray-700">
             We have grown from a small team of passionate planners to a leading
             event management company in the region. Our diverse portfolio
             includes weddings, corporate events, and community gatherings.
           </p>
         </div>
         <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <img
             src={h1}
             alt="History Image 1"
             className="w-full h-48 object-cover rounded-lg shadow-md"
           />
           <img
             src={h2}
             alt="History Image 2"
             className="w-full h-48 object-cover rounded-lg shadow-md"
           />
         </div>
       </div>

       {/* Achievements Section with Text and Images Side by Side */}
       <div className="flex flex-col md:flex-row gap-6 items-center">
         <div className="md:w-1/2 grid grid-cols-2 gap-4 order-2 md:order-1">
           <img
             src={ach2}
             alt="Achievements Image 1"
             className="w-full h-48 object-cover rounded-lg shadow-md"
           />
           <img
             src= {ach1}
             alt="Achievements Image 2"
             className="w-full h-48 object-cover rounded-lg shadow-md"
           />
         </div>
         <div className="md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-lg order-1 md:order-2">
           <h3 className="text-3xl font-bold mb-4 text-yellow-700 text-center">
             Our Achievements
           </h3>
           <p className="text-lg text-gray-700">
             Over the years, we have successfully executed numerous high-profile
             events, earning recognition for our creativity and attention to
             detail. Our commitment to excellence has garnered us a loyal client
             base and numerous awards in the industry.
           </p>
         </div>
       </div>
     </div>
   );
 };

 export default AboutUs;