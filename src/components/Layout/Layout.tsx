import SideMenu from "../SideMenu/SideMenu";
import { useSession } from "next-auth/react";
import React from "react";
import Head from "next/head"

const Layout = (props: any) => {
    const { data: session } = useSession();

    return (
        <>
        <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
            {session && <SideMenu />}
            {props.children}
        </main>
        </>
    )
}

export default Layout;