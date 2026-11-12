import BlurFade from "@/components/magicui/blur-fade";
import { FileText } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    date: "Issued June 2026",
    description:
      "Earned the ServiceNow Certified System Administrator credential, completing the certification requirements for the platform's system administrator track.",
    image: "/certifications/ditsu-csa-preview.png",
    pdf: "/certifications/Ditsu_CSA.pdf",
  },
  {
    title: "Fundamentals of AI Agents Using RAG and LangChain",
    date: "Completed August 2025 · IBM / Coursera",
    description:
      "Completed IBM's course on building AI agents with retrieval-augmented generation (RAG) and LangChain.",
    image: "/certifications/ditsu-rag-preview.png",
    pdf: "/certifications/Ditsu_RAG_and_Langchain.pdf",
  },
];

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Certifications</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certifications</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Some of certifications that I have accomplished by learning, working and solving
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
          {certifications.map((certification, index) => (
            <BlurFade key={certification.title} delay={BLUR_FADE_DELAY * 12 + index * 0.05} className="h-full">
              <a
                href={certification.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${certification.title} PDF`}
                className="group flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200"
              >
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-muted">
                  <Image
                    src={certification.image}
                    alt={`${certification.title} certificate preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">
                    <FileText className="size-3.5" aria-hidden="true" />
                    PDF
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <h3 className="font-semibold">{certification.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{certification.date}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{certification.description}</p>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
