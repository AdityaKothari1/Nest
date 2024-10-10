import React from "react";

export default function PropertyPage({
  params: { propertyid },
}: {
  params: { propertyid: string };
}) {
  return (
    <div className="mt-24">
      {/* Banner */}
      <div className="relative h-64 md:h-96 lg:h-128">
        <img
          src="/assets/herobanner/Banner-3.png"
          alt="Property Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Casa Hillside
          </h1>
        </div>
      </div>

      {/* About Property */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          About Property
        </h2>
        <p className="text-gray-600">
          Discover the charm of Casa Hillside, a luxurious villa nestled in the
          heart of Lonavala. This stunning property offers breathtaking views
          and modern amenities for a perfect getaway.
        </p>
      </div>

      {/* Features and Amenities */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Features and Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Spacious Rooms</h3>
              <p className="text-gray-600">
                4 bedrooms with en-suite bathrooms
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Private Pool</h3>
              <p className="text-gray-600">Enjoy a refreshing swim anytime</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Panoramic Views</h3>
              <p className="text-gray-600">
                Stunning vistas of the surrounding landscape
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Modern Kitchen</h3>
              <p className="text-gray-600">
                Fully equipped with high-end appliances
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Outdoor Terrace</h3>
              <p className="text-gray-600">
                Perfect for al fresco dining and relaxation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">24/7 Security</h3>
              <p className="text-gray-600">
                Ensuring your safety and peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
