import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadedBookThunk from "../redux/books/thunk/loadedBookThunk";
import SingleBookView from "./SingleBookView";
const AllBookView = () => {
  const books = useSelector((state) => state.book);
  console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadedBookThunk());
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {books.map((book) => (
        <SingleBookView />
      ))}
    </div>
  );
};

export default AllBookView;
