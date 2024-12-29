import React from "react";
import { FaTag } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Image hosting key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

  const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

  const calculateDiscountedPrice = (originalPrice, discount) => {
    return originalPrice - originalPrice * (discount / 100);
  };

  const onSubmit = async (data) => {
    const originalPrice = parseFloat(data.originalPrice);
    const discount = parseFloat(data.discount);
    const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

    const imageFile = { image: data.image[0] };
    const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (hostingImg.data.success) {
      const offerItem = {
        title: data.title,
        description: data.description,
        discount: discount,
        originalPrice: originalPrice,
        discountedPrice: discountedPrice, // Use calculated discounted price
        image: hostingImg.data.data.display_url,
        startDate: data.startDate,
        expiryDate: data.expiryDate,
      };

      const postOfferItem = await axiosSecure.post("/api/offers", offerItem);
      if (postOfferItem) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Offer has been added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Add a New <span className="text-green">Offer</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Offer Title*</span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Offer Title"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control my-6">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Describe the offer"
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Original Price*</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", { required: true })}
            placeholder="Original Price"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Discount Percentage*</span>
          </label>
          <input
            type="number"
            {...register("discount", { required: true })}
            placeholder="Discount Percentage"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Discounted Price*</span>
          </label>
          <input
            type="number"
            {...register("discountedPrice", { required: true })}
            placeholder="Discounted Price"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Start Date*</span>
          </label>
          <input
            type="date"
            {...register("startDate", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Expiry Date*</span>
          </label>
          <input
            type="date"
            {...register("expiryDate", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn bg-green text-white px-6">
          Add Offer <FaTag />
        </button>
      </form>
    </div>
  );
};

export default AddOffer;
