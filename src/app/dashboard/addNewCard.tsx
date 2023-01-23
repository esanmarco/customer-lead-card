export default function AddNewCard() {
  return (
    <>
      <input type="checkbox" id="new-card" className="modal-toggle" />
      <label htmlFor="new-card" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg m-0">Add New Customer Card</h3>
          <div className="flex flex-col gap-3 my-5">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Customer Email"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Customer Phone Number"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-secondary w-full">Create Customer</button>
        </label>
      </label>
    </>
  );
}
