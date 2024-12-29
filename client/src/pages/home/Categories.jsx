import React from 'react'

const categoryItems = [
  { id: 1, title: "Main Dish", description: "(86 dishes)", image: "/images/home/category/img1.png" },
  { id: 2, title: "Break Fast", description: "(12 break fast)", image: "/images/home/category/img2.png" },
  { id: 3, title: "Dessert", description: "(48 dessert)", image: "/images/home/category/img3.png" },
  { id: 4, title: "Browse All", description: "(255 Items)", image: "/images/home/category/img4.png" }
]

const Categories = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
        <p className='subtitle'>Customer Favorites</p>
        <h2 className='title'>Popular Categories</h2>
      </div>

      {/* Responsive Categories Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-around items-center mt-12'>
        {
          categoryItems.map((item) => (
            <div key={item.id} className='shadow-lg rounded-md bg-white py-6 px-5 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='w-full mx-auto flex items-center justify-center'>
                <img src={item.image} alt={item.title} className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
              </div>
              <div className='mt-5 space-y-1'>
                <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                <p className='text-secondary text-sm'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories
