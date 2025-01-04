import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import Timings from "../timings";
import TitleBar from "@/components/title-bar";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Schedule"} />
      <Timings />
      <Footer />
      <ScrollUp />
    </>
  );
}
