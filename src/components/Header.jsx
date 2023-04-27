import React from "react";
import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <div className="flex flex-col items-center ">
        <div className="w-1/2">
          <div className="bg-blue-200 p-2 rounded-md shadow-lg text-white flex flex-row items-center w-40 h-10">
            <CiLocationOn className="text-black" />
            <h3 className="p-2 text-black">Overview</h3>
          </div>
          <h4>
            Fintract Global is providing opportunities that constantly challenge
            management and technical trainee programme to learn and develop in a
            fast-paced environment. We are looking for students who are driven
            and motivated to work with some of the brightest minds in the
            management consulting world. You’ll connect with mentors and
            experts, who will help you delve deeper into the intricacies of the
            corporate world. These roles will equip you with the nuances of
            business strategy through several hands-on and practical
            experiences.
          </h4>
          <br></br>
          <h1 className="text-blue-400">Find Your Perfect Role</h1>
          <h2>
            Fintract Global provides management and technical trainee programme
            to suitable candidates who:
          </h2>
          <li>Are available for a minimum work duration of 4 months.</li>
          <li>
            Demonstrate unflinching commitment and dedication towards the
            company and its business interests.
          </li>
          <li>
            Are pursuing programs/have graduated from distinguished
            institutes/universities and possess the requisite skills and
            interests, for various arenas
          </li>
          <li>
            Are willing to gain practical exposure under the mentorship of
            experienced professionals in their selected fields.
          </li>
        </div>
    </div>
  )
}

export default Header
