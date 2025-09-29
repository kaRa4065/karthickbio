import Layout from "@/common/Layout";
import Summary from "@/sections/Summary";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <Layout>
      <Summary />
      <Skills />
      <Education />
      <Experience/>
    </Layout>
  );
}
