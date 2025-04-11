"use client";

import Link from "next/link";
import { DIcons } from "dicons";

import ThemeToogle from "@/components/ui/footer";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Works", href: "/agency/works" },
            { name: "Pricing", href: "/pricing" },
            { name: "Products", href: "/products" },
          ],
        },

        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Design", href: "/designs" },
            { name: "Components", href: "/components" },
            { name: "Blogs", href: "/blogs" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },

        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
            { name: "Agency", href: "/agency" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

export function Footer() {
  return (
    <footer className=" mx-auto w-full px-2 bg-background text-foreground">
      {/* <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
                <Link href="/">
          <p className="flex items-center justify-center rounded-full  ">
            <DIcons.Designali className="w-8 text-red-600" />
          </p>
        </Link>
                <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          Welcome to Designali, where creativity meets strategy to bring your
          vision to life. I am passionate about transforming ideas into
          compelling visual experiences. I specialize in crafting unique brand
          identities, immersive digital experiences, and engaging content that
          resonates with your audience. My mission is to empower businesses and
          brands to stand out in a crowded market. I believe in the power of
          design to tell stories, evoke emotions, and drive meaningful
          connections. I believe in quality, not quantity. Designali is actually
          an agency of one. This means you&apos;ll work directly with me, founder of
          Designali.
        </p>
      </div> */}

      <div className="mx-auto max-w-7xl px-6 ">
        <div className="border-b border-dotted"></div>

        <div className="py-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side - Categories & Sections */}
          <div className="w-full md:w-2/3">
            {navigation.categories.map((category) => (
              <div
                key={category.name}
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
              >
                {category.sections.map((section) => (
                  <div key={section.name}>
                    <ul
                      role="list"
                      aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                      className="flex flex-col space-y-2"
                    >
                      {section.items.map((item) => (
                        <li key={item.name} className="flow-root">
                          <Link
                            href={item.href}
                            className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Side - Newsletter */}
          <div className="w-full md:w-1/3 flex flex-col justify-center text-foreground  rounded-lg">
            <h2 className="text-sm font-semibold">Stay connected</h2>
            <p className="text-xs text-black-400 mt-2">
              Sign up to our mailing list below and be the first to know about
              new updates. Don&apos;t worry, we hate spam too.
            </p>
            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-4 text-foreground bg-zinc-200 dark:bg-zinc-950 rounded-l-lg "
              />
              <button className=" text-foreground bg-neutral-200/60 dark:bg-neutral-950/50 px-4 py-2 rounded-r-md hover:bg-zinc-300 dark:hover:bg-zinc-800">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Logo"
            href="mailto:mailto:synextech9@gmail.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          {/* <Link
            aria-label="Logo"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link> */}
          <Link
            aria-label="Logo"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          {/* <Link
            aria-label="Logo"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Threads className="h-5 w-5" />
          </Link> */}
          <Link
            aria-label="Logo"
            href="https://wa.me/919599745687"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </Link>
          {/* <Link
            aria-label="Logo"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Behance className="h-5 w-5" />
          </Link> */}
          {/* <Link
            aria-label="Logo"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link> */}
          <Link
            aria-label="Logo"
            href="https://www.linkedin.com/company/synextechnologies/about/?viewAsMember=true"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
          {/* <Link
            aria-label="Logo"
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link> */}
        </div>
        <ThemeToogle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <DIcons.Heart className="text-red-600 mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              SYNEXTECH {""}
            </Link>
          </span>

          {/* <span className="hover:text-ali dark:hover:text-red-600 cursor-pointer text-slate-600 dark:text-slate-400">
            <Link aria-label="Logo" className="" href="/">
              SYNEXTECH
            </Link>
          </span> */}
        </div>
      </div>
    </footer>
  );
}
