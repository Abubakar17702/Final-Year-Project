import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import Swal
import { FaGetPocket, FaTrash } from "react-icons/fa";

const OfferPage = () => {
  const [offers, setOffers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Placeholder function to check if user is admin
  const checkAdmin = () => {
    // Implement your admin check logic here
    return true; // Change this according to your logic
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/offers");
        console.log("Fetched Offers:", response.data);
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
        setErrorMessage("Failed to load offers.");
      }
    };

    fetchOffers();
    setIsAdmin(checkAdmin()); // Check if the user is an admin
  }, []);

  const handleDeleteOffer = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This offer will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`http://localhost:6001/api/offers/${id}`);
        setOffers(offers.filter((offer) => offer._id !== id));
        Swal.fire("Deleted!", "The offer has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting offer:", error);
        Swal.fire("Error!", "Failed to delete the offer.", "error");
      }
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mb-20">
      {/* banner */}
      <div className="">
        <div className="py-20 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Available<span className="text-green"> Offers</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer._id} className="border p-4 rounded shadow">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{offer.title}</h3>
            <p>{offer.description}</p>
            <p>
              Original Price:{" "}
              <span className="line-through">
                ${offer.originalPrice ? offer.originalPrice.toFixed(2) : "N/A"}
              </span>
            </p>
            <p>
              Discounted Price:{" "}
              <span className="text-green">
                $
                {offer.discountedPrice
                  ? offer.discountedPrice.toFixed(2)
                  : "N/A"}
              </span>
            </p>
            <p>Discount: {offer.discount}%</p>
            <p>
              Valid from: {new Date(offer.startDate).toLocaleDateString()} to{" "}
              {new Date(offer.expiryDate).toLocaleDateString()}
            </p>
            <button
                className="btn bg-green text-white mt-4 me-3"
              >
                Get This Offer <FaGetPocket />
              </button>
            {isAdmin && (
              <button
                onClick={() => handleDeleteOffer(offer._id)}
                className="btn bg-red text-white mt-4"
              >
                Delete <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
