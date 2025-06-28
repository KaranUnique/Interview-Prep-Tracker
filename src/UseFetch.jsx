import { useState ,useEffect} from "react";

const UseFetch=(url)=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

     useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setLoading(false);
            });
    }, [url]);

    return [data,loading];
}
export default UseFetch;