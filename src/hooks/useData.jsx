import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((json) => {
        setData(json.books)
        setLoading(false)
        
      });
  }, []);

  return { data, loading };
};


export default useData