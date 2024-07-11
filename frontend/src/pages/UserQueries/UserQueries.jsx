import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";
import styles from "../../styles/UserQueries.module.css";

function UserQueries() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/contacts`
        );
        setContacts(response.data.reverse());
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, []);

  // Logic to get current items based on page number
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = contacts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div
        style={{ marginTop: "1em" }}
        className={`overflow-x-auto shadow-md sm:rounded-lg ml-65 ${styles.tab}`}
      >
        <table className="w-full border-[4px]  text-sm text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-xs text-gray-700  border-b-[4px] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact, index) => (
              <tr
                key={index}
                className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b-[4px]  dark:border-gray-700 ${styles.tableRow}`}
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {contact.name}
                </td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">{contact.number}</td>
                <td className="px-6 py-4">{contact.subject}</td>
                <td className="px-6 py-4">{contact.message}</td>
                <td>
                  {new Date(contact.dateTime).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`${styles.pagination} my-4`}>
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
            >
              Prev
            </button>
          )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
            {currentPage}
          </button>
          {currentPage < Math.ceil(contacts.length / itemsPerPage) && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserQueries;
