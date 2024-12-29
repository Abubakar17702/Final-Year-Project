import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import Toast
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS
import Swal from "sweetalert2"; // Import SweetAlert

const ReviewPage = () => {
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate that a rating is selected
    if (!rating) {
      toast.error("Please select a rating."); // Show error toast
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:6001/api/reviews", {
        rating,
        feedback,
      });

      if (response.status === 201) {
        // Show success Swal
        await Swal.fire({
          icon: 'success',
          title: 'Thank you for your feedback!',
          text: 'Your review has been submitted successfully.',
          confirmButtonText: 'OK'
        });

        // Redirect to home page
        window.location.href = "/"; // Change to your home page route

        // Clear the rating and feedback
        setRating(""); 
        setFeedback(""); 
      }
    } catch (error) {
      // Handle error response
      const message =
        error.response?.data?.message ||
        "There was an error submitting your review. Please try again.";
      toast.error(message); // Show error toast
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-10">
    <div className="max-w-md shadow w-full mx-auto my-10 p-5 rounded-lg">
      <ToastContainer /> {/* Include ToastContainer */}
      <div className="mb-5 p-5">
        <h1 className="text-xl font-semibold">
          How would you rate your experience?
        </h1>
        <div className="mt-4">
          {["poor", "bad", "average", "good", "excellent"].map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                value={option}
                checked={rating === option}
                onChange={(e) => setRating(e.target.value)}
                className="mr-2"
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <label className="block">
          Your Feedback (500 characters max):
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            maxLength="500"
            rows="5"
            className="w-full border rounded p-2 mt-2"
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className={`bg-green w-full text-white py-2 px-4 rounded mb-5 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
    </div>
  );
};

export default ReviewPage;
