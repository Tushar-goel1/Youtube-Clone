import React, { useEffect, useState } from 'react';

const GetTimeDiff = ({ uploadDate }) => {
  const [timeDifference, setTimeDifference] = useState('');

  useEffect(() => {
    const calculateTimeDifference = () => {
      const currentDate = new Date();
      const difference = currentDate - new Date(uploadDate);
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      if (years > 0) {
        setTimeDifference(`${years} ${years === 1 ? 'year' : 'years'}`);
      } else if (months > 0) {
        setTimeDifference(`${months} ${months === 1 ? 'month' : 'months'}`);
      } else if (days > 0) {
        setTimeDifference(`${days} ${days === 1 ? 'day' : 'days'}`);
      } else if (hours > 0) {
        setTimeDifference(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
      } else {
        setTimeDifference(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
      }
    };

    calculateTimeDifference();
  }, [uploadDate]);

  return <span>{timeDifference} ago</span>;
};

export default GetTimeDiff;

