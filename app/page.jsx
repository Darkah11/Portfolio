"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import darkah from "@/public/darkah.png";
import loading from "@/public/loading.gif";
import logoLight from "@/public/logo-light.png";
import logoDark from "@/public/logo-dark.png";
import insta from "@/public/instagram.png";
import x from "@/public/x.png";
import linkedin from "@/public/linkedin.png";
import mail from "@/public/mail.png";
import Link from "next/link";
import portfolioImage from "@/public/portfolio-img.jpg";
import nomark1 from "@/public/nomark1.png";
import nomark2 from "@/public/nomark2.png";
import nomark3 from "@/public/nomark3.png";
import nomark4 from "@/public/nomark4.png";
import ec1 from "@/public/ec1.png";
import ec2 from "@/public/ec2.png";
import ec3 from "@/public/ec3.png";
import ec4 from "@/public/ec4.png";
import wn1 from "@/public/wn1.png";
import wn2 from "@/public/wn2.png";
import wn3 from "@/public/wn3.png";
import wn4 from "@/public/wn4.png";
import bog1 from "@/public/bog1.png";
import bog2 from "@/public/bog2.png";
import bog3 from "@/public/bog3.png";
import bog4 from "@/public/bog4.png";
import dl1 from "@/public/dl1.png";
import dl2 from "@/public/dl2.png";
import dl3 from "@/public/dl3.png";
import dl4 from "@/public/dl4.png";
import dta1 from "@/public/dta1.png";
import dta2 from "@/public/dta1.png";
import dta3 from "@/public/dta2.png";
import dta4 from "@/public/dta3.png";
import tss1 from "@/public/tss4.png";
import tss2 from "@/public/tss2.png";
import tss3 from "@/public/tss3.png";
import tss4 from "@/public/tss4.png";
import { GoDotFill } from "react-icons/go";
import {
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import BlockReveal from "./components/BlockReveal";

const animateY = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const animateX = {
  hidden: {
    opacity: 0,
    x: -100, // Start 100 pixels to the right
  },
  visible: {
    opacity: 1,
    x: 0, // Animate to the final horizontal position (0 offset)
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto ">
      <section className=" relative h-screen flex justify-center items-center flex-col">
        <motion.a
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          href="/harris-cv.pdf"
          target="_blank"
          download="/harris-cv.pdf"
          className=" absolute top-5 right-5"
        >
          <button className=" bg-primary px-5 py-2 rounded-md">Resume</button>
        </motion.a>
        <motion.h1
          variants={animateY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" text-3xl md:text-5xl lg:text-6xl"
        >
          EGUE HARRIS
        </motion.h1>
        <motion.p
          variants={animateY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" mt-7 text-lg lg:text-xl"
        >
          Frontend Developer
        </motion.p>
      </section>
      <section className=" px-5 py-32 md:flex justify-between gap-x-16 items-center">
        <div className="md:w-1/2">
          <motion.h2
            variants={animateX}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className=" text-grey text-3xl lg:text-5xl tracking-[0.2em] font-bold "
          >
            ABOUT ME
          </motion.h2>
          <motion.p
            variants={animateY}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className=" mt-5"
          >
            A creative and dedicated frontend developer with a passion for
            building seamless, high-performance, and visually stunning web
            interfaces. I focus on pixel-perfect implementation, responsive
            design, and exceptional user experience using modern technologies
            like React, NextJs, and Typescript. I am always eager to learn and
            adapt to new challenges and trends in the ever-evolving world of web
            development.
          </motion.p>
        </div>
        <motion.div
          variants={animateY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" mt-12 md:w-1/2"
        >
          <Image
            src={portfolioImage}
            alt="image of egue harris"
            className="rounded-md w-[300px] md:w-auto mx-auto"
          />
        </motion.div>
      </section>
      <div className=" px-5 py-24">
        <motion.h2
          variants={animateX}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" text-grey text-3xl lg:text-5xl tracking-[0.2em] font-bold "
        >
          MY PROJECTS
        </motion.h2>
      </div>
      <section className=" px-5">
        <div className="lg:flex gap-x-10 relative">
          <div className=" lg:w-1/2 sticky top-10 lg:top-[10%] py-10 lg:py-36 max-w-[500px] lg:max-w-none lg:px-10  h-fit self-start">
            <BlockReveal className=" bottom-8 lg:bottom-32 font-bold text-2xl">
              <p>01</p>
            </BlockReveal>
            <Link
              href={"https://the-skinfidential-series.vercel.app/"}
              target="_blank"
              className=" font-bold text-4xl hover:text-primary inline-block"
            >
              <BlockReveal>The Skinfidential Series</BlockReveal>
            </Link>
            <BlockReveal>
              <p className=" mt-5 text-lg font-medium flex items-center gap-x-1 text-grey">
                Next.js <GoDotFill className="text-white" /> Typescript{" "}
                <GoDotFill className="text-white" /> Firebase
              </p>
            </BlockReveal>
            <BlockReveal>
              <p className=" mt-5 text-lg">
                The Skinfidential Series is a premium e-commerce platform
                dedicated to offering a curated selection of high-quality
                skincare products.
              </p>
            </BlockReveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 w-full lg:w-1/2 lg:gap-x-12 gap-y-32 justify-between pb-52 lg:pb-64">
            <Image
              src={tss1}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project images"
            />
            <Image
              src={tss2}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
            <Image
              src={tss3}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={tss4}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
          </div>
        </div>
        <div className="lg:flex gap-x-10 relative">
          <div className=" lg:w-1/2 sticky top-10 lg:top-[10%] py-10 lg:py-36 max-w-[500px] lg:max-w-none lg:px-10  h-fit self-start">
            <BlockReveal className=" bottom-8 lg:bottom-32 font-bold text-2xl">
              <p>02</p>
            </BlockReveal>
            <Link
              href={"https://dark-labs-ten.vercel.app/"}
              target="_blank"
              className=" font-bold text-4xl hover:text-primary inline-block"
            >
              <BlockReveal>Dark Labs</BlockReveal>
            </Link>
            <BlockReveal>
              <p className=" mt-5 text-lg font-medium flex items-center gap-x-1 text-grey">
                Next.js <GoDotFill className="text-white" /> MongoDb{" "}
                <GoDotFill className="text-white" /> Python
              </p>
            </BlockReveal>
            <BlockReveal>
              <p className=" mt-5 text-lg">
                Dark Labs is a specialized health-tech platform designed to
                simplify medical screening through an integrated Machine
                Learning (ML) engine that analyzes user data to predict the risk
                of chronic conditions like diabetes, stroke, and hypertension.
                It also serves as a wellness hub, offering a library of health
                blogs focused on preventative care, lifestyle tips, and managing
                long-term illnesses.
              </p>
            </BlockReveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 w-full lg:w-1/2 lg:gap-x-12 gap-y-32 justify-between pb-52 lg:pb-64">
            <Image
              src={dl1}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project images"
            />
            <Image
              src={dl2}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
            <Image
              src={dl3}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={dl4}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
          </div>
        </div>
        <div className="lg:flex gap-x-10 relative">
          <div className=" lg:w-1/2 sticky top-10 lg:top-[10%] py-10 lg:py-36 max-w-[500px] lg:max-w-none lg:px-10  h-fit self-start">
            <BlockReveal className=" bottom-8 lg:bottom-32 font-bold text-2xl">
              <p>03</p>
            </BlockReveal>
            <Link
              href={"https://darkah-task-app.vercel.app/"}
              target="_blank"
              className=" font-bold text-4xl hover:text-primary inline-block"
            >
              <BlockReveal>Darkah Task App</BlockReveal>
            </Link>
            <BlockReveal>
              <p className=" mt-5 text-lg font-medium flex items-center gap-x-1 text-grey">
                Next.js <GoDotFill className="text-white" /> Firebase
              </p>
            </BlockReveal>
            <BlockReveal>
              <p className=" mt-5 text-lg">
                Darkah Task App is a streamlined productivity tool built on the
                Kanban methodology to help users visualize and manage their
                workflows. It uses a card-and-column system—typically
                categorized by "To Do", "In Progress", "Pending", and "Completed" to track tasks
                from start to finish.
              </p>
            </BlockReveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 w-full lg:w-1/2 lg:gap-x-12 gap-y-32 justify-between pb-52 lg:pb-64">
            <Image
              src={dta1}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project images"
            />
            <Image
              src={dta2}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
            <Image
              src={dta3}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={dta4}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
          </div>
        </div>
        <div className="lg:flex gap-x-10 relative">
          <div className=" lg:w-1/2 sticky top-10 lg:top-[10%] py-10 lg:py-36 max-w-[500px] lg:max-w-none lg:px-10  h-fit self-start">
            <BlockReveal className=" bottom-8 lg:bottom-32 font-bold text-2xl">
              <p>04</p>
            </BlockReveal>
            <Link
              href={"https://nomarkinc.vercel.app/"}
              target="_blank"
              className=" font-bold text-4xl hover:text-primary inline-block"
            >
              <BlockReveal>Nomark</BlockReveal>
            </Link>
            <BlockReveal>
              <p className=" mt-5 text-lg font-medium flex items-center gap-x-1 text-grey">
                Next.js <GoDotFill className="text-white" /> Typescript{" "}
                <GoDotFill className="text-white" /> WooCommerce
              </p>
            </BlockReveal>
            <BlockReveal>
              <p className=" mt-5 text-lg">
                Nomark is a comprehensive B2B (Business-to-Business) and B2C
                (Business-to-Consumer) e-commerce platform designed to
                streamlines the process of ordering wholesale and sample
                apparel.
              </p>
            </BlockReveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 w-full lg:w-1/2 lg:gap-x-12 gap-y-32 justify-between pb-52 lg:pb-64">
            <Image
              src={nomark1}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={nomark2}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
            <Image
              src={nomark3}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={nomark4}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
          </div>
        </div>
        <div className="lg:flex gap-x-10 relative">
          <div className=" lg:w-1/2 sticky top-10 lg:top-[10%] py-10 lg:py-36 max-w-[500px] lg:max-w-none lg:px-10  h-fit self-start">
            <BlockReveal className=" bottom-8 lg:bottom-32 font-bold text-2xl">
              <p>05</p>
            </BlockReveal>
            <Link
              href={"https://emerging-crypto.vercel.app/"}
              target="_blank"
              className=" font-bold text-4xl hover:text-primary inline-block"
            >
              <BlockReveal>Emerging Crypto</BlockReveal>
            </Link>
            <BlockReveal>
              <p className=" mt-5 text-lg font-medium flex items-center gap-x-1 text-grey">
                Next.js <GoDotFill className="text-white" /> Tailwind{" "}
                <GoDotFill className="text-white" /> Supabase
              </p>
            </BlockReveal>
            <BlockReveal>
              <p className=" mt-5 text-lg">
                Emerging Crypto is a dynamic, real-time information hub designed
                to be the go-to source for cryptocurrency enthusiasts,
                investors, and the crypto-curious.
              </p>
            </BlockReveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 w-full lg:w-1/2 lg:gap-x-12 gap-y-32 justify-between pb-52 lg:pb-64">
            <Image
              src={ec1}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project images"
            />
            <Image
              src={ec2}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
            <Image
              src={ec3}
              className=" w-[150px] md:w-[200px] lg:w-auto relative"
              alt="nomark project image"
            />
            <Image
              src={ec4}
              className=" w-[150px] ml-auto md:w-[200px] lg:w-auto relative top-32"
              alt="nomark project image"
            />
          </div>
        </div>
      </section>
      <section className=" px-5 py-24 relative">
        <motion.h2
          variants={animateX}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" z-30 text-3xl mb-10 font-bold text-white lg:text-5xl tracking-[0.2em]"
        >
          SKILLS
        </motion.h2>
        <motion.div
          variants={animateY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" w-full grid grid-cols-2 lg:grid-cols-3 justify-evenly text-center gap-y-10 text-2xl"
        >
          <p>HTML & CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Tailwind</p>
          <p>Typescript</p>
          <p>Redux</p>
          <p>Firebase</p>
          <p>Supabase</p>
        </motion.div>
      </section>
      <footer className=" px-5 py-12">
        <motion.div
          variants={animateX}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className=" text-2xl font-medium">Say Hello</h2>
          <p className=" text-sm text-grey mt-3">
            Have a project in mind? Let’s work together.
          </p>
        </motion.div>
        <motion.div
          variants={animateY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className=" mt-10 lg:flex justify-between items-center"
        >
          <a
            href="mailto:harrisegue9@gmail.com"
            className=" text-2xl lg:text-6xl text-grey"
          >
            harrisegue9@gmail.com
          </a>
          <div className=" flex gap-x-5 mt-7">
            <Link
              href={"https://x.com/E__Harris?t=J8QH7tzWLSO5rkm1U-WKdg&s=09"}
              target="_blank"
              className=" group"
            >
              <FaXTwitter className=" text-3xl text-grey group-hover:text-white " />
            </Link>
            <Link
              href={"https://wa.me/2347067107626"}
              target="_blank"
              className=" group"
            >
              <FaWhatsapp className=" text-3xl text-grey group-hover:text-white " />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/harris-egue-168511242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
              className=" group"
            >
              <FaLinkedinIn className=" text-3xl text-grey group-hover:text-white " />
            </Link>
            <Link
              href={"https://github.com/Darkah11"}
              target="_blank"
              className=" group"
            >
              <FaGithub className=" text-3xl text-grey group-hover:text-white " />
            </Link>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
