"use client";
import { Contactform } from "@/components";
import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">About Nest Properties</h1>
      <p className="mb-6">
        Welcome to Nest Properties, your trusted partner in finding the perfect
        home. We specialize in luxury properties across some of India's most
        sought-after locations.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6">
        At Nest Properties, we're committed to helping you discover your dream
        home. Whether you're looking for a seaside retreat in Alibaug or a
        mountain getaway in Khandala, we have the perfect property for you.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Extensive portfolio of premium properties</li>
        <li>Expert knowledge of local real estate markets</li>
        <li>Personalized service tailored to your needs</li>
        <li>Transparent and hassle-free buying process</li>
      </ul>
      <p>
        Discover the Nest Properties difference today and take the first step
        towards your new home.
      </p>
      <div className="mt-12">
        <Contactform />
      </div>
    </div>
  );
}
