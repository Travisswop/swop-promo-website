"use client";
import Swal from "sweetalert2";
import { useState } from "react";

const page = () => {
  const [mail, setMail] = useState("");
  function handelClick() {
    Swal.fire({
      title: "Request submitted!",
      text: "",
      icon: "success",
      // confirmButtonText: "",
    });
  }
  return (
    <div className="container py-16 min-h-screen m-auto w-full flex justify-center items-center -mt-20">
      <section
        className={
          "flex flex-col p-10 gap-5 justify-center items-center min-w-[300px] lg:w-[600px] h-full rounded-3xl bg-gray-100 border-gray-200 border"
        }
      >
        <h2 className={"font-semibold text-xl text-center"}>
          Are you sure you want to delete your account?
        </h2>
        <h3 className={"text-center pb-4 text-lg"}>
          Deleting your account will remove all your data and you will not be
          able to recover it.
        </h3>
        <form className={"flex flex-col gap-5"}>
          <input
            className={"rounded-3xl py-2 px-4"}
            type="email"
            name="email"
            value={mail}
            placeholder="Enter your account email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className={
              "bg-red-500 mt-8 hover:scale-110 transition-all ease-in-out duration-300  text-white py-4 text-lg font-semibold px-6 rounded-3xl"
            }
            onClick={(e) => {
              e.preventDefault();
              handelClick();
              setMail("");
            }}
            disabled={mail === ""}
          >
            Delete
          </button>
        </form>
      </section>
    </div>
  );
};

export default page;
