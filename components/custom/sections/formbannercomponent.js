import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/subscribe.svg";

const FormBannerComponent = () => {
  return (
    <div>
      <section className="text-gray-700 body-font flex md:flex-row flex-col items-center bg-white">
        <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Subscribe</h1>
            <p className="mb-8 leading-relaxed">Subscribe and get updates via email</p>
            <div className="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200">
                <input className="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0" placeholder="Email"
                    type="text"/>
                <button
                    className="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100">Subscribe</button>
            </div>
        </div>
        {/* <div className="md:w-1/2 w-5/6">
            <img className="object-cover object-center" alt="hero"
                src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062__480.png"/>
        </div> */}

    </section>
    </div>
  );
};

export default FormBannerComponent;
