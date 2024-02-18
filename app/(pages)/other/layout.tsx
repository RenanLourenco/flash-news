import React from "react";

export default function OtherLayout({children}: {children: React.ReactNode}){
    return <div className="m-4 border-blue-500 border-2">{children}</div>
}