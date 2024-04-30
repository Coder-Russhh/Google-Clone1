import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import googleLogo from "../../public/google-logo.png";
import "./globals.css";


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
        src={googleLogo}
          alt="Google Logo"
          width={200}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch/>
      </div>
    </>
  );
}
