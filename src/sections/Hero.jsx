import React from "react";
import Button from "../components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Download } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Vercel",
  "REST APIs",
  "Jest",
  "Figma",
  "Git",
  "GitHub Actions",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}

      <div className="absolute inset-0">
        <img
          src="/herobg1.jfif"
          alt="hero img"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-25 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left content */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Engineer + Tech Enthusiast
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-100">
                Crafting <span className="text-primary glow-text">Digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision
                </span>
              </h1>

              <p className="text4-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm Queen Michael_a frontend engineer specializing in React,
                Nextjs and Typescript. I build scalable, maintainable, and
                user-friendly web applications that deliver exceptional user
                experiences.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <span className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </span>
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton >
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>

              {[
                { icon: FiGithub, href: "#", label: "GitHub" },
                { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                { icon: FiTwitter, href: "#", label: "Twitter" },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <a
                    href={social.href}
                    key={idx}
                    aria-label={social.label}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* right column */}

          <div className="relative animate-fade-in animate-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animation-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.png"
                  alt="Queen Michael"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-300">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Section */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div className="shrink-0 px-8 py-4" key={idx}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors ">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 right-1/2 translate-x-1/2 
      animate-fade-in animate-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
