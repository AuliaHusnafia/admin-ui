import PostCard from "./PostCard";
import postsData from "./data/postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Post Cards</h1>
      <div
        className="mx-auto px-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "12px",
        }}
      >
        {postsData.map(({ id, userId, title, body }) => (
          <PostCard
            key={id}
            id={id}
            userId={userId}
            title={title}
            body={body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;