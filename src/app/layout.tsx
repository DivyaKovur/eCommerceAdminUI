'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useReducer } from "react";
import{init} from '../Redux/init'
import { reducer } from "../Redux/appReducer";
import { Provider } from "../Context/appctxt";
import { Footer } from "@/Footer";
import { Header } from "@/Header";
import { Login } from "@/Login";
import { Menu } from "@/Menu";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const [state,dispatch] =useReducer(reducer,init)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider value={{state,dispatch}}>
        <Header/>
        {state?.isLoggedIn ? <Menu/>: <Login/>}
        {children}
        <Footer/>

      </Provider>
      </body>
    </html>
  );
}
