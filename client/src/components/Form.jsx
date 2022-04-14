import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [state, setState] = useState({
    fullName: "",
    category: "",
    email: "",
    phone: "",
    address: "",
  });

  const [selectGender, setGender] = useState("");

  const gender = ["Male", "Female", "Uncategorized"];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      [name]: value,
    });
  };

  const handleGender = (e) => {
    const value = e.target.value;
    setGender(value);
  };
  console.log(state.fullName);
  console.log(state.DOB);
  console.log(state.category);
  console.log(state.email);
  console.log(state.phone);
  console.log(state.address);
  console.log(selectGender);

  return (
    <div className="w-full bg-gray-200 pb-10">
      <h2 className=" pl-2 uppercase pt-10 pb-5 w-1/2 mx-auto text-lg font-semibold">
        Submit your Application
      </h2>
      <form className=" w-1/2 mx-auto flex flex-col bg-white px-8 py-6 rounded-md shadow-md">
        <Input
          text={"Full Name"}
          type={"text"}
          name={"fullName"}
          value={state.fullName}
          onChanges={handleChange}
          required={true}
        />
        <Input
          text={"Date of Birth"}
          type={"date"}
          name={"DOB"}
          value={state.DOB}
          onChanges={handleChange}
          required={true}
        />
        <div className="mr-2 mb-6 text-lg">
          <label htmlFor={"Gender"}>Gender :</label>
          {gender.map((g, index) => (
            <label className="mx-2">
              <input
                id="Gender"
                key={index}
                type={"radio"}
                name={"gender"}
                value={g}
                checked={selectGender === g}
                onChange={handleGender}
                className="mr-1"
                required
              />
              {g}
            </label>
          ))}
        </div>
        <Input
          text={"Category"}
          type={"select"}
          value={state.category}
          name={"category"}
          onChanges={handleChange}
        />
        <Input
          text={"Email"}
          type={"email"}
          name={"email"}
          value={state.email}
          onChanges={handleChange}
          required={true}
        />
        <Input
          text={"Phone No."}
          type={"tel"}
          name={"phone"}
          value={state.phone}
          onChanges={handleChange}
        />
        <Input
          text={"Address"}
          type={"textarea"}
          name={"address"}
          value={state.address}
          onChanges={handleChange}
        />
        <Input
          text={"Personal Picture"}
          name={"img"}
          type={"file"}
          accept={"image/*"}
        />
        <Input
          text={"Signature Picture"}
          name={"img"}
          type={"file"}
          accept={"image/*"}
        />
        <div className="w-full flex justify-center mt-8">
        <button
          className="px-4 py-2 bg-blue-600 text-white w-24 rounded-md"
          type="submit"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
