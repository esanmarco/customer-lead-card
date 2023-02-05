export default function AddNewCard() {
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
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full input input-bordered"
            />

            <input
              type="email"
              placeholder="Customer Email"
              className="w-full input input-bordered"
            />

            <input
              type="text"
              placeholder="Customer Phone Number"
              className="w-full input input-bordered"
            />
          </div>

          <button className="w-full btn btn-secondary">Create Customer</button>
        </label>
      </label>
    </>
  );
}
