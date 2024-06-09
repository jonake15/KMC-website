import React from "react";
import profile from "./assets/images/profile.png";
import tire from "./assets/images/tire.png";
import coach from "./assets/images/coach.png";
import charger from "./assets/images/charger.png";
import { IoMdClose } from "react-icons/io";
import Headroom from "react-headroom";
import Navbar from "../../Components/Navbar";

const Cart = () => {
  return (
    <>
      <div className="absolute w-full ">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div className="flex font-poppins justify-center gap-[4rem] pt-[8rem] bg-[#ECF0F3] h-[100vh]">
        <div id="profile">
          <img src={profile} alt="" />
          <div id="name" className="text-center">
            <p className="font-semibold">John Doe</p>
          </div>
        </div>
        <div id="table-cart">
          <table className="bg-white rounded-2xl w-[60vw]  h-[60vh] text-[1.25rem]">
            <td className="p-8 font-bold text-[1.9rem]">Your Orders</td>
            <tr>
              <td className=""></td>
              <td>Items</td>
              <td>Quantity</td>
              <td className="p-8"></td>
            </tr>

            <tr>
              <td className="text-center p-5">
                <img src={tire} alt="" />
              </td>
              <td>Tires</td>
              <td>4</td>
              <td className="text-3xl text-gray-400">
                <IoMdClose />
              </td>
            </tr>
            <tr>
              <td className="text-center ">
                <img src={coach} alt="" />
              </td>
              <td>Kayoola Diesel Coach</td>
              <td>2</td>
              <td className="text-3xl text-gray-400">
                <IoMdClose />
              </td>
            </tr>
            <tr>
              <td className="text-center p-5">
                <img src={charger} alt="" />
              </td>
              <td>Electric DC Charger CH 9-mini</td>
              <td>2</td>
              <td className="text-3xl text-gray-400">
                <IoMdClose />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
