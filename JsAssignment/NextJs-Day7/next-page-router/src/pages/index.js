import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>Q1. <Link href="http://localhost:3000/product">Implement useReducer hook to GET, ADD, DELETE products.</Link></h1>
      <h1>Q2. <Link href="http://localhost:3000/user">Implement useContext hook to implement a loader in a page while api is in loading state.</Link></h1>
      <h1>Q3. <Link href="http://localhost:3000/quotes">Implement Redux to fetch api 'https://dummyjson.com/quotes'</Link></h1>
    </div>
  );
}
