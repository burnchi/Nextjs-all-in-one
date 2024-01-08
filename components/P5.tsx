"use client";
import React, { useState } from "react";

const P5 = () => {
  const [selectedValue, setSelectedValue] = useState("draft");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    // console.log(e.target.value);
    setIsSubmit(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(`表单提交到服务器,你选的是${selectedValue}`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
      <fieldset className="w-[400px] flex flex-col  items-center">
        <legend className="text-center text-xl font-semibold">
          Published Status
        </legend>
        <div className="flex items-center gap-2">
          <input
            id="draft"
            className="peer/draft draft"
            type="radio"
            name="status"
            value="draft"
            checked={selectedValue === "draft"}
            onChange={handleRadioChange}
          />
          <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
            Draft
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="published"
            className="peer/published"
            type="radio"
            name="status"
            value="published"
            checked={selectedValue === "published"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="published"
            className="peer-checked/published:text-sky-500"
          >
            published
          </label>
        </div>
      </fieldset>
      {selectedValue === "draft" ? (
        <div className="">Drafts are only visible to administrators.</div>
      ) : (
        <div className="">Your post will be publicly visible on your site.</div>
      )}
      <button
        className="px-3 py-2 bg-blue-500 text-neutral-200 hover:text-white rounded-md "
        type="submit"
      >
        submit
      </button>
      {isSubmit && <p>{`表单提交到服务器,你选的是${selectedValue}`}</p>}
    </form>
  );
};
export default P5;
