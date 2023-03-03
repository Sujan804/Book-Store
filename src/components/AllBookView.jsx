import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadedBookThunk from "../redux/books/thunk/loadedBookThunk";
import SingleBookView from "./SingleBookView";

const AllBookView = () => {
  const books = useSelector((state) => state.book);
  const key = useSelector((state) => state.search.key).toLowerCase();
  const featured = useSelector((state) => state.search.featured);
  const filteredBooks = books.filter((book) => {
    const bookName = book.name.toLowerCase();
    const index = bookName.indexOf(key);
    if (featured) {
      if (book.featured && index > -1) {
        return true;
      }
    } else {
      if (index > -1) {
        return true;
      }
      return false;
    }
  });

  console.log("filered", filteredBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadedBookThunk());
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {filteredBooks.map((book) => (
        <SingleBookView book={book} key={book.id} />
      ))}
    </div>
  );
};

export default AllBookView;
