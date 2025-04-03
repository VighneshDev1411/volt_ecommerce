import Navbar from "@/components/navbar/page";
import CategoryTabs from "@/components/tabs/page";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryTabs />
      {/* <TabsDemo //> */}
    </div>
  );
}
