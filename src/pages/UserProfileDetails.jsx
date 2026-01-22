export default function UserProfileDetails() {
  return (
    <div className="min-h-screen px-6 py-10 transition-colors duration-300 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">User Profile</h1>
      </div>

      {/* Card */}
      <div className="max-w-4xl mx-auto rounded-2xl shadow-md p-8 ">
        {/* Account Details */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Mobile Number</label>
              <input
                type="text"
                placeholder="Get tickets on WhatsApp / SMS"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                value="utkarshsubhedar2017@gmail.com"
                disabled
                className="w-full px-4 py-2 rounded-lg border bg-transparent opacity-70"
              />
            </div>
          </div>
        </section>

        {/* Personal Details */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">First Name *</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name *</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Birthday (Optional)</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Identity (Optional)</label>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-lg border">Woman</button>
                <button className="px-4 py-2 rounded-lg border">Man</button>
              </div>
            </div>
          </div>
        </section>

        {/* Address Details */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Street Address</label>
              <input
                type="text"
                placeholder="Enter street address"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">State</label>
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
