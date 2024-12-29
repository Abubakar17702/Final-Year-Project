import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="faq-container w-full max-w-4xl mx-auto p-4 mb-10 mt-10">
      <h1 className="text-4xl font-bold text-center my-8">
        FAQ - Resort Heaven
      </h1>

      <div className="faq-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">General Questions</h2>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">1. What services do you offer?</h3>
          <p>
            At Resort Heaven, we offer luxury accommodation, fine dining, spa
            services, and a variety of recreational activities. For more
            details, visit our{" "}
            <a href="/services" className="text-blue underline">
              Services Page
            </a>
            .
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            2. How can I contact customer support?
          </h3>
          <p>
            You can reach our customer support team by email at
            <a
              href="mailto:support@resortheaven.com"
              className="text-blue underline"
            >
              {" "}
              support@resortheaven.com
            </a>
            , or by phone at (123) 456-7890. Our support team is available
            Monday to Friday, 9 AM - 6 PM.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">3. Where is Resort Heaven located?</h3>
          <p>
            We are located at 123 Paradise Road, Heaven City, Island. However,
            you can also book our services online and enjoy a variety of virtual
            experiences and services.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">4. How do I create an account?</h3>
          <p>
            To create an account, click on the "Sign Up" button at the top-right
            corner of the homepage and fill in your details. A confirmation
            email will be sent to you to verify your account.
          </p>
        </div>
      </div>

      <div className="faq-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Orders & Reservations</h2>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            5. How do I place an order or reservation?
          </h3>
          <p>
            You can place an order or reservation by visiting our{" "}
            <a href="/bookings" className="text-blue underline">
              Bookings Page
            </a>
            . Select your preferred room, dining experience, or recreational
            activity, and follow the prompts to complete your booking.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            6. Can I cancel or modify my reservation?
          </h3>
          <p>
            Yes, you can modify or cancel your reservation up to 24 hours before
            your scheduled arrival. To do this, go to your{" "}
            <a href="/account" className="text-blue underline">
              Account Dashboard
            </a>{" "}
            or contact our support team.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            7. What payment methods do you accept?
          </h3>
          <p>
            We accept major credit cards (Visa, MasterCard, AMEX), PayPal, and
            other local payment options. For more details, please refer to our{" "}
            <a href="/payments" className="text-blue underline">
              Payments Page
            </a>
            .
          </p>
        </div>
      </div>

      <div className="faq-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery</h2>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            8. Do you offer international shipping?
          </h3>
          <p>
            Yes, we offer shipping to many countries. For more information on
            shipping rates and delivery times, please check our{" "}
            <a href="/shipping" className="text-blue underline">
              Shipping Policy
            </a>
            .
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">9. How long does shipping take?</h3>
          <p>
            Standard shipping takes 5-10 business days, while express shipping
            typically takes 2-4 business days. You will receive a tracking
            number once your order has been shipped.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">10. Can I track my order?</h3>
          <p>
            Yes, once your order is shipped, you will receive a tracking number
            via email. You can also track your order through your{" "}
            <a href="/account" className="text-blue underline">
              Account Dashboard
            </a>
            .
          </p>
        </div>
      </div>
      <div className="faq-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account & Privacy</h2>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            14. Is my personal information secure?
          </h3>
          <p>
            Yes, we take your privacy seriously. Your personal data is securely
            encrypted and will never be shared without your consent. For more
            information, please read our{" "}
            <a href="/privacy-policy" className="text-blue underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">15. How can I reset my password?</h3>
          <p>
            If you've forgotten your password, you can reset it by clicking the
            "Forgot Password" link on the login page. A reset link will be sent
            to your registered email address.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">16. Can I delete my account?</h3>
          <p>
            Yes, if you wish to delete your account, please contact us at
            <a
              href="mailto:support@resortheaven.com"
              className="text-blue underline"
            >
              {" "}
              support@resortheaven.com
            </a>
            and our team will assist you.
          </p>
        </div>
      </div>

      <div className="faq-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Miscellaneous</h2>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            17. Do you offer discounts or promotions?
          </h3>
          <p>
            Yes, we offer seasonal promotions and exclusive discounts for
            members. Subscribe to our newsletter to stay updated.
          </p>
        </div>

        <div className="faq-item mb-4">
          <h3 className="font-semibold">
            18. Can I leave a review or feedback?
          </h3>
          <p>
            Absolutely! We value your feedback. You can leave a review on our{" "}
            <a href="/reviews" className="text-blue underline">
              Reviews Page
            </a>{" "}
            or send us your thoughts directly through the
            <Link to="/contact" className="text-blue underline">
              {" "}
              Contact Page
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="faq-contact-section mt-8 text-center">
        <p>
          Didn’t find what you were looking for?{" "}
          <Link to="/contact-us" className="text-blue underline">
            Contact us
          </Link>{" "}
          and we’ll be happy to help!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
