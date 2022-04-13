import React from "react";

const Input = ({ text, inputName, type, accept }) => {
  const category = ["Select", "General", "OBC", "SC/ST"];
  const gender = ["Male", "Female", "Uncategorized"];
  return (
    <div className="mb-6 text-lg">
      {(type === "text" || type === "email" || type === "date") && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <input
            className="px-2 py-1"
            type={type}
            name={inputName}
            id={inputName}
            placeholder={inputName}
          />
        </div>
      )}
      {type === "radio" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          {gender.map((g) => (
            <>
              <input className="mr-1" type={type} name={inputName} id={g} />
              <label className="mr-4" htmlFor={g}>
                {g}
              </label>
            </>
          ))}
        </div>
      )}
      {type === "tel" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <input
            type={type}
            name={inputName}
            id={inputName}
            placeholder={inputName}
            pattern="[0-9]{10}"
          />
        </div>
      )}
      {type === "select" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <select name={inputName} id={inputName}>
            {category.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
      )}
      {type === "textarea" && (
        <div className=" flex">
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <textarea
            className="px-2 py-1"
            name={inputName}
            cols="30"
            rows="3"
            placeholder={text}
            id={inputName}
          ></textarea>
        </div>
      )}
      {type === "file" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <input type="file" accept={accept} id={inputName} />
        </div>
      )}
    </div>
  );
};

export default Input;
