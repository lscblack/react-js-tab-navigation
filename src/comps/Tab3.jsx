import React from 'react'

const Tab3 = () => {
  return (
    <div className="w-screen">
    <div className="flex justify-center items-center h-screen gap-48">
      <div className="fb_text">
        <h1 className="text-red-400 font-semibold text-5xl p-2">SMART-MONEY-CONCEPT</h1><br />
        <h1 className="text-green-400 font-bold text-3xl p-2 z-10">Why Use SMC?</h1>
        <p className="text-black text-1xl w-90">✔️ High accuracy by following institutional footprints</p>
        <p className="text-black text-1xl w-90">✔️ Works well with Forex, Crypto, and Stocks</p>
        <p className="text-black text-1xl w-90">✔️ Focuses on price manipulation and smart money entry points</p>
        <button className="p-2 border-gray-300 rounded-1xl shadow-amber-200 bg-green-400 transform-content hover:bg-green-300">Read More</button>
      </div>
      <div className="form">
      <div className="fb_form p-5 shadow-2xl shadow-gray-500 w-96 rounded-3xl bg-gray-50 pt-10">
        <input className="w-full block border-gray-300 border-1 text-black outline-blue-300 p-3 rounded-xl" type="email" placeholder="enter email or phone number" /><br />
        <input className="w-full block  border-gray-300 border-1 text-black outline-blue-300 p-3 rounded-xl" type="password" placeholder="Password"/><br />
        <input className="w-full block outline-blue-300 p-3 rounded-xl bg-red-500 text-white" type="button" value="Login" /><br />
        <center><a href="" className="text-blue-400 rounded">Forgot password?</a></center><br />
        <center><button className=" p-2 rounded-xl text-black">Create new account</button></center>
      </div>
      <div className="form_text pt-5">
        <p className="text-gray-500">SMART-MONEY-CONCEPT tec</p>
      </div>
      </div>
    </div>

  </div>
  )
}

export default Tab3
