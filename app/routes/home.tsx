import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyser" },
    { name: "description", content: "Get better feedbacks for your job resume!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className='main-section'>
      <div className='page-heading'>
        <h1>Track your Job Applications</h1>
        <h2> Review your submissions and feedbacks</h2>
      </div>
    </section>

      {}
  </main>
}
