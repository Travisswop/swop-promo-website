"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import SectionLayout from "../shared/SectionLayout";

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Swal.fire({
      icon: "success",
      text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
      confirmButtonColor: "#131b2a",
    });

    // // Validate the form and set errors
    // const errors = validate(emailForm);
    // setFormErrors(errors);

    // // Check if there are any errors
    // if (Object.keys(errors).length === 0) {
    //   send(
    //     'service_21srltl',
    //     'template_regri0n',
    //     emailForm,
    //     'QQbwIXKpnJegjLF_x',
    //   )
    //     .then((response) => {
    //       setLoading(false); // Stop loading
    //       Swal.fire({
    //         icon: 'success',
    //         text: 'Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.',
    //         confirmButtonColor: '#131b2a',
    //       }).then(() => {
    //         setEmailForm({
    //           name: '',
    //           phone: '',
    //           email: '',
    //           message: '',
    //         });
    //       });
    //     })
    //     .catch((err) => {
    //       console.log('err', err);
    //       Swal.fire({
    //         icon: 'error',
    //         text: 'Something went wrong!',
    //       }).then(() => {
    //         setEmailForm({
    //           name: '',
    //           phone: '',
    //           email: '',
    //           message: '',
    //         });
    //         setLoading(false); // Stop loading
    //       });
    //     });
    // } else {
    setLoading(false); // Stop loading
    // }
  };

  const SocialIcon = ({ icon: Icon }) => (
    <Link href={"#"} traget="_blank">
      <div className="bg-black rounded-full p-2">
        <Icon className="text-white w-5 h-5" />
      </div>
    </Link>
  );
  return (
    <SectionLayout className="leading-tighter tracking-tight mb-5 lg:w-3/4 w-full">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h1
          className={`text-stone-950 font-normal text-xl md:text-3xl text-center !leading-none`}
        >
          <strong>Have Some Questions?</strong>
        </h1>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <p className="text-base text-stone-950 text-center mt-4 max-w-[510px] mx-auto pb-10">
          {`Fill out the form below and and we will get back to you as soon as possible.`}
        </p>
      </ScrollMotionEffect>
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <section
          className={
            "flex gap-10 justify-center items-center bg-[#f5f5f5] p-8  rounded-3xl w-full "
          }
        >
          {/* <div */}
          {/*   className={ */}
          {/*     " flex-col justify-around items-center rounded-3xl bg-white self-stretch hidden lg:flex" */}
          {/*   } */}
          {/* > */}
          {/*   <ScrollMotionEffect effect="fade-up" duration="2000"> */}
          {/*     <div className="w-[130px] md:w-[230px] h-auto mx-auto"> */}
          {/*       <Image */}
          {/*         width={400} */}
          {/*         height={400} */}
          {/*         src={"/assets/contact/swop.png"} */}
          {/*         alt="Mail" */}
          {/*         quality={100} */}
          {/*       /> */}
          {/*     </div>{" "} */}
          {/*   </ScrollMotionEffect> */}
          {/**/}
          {/*   <ScrollMotionEffect effect="fade-up" duration="2000"> */}
          {/*     <div className="w-[300px] md:w-[400px] h-auto"> */}
          {/*       <Image */}
          {/*         width={400} */}
          {/*         height={400} */}
          {/*         src={"/assets/contact/mail.png"} */}
          {/*         alt="Mail" */}
          {/*         quality={100} */}
          {/*       /> */}
          {/*     </div> */}
          {/*   </ScrollMotionEffect> */}
          {/*   <ScrollMotionEffect effect="fade-up" duration="2000"> */}
          {/*     <div className="flex items-center gap-x-2 justify-center"> */}
          {/*       <SocialIcon icon={FaFacebookF} /> */}
          {/*       <SocialIcon icon={FaLinkedinIn} /> */}
          {/*       <SocialIcon icon={FaInstagram} /> */}
          {/*     </div> */}
          {/*   </ScrollMotionEffect> */}
          {/* </div> */}

          <div className={"w-full   flex-col justify-center items-center"}>
            <form className="w-full " onSubmit={handleSubmit}>
              <div class="mb-6 w-full flex flex-col lg:flex-row gap-6 justify-center items-center">
                <div className={"flex-grow w-full"}>
                  <label for="name">Your Name</label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full mt-2 p-2 placeholder:text-lg pl-5"
                    placeholder="Your name"
                    required
                    type="text"
                    name="name"
                    value={emailForm.name}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        name: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.name}</span>
                </div>
                <div className="flex-grow w-full">
                  <label for="email">Your Email</label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full mt-2 p-2 placeholder:text-lg pl-5"
                    placeholder="What's your email"
                    required
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                </div>
              </div>
              <label for="phone">Your Phone</label>
              <div class="mb-6">
                <input
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full mt-2 p-2 placeholder:text-lg pl-5"
                  placeholder="What's your phone"
                  required
                  type="tel"
                  name="phone"
                  value={emailForm.phone}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      phone: event.target.value,
                    });
                  }}
                />
                <span className="text-orange-600">{formErrors.phone}</span>
              </div>
              <label for="message">Message</label>
              <div class="mb-6">
                <textarea
                  rows={4}
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg  rounded-lg focus:ring-black focus:border-black block w-full mt-2 p-2  placeholder:text-lg pl-5"
                  placeholder="Your question....."
                  required
                  name="message"
                  value={emailForm.message}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      message: event.target.value,
                    });
                  }}
                />
                <span className="text-orange-600">{formErrors.message}</span>
              </div>

              {loading ? (
                <Button
                  isLoading
                  className="text-white bg-[#000000] text-lg  px-5 py-3 text-center rounded-full w-full lg:w-1/2 m-auto lg:translate-x-1/2"
                  radius="sm"
                  size="lg"
                >
                  SENDING...
                </Button>
              ) : (
                <Button
                  className="text-white bg-[#000000] text-lg px-5 py-3 text-center rounded-full w-full lg:w-1/2 m-auto lg:translate-x-1/2"
                  radius="sm"
                  size="lg"
                  onClick={handleSubmit}
                >
                  SEND MESSAGE
                </Button>
              )}
            </form>
          </div>
        </section>
      </ScrollMotionEffect>
    </SectionLayout>
  );
};

export default ContactSection;
