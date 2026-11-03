/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Competitions &amp; Events</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Building, competing, and contributing.</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-3xl">
              From developing innovative solutions to leading events and mentoring fellow builders, I enjoy turning ideas into practical technology and creating meaningful impact.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {DATA.hackathons.map((hackathon: any) => (
            <article key={hackathon.title} className="w-full flex items-start gap-5 rounded-2xl border border-border bg-card/40 p-6 sm:p-7">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className={`size-12 ${hackathon.title.startsWith("ISMAW") ? "!size-16" : ""} bg-white z-10 shrink-0 overflow-hidden p-1.5 border rounded-xl shadow object-contain flex-none`}
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              <div className="flex flex-1 flex-col justify-start gap-4 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><h3 className="text-lg font-semibold leading-tight">{hackathon.title}</h3><p className="mt-1 text-sm font-medium text-primary">{hackathon.award}</p></div>
                  {hackathon.partnerLogo && <img src={hackathon.partnerLogo} alt={hackathon.partnerAlt} className={`max-w-24 object-contain rounded bg-white p-1 ${hackathon.partnerAlt === "TCS" ? "h-12" : "h-9"}`} />}
                </div>
                {hackathon.description && (
                  <p className="text-base text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
