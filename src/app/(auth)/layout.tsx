import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/app/components/SideBar";
import SearchBar from "@/app/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });
// const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Marvel Heroes - Dashboard",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className="flex">
          <SideBar />
          <div>
            <SearchBar />
            {children}
          </div>
        </main>
  );
}
