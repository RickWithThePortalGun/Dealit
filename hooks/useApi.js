import { useState } from "react";
export default useApi = (apiFunc) => {

  const [data, setData ] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);
    if (!response.ok) {
      console.log("error connnecting to server");
      return setError(true);
    }
    setError(false);
    setData(response.data);
    // console.log(data);
  };
  return {data,error,loading, request}
};
