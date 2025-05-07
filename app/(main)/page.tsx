import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Initiatives from "@/components/Initiatives";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="mt-0">
        <Leadership />
        <Initiatives />
      </div>
    </div>
  );
}
