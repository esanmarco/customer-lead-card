"use client";

import { useLeadStore } from "@/stores/useLeadStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { defaultState } from "@/stores/useLeadStore";

export default function AddNewCard() {
  const { name, companyName, email, phone } = useLeadStore();
  const { refresh } = useRouter();

  const { mutate, isLoading } = useMutation(["new-lead"], async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lead`, {
      method: "POST",
      body: JSON.stringify({
        name,
        companyName,
        email,
        phone,
      }),
    });
    // rehydrate the cache
    refresh();
    // close the modal
    (document.getElementById("new-card") as HTMLInputElement).checked = false;
    useLeadStore.setState(defaultState);
  });

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
              value={name}
              onChange={(e: any) =>
                useLeadStore.setState({ name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full input input-bordered"
              name="companyName"
              value={companyName}
              onChange={(e: any) =>
                useLeadStore.setState({ companyName: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Customer Email"
              className="w-full input input-bordered"
              name="email"
              value={email}
              onChange={(e: any) =>
                useLeadStore.setState({ email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Customer Phone Number"
              className="w-full input input-bordered"
              name="phone"
              value={phone}
              onChange={(e: any) =>
                useLeadStore.setState({ phone: e.target.value })
              }
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
