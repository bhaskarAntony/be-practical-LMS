import React from "react";

const PurchaseHistory = () => {
  const purchases = [
    {
      product: "Java Pro: Code, Create, Conquer",
      type: "Course",
      price: "₹4,999",
      purchaseDate: "2025-03-12",
      status: "Completed",
    },
    {
      product: "MERN Stack Mastery",
      type: "Course",
      price: "₹6,499",
      purchaseDate: "2025-03-18",
      status: "Completed",
    },
    {
      product: "Advanced React Components Guide",
      type: "Ebook",
      price: "₹999",
      purchaseDate: "2025-03-25",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Purchase History</h1>
        <p className="text-gray-600">View your past purchases including courses and digital products.</p>

        <table className="w-full mt-6 border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Purchase Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3">{item.purchaseDate}</td>
                <td className={`p-3 font-semibold ${item.status === "Completed" ? "text-green-600" : "text-orange-600"}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
