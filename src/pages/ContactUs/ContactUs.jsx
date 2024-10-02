import React from 'react'

const ContactUs = () => {
  return (
<>
<div className="min-h-screen bg-white flex items-start justify-center py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Form Section */}
        <div className="form-section p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Drop Us A Message</h2>
          <p className="mb-4 text-sm sm:text-base">
            We're excited to work with you soon! Please drop an email with your details at{' '}
            <a href="mailto:bd@sch.com" className="text-blue-500">abes game</a>
          </p>

          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Please enter your full name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Organization's Name</label>
              <input
                type="text"
                placeholder="Your Organization's Name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Number</label>
              <input
                type="tel"
                placeholder="Your Number"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website/Social Media Link</label>
              <input
                type="url"
                placeholder="Website/Social Media Link"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>

          <div className='mt-16 sm:mt-20'>
              <label className="block text-sm font-medium text-gray-700">
                Which services are you interested in?
              </label>
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-7">
                {[
                  'Branding',
                  'Social Media Management',
                  'Content Creation & Marketing',
                  'Ad Film/Video Production',
                  'SEO',
                  'Website Transformation',
                  'Mobile App Development & UI/UX',
                  'CRM/Sales Pipeline Development',
                ].map((service) => (
                  <button
                    key={service}
                    className="px-3 py-1 bg-white text-black rounded-full hover:bg-sky-500 text-sm border-yellow-950 border-solid border-2"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
        </div>
        

        {/* Images Section */}
        <div className="image-section grid grid-cols-1 gap-4 ml-0 sm:ml-12">
          <img
            src="./contactus1.png"
            alt="Product 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="./contactus2.png"
            alt="Product 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="./contactus3.png"
            alt="Product 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
      </div>
    </div>
</>
  )
}

export default ContactUs
