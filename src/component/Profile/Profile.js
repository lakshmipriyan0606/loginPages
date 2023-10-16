import React, { useState } from "react";
import profileImg from "../../img/profileimg.avif";
import {HiPencilSquare} from "react-icons/hi2"

const Profile = () => {

    const [age , setAge] = useState("")
    const [mobileNumber , setMobileNumber] = useState("")

    const [ageError, setAgeError] = useState("");
    const [mobileError, setMobileError] = useState("");

    function handleAge(e) {
        setAge(e.target.value)
    }
    function handleMobile(e) {
        setMobileNumber(e.target.value)
    }

    function handleUpate() {
        if(age === "") {
            setAgeError("Fill this Field")
        }
        if(mobileNumber === "") {
            setMobileError("Fill this Field")
        }
    }

  return (
    <div className="md:w-[500px] mx-auto">
      <h1 className="text-center p-5 font-medium  text-gray-600 text-4xl">
        Pro<span className="text-green-500">file</span>
      </h1>
      <div>
        <img
          src={profileImg}
          className="w-[150px] h-[150px] mx-auto "
          alt="profile-img"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center p-9">
        <h1 className="text-xl font-medium text-gray-900">Name</h1>
        <h1 className="flex gap-2 items-center justify-center ">Update Your Profile <HiPencilSquare/></h1>
      </div>
      <div className="grid grid-cols-1 p-3 gap-4">
        <div className="flex flex-col gap-3 ">
            <label>Gender : </label>
            <select className="border border-gray-500 p-1 rounded-md w-full ">
                <option >Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
        </div>
        <div className="flex flex-col gap-3 ">
            <label>DOB :</label>
            <input type="date"  className="border border-gray-500 p-1 rounded-md w-full"/>
        </div>
        <div className="flex flex-col gap-3 ">
            <label>Age :</label>
            <input type="number" onChange={handleAge} value={age} placeholder="Enter Age" className={ageError ? "border border-red-700 text-lg p-1 rounded-md  text-gray-500  outline-none" : 'border-[1px] text-lg p-1 rounded-md border-gray-300 text-gray-500  outline-none'}  />
            {ageError && <span className="text-red-500 font-bold text-lg">{ageError}</span>}
        </div>
        <div className="flex flex-col gap-3 ">
            <label>Mobile no :</label>
            <input type="number"  value={mobileNumber} placeholder="Enter Mobile no" className={ageError ? "border border-red-700 text-lg p-1 rounded-md  text-gray-500  outline-none" : 'border-[1px] text-lg p-1 rounded-md border-gray-300 text-gray-500  outline-none'} onChange={handleMobile}/>
            {mobileError && <span className="text-red-500 font-bold text-lg">{mobileError}</span>}
        </div>  
        <div className='flex my-5'>
        <button className='bg-green-500 hover:shadow-lg hover:shadow-green-700 text-center text-white p-1 text-lg rounded-lg  w-full  mx-auto hover:bg-green-400 transition-all duration-300  ' onClick={handleUpate}>Update</button>
        </div>
      </div>
      <div>   
      </div>
    </div>
  );
};

export default Profile;
