import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/DashboardMain.module.css";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";

function ContactDetailsPage() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/contacts`
        );
        const reversedContacts = response.data.reverse();
        setContacts(reversedContacts);
        console.log(reversedContacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
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
        style={{ marginTop: "2em", height: "30em" }}
        className={styles.tableContainer}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
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
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)}>Prev</button>
          )}
          <button>{currentPage}</button>
          {currentPage < Math.ceil(contacts.length / itemsPerPage) && (
            <button onClick={() => paginate(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsPage;
