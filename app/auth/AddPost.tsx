"use client";
import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (event.target.value.length <= 300) {
      setTitle(event.target.value);
    } else {
      alert("You are not allowed to insert more than 300");
    }
  };
  return (
    <form>
      <div className="flex flex-col my-4">
        <textarea
          value={title}
          onChange={handleChange}
          name="title"
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2  bg-gray-200 border-x-cyan-400"
        ></textarea>
      </div>
      <div className=" flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
