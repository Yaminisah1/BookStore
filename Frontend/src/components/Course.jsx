import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
          "Discover a Wide Range of Course Materials and Academic Texts Tailored to Your Educational Needs. From Textbooks and Study Guides to Specialized Books in Sports, Music, and Culinary Arts, Find Everything You Need for a Successful Semester."
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <p className="text-pink-500 font-bold">Price: ${book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
