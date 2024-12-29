import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext"; // Import the dark mode context

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Change to show 9 items per page

  // Get dark mode state from context
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="py-48 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Menu Shop */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* All Category Buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              onClick={showAll}
              className={`py-2 px-4 rounded ${
                selectedCategory === "all" ? "active" : ""
              } ${darkMode ? "text-white" : "bg-white text-black"}`}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={`py-2 px-4 rounded ${
                selectedCategory === "salad" ? "active" : ""
              } ${darkMode ? " text-white" : "bg-white text-black"}`}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={`py-2 px-4 rounded ${
                selectedCategory === "pizza" ? "active" : ""
              } ${darkMode ? " text-white" : "bg-white text-black"}`}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={`py-2 px-4 rounded ${
                selectedCategory === "soup" ? "active" : ""
              } ${darkMode ? " text-white" : "bg-white text-black"}`}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={`py-2 px-4 rounded ${
                selectedCategory === "dessert" ? "active" : ""
              } ${darkMode ? " text-white" : "bg-white text-black"}`}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={`py-2 px-4 rounded ${
                selectedCategory === "drinks" ? "active" : ""
              } ${darkMode ? " text-white" : "bg-white text-black"}`}
            >
              Drinks
            </button>
          </div>

          {/* Filter Options */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div
              className={`bg-green p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <FaFilter className="h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className={`bg-green text-white px-2 py-1 rounded-sm ${
                darkMode ? "bg-gray-800" : "bg-black"
              }`}
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-green text-white" // Active state
                : darkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-black" // Inactive state
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
