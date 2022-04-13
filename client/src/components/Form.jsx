import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <div className="w-full bg-[#F9F9F9] pb-10">
      <h2 className=" uppercase py-10 w-2/3 mx-auto text-lg font-semibold">
        Submit your Application
      </h2>
      <form className=" w-2/3 mx-auto flex flex-col">
        <Input text={"First Name"} inputName={"First name"} type={"text"} />
        <Input text={"Middle Name"} inputName={"Middle name"} type={"text"} />
        <Input text={"Last Name"} inputName={"Last name"} type={"text"} />
        <Input text={"Date of Birth"} inputName={"date"} type={"date"} />
        <Input text={"Gender"} inputName={"gender"} type={"radio"} />
        <Input text={"Category"} inputName={"category"} type={"select"} />
        <Input text={"Email"} inputName={"email"} type={"email"} />
        <Input text={"Phone No."} inputName={"Phone"} type={"tel"} />
        <Input text={"Address"} inputName={"address"} type={"textarea"} />
        <Input
          text={"Personal Picture"}
          name={"img"}
          inputName={"img"}
          type={"file"}
          accept={"image/*"}
        />
        <Input
          text={"Signature Picture"}
          name={"img"}
          inputName={"img"}
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
