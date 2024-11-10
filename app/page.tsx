"use client"

import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/textarea"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Component() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Syed Abdullah Zaidi
          </Link>
          <div className={styles.navLinks}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Crafting Digital Experiences
          </h1>
          <p className={styles.heroText}>
            I am a full-stack developer passionate about creating innovative and user-centric web solutions.
          </p>
          <Button className={styles.heroButton}>
            View My Work
          </Button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/my.jpg"
            alt="Profile"
            width={320}
            height={320}
          />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutText}>
            <p>
              With over 5 years of experience in web development, I specialize in creating scalable, efficient, and visually
              appealing applications. My expertise spans across the full stack, from responsive front-end designs to robust back-end architectures.
            </p>
            <p>
              I am constantly exploring new technologies and methodologies to stay at the forefront of the ever-evolving
              tech landscape. My goal is to deliver solutions that not only meet but exceed client expectations.
            </p>
          </div>
          <div className={styles.techStack}>
            {["React", "Node.js", "TypeScript", "GraphQL", "Python", "AWS"].map((tech) => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectGrid}>
          {[
            {
              title: "GIAIC Clone",
              description: "A real-time analytics platform powered by machine learning algorithms.",
              image: "/giaic.jpeg"
            },
            {
              title: "AR Developers Web",
              description: "An IoT application for managing and optimizing home energy consumption.",
              image: "/ar.jpeg"
            },
            {
              title: "Dif Exam Web",
              description: "A decentralized system for transparent and secure supply chain management.",
              image: "/dif.jpeg"
            }
          ].map((project, index) => (
            <Card key={index} className={styles.projectCard}>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <Button variant="link" className={styles.projectLink}>
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form className={styles.contactForm}>
          <Input
            placeholder="Name"
            className={styles.input}
          />
          <Input
            type="email"
            placeholder="Email"
            className={styles.input}
          />
          <Textarea
            placeholder="Message"
            className={styles.textarea}
          />
          <Button className={styles.submitButton}>
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Syed Abdullah Zaidi</h3>
            <p className={styles.footerText}>
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <div className={styles.footerContact}>
              <p>Email: syedabdullahzaidi473@gmail.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Follow Me</h4>
            <div className={styles.socialLinks}>
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <Link key={social} href="https://www.linkedin.com/in/syed-abdullah-zaidi-a281552b5/" className={styles.socialLink}>
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2024 SAZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}