import React from "react";

const Input = ({ text, inputName, type, accept }) => {
  const category = ["Select", "General", "OBC", "SC/ST"];
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
            placeholder={inputName}
          />
        </div>
      )}
      {type === "radio" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <input type={type} name={inputName} id="male" />
          <label htmlFor="male">Male</label>

          <input type={type} name={inputName} id="female" />
          <label htmlFor="female">Female</label>

          <input type={type} name={inputName} id="uncategorized" />
          <label htmlFor="uncategorized">Uncategorized</label>
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
            name={inputName}
            cols="30"
            rows="3"
            placeholder={text}
          ></textarea>
        </div>
      )}
      {type === "file" && (
        <div>
          <label className="mr-2" htmlFor={inputName}>
            {text} :
          </label>
          <input type="file" accept={accept} />
        </div>
      )}
    </div>
  );
};

export default Input;
