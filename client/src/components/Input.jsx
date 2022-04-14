import React from "react";

const Input = ({ text, type, accept, value, onChanges, name, required }) => {
  const category = ["Select", "General", "OBC", "SC/ST"];
  return (
    <div className="mb-6 text-lg">
      {(type === "text" || type === "email" || type === "date") && (
        <div>
          <label className="mr-2" htmlFor={text}>
            {text} :
          </label>
          {required ? (
            <input
              className="px-2 py-1"
              type={type}
              name={name}
              id={text}
              placeholder={text}
              value={value}
              onChange={onChanges}
              required
            />
          ) : (
            <input
              className="px-2 py-1"
              type={type}
              name={name}
              id={text}
              placeholder={text}
              value={value}
              onChange={onChanges}
            />
          )}
        </div>
      )}
      {type === "tel" && (
        <div>
          <label className="mr-2" htmlFor={text}>
            {text} :
          </label>
          <input
            type={type}
            name={name}
            id={text}
            placeholder={text}
            pattern="[0-9]{10}"
            value={value}
            onChange={onChanges}
            required
          />
        </div>
      )}
      {type === "select" && (
        <div>
          <label className="mr-2" htmlFor={text}>
            {text} :
          </label>
          <select
            name={name}
            id={text}
            value={value}
            onChange={onChanges}
            required
          >
            {category.map((c, index) =>
              index === 0 ? (
                <option value="" key={index}>
                  {c}
                </option>
              ) : (
                <option value={c} key={index}>
                  {c}
                </option>
              )
            )}
          </select>
        </div>
      )}
      {type === "textarea" && (
        <div className=" flex">
          <label className="mr-2" htmlFor={text}>
            {text} :
          </label>
          <textarea
            className="px-2 py-1"
            name={name}
            cols="30"
            rows="3"
            placeholder={text}
            id={text}
            value={value}
            onChange={onChanges}
            required
          ></textarea>
        </div>
      )}
      {type === "file" && (
        <div>
          <label className="mr-2" htmlFor={text}>
            {text} :
          </label>
          <input type="file" accept={accept} id={text} required />
        </div>
      )}
    </div>
  );
};

export default Input;
