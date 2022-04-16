import React, { useState } from "react";
import rohit from "../Uploads/Rohit.png";
import Field from "./Field";
import sign from "../Uploads/sign.jpeg";

const Application = () => {
  const [info, setInfo] = useState("");
  const applicationData = async () => {
    const res = await fetch("/application", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setInfo(data[data.length - 1]);
  };
  console.log(info);
  return (
    <div className="w-full h-full">
      {info && (
        <>
          <div className="w-full flex justify-center items-center h-20 font-semibold my-10 text-xl">
            <h1>ADMIT CARD</h1>
          </div>
          <div className="w-1/2 mx-auto flex justify-between border p-6 bg-gray-50">
            <div className="flex flex-col w-1/2">
              <Field text={"Name"} info={info.fullName} />
              <Field text={"DOB"} info={info.DOB} />
              <Field text={"Gender"} info={info.gender} />
              <Field text={"Category"} info={info.category} />
              <Field text={"Email"} info={info.email} />
              <Field text={"Phone"} info={info.phone} />
              <Field text={"Address"} info={info.address} />
            </div>
            <div className="flex flex-col">
              <div className="mb-6 flex flex-col items-center">
                <img
                  className=" w-32 rounded-sm mb-2"
                  src={rohit}
                  alt="candidate"
                />
                <p className=" text-xs">Photograph</p>
              </div>
              <div className="mb-6 flex flex-col items-center">
                <img
                  className="w-32 h-12 mb-2 border border-gray-300"
                  src={sign}
                  alt="signature"
                />
                <p className=" text-xs">Signature</p>
              </div>
            </div>
          </div>
        </>
      )}
      {!info && (
        <div className="flex w-full h-screen justify-center items-center">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md text-lg hover:bg-green-800 transition-all"
            onClick={applicationData}
          >
            Generate Admit Card
          </button>
        </div>
      )}
    </div>
  );
};

export default Application;
