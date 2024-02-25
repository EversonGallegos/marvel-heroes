import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/app/_components/SideBar";
import SearchBar from "@/app/_components/SearchBar";

const inter = Inter({ subsets: ["latin"] });
// const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Marvel Heroes - Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className="flex w-full h-full">
          <SideBar />
          <div className="w-full">
            <SearchBar />
            {children}
          </div>
        </main>
  );
}
