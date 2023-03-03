import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addBookThunk from "../redux/books/thunk/addBookThunk";
const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(5);
  const [featured, setFeatured] = useState(false);

  const dispatch = useDispatch();
  const toggleFeature = () => {
    setFeatured(!featured);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      name,
      author,
      imageUrl,
      price,
      rating,
      featured,
    };
    dispatch(addBookThunk(newBook));
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
              requiredhtmlFor
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
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
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
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