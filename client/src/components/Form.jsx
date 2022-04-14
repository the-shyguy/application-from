import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
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
  console.log(state.firstName);
  console.log(state.middleName);
  console.log(state.lastName);
  console.log(state.DOB);
  console.log(state.category);
  console.log(state.email);
  console.log(state.phone);
  console.log(state.address);
  console.log(selectGender);

  return (
    <div className="w-full bg-[#F9F9F9] pb-10">
      <h2 className=" uppercase py-10 w-2/3 mx-auto text-lg font-semibold">
        Submit your Application
      </h2>
      <form className=" w-2/3 mx-auto flex flex-col">
        <Input
          text={"First Name"}
          type={"text"}
          name={"firstName"}
          value={state.firstName}
          onChanges={handleChange}
          required={true}
        />
        <Input
          text={"Middle Name"}
          type={"text"}
          name={"middleName"}
          value={state.middleName}
          onChanges={handleChange}
          required={false}
        />
        <Input
          text={"Last Name"}
          type={"text"}
          name={"lastName"}
          value={state.lastName}
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
        <button
          className="px-4 py-2 bg-blue-600 text-white w-24 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
