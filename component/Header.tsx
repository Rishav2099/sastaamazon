'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/amazon-logo-2.webp";
import { FaShoppingCart } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/superbase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { superbase } from "@/lib/superbase/product";

const itemList = [
  "All",
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Today's Deals",
  "Customer Service",
  "Prime",
  "Electronics",
  "Fashion",
];

const Header = () => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();
const [user, setuser] = useState<any>(null)

  const cart = useAppSelector(getCart)

  const search = () => {
    if (query.trim()) { // Ensure query is not just whitespace
      router.push(`/search/${query}`);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const {data:user}  = await superbase.auth.getUser()
      setuser(user)
    }
    getUserData()
  }, [])
  console.log(user);
  
  

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <>
      <div className="bg-slate-900 py-2 text-white">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="w-[10%]">
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={150} height={150} />
            </Link>
          </div>
          <div className="w-[60%] flex items-center cursor-pointer">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress} // Listen for key press events
              className="w-full cursor-pointer px-2 outline-none py-2 rounded-l-md text-black focus:border-2 focus:border-yellow-400"
              placeholder="Search Amazon.in"
            />
            <div onClick={search} className="bg-yellow-500 p-2 rounded-r-md cursor-pointer">
              <FcSearch size={'24px'} className="text-black" />
            </div>
          </div>
          <div className="flex gap-5 items-center w-[20%] justify-around cursor-pointer">
            <div className="flex flex-col items-center">
              <p className="text-xs hover:underline" onClick={()=> {
                router.push('/signin')
              }}>{user ? 'Hello' : 'Signin'}</p>
              <p className="font-medium text-sm">Account & Lists</p>
            </div>
            <div>
              <p className="text-xs"> Returns</p>
              <p className="font-medium text-sm">Orders</p>
            </div>
            <div>
              <Link href={'/cart'}>
              <p className="relative top-2 left-4">{cart.length}</p>
              <div className="flex">
                <div>
                  <FaShoppingCart size={'40px'} />
                </div>
                <p className="mt-4">cart</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full overflow-hidden p-2 flex justify-between">
        <div>
          {itemList.map((ul, index) => (
            <Link key={index} href={`/${ul}`} className="mx-2 hover:border border cursor-pointer p-1 border-transparent hover:border-white">
              {ul}
            </Link>
          ))}
        </div>
        <div>
          <p onClick={async()=> {
            const {error} = await superbase.auth.signOut()
            router.push('/signin')
          }} className="text-yellow-500 font-bold mr-5 cursor-pointer hover:underline">Sign Out</p>
        </div>
      </div>
    </>
  );
};

export default Header;
