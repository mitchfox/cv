import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Newsletter from "@/components/Newsletter";
import CommissionWork from "@/components/CommissionWork";
import Skills from '@/components/Skills';

export const metadata = {
  title: "Home - DevFolio",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
      <Experience />
      {/* <Tutorials /> */}
      {/* <Articles /> */}
      <CommissionWork />
      <SideHustles />
      <Skills />
      {/* <Recommendations />
      <Newsletter /> */}
    </>
  );
}
