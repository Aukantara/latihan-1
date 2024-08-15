import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
        <p>{new Date().toLocaleTimeString()}</p>
      <div className="bg-fuchsia-500">posts</div>
      {posts.map((post) => (
        <CardList key={post.id}>
          <h1>{post.title}</h1>
          <h1>{post.id}</h1>
          <h1>{post.body}</h1>
          <ViewUserButton userId={post.userId}/>
        </CardList>
      ))}
    </>
  );
};

export default Posts;
