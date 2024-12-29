import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-container w-full max-w-4xl mx-auto p-4 mb-10 mt-10">
      <h1 className="text-4xl font-bold text-center my-8">
        About Us - Resort Heaven
      </h1>

      <div className="about-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Resort Heaven
        </h2>
        <p className="mb-4">
          At Resort Heaven, we strive to provide you with unforgettable
          experiences and exceptional service. Our mission is to create lasting
          memories for travelers seeking relaxation, adventure, and everything
          in between.
        </p>
      </div>

      <div className="mission-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to offer a sanctuary where every visitor feels at home.
          We aim to provide high-quality accommodations, luxurious dining
          experiences, and a variety of activities to cater to all our guests'
          desires.
        </p>
      </div>

      <div className="values-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Integrity: We prioritize honesty and transparency in all our
            interactions.
          </li>
          <li className="mb-2">
            Quality: We commit to delivering top-notch services and amenities.
          </li>
          <li className="mb-2">
            Sustainability: We strive to protect our environment and support
            local communities.
          </li>
          <li className="mb-2">
            Innovation: We continuously seek new ways to enhance our guests'
            experiences.
          </li>
        </ul>
      </div>

      <div className="team-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="mb-4">
          Our dedicated team consists of experienced professionals who are
          passionate about travel and hospitality. We work tirelessly to ensure
          that every guest has a memorable stay.
        </p>
      </div>

      <div className="invitation-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="mb-4">
          Whether you're looking for a romantic getaway, a family vacation, or
          an adventure-filled holiday, Resort Heaven is your ideal destination.
          Let us be a part of your travel story!
        </p>
      </div>

      <div className="contact-section mt-8 text-center">
        <p>
          Want to learn more about us? Feel free to{" "}
          <Link to="/contact-us" className="text-blue underline">
            Contact Us
          </Link>
          !
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
