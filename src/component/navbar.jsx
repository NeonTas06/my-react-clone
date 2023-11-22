import React, { useState } from "react";
import fbIcn from "../assets/navbarpics/facebook.svg";
import insTa from "../assets/navbarpics/instagram.svg";
import lineIcn from "../assets/navbarpics/line.svg";
import shopeeIcn from "../assets/navbarpics/logo-full-white.png";
import cartIcn from "../assets/navbarpics/shopping-cart.svg";
import searchIcn from "../assets/navbarpics/search.svg";
import inCartIcn from "../assets/navbarpics/inCart.png";
import notiIcn from "../assets/navbarpics/notification-bell.svg";
import questionIcn from "../assets/navbarpics/question-mark.svg";
import arrIcn from "../assets/navbarpics/down-arrow.svg";
import globeIcn from "../assets/navbarpics/globe.png";

function Navbar() {
  const dropDown = ["ไทย", "English"];
  const itemList = [
    "เสื้อ 1 บาท ลูกค้าใหม่",
    "สินค้า 1 บาท ลูกค้าใหม่",
    "เครื่องใช้ไฟฟ้า 0 บาท ลูกค้าใหม่",
    "ของฟรี",
    "ไอโฟน 1 บาท สำหรับลูกค้าใหม่",
    "เสื้อกันหนาว",
    " โทรศัพท์ 1 บาท",
  ];
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="w-full bg-gradient-to-b from-[#F53E2D] to-[#FE6132] px-20">
      <div className="navbar/top flex justify-between gap-4 p-4 text-white py-4">
        <div className="navbar/top/right flex gap-2">
          <a
            href="https://shopee.co.th/seller/login?next=https%3A%2F%2Fseller.shopee.co.th%2F"
            className="hover:text-[#FAB2C1]"
          >
            Seller Centre
          </a>
          <span className=" opacity-50">|</span>
          <a
            href="https://shopee.co.th/seller/signup"
            className="hover:text-[#FAB2C1]"
          >
            เริ่มต้นขายสินค้า
          </a>
          <span className=" opacity-50">|</span>
          <div
            onMouseEnter={() => setOpenQr(!openQr)}
            onMouseLeave={() => setOpenQr(false)}
          >
            <a
              href="https://shopee.co.th/web"
              className="hover:text-[#FAB2C1] "
            >
              ดาวน์โหลด
            </a>
            {openQr && (
              <div className=" w-[12rem] absolute z-10 shadow-lg">
                <img src="src\assets\navbarpics\qr.png" />
              </div>
            )}
          </div>
          <span className=" opacity-50">|</span>
          <div className="flex gap-1 items-center">
            <p>ติดตามเราบน</p>
            <img
              onClick={() =>
                window.open("https://www.facebook.com/shopeeth/", "_blank")
              }
              className="w-[20px] h-[20px] cursor-pointer"
              src={fbIcn}
            />
            <img
              onClick={() =>
                window.open("https://www.instagram.com/Shopee_TH", "_blank")
              }
              className="w-[20px] h-[20px] cursor-pointer"
              src={insTa}
            />
            <img
              onClick={() =>
                window.open(
                  "https://line.me/R/ti/p/@shopeeth?from=page&openQrModal=true&searchId=shopeeth",
                  "_blank"
                )
              }
              className="w-[20px] h-[20px] cursor-pointer"
              src={lineIcn}
            />
          </div>
        </div>
        <div className="navbar/top/left flex gap-2">
          <div
            className="relative cursor-pointer gap-1"
            onMouseEnter={() => setOpenNoti(!openNoti)}
            onMouseLeave={() => setOpenNoti(false)}
          >
            <div className="flex items-center hover:text-[#FAB2C1] ">
              <img src={notiIcn} className="w-[17px] h-[17px] " />
              <p className=""> การแจ้งเตือน</p>
            </div>
            {openNoti && (
              <div className=" bg-white w-96 h-72 absolute right-1 shadow-lg flex flex-col items-center z-10">
                <img src="src\assets\navbarpics\Notii.png" />
                <p className="text-black">
                  ลงชื่อเข้าใช้งานเพื่อดูการแจ้งเตือน
                </p>
                <div className="flex w-full h-full mt-7">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://shopee.co.th/buyer/signup?next=https%3A%2F%2Fshopee.co.th%2F")
                    }
                    className=" w-full text-black bg-[#F5F5F5] hover:text-[#F53E2D] hover:bg-[#E8E8E8]"
                  >
                    สมัครใหม่
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://shopee.co.th/buyer/login?from=https%3A%2F%2Fshopee.co.th%2F&next=https%3A%2F%2Fshopee.co.th%2F")
                    }
                    className=" w-full text-black bg-[#F5F5F5] hover:text-[#F53E2D] hover:bg-[#E8E8E8]"
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() =>
              window.open("https://help.shopee.co.th/portal", "_blank")
            }
            className="hover:text-[#FAB2C1] cursor-pointer flex items-center gap-1"
          >
            <img src={questionIcn} className="w-[17px] h-[17px] " />
            <p>ช่วยเหลือ</p>
          </div>
          <div
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(false)}
            className="hover:text-[#FAB2C1] cursor-pointer relative "
          >
            <div className=" flex items-center gap-1">
              <img src={globeIcn} className="w-[17px] h-[17px] " />
              <p>ไทย</p>
              <img src={arrIcn} className="w-[15px] h-[15px] " />
            </div>
            {open && (
              <div className=" bg-white text-black p-2 w-40 absolute right-1 flex flex-col items-start shadow-lg z-10">
                {dropDown.map((menu) => (
                  <button key={menu} className="hover:text-[#F53E2D]">
                    <p className="justify-start">{menu}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://shopee.co.th/buyer/signup?next=https%3A%2F%2Fshopee.co.th%2F"
            className="hover:text-[#FAB2C1]"
          >
            สมัครใหม่
          </a>
          <span className=" opacity-50">|</span>
          <a
            href="https://shopee.co.th/buyer/login?next=https%3A%2F%2Fshopee.co.th%2F"
            className="hover:text-[#FAB2C1]"
          >
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
      <div className="navbar/body flex items-center justify-between py-6">
        <div
          className="logo cursor-pointer "
          onClick={() => window.location.reload()}
        >
          <img src={shopeeIcn} className="w-[170px] h-[50px]" />
        </div>
        <div className="searchbar relative bg-white w-[60%] h-[2rem] ">
          <input
            type="text"
            placeholder=" ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
            className="w-[95%] h-full"
          />
          <button className="absolute top-[5%] bg-[#FE6132] right-1 w-[40px] h-[30px] hover:bg-[#ff7c54] ">
            <img src={searchIcn} alt="search" className="w-[100%] h-[50%]  " />
          </button>
          <div className="flex py-1 gap-2 justify-between">
            {" "}
            {itemList.map((item) => (
              <a key={item} className="text-white text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div
          onMouseEnter={() => setOpenCart(!openCart)}
          onMouseLeave={() => setOpenCart(false)}
          className="cart relative gap-20 "
        >
          <img
            src={cartIcn}
            className="w-[150px] h-[40px] cursor-pointer mb-1"
          />
          {openCart && (
            <div className=" bg-white w-[30rem] h-60 absolute right-10 shadow-lg flex flex-col justify-center items-center">
              <img src={inCartIcn} className="w-[25%]" />
              <p className="text-black">ยังไม่มีสินค้าในรถเข็น</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
