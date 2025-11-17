/*
Deploy-ready Next.js + Tailwind portfolio for Bright Iwara
Instructions: copy the files below into a new repository and deploy to Vercel (Import Git Repository -> Deploy).

Project structure to create:

/ (repo root)
  package.json
  next.config.js
  postcss.config.js
  tailwind.config.js
  /pages
    _app.js
    index.js
  /public
    favicon.ico (optional)
    placeholder.png (optional)
  /styles
    globals.css
  README.md

Replace placeholder text & images with your real screenshots and links.

Note: This project uses Next.js 14 style pages (works fine on Vercel). Tailwind CSS is preconfigured.

--- package.json ---
{
  "name": "bright-iwara-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "10.12.16"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.24",
    "tailwindcss": "3.4.8"
  }
}

--- next.config.js ---
/** next.config.js */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

--- postcss.config.js ---
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

--- tailwind.config.js ---
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0a2033',
        silver: '#cfd8dd',
        tangerine: '#ff7a18',
        brandblue: '#1f6feb'
      }
    }
  },
  plugins: [],
}

--- styles/globals.css ---
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --navy: #0a2033;
  --silver: #cfd8dd;
}

html,body,#__next{height:100%}
body{background:linear-gradient(180deg,#f8fbff 0%,#ffffff 100%);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial}

/* small utility for screenshot placeholder */
.screenshot{background:#fff;border:1px solid rgba(10,32,51,0.06);border-radius:8px;padding:8px;display:flex;align-items:center;justify-content:center;min-height:160px}

--- pages/_app.js ---
import '../styles/globals.css'
export default function App({ Component, pageProps }){
  return <Component {...pageProps} />
}

--- pages/index.js ---
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home(){
  const projects = [
    {
      title: 'Active Directory Deep Dive',
      desc: 'Multi-DC domain, OU design, GPOs, password policies, replication and SYSVOL management.',
      imgs: ['placeholder.png','placeholder.png']
    },
    {
      title: 'Azure Hybrid Identity',
      desc: 'Azure AD Connect installation, Password Hash Sync, OU filtering, and user sync into Entra ID.',
      imgs: ['placeholder.png']
    },
    {
      title: 'WDS + PXE Deployment',
      desc: 'Boot and install images configured for PXE booting virtual clients for rapid imaging.',
      imgs: ['placeholder.png']
    }
  ]

  return (
    <>
      <Head>
        <title>Bright Iwara — Systems & Infrastructure</title>
        <meta name="description" content="Bright Iwara — Systems Administrator portfolio: AD, Azure, Networking, Security" />
      </Head>

      <main className="min-h-screen p-6 md:p-12">
        <div className="mx-auto max-w-6xl">

          <header className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-navy to-brandblue flex items-center justify-center text-white text-2xl font-bold">BI</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-navy">Bright Iwara</h1>
              <p className="text-sm text-gray-600 mt-1">Securing infrastructure, enabling productivity across hybrid environments.</p>
            </div>
            <div className="ml-auto hidden md:block">
              <a href="#contact" className="inline-block bg-brandblue text-white px-4 py-2 rounded-md font-semibold">Contact</a>
            </div>
          </header>

          <section className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy">About this lab</h2>
              <p className="text-gray-600 mt-3">This repository documents a full enterprise-style Windows Server environment integrated with Microsoft Azure. It contains step-by-step guides, configuration notes, troubleshooting logs, and screenshot evidence. Use the Projects section below to navigate to each documented lab.</p>

              <div className="mt-6">
                <h3 className="font-semibold text-navy">Highlights</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>AD DS: multi-DC, replication, GPOs</li>
                  <li>Azure: Entra ID sync via Azure AD Connect</li>
                  <li>WDS/PXE: automated imaging</li>
                  <li>Backups, monitoring, and basic hardening</li>
                </ul>
              </div>
            </div>

            <aside className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy">Contact</h3>
              <p className="text-gray-700 mt-2">ernestbrightiwara@oytlook.com</p>
              <p className="text-gray-500 text-sm mt-3">Links</p>
              <div className="mt-2 flex gap-2">
                <a className="text-brandblue hover:underline" href="#">GitHub</a>
                <a className="text-brandblue hover:underline" href="#">LinkedIn</a>
              </div>
            </aside>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-navy">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {projects.map((p, i) => (
                <motion.article key={i} className="bg-white p-4 rounded-lg shadow-sm" whileHover={{ y: -6 }}>
                  <h3 className="font-semibold text-navy">{p.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {p.imgs.map((img, idx) => (
                      <div className="screenshot" key={idx}>{img}</div>
                    ))}
                  </div>

                </motion.article>
              ))}
            </div>
          </section>

          <section id="screenshots" className="mt-10">
            <h2 className="text-xl font-bold text-navy">Screenshots</h2>
            <p className="text-gray-600 mt-2">Add your screenshot images inside the <code>/public</code> folder and they will appear below.</p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {/* example placeholders - replace with <img src="/your.png" /> */}
              <div className="screenshot">AD DS Dashboard</div>
              <div className="screenshot">Azure AD Connect</div>
              <div className="screenshot">GPO Applied</div>
              <div className="screenshot">WDS Boot</div>
              <div className="screenshot">Backup Completed</div>
              <div className="screenshot">PerfMon Graph</div>
            </div>
          </section>

          <section id="docs" className="mt-10">
            <h2 className="text-xl font-bold text-navy">Documentation</h2>
            <p className="text-gray-600 mt-2">This site is backed by a set of markdown guides (in the GitHub repo). The guides include step-by-step commands and exported configs.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>01-introduction.md</li>
              <li>02-prerequisites.md</li>
              <li>03-installation-and-setup.md</li>
              <li>04-domain-and-dns-configuration.md</li>
              <li>05-password-hash-and-ou-filtering.md</li>
              <li>06-user-and-device-management.md</li>
              <li>07-troubleshooting.md</li>
            </ul>
          </section>

          <section id="contact" className="mt-10 mb-24">
            <h2 className="text-xl font-bold text-navy">Contact</h2>
            <p className="text-gray-700 mt-2">Email: ernestbrightiwara@oytlook.com</p>
            <p className="text-gray-700">GitHub: <a href="#" className="text-brandblue">github.com/yourusername</a></p>
          </section>

        </div>
      </main>
    </>
  )
}

--- README.md (short deploy instructions) ---
# Bright Iwara Portfolio (Vercel Deploy)

1. Create a new GitHub repository and push all files.
2. Go to https://vercel.com and import the GitHub repo. Vercel auto-detects the Next.js app.
3. Build & Deploy. Vercel will provide a URL like `https://bright-iwara-portfolio.vercel.app`.

That's it — any changes pushed to the main branch will redeploy automatically.
*/
