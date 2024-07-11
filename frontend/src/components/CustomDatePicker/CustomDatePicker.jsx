import React, { useState } from 'react';
import styles from '../../styles/Calender.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const CustomDatePicker = () => {

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (date) => {
    const clickedDate = new Date(currentYear, currentMonth, date);
    setSelectedDate(clickedDate);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className={styles.datepicker}>
      <h1>BOOK APPOINTMENT</h1>

      <div className={styles.navigation}>
        <button onClick={handlePrevMonth}><FaArrowLeft /></button>
        <span>{monthNames[currentMonth]} {currentYear}</span>
        <button onClick={handleNextMonth}><FaArrowRight /></button>
      </div>

      <table>
        <thead className={styles.thead}>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }, (_, i) => {
            const startDate = i * 7 - firstDayOfMonth + 1;
            return (
              <tr key={i}>
                {Array.from({ length: 7 }, (_, j) => {
                  const date = startDate + j;
                  if (date > 0 && date <= daysInMonth) {
                    const currentDate = new Date(currentYear, currentMonth, date);
                    const isCurrentDay = selectedDate && currentDate.toDateString() === selectedDate.toDateString();

                    return (
                      <td
                        key={j}
                        onClick={() => handleDateClick(date)}
                        className={
                          isCurrentDay
                            ? styles.highlightedDay
                            : styles.otherDay
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        {date}
                      </td>
                    );
                  } else {
                    return <td key={j}></td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.containerbtn}>
        <button onClick={() => navigate('/appointment')} >Find Available Time Slot</button>
      </div>
    </div>
  );
};

export default CustomDatePicker;
