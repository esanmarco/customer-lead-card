"use client";

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

export default function AddNewCard() {
  const [newLead, setNewLead] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const { mutate, isLoading } = useMutation(["new-lead"], async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lead`, {
      method: "POST",
      body: JSON.stringify(newLead),
    });
    const data = await res.json();
    setNewLead({
      name: "",
      companyName: "",
      email: "",
      phone: "",
    });
    return data;
  });

  const handleUpdateState = (e: any) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  return (
    <>
      <input type="checkbox" id="new-card" className="modal-toggle" />
      <label htmlFor="new-card" className="cursor-pointer modal">
        <label className="relative modal-box" htmlFor="">
          <h3 className="m-0 text-lg">Add New Customer Card</h3>
          <div className="flex flex-col gap-3 my-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered"
              name="name"
              value={newLead.name}
              onChange={(e: any) => handleUpdateState(e)}
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full input input-bordered"
              name="companyName"
              value={newLead.companyName}
              onChange={(e: any) => handleUpdateState(e)}
            />

            <input
              type="email"
              placeholder="Customer Email"
              className="w-full input input-bordered"
              name="email"
              value={newLead.email}
              onChange={(e: any) => handleUpdateState(e)}
            />

            <input
              type="text"
              placeholder="Customer Phone Number"
              className="w-full input input-bordered"
              name="phone"
              value={newLead.phone}
              onChange={(e: any) => handleUpdateState(e)}
            />
          </div>

          <button
            onClick={() => mutate()}
            className={`w-full btn btn-secondary ${isLoading ? "loading" : ""}`}
          >
            {isLoading ? "Creating" : "Create"} Customer
          </button>
        </label>
      </label>
    </>
  );
}
