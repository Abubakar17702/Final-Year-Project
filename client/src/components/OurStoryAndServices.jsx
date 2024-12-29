import React from 'react';

const OurStoryAndServices = () => {
  return (
    <div className="container mx-auto my-10 p-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Story & Services</h1>
      
      {/* Our Culinary Journey Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Culinary Journey</h2>
        <p className="text-lg text-gray">
          Our culinary journey began with a passion for creating exquisite dishes that tell a story. From humble beginnings, we have evolved into a celebrated establishment known for our commitment to quality, flavor, and innovation. Each dish is crafted with love, drawing inspiration from diverse culinary traditions, and showcasing the freshest ingredients sourced from local farms. 
        </p>
        <p className="text-lg text-gray">
          We believe in the power of food to bring people together, and our journey reflects our dedication to fostering memorable dining experiences for our guests. Join us as we continue to explore new flavors and redefine the art of dining.
        </p>
      </section>

      {/* Our Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-lg text-gray space-y-2">
          <li><strong>Fine Dining Experience:</strong> Indulge in an elegant dining atmosphere with a menu curated by our expert chefs.</li>
          <li><strong>Catering Services:</strong> We offer catering for events of all sizes, bringing our culinary expertise to your special occasions.</li>
          <li><strong>Cooking Classes:</strong> Learn the secrets of our kitchen in interactive cooking classes that cater to all skill levels.</li>
          <li><strong>Custom Menu Planning:</strong> Tailored menus for private events, ensuring a personalized dining experience for you and your guests.</li>
          <li><strong>Takeout and Delivery:</strong> Enjoy our delicious meals from the comfort of your home with our takeout and delivery services.</li>
        </ul>
      </section>
    </div>
  );
};

export default OurStoryAndServices;
