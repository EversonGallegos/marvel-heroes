import type { Metadata } from "next";
import Image from "next/image";
import LogoWhite from "@/app/assets/images/logo_white.svg";
import { Epilogue } from 'next/font/google'
const epilogue = Epilogue({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Marvel Heroes - Login",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className={`w-full h-full bg-blue-800  ${epilogue.className} tracking-full`}>
          <div className="flex max-w-grid w-full h-full relative mx-auto">
            <div className="bg-building bg-no-repeat flex-1 bg-contain bg-bottom my-4 mx-10 lg:my-12 lg:mx-[106px] lg:max-w-[672px]">
              <Image src={LogoWhite} alt="Pontua" />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-auto lg:right-0 lg:mx-[68px] top-[55%] translate-y-[-50%] bg-white rounded-[28px] py-12 px-9 max-w-[380px] w-full">
              {children}
            </div>
          </div>
        </main>
  );
}
