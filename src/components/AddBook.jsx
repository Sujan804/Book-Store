import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBookThunk from "../redux/books/thunk/addBookThunk";
import updateBookThunk from "../redux/books/thunk/updateBookThunk";
const AddBook = () => {
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  console.log("Edit", edit);
  const [name, setName] = useState(edit.opened ? edit.name : "");
  const [author, setAuthor] = useState(edit.opened ? edit.author : "");
  const [thumbnail, setThumbnail] = useState(edit.opened ? edit.thumbnail : "");
  const [price, setPrice] = useState(edit.opened ? edit.price : 0);
  const [rating, setRating] = useState(edit.opened ? edit.rating : 5);
  const [featured, setFeatured] = useState(edit.opened ? edit.featured : false);
  useEffect(() => {
    if (edit.opened) {
      setName(edit.name);
      setAuthor(edit.author);
      setThumbnail(edit.thumbnail);
      setPrice(edit.price);
      setRating(edit.rating);
      setFeatured(edit.featured);
    }
  }, [edit]);

  const toggleFeature = () => {
    setFeatured(!featured);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };
    const id = edit.id;

    if (edit.opened) {
      console.log({ id, newBook });
      dispatch(updateBookThunk({ id, newBook }));
    } else {
      dispatch(addBookThunk(newBook));
      setName("");
      setAuthor("");
      setThumbnail("");
      setPrice("");
      setRating("");
      setFeatured("");
    }

    // console.log(newBook);
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={onSubmitHandler}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.value)}
              value={thumbnail}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={toggleFeature}
              checked={featured}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
