import React from 'react'

const From = ({margin}) => {
  return (
    <div className={` md:w-1/3 bg-white p-6 rounded-lg ${margin}`}>
    <h3 className="text-3xl font-bold text-center text-black mb-4">Get In Touch</h3>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 bg-white text-white rounded"
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full p-3 bg-white text-white rounded"
      />
      <textarea
        placeholder="Enter Message"
        className="w-full p-3 bg-white text-white rounded"
        rows="4"
      ></textarea>
      <button className="bg-yellow-500 hover:bg-black text-black hover:text-white py-2 px-4 rounded w-full">
        Send Message
      </button>
    </form>
  </div>
  )
}

export default From