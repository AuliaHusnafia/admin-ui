import { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="
        flex flex-col gap-2 p-3 rounded-lg shadow-sm bg-white
        transition-all duration-300 cursor-pointer
        hover:scale-105 hover:border hover:border-gray-300 hover:bg-pink-100
      "
    >
      {/* Bagian Atas - Judul */}
      <h2
        className="text-center font-bold capitalize leading-snug"
        style={{ fontSize: "0.6rem" }}
      >
        {title}
      </h2>

      {/* Bagian Tengah - Isi */}
      <p
        className="text-center text-gray-500 leading-relaxed flex-1"
        style={{ fontSize: "0.55rem" }}
      >
        {body}
      </p>

      {/* Bagian Bawah - Tombol */}
      <button
        onClick={() => setIsClicked(true)}
        className={`
          py-1 px-2 rounded text-white font-medium w-full
          transition-all duration-300
          ${isClicked
            ? "bg-special-red2 hover:brightness-125"
            : "bg-gray-600 hover:brightness-125"
          }
        `}
        style={{ fontSize: "0.55rem" }}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;