import { createBrowserRouter } from "react-router";
import { HomePages } from "@/heroes/pages/hero/home/HomePages";
import { HeroPages } from "@/heroes/pages/hero/HeroPages";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";
import { SearchPages } from "@/heroes/search/SearchPages";
//import { AdminLayout } from "@/heroes/layouts/AdminLayout";
import { Admin } from "@/admin/Admin";
import { lazy } from "react";

const AdminLayout = lazy(()=> import("@/admin/Admin"));//lazy load para cargar unicamente las pantallas en las que el usuario no frecuenta mucho utilizar.

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayouts/>,
        children: [
            {
                //se puede poner el path, pero siempre se usa la ruta index, siempre se agradece que sea el primer hijo que aparezca.
                index: true,
                element: <HomePages />
            },
            {
                path: "heroes/1",
                element: <HeroPages />
            },
            {
                path: '/search',
                element: <SearchPages/>
            }
        ],
    },
    {
        path: '/AdminLayout',
        element: <AdminLayout/>,
        children:[
            {
                index: true,
                element: <Admin/>
            }
        ],
    },

])