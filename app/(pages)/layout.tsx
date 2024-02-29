import Clock from "../components/Clock/Clock";
import { Nav } from "../components/Nav/Nav";
import dynamic from "next/dynamic";
const ClockNoSRR = dynamic(() => import("@/app/components/Clock/Clock"), {
  ssr: false
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <ClockNoSRR />
        <div className="flex">
        
        <Nav />
        <div className="mt-16 pl-8 w-full">{children}</div>
        
      </div>
    </div>

  );
}
