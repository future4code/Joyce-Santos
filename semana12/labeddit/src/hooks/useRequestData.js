import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data.posts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return data;
};
