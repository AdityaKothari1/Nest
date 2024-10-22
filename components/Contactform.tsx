"use client";
import { supabaseClient } from "@/lib/supabase";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  name: string;
  email: string;
  mobile: string;
};

export function Contactform() {
  const { register, handleSubmit } = useForm<FormValues>();
  const regex = /^[6-9]{1}[0-9]{9}$/;
  const onSubmit: SubmitHandler<FormValues> = async formData => {
    if (!formData) {
      toast.error("Form data is undefined", {
        duration: 4000,
        id: "form-data-undefined",
      });
      return;
    }

    console.log(formData);
    const { name, email, mobile } = formData;
    console.log(name, email, mobile);

    if (!name) {
      toast.error("Name is required", {
        duration: 4000,
      });
      return;
    }
    if (!email) {
      toast.error("Email is required", {
        duration: 4000,
      });
      return;
    }
    if (!mobile || !regex.test(mobile)) {
      toast.error("Invalid mobile number", {
        duration: 4000,
        id: "invalid-number",
      });
      return;
    }

    try {
      const [supabaseResult, sheetMonkeyResponse] = await Promise.all([
        supabaseClient.from("leads").insert([formData]),
        fetch("https://api.sheetmonkey.io/form/oDcvRbjXo6KPBFYbEeuSPk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
      ]);

      const { data, error } = supabaseResult;

      if (error) {
        console.error("Error inserting data:", error);
        throw new Error("Failed to submit form to database");
      }

      if (!sheetMonkeyResponse.ok) {
        throw new Error("Failed to submit form to SheetMonkey");
      }

      // Log success only if both operations were successful
      console.log("Data inserted successfully:", data);

      toast.success("Form submitted successfully", {
        id: "success",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`, {
          id: "error",
        });
      } else {
        toast.error("An unexpected error occurred", {
          id: "error",
        });
      }
    }
  };
  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between max-md:space-y-4 py-10 px-3">
        <h2 className="text-2xl md:text-4xl max-w-96">
          Your Holiday Home is just one click away
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 space-y-10"
        >
          <input
            className="focus:outline-none  border-b-[1px] border-b-black w-full placeholder:text-sm pl-2 bg-transparent"
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          <div className="flex justify-between  gap-x-4  md:gap-x-10">
            <input
              className="focus:outline-none  border-b-[1px] border-b-black w-full placeholder:text-sm pl-2"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="focus:outline-none  border-b-[1px] border-b-black w-full placeholder:text-sm pl-2"
              type="tel"
              placeholder="Mobile"
              {...register("mobile")}
            />
          </div>
          <div className="flex flex-col  md:flex-row justify-between space-y-2">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked
                disabled
                className="w-4 h-4 appearance-none border border-gray-300 rounded-sm checked:bg-teal-500 unchecked:bg-gray-200 transition-colors duration-200 ease-in-out cursor-pointer"
              />
              <p>
                I agree to the{" "}
                <Link href={"/terms-conditions"}>terms & conditions</Link>
              </p>
            </div>
            <button
              className="border-[1px] px-10 py-3 rounded-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
