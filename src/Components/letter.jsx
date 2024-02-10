import React from 'react';

function Letter({ recipientName, senderName, date, content,roomNumber,startDate,endDate }) {
  return (
    <div className="letter">
      <div className="header">
        <h2>Dear {recipientName},</h2>
        <p>{date}</p>
      </div>
      <div className="body">
      <h2>Room Allocation Letter</h2>
      <p>
        Dear [Recipient Name],
      </p>
      <p>
        We request you to allocate a room for our use.
        Below are the details of your room allocation:
      </p>
      <ul>
        <li>Room Number: {roomNumber}</li>
        <li>Start Date: {startDate}</li>
        <li>End Date: {endDate}</li>
      </ul>
      <p>
        We will make sure to adhere to the allocated dates and maintain the cleanliness
        of the room.
      </p>

     
      </div>
      <div className="footer">
        <p>Sincerely,</p>
        <p>{senderName}</p>
      </div>
    </div>
  );
}

export default Letter;
