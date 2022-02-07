import React from "react";
import { Row, Col, Container } from "reactstrap";
import validator from "email-validator";
import { useReducer, useRef, useState } from "react";
import Link from "next/link";
import ContactFeedback from "../components/contactFeedback";

// const initialState = {
//   name: "",
//   phone: "",
//   email: "",
//   message: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.payload };
//     case "phone":
//       return { ...state, phone: action.payload };
//     case "email":
//       return { ...state, email: action.payload };
//     case "message":
//       return { ...state, message: action.payload };
//     case "reset":
//       return { name: "", phone: "", email: "", message: "" };
//     default:
//       throw new Error();
//   }
// }

export default function App() {
  //States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };









  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [messageSent, setMessageSent] = useState(false);
  // const nameRef = useRef(null);
  // const phoneRef = useRef(null);
  // const emailRef = useRef(null);
  // const messageRef = useRef(null);
  // const contactRef = useRef(null);

  // const validateContactInput = (state) => {
  //   if (state.name && state.phone && state.message.trim() !== "") {
  //     if (validator.validate(state.email.trim())) {
  //       // console.log("Message sent!");
  //       emailRef.current.style.color = "black";
  //       nameRef.current.style.color = "black";
  //       phoneRef.current.style.color = "black";
  //       messageRef.current.style.color = "black";
  //       return true;
  //     } else {
  //       messageRef.current.style.color = "black";
  //       emailRef.current.style.color = "red";
  //       return false;
  //     }
  //   } else {
  //     // console.log("Fill up the form.");
  //     if (state.name === "") nameRef.current.style.color = "red";
  //     if (state.phone === "") phoneRef.current.style.color = "red";
  //     if (state.message.trim() === "") messageRef.current.style.color = "red";
  //     return false;
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateContactInput(state)) {
  //     const res = await fetch("/api/sendgrid", {
  //       body: JSON.stringify({
  //         email: state.email,
  //         fullname: state.name,
  //         phone: state.phone,
  //         subject: "Dynamic Black Car Service Website",
  //         message: state.message,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });

  //     const { error } = await res.json();
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }

  //     dispatch({ type: "reset" });
  //     setMessageSent(true);
  //   } else {
  //     // console.log("Message Not Sent!");
  //   }
  //   handleScrollTop();
  // };

  // const handleScrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div>
      <h4 className="spacer pb-80 text-center text-5xl font-semibold">
        Contact Us
      </h4>
      <section className="relative block py-24 lg:pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-gray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                    Complete this form and we will get back to you in 24
                    hours.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        type="text"
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                        name="fullname"
                      />
                    </div>
                    {errors?.fullname && (
                      <p className="text-red-500">Fullname cannot be empty.</p>
                    )}
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {errors?.email && (
                      <p className="text-red-500">Email cannot be empty.</p>
                    )}
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </div>
                    {errors?.subject && (
                      <p className="text-red-500">Subject cannot be empty.</p>
                    )}
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />

                    </div>
                    {errors?.message && (
                      <p className="text-red-500">Message body cannot be empty.</p>
                    )}
                    <div className="text-center mt-6">
                      <button
                        type="submit"
                        className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                      >
                        {buttonText}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-cyan-500 ml-2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-left">
                      {showSuccessMessage && (
                        <p className="text-green-500 font-semibold text-sm my-2">
                          Thankyou! Your Message has been delivered.
                        </p>
                      )}
                      {showFailureMessage && (
                        <p className="text-red-500">
                          Oops! Something went wrong, please try again.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <form>
    //   <div>
    //     {messageSent ? <ContactFeedback onClick={setMessageSent} /> : null}
    //     <div>
    //       <div>
    //         <div >
    //           <label ref={nameRef}>Name*</label>
    //           <input
    //             onChange={(event) => {
    //               dispatch({ type: "name", payload: event.target.value });
    //               nameRef.current.style.color = "black";
    //             }}
    //             placeholder="Your name"
    //             value={state.name}
    //           ></input>
    //         </div>
    //         <div>
    //           <label ref={phoneRef}>Phone Number*</label>
    //           <input
    //             onChange={(event) => {
    //               dispatch({ type: "phone", payload: event.target.value });
    //               phoneRef.current.style.color = "black";
    //             }}
    //             placeholder="Your phone number"
    //             value={state.phone}
    //           ></input>
    //         </div>
    //         <div>
    //           <label ref={emailRef}>E-mail*</label>
    //           <input
    //             onChange={(event) => {
    //               dispatch({ type: "email", payload: event.target.value });
    //               emailRef.current.style.color = "black";
    //             }}
    //             placeholder="Your e-mail"
    //             value={state.email}
    //           ></input>
    //         </div>
    //         <label ref={messageRef}>Message*</label>
    //         <textarea
    //           onChange={(event) =>
    //             dispatch({ type: "message", payload: event.target.value })
    //           }
    //           rows="5"
    //           placeholder="Type your message..."
    //           value={state.message}
    //         ></textarea>
    //       </div>
    //       <button
    //         onClick={handleSubmit}
    //       >
    //         SUBMIT
    //       </button>
    //     </div>
    //     <div>
    //       <h1>Any questions?</h1>
    //       <div>
    //         <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
    //       </div>
    //       <div>
    //         <Link href="tel:+1-415-767-6551">
    //           <p>1+ (415) 767-6551</p>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
}