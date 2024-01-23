import { Outlet } from "react-router-dom"; //onde vai exibir as telas
import { Header } from "../header/header";

export function Layout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}