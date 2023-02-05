import AddNewCard from "./addNewCard";

export default function Dashboard() {
  return (
    <>
      <label
        htmlFor="new-card"
        className="w-full gap-3 btn btn-primary md:w-fit"
      >
        Create Customer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </label>

      <AddNewCard />

      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
        <div className="shadow card bg-base-200">
          <div className="card-body">
            <h2 className="m-0 card-title">Customer Full Name</h2>
            <p className="m-0 card-subtitle">Customer Company Name</p>
            <ul className="m-0">
              <li>
                <a href={`mailto:hello@gmail.com`} className="text-accent">
                  hello@gmail.com
                </a>
              </li>
              <li>480-555-1212</li>
            </ul>
            <p className="pt-4 m-0 text-sm border-t border-gray-700">
              Customer Notes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}