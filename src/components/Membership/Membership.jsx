import Banner from "./Banner";

const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <Banner/>  {/* Banner Section */}

        {/* Cards Section */}
        <div  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-4">Special Woman</h3>
            <p className="text-gray-700 mb-4">A 50% discount for the first month of new and annual memberships, exclusive to female members, awaits you</p>
            <button className="bg-primary text-black px-6 py-2 rounded-md mt-auto">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-4">Young Members</h3>
            <p className="text-gray-700 mb-4">The opportunity to become a member of Arcadia Fitness clubs with a discount of up to 35% for new, annual and advance memberships is waiting for you!</p>
            <button className="bg-primary text-black px-6 py-2 rounded-md mt-auto">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold mb-4">New Members</h3>
            <p className="text-gray-700 mb-4">Arcadia Fitness has the opportunity to become a member with a 50% discount valid for the first month payment of your new and annual membership!</p>
            <button className="bg-primary text-black px-6 py-2 rounded-md mt-auto">Learn More</button>
          </div>
        </div>

    </div>
  );
}

export default Membership;
