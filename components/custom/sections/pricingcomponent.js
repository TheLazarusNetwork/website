/* eslint-disable */
import React from "react";
import {useState} from 'react';
import { Row, Col, Container } from "reactstrap";

const PricingComponent = () => {
  const [showMe, setshowMe] = useState(false);
  const [show, setshow] = useState(false);
  const [showMe2, setshowMe2] = useState(false);
  const [show2, setshow2] = useState(false);

  function toggle(){
    setshowMe(!showMe);
  }
  function togg(){
    setshow(!show);
  }
  function toggle2(){
    setshowMe2(!showMe2);
  }
  function togg2(){
    setshow2(!show2);
  }

    return (
        <div>

            <div class="min-h-screen items-center mt-10">
                <div class="">
                    <div class="text-center font-semibold">
                        <h1 class="text-5xl">
                            <span class="text-indigo-500 tracking-wide">SOTREUS</span>
                            {/* <span>VPN</span> */}
                        </h1>
                        <p class="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                            Lazarus Dedicated Network is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.
                        </p>
                        <div class="flex flex-row justify-center items-center mt-5">
                            <div class="flex justify-center">
                                <div class="form-check form-switch">
                                    <span className="pr-4" style={{color: showMe?'gray':'black'}}>USD</span>
                                    <input onChange={toggle} class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <span className=" pl-4" style={{color: showMe?'black':'gray'}}>INR</span>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div class="form-check form-switch">
                                    <span className="pr-4" style={{color: show?'gray':'black'}}>Monthly</span>
                                    <input onChange={togg} class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <span className=" pl-4" style={{color: show?'black':'gray'}}>Yearly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-8 sm:flex flex-wrap justify-center items-center gap-8">
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg">
                            <div class="px-6 py-2 sm:p-10 sm:pb-6">
                                <div class="flex justify-center">
                                    <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                        Basic
                                    </span>
                                </div>
                                <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                                    {showMe && show? "₹22425": showMe && !show? "₹2250": !showMe && show? "$299":"$29.99"}
                                    <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500">
                                    {show? "/yr":"/month"}   
                                    </span>
                                </div>
                            </div>
                            <p class="text-md mt-4">
                                Plan include :
                            </p>
                            <ul class="text-sm w-full mt-6 mb-6">
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    No Traffic / Request Logs
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Unmetered Data Transfer
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Anonymous VPN
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Block ADs, Trackers and Malware
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Firewall
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Support</b>&nbsp;Technical
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Bandwidth</b>&nbsp; 1 Mbps
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>No. of VPN Clients</b>&nbsp; 10
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Multi location Support</b>&nbsp; 3
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Burner IP (VPN Clients)</b>&nbsp; 3
                                </li>
                                <li class="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Dedicated IP
                                </li>
                            </ul>
                            <button type="button" class="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 hover:text-white bg-white hover:bg-indigo-500 transition-colors duration-700 transform">
                                Continue
                            </button>
                        </div>


                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-indigo-500 text-white mt-6 shadow-lg rounded-lg">
                            <div class="px-6 py-2 sm:p-10 sm:pb-6">
                                <div class="flex justify-center">
                                    <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                        Startup
                                    </span>
                                </div>
                                <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                                {showMe && show? "₹52425 ": showMe && !show? "₹5250": !showMe && show? "$699":"$69.99"}
                                    <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-100">
                                    {show? "/yr":"/month"}  
                                    </span>
                                </div>
                            </div>
                            <p class="text-md mt-4">
                                Plan include :
                            </p>
                            <ul class="text-sm w-full mt-6 mb-6">
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    No Traffic / Request Logs
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Unmetered Data Transfer
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Anonymous VPN
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Block ADs, Trackers and Malware
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Firewall
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Support</b>&nbsp;Direct
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Bandwidth</b>&nbsp; 10 Mbps
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>No. of VPN Clients</b>&nbsp; 25
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Multi location Support</b>&nbsp; 5
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Burner IP (VPN Clients)</b>&nbsp; 50
                                </li>
                                <li class="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Dedicated IP
                                </li>
                            </ul>
                            <button type="button" class="w-full px-3 py-3 text-sm shadow rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-700 transform">
                                Continue
                            </button>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg">
                            <div class="px-6 py-2 sm:p-10 sm:pb-6">
                                <div class="flex justify-center">
                                    <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                        Enterprise
                                    </span>
                                </div>
                                <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                                {showMe && show? "₹97425": showMe && !show? "₹9750 ": !showMe && show? "$1299":"$129.99"}
                                    <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500">
                                    {show? "/yr":"/month"}  
                                    </span>
                                </div>
                            </div>
                            <p class="text-md mt-4">
                                Plan include :
                            </p>
                            <ul class="text-sm w-full mt-6 mb-6">
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    No Traffic / Request Logs
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Unmetered Data Transfer
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Anonymous VPN
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Block ADs, Trackers and Malware
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Firewall
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Support</b>&nbsp;Priority
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Bandwidth</b>&nbsp; 100 Mbps
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>No. of VPN Clients</b>&nbsp; 50
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Multi location Support</b>&nbsp; 7
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <b>Burner IP (VPN Clients)</b>&nbsp; Unlimited
                                </li>
                                <li class="mb-3 flex items-center">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Dedicated IP
                                </li>
                            </ul>
                            <button type="button" class="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 hover:text-white bg-white hover:bg-indigo-500 transition-colors duration-700 transform">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className="spacer bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h1 className="title font-bold">Corporate Custom Plan</h1>
                                <h6 className="subtitle">
                                    Contact us for corporate custom plans. Our experts will be in touch with you to offer customized Dedicated Virtual Private Network with limitless resource as per your need. Bandwidth up to 1 Gbps, unlimited VPN clients and more.
                                </h6>
                                <a
                                    href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                                    className="btn btn-danger m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-30"
                                    style={{ fontSize: 15 }}
                                >
                                    Contact Us
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <section>
                <div class="container max-w-full mx-auto py-8 px-6">
                    <h1 class="text-5xl text-center">
                        <span class="text-blue-700 tracking-wide">EREBRUS  </span>
                        {/* <span>VPN</span> */}
                    </h1>
                    <p class="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full text-center">
                        Anonymous VPN uses WireGuard® P2P VPN Solution for bypassing IP Fingerprinting to provide secure & private access to geo-restricted content. Users get to choose the VPN Connection from various countries and change IP addresses upon their requirements.
                    </p>
                    <div class="flex flex-row justify-center items-center mt-5">
                            <div class="flex justify-center">
                                <div class="form-check form-switch">
                                    <span className="pr-4" style={{color: showMe2?'gray':'black'}}>USD</span>
                                    <input onChange={toggle2} class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <span className=" pl-4" style={{color: showMe2?'black':'gray'}}>INR</span>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div class="form-check form-switch">
                                    <span className="pr-4" style={{color: show2?'gray':'black'}}>Monthly</span>
                                    <input onChange={togg2} class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <span className=" pl-4" style={{color: show2?'black':'gray'}}>Yearly</span>
                                </div>
                            </div>
                        </div>

                    <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                        <div
                            class="relative block flex flex-col md:flex-row items-center"
                        >
                            <div
                                class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4"
                            >
                                <div
                                    class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden"
                                >
                                    <div
                                        class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 text-center"
                                    >
                                        <h1 class="text-black font-semibold text-2xl">Basic</h1>
                                        <p class="pt-2 tracking-wide">
                                            <span class="text-3xl font-semibold">{showMe2 && show2? "₹2990": showMe2 && !show2? "₹300": !showMe2 && show2? "$39.99":"$3.99"}</span>
                                            <span class="text-gray-400 font-medium">{show2? "/yr":"/month"} </span>
                                        </p>
                                        <hr class="mt-4 border-1" />
                                        <div class="pt-8 pl-10">
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                No Traffic / Request Logs
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Unmetered Data Transfer
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Anonymous VPN
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Block ADs, Trackers and Malware
                                            </li>
                                        </div>
                                        <li class="mb-0 flex items-center justify-center">
                                            <b>No. of VPN Clients</b>&nbsp; 2
                                        </li>

                                    </div>
                                    <div class="block flex items-center p-8  uppercase">
                                        <button
                                            class="mt-3 text-lg font-semibold 
                                            bg-blue-600 w-full text-white rounded-lg 
                                            px-6 py-3 block shadow-xl hover:bg-gray-700"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg"
                            >
                                <div
                                    class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"
                                >
                                    POPULAR OPTION
                                </div>
                                <div
                                    class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 text-center"
                                >
                                    <h1 class="font-semibold text-2xl text-center">Pro</h1>
                                    <p class="pt-2 tracking-wide text-center">
                                        <span class="text-3xl font-semibold">{showMe2 && show2? "₹6740": showMe2 && !show2? "₹675": !showMe2 && show2? "$89.99":"$8.99"}</span>
                                        <span class="text-gray-400 font-medium">{show2? "/yr":"/month"}</span>
                                    </p>
                                    <hr class="mt-4 border-1" />
                                    <div class="pt-8 pl-10">
                                        <li class="mb-3 flex items-center ">
                                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                </path>
                                            </svg>
                                            No Traffic / Request Logs
                                        </li>
                                        <li class="mb-3 flex items-center ">
                                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                </path>
                                            </svg>
                                            Unmetered Data Transfer
                                        </li>
                                        <li class="mb-3 flex items-center ">
                                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                </path>
                                            </svg>
                                            Anonymous VPN
                                        </li>
                                        <li class="mb-3 flex items-center ">
                                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                </path>
                                            </svg>
                                            Block ADs, Trackers and Malware
                                        </li>
                                    </div>
                                    <li class="mb-0 flex items-center justify-center">
                                        <b>No. of VPN Clients</b>&nbsp; 5
                                    </li>
                                </div>

                                <div class="block flex items-center p-8  uppercase">
                                    <button
                                        class="mt-3 text-lg font-semibold 
	bg-blue-600 w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            <div
                                class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4"
                            >
                                <div
                                    class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden"
                                >
                                    <div
                                        class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 text-center"
                                    >
                                        <h1 class="text-black font-semibold text-2xl">Ultra</h1>
                                        <p class="pt-2 tracking-wide">
                                            <span class="text-3xl font-semibold">{showMe2 && show2? "₹11240": showMe2 && !show2? "₹1125": !showMe2 && show2? "$149.99":"$14.99"}</span>
                                            <span class="text-gray-400 font-medium">{show2? "/yr":"/month"}</span>
                                        </p>
                                        <hr class="mt-4 border-1" />
                                        <div class="pt-8 pl-10">
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                No Traffic / Request Logs
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Unmetered Data Transfer
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Anonymous VPN
                                            </li>
                                            <li class="mb-3 flex items-center ">
                                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                                    </path>
                                                </svg>
                                                Block ADs, Trackers and Malware
                                            </li>
                                        </div>
                                        <li class="mb-0 flex items-center justify-center">
                                            <b>No. of VPN Clients</b>&nbsp; 10
                                        </li>
                                    </div>

                                    <div class="block flex items-center p-8  uppercase">
                                        <button
                                            class="mt-3 text-lg font-semibold 
	bg-blue-600 w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default PricingComponent;
