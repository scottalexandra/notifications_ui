import {useEffect, useState} from 'react';
const useFetchNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/api/v1/user/notifications";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setNotifications(json.data);
      }catch(error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  return notifications;
};

export default useFetchNotifications;
