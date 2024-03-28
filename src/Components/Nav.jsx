import React from "react";

const Nav = () => {
  return (
    <div className="flex w-full justify-between align-middle items-center mx-auto py-3 px-7" style={{ backgroundColor: '#071a2a', color: 'white' }}>
      {" "}

<div className="flex justify-between align-middle items-center">
<img className="w-20" src="logo.png" alt="" />
<h1 className="text-3xl">GreenTask</h1>
</div>
      <div className="flex gap-12">
        {" "}
        <h4 className="">Product</h4>
        <h4 className="">About Us</h4>
        <h4 className="">Pricing</h4>
        <h4 className="">FAQs</h4>
      </div>
      <div className="flex gap-10 items-center">
        {" "}
        <h1>Login</h1>
        <button className="p-2 rounded-md" style={{backgroundColor:"rgb(234,60,150)" , color:"white"}}>Try for Free</button>
      </div>
    </div>
  );
};

export default Nav;
