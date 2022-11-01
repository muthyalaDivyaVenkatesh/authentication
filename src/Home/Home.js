import { Outlet } from "react-router-dom";
import { ContextClickValue } from "../context/ContextClick";
import {Header} from "../ui/Header/Header";
import ImageChanging from "./ImageChanging/ImageChanging";
import TopDeals from "./TopDeals/TopDeals";

export default function Home() {
    return (
     <>
     <Header />   
     <ImageChanging />
     <TopDeals />
    </>
    )
}