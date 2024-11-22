import Courses from "@/sections/Courses/Courses";
import FAQ from "@/sections/FAQ/FAQ";
import Feedbacks from "@/sections/Feedbacks/Feedbacks";
import Footer from "@/sections/Footer/Footer";
import { FormModal } from "@/sections/FormModal/FormModal";
import FreeTrial from "@/sections/FreeTrial/FreeTrial";
import Introduction from "@/sections/Introduction/Introduction";
import Teachers from "@/sections/Teachers/Teachers";

export default function Home() {
  return (
    <div className="w-screen min-h-screen max-h-full bg-white">
      <Introduction />
      <Teachers />
      <Courses />
      <Feedbacks />
      <FAQ />
      <FreeTrial />
      <Footer />
      <FormModal />
    </div>
  );
}
