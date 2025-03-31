import React from "react";

const affiliateLinks = [
  {
    product: "String, StringBuffer and StringBuilder",
    link: "https://learning.be-practical.com/a/tluywcrlt3ovjkvzqlilw",
    commission: "5% per sale",
    newSales: 0,
    validSales: 0,
    refundedSales: 0,
  },
  {
    product: "Java Pro: Code, Create, Conquer",
    link: "https://learning.be-practical.com/a/s6ajkh8x6thxoil0ehpof",
    commission: "5% per sale",
    newSales: 0,
    validSales: 0,
    refundedSales: 0,
  },
  {
    product: "MERN STACK",
    link: "https://learning.be-practical.com/a/wzdbmtmb1x1bzswecbtua",
    commission: "5% per sale",
    newSales: 0,
    validSales: 0,
    refundedSales: 0,
  },
];

function AffiliateDashboard() {
  return (
    <div className="container mx-auto p-8 max-w-5xl bg-white shadow-md rounded-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Affiliate Dashboard</h1>
      <p className="text-gray-600">Manage your affiliate data from here</p>

      {/* Past Payouts */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Past Payouts</h2>
        <p className="text-gray-600 text-sm mt-2">
          You do not have any past payouts available. Please read the {" "}
          <a href="#" className="text-blue-500 underline">affiliate terms of service</a>{" "}
          for more information.
        </p>
      </div>

      {/* Affiliate Links */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Affiliate Links</h2>
        <p className="text-gray-600 text-sm mt-2">
          A list of all affiliate links. When you enroll in a course, the link will appear here automatically.
        </p>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-700">Product Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Affiliate Link</th>
                <th className="px-4 py-2 text-left text-gray-700">Commission</th>
                <th className="px-4 py-2 text-left text-gray-700">Sales Data</th>
              </tr>
            </thead>
            <tbody>
              {affiliateLinks.map((link, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-3">{link.product}</td>
                  <td className="px-4 py-3">
                    <a
                      href={link.link}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.link}
                    </a>
                  </td>
                  <td className="px-4 py-3">{link.commission}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    New Sales: {link.newSales} <br />
                    Valid Sales: {link.validSales} <br />
                    Refunded Sales: {link.refundedSales}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AffiliateDashboard;
