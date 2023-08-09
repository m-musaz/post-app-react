import axios from "axios";
async function fetchData(setPosts, setLoading) {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    setPosts(res?.data);
    res !== null ? setLoading(false) : undefined;
  } catch (err) {
    console.log(err);
  }
}

export default fetchData;
