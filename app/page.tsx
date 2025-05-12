"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, ExternalLink, Linkedin, Twitter, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [skillValues, setSkillValues] = useState({
    react: 0,
    typescript: 0,
    node: 0,
    uiux: 0,
    database: 0,
  })

  useEffect(() => {
    // Animate skill bars after component mounts
    const timer = setTimeout(() => {
      setSkillValues({
        react: 95,
        typescript: 90,
        node: 85,
        uiux: 80,
        database: 85,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  }

  const pixelShake = {
    initial: { x: 0 },
    hover: {
      x: [0, -4, 4, -4, 0],
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-yellow-50 text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full bg-pink-500 border-b-4 border-black">
        <div className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-black text-2xl tracking-tighter">NISCHAL NEUPANE</span>
            </Link>
            <nav className="flex items-center space-x-6 text-base font-bold">
              <Link href="#about" className="transition-colors hover:text-yellow-300 relative">
                <span className="relative z-10">ABOUT</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-green-400 -z-10"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
              <Link href="#skills" className="transition-colors hover:text-yellow-300 relative">
                <span className="relative z-10">SKILLS</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-green-400 -z-10"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
              <Link href="#projects" className="transition-colors hover:text-yellow-300 relative">
                <span className="relative z-10">PROJECTS</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-green-400 -z-10"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
              <Link href="#contact" className="transition-colors hover:text-yellow-300 relative">
                <span className="relative z-10">CONTACT</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-green-400 -z-10"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="outline"
                className="ml-auto hidden h-12 md:flex font-bold border-4 border-black bg-cyan-400 text-black hover:bg-cyan-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Mail className="mr-2 h-5 w-5" />
                CONTACT ME
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <motion.section
          className="py-20 md:py-28 flex flex-col items-center text-center relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 bg-purple-500 rounded-full border-4 border-black"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 border-4 border-black"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-cyan-400 border-4 border-black transform rotate-45"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="rounded-full overflow-hidden w-48 h-48 mb-8 border-8 border-black bg-orange-400 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            variants={scaleUp}
          >
            <img src="/nischal.png?height=160&width=160" alt="Nischal Neupane" className="object-cover" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "linear",
                repeatDelay: 3,
              }}
            />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-4 relative inline-block"
            variants={fadeIn}
          >
            <span className="relative z-10">NISCHAL NEUPANE</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-6 bg-pink-500 -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
          </motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-700" variants={fadeIn}>
            FULL STACK DEVELOPER & UI/UX DESIGNER
          </motion.h2>
          <motion.p className="max-w-[42rem] mb-8 text-lg font-medium" variants={fadeIn}>
            Crafting beautiful, functional, and user-friendly digital experiences with a passion for clean code and
            innovative solutions.
          </motion.p>
          <motion.div className="flex gap-6" variants={fadeIn}>
            <Button
              asChild
              className="h-14 px-6 text-lg font-bold border-4 border-black bg-green-400 text-black hover:bg-green-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Link href="#projects">
                VIEW PROJECT <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-14 px-6 text-lg font-bold border-4 border-black bg-orange-400 text-black hover:bg-orange-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Link href="#contact">
                CONTACT ME <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>

        <Separator className="my-12 h-1 bg-black" />

        {/* About Section */}
        <motion.section
          id="about"
          className="py-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute -top-5 -left-5 w-10 h-10 bg-pink-500 border-4 border-black transform rotate-45" />
          <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-cyan-400 border-4 border-black rounded-full" />

          <motion.h2 className="text-4xl font-black mb-12 inline-block relative" variants={fadeIn}>
            <span className="relative z-10">ABOUT ME</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-5 bg-orange-400 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <motion.p className="text-lg mb-4 font-medium" variants={fadeIn}>
                Hello! I'm Nischal, a passionate developer with a keen eye for design and a love for creating seamless
                user experiences. With expertise in both frontend and backend technologies, I bring ideas to life
                through code.
              </motion.p>
              <motion.p className="text-lg mb-4 font-medium" variants={fadeIn}>
                I specialize in building modern web applications using React, Next.js, and Node.js. My approach combines
                technical excellence with creative problem-solving to deliver solutions that not only work flawlessly
                but also delight users.
              </motion.p>
              <motion.p className="text-lg font-medium" variants={fadeIn}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or hiking in the mountains.
              </motion.p>
            </motion.div>
            <motion.div
              className="space-y-6 bg-cyan-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-purple-700">NAME</h3>
                  <p className="font-bold text-xl">Nischal Neupane</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">EMAIL</h3>
                  <p className="font-bold text-xl">neupanenischal221@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">LOCATION</h3>
                  <p className="font-bold text-xl">Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">EXPERIENCE</h3>
                  <p className="font-bold text-xl">4+ Years</p>
                </div>
              </div>
              <motion.div
                className="flex gap-4 mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                  <Button
                    size="icon"
                    className="h-12 w-12 bg-pink-500 border-4 border-black text-black hover:bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                  <Button
                    size="icon"
                    className="h-12 w-12 bg-green-400 border-4 border-black text-black hover:bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    asChild
                  >
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                  <Button
                    size="icon"
                    className="h-12 w-12 bg-orange-400 border-4 border-black text-black hover:bg-orange-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    asChild
                  >
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <Separator className="my-12 h-1 bg-black" />

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute top-10 right-0 w-16 h-16 bg-green-400 border-4 border-black transform -rotate-12" />
          <div className="absolute bottom-10 left-0 w-20 h-20 bg-pink-500 border-4 border-black rounded-full" />

          <motion.h2 className="text-4xl font-black mb-12 inline-block relative" variants={fadeIn}>
            <span className="relative z-10">SKILLS & EXPERTISE</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-5 bg-green-400 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8 bg-pink-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-black mb-6">TECHNICAL SKILLS</h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">REACT & NEXT.JS</span>
                    <span className="font-bold">{skillValues.react}%</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 border-2 border-black">
                    <motion.div
                      className="h-full bg-green-400 border-r-2 border-black"
                      style={{ width: `${skillValues.react}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillValues.react}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">TYPESCRIPT</span>
                    <span className="font-bold">{skillValues.typescript}%</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 border-2 border-black">
                    <motion.div
                      className="h-full bg-cyan-400 border-r-2 border-black"
                      style={{ width: `${skillValues.typescript}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillValues.typescript}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">NODE.JS & EXPRESS</span>
                    <span className="font-bold">{skillValues.node}%</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 border-2 border-black">
                    <motion.div
                      className="h-full bg-orange-400 border-r-2 border-black"
                      style={{ width: `${skillValues.node}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillValues.node}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">UI/UX DESIGN</span>
                    <span className="font-bold">{skillValues.uiux}%</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 border-2 border-black">
                    <motion.div
                      className="h-full bg-purple-500 border-r-2 border-black"
                      style={{ width: `${skillValues.uiux}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillValues.uiux}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">MONGODB & POSTGRESQL</span>
                    <span className="font-bold">{skillValues.database}%</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 border-2 border-black">
                    <motion.div
                      className="h-full bg-pink-500 border-r-2 border-black"
                      style={{ width: `${skillValues.database}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillValues.database}%` }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-orange-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-black mb-6">TECHNOLOGIES & TOOLS</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Figma",
                  "Git",
                  "Docker",
                  "AWS",
                  "Firebase",
                  "Redux",
                  "GraphQL",
                  "REST API",
                  "Jest",
                  "CI/CD",
                  "Responsive Design",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.05 },
                      },
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Badge className="px-4 py-2 text-base font-bold bg-white border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <Separator className="my-12 h-1 bg-black" />

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 w-24 h-24 bg-yellow-400 border-4 border-black rounded-full -translate-x-1/2 -translate-y-1/2" />

          <motion.h2 className="text-4xl font-black mb-12 inline-block relative" variants={fadeIn}>
            <span className="relative z-10">FEATURED PROJECTS</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-5 bg-cyan-400 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div variants={cardVariants}>
              <div className="bg-white border-4 border-black overflow-hidden h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <motion.div
                  className="h-48 overflow-hidden border-b-4 border-black relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-green-400 border-l-4 border-b-4 border-black px-4 py-2">
                    <span className="font-black text-lg">01</span>
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">E-COMMERCE PLATFORM</h3>
                  <p className="text-lg font-medium mb-4">
                    A full-featured online shopping platform with payment integration
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="px-3 py-1 text-sm font-bold bg-pink-300 border-2 border-black">React</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-cyan-300 border-2 border-black">Node.js</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-orange-300 border-2 border-black">MongoDB</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-green-300 border-2 border-black">Stripe</Badge>
                  </div>
                  <p className="text-base font-medium mb-6">
                    Built a complete e-commerce solution with user authentication, product management, cart
                    functionality, and secure payment processing.
                  </p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-purple-400 text-black hover:bg-purple-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        CODE
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-green-400 text-black hover:bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        LIVE DEMO
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
              <div className="bg-white border-4 border-black overflow-hidden h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <motion.div
                  className="h-48 overflow-hidden border-b-4 border-black relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Task Management App"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-pink-400 border-l-4 border-b-4 border-black px-4 py-2">
                    <span className="font-black text-lg">02</span>
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">TASK MANAGEMENT APP</h3>
                  <p className="text-lg font-medium mb-4">
                    A collaborative project management tool with real-time updates
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="px-3 py-1 text-sm font-bold bg-green-300 border-2 border-black">Next.js</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-cyan-300 border-2 border-black">TypeScript</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-orange-300 border-2 border-black">Firebase</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-purple-300 border-2 border-black">Tailwind</Badge>
                  </div>
                  <p className="text-base font-medium mb-6">
                    Developed a task management application with real-time collaboration features, drag-and-drop
                    interface, and team communication tools.
                  </p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-purple-400 text-black hover:bg-purple-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        CODE
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-green-400 text-black hover:bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        LIVE DEMO
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={cardVariants} transition={{ delay: 0.4 }}>
              <div className="bg-white border-4 border-black overflow-hidden h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <motion.div
                  className="h-48 overflow-hidden border-b-4 border-black relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="AI Content Generator"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-cyan-400 border-l-4 border-b-4 border-black px-4 py-2">
                    <span className="font-black text-lg">03</span>
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">AI CONTENT GENERATOR</h3>
                  <p className="text-lg font-medium mb-4">An AI-powered tool for creating marketing content</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="px-3 py-1 text-sm font-bold bg-pink-300 border-2 border-black">React</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-green-300 border-2 border-black">OpenAI API</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-cyan-300 border-2 border-black">Express</Badge>
                    <Badge className="px-3 py-1 text-sm font-bold bg-orange-300 border-2 border-black">
                      PostgreSQL
                    </Badge>
                  </div>
                  <p className="text-base font-medium mb-6">
                    Created an AI-powered content generation tool that helps marketers create engaging copy for various
                    platforms with customizable templates.
                  </p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-purple-400 text-black hover:bg-purple-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        CODE
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="font-bold border-4 border-black bg-green-400 text-black hover:bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        LIVE DEMO
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <Separator className="my-12 h-1 bg-black" />

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute -bottom-5 right-10 w-16 h-16 bg-orange-400 border-4 border-black transform rotate-12" />
          <div className="absolute top-10 left-10 w-12 h-12 bg-purple-500 border-4 border-black rounded-full" />

          <motion.h2 className="text-4xl font-black mb-12 inline-block relative" variants={fadeIn}>
            <span className="relative z-10">GET IN TOUCH</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-5 bg-purple-500 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              className="bg-green-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-black mb-6">CONTACT INFORMATION</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 bg-white border-4 border-black p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-pink-400 p-3 border-2 border-black">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-lg">neupanenischal221@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 bg-white border-4 border-black p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-cyan-400 p-3 border-2 border-black">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-lg">linkedin.com/in/nischal-neupane</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 bg-white border-4 border-black p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-orange-400 p-3 border-2 border-black">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-lg">github.com/nischal-neupane</span>
                </motion.div>
              </div>
              <motion.div className="mt-8" variants={fadeIn} transition={{ delay: 0.4 }}>
                <h3 className="text-2xl font-black mb-4">LET'S CONNECT</h3>
                <p className="font-medium text-lg mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                    <Button
                      size="icon"
                      className="h-12 w-12 bg-pink-500 border-4 border-black text-black hover:bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      asChild
                    >
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                    <Button
                      size="icon"
                      className="h-12 w-12 bg-cyan-400 border-4 border-black text-black hover:bg-cyan-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      asChild
                    >
                      <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
                    <Button
                      size="icon"
                      className="h-12 w-12 bg-purple-500 border-4 border-black text-black hover:bg-purple-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      asChild
                    >
                      <Link href="https://twitter.com" target="_blank">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-pink-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-black mb-6">SEND ME A MESSAGE</h3>
              <form className="space-y-6">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-bold">
                      NAME
                    </label>
                    <input
                      id="name"
                      className="flex h-12 w-full rounded-none border-4 border-black bg-white px-4 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-base font-bold">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-none border-4 border-black bg-white px-4 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-black"
                      placeholder="Your email"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="text-base font-bold">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    className="flex h-12 w-full rounded-none border-4 border-black bg-white px-4 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-black"
                    placeholder="Subject"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="text-base font-bold">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-none border-4 border-black bg-white px-4 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-black"
                    placeholder="Your message"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold border-4 border-black bg-orange-400 text-black hover:bg-orange-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    SEND MESSAGE <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-purple-500 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-base font-bold leading-loose md:text-left">
            © {new Date().getFullYear()} NISCHAL NEUPANE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="bg-yellow-400 border-4 border-black text-black hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="bg-green-400 border-4 border-black text-black hover:bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover="hover" initial="initial" variants={pixelShake}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="bg-cyan-400 border-4 border-black text-black hover:bg-cyan-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
