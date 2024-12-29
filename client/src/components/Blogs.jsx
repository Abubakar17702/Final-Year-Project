import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Best Destinations for Your Next Vacation",
      summary: "Discover breathtaking locations that are perfect for your next getaway, including hidden gems and popular tourist spots.",
      date: "November 1, 2024",
      link: "/blogs/exploring-best-destinations",
    },
    {
      id: 2,
      title: "Top 10 Tips for Traveling on a Budget",
      summary: "Learn how to save money while traveling without sacrificing comfort and enjoyment.",
      date: "October 28, 2024",
      link: "/blogs/traveling-on-a-budget",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Planning a Family Vacation",
      summary: "Plan the perfect family vacation with our comprehensive guide, featuring activities for all ages.",
      date: "October 15, 2024",
      link: "/blogs/planning-family-vacation",
    },
    {
      id: 4,
      title: "Why Choose Resort Heaven for Your Next Stay",
      summary: "Explore the unique features and services that make Resort Heaven the ideal choice for travelers.",
      date: "October 10, 2024",
      link: "/blogs/why-choose-resort-heaven",
    },
  ];

  return (
    <div className="blogs-container w-full max-w-4xl mx-auto p-4 mb-10 mt-10">
      <h1 className="text-4xl font-bold text-center my-8">Our Blogs</h1>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item mb-8 p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="mb-4">{post.summary}</p>
            <Link to={post.link} className="text-blue underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
