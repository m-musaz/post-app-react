import axios from "axios";

async function fetchData(postId, setUserComments, setLoading) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    setUserComments(res?.data);
    if (res != null) {
      setLoading(false);
    }
  } catch (err) {
    alert(err);
  }
}

export default fetchData;
