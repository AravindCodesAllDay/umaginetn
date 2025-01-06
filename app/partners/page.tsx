import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import TitleBar from "@/components/title-bar";
import Sponsers from "./sponsers";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Partners"} />
      <Sponsers />
      <Footer />
      <ScrollUp />
    </>
  );
}
