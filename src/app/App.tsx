import { useState } from 'react';
import { Home, User, Code, Briefcase, Award, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import Ezspence from "../assets/Ezpensce.jpeg";
import ePMSSS from "../assets/epmsss.jpg";
import SlackConnect from "../assets/slack.jpg";

import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profilePic from "../assets/prakash-kpmg.jpeg";
import "../index.css";


export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'contacts', label: 'Contacts', icon: Mail },
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/prakash-behuria-167946306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Deadcoil', label: 'GitHub' },
    { icon: Instagram, url: 'https://www.instagram.com/deadcoil.dumb?igsh=MWxwdGhlODlscm1udA==', label: 'Instagram' },
  ];

   const skills = [
                              { name: "Java", icon: <FaJava /> },
                              { name: "C/C++", icon: <TbBrandCpp /> },
                              { name: "PHP", icon: <FaPhp /> },
                              { name: "JavaScript", icon: <SiJavascript /> },
                              { name: "React.js", icon: <FaReact /> },
                              { name: "Node.js", icon: <FaNode /> },
                              { name: "CSS3", icon: <FaCss3Alt /> },
                              { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
                              { name: "Bootstrap", icon: <FaBootstrap /> },
                              { name: "SQL", icon: <SiMysql /> },
                              { name: "Git", icon: <FaGitAlt /> },
                              { name: "Postman", icon: <SiPostman /> },
                            ];

  const projects = [
  {
    img:{src: Ezspence, alt: "EzSPENCE - Expense Tracker App"},
    name: "EzSPENCE",
    tech: "MongoDB, Express, React.js, Node.js, JWT, Chakra UI",
    description: [
      "Developed a MERN stack expense tracker with JWT-based authentication tracking 80+ monthly expenses.",
      "Reduced authentication processing time by 30% using optimized JWT logic.",
      "Tested frontend modules and integrated backend CRUD operations.",
    ],
  },
  {
    img:{src: ePMSSS, alt: "e-PMSSS Scholarship Disbursement System"},
    name: "e-PMSSS Scholarship Disbursement System",
    tech: "HTML, CSS, Bootstrap, JavaScript,React.js, Node.js, Git",
    description: [
      "Built a responsive interface reducing errors by 60% vs manual submission.",
      "Created reusable modular UI components with Bootstrap.",
      "Contributed 40% of UI work in a 6-member Agile team with sprint planning.",
    ],
  },
  {
    img:{src: SlackConnect, alt: "Slack Connect - Slack Integrated Messaging App"},
    name: "Slack Connect",
    tech: "TypeScript, Node.js, OAuth 2.0, JavaScript, HTML, CSS",
    description: [
      "Built a full-stack Slack-integrated app using OAuth 2.0 authentication.",
      "Securely stored access and refresh tokens in JSON.",
      "Enabled scheduled and instant message delivery.",
      "Developed React UI for channel selection and scheduling.",
    ],
  },
];


  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-y-auto">
      {/* Navigation - Top Right */}
      <nav className="fixed top-0 right-0 z-50 p-6 flex gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeSection === item.id
                ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}
          >
            <item.icon size={16} />
            <span className="hidden lg:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Social Links - Left Side Full Height */}
      <div className="fixed top-0 left-0 z-50 h-full flex flex-col items-center bg-slate-900 p-4 shadow-2xl border-r border-purple-500/30 w-20">

        {/* PB at top */}
        <div className="text-2xl font-bold mb-6 mt-2 fancy-initials">
          PB.
        </div>

        {/* Spacer to push icons down */}
        <div className="flex-grow" />

        <div className="flex flex-col items-center gap-4 pb-6">
          
          {/* Line */}
          <div className="w-0.5 h-32 bg-gradient-to-t from-purple-500 to-transparent" />

          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}

        </div>
      </div>


      {/* Sections with left margin to account for social links */}
      <div className="ml-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="max-w-4xl text-center flex flex-col items-center">
            {/* Profile Photo */}
            <div className="mb-8">
              <ImageWithFallback
                src={profilePic}
                alt="Prakash Behuria"
                className="w-80 h-80 object-cover rounded-3xl shadow-2xl shadow-purple-500/50 border-4 border-purple-500/30"
              />
            </div>
            
            {/* Name */}
            <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
              Hello, I'm <span className="fancy-name">Prakash Behuria</span>
            </h1>
            
            {/* Title */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer
            </p>
            
            {/* Resume Button */}
            <div>
              <button
                onClick={() => window.open(
                          "https://drive.google.com/file/d/1MzQq-DMfYJYteNWm7rZ3SXZt1IFBplX3/view",
                          "_blank"
                        )}
                className="px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/50"
              >
                Resume
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen px-8 py-20">
          <div className="mt-10">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I am a passionate and detail-oriented full-stack developer dedicated to building modern, scalable, and user-centric web applications. With strong expertise in technologies like Java, React.js, Node.js, and MySQL, I enjoy transforming ideas into real-world digital solutions that are both functional and visually appealing.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                On the frontend, I work extensively with React to create responsive, interactive, and intuitive user interfaces that enhance user experience. On the backend, I leverage Node.js and Java to build secure, efficient, and well-structured server-side applications. I use MySQL for designing optimized databases that ensure data integrity and performance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I believe that great software development goes beyond writing code — it’s about understanding user needs, solving real-world problems, and delivering clean, maintainable, and scalable solutions. I focus on writing structured code, following best practices, and building applications that are easy to extend and maintain.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I continuously explore new tools and emerging technologies to stay updated with industry trends. Whether it’s developing full-stack projects, improving application performance, or experimenting with new frameworks, I approach every challenge with curiosity and a strong desire to grow.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond development, I actively contribute to collaborative projects, engage with the developer community, and enjoy sharing knowledge. When I’m not coding, I spend time enhancing my problem-solving skills, learning advanced concepts, or working on innovative side projects that push my technical boundaries.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen px-8 py-20">
          <div className="w-full mt-10">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl">{skill.name}</h3>
                    <span className="text-2xl">
                      {skill.icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen px-8 py-20">
          <div className=" w-full mt-10">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <div
      key={project.name}
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
    >
      <div className="h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300">
        {project.img ? (
          <ImageWithFallback
            src={project.img.src}
            alt={project.img.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>


      <div className="p-6">
        <h3 className="text-xl mb-1">{project.name}</h3>

        <h4 className="text-sm mb-3">
          Tech Stack: {project.tech}
        </h4>

        <ul className="text-gray-400 list-disc list-inside space-y-1 text-sm">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="relative space-y-12">
              {/* Vertical pathway line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />
              
              {[
                { title: 'Senior Developer', company: 'Tech Company', period: '2022 - Present', description: 'Leading development teams and architecting scalable solutions.' },
                { title: 'Full Stack Developer', company: 'Startup Inc.', period: '2020 - 2022', description: 'Built full-stack applications using modern technologies.' },
                { title: 'Junior Developer', company: 'Digital Agency', period: '2018 - 2020', description: 'Developed responsive websites and web applications.' },
              ].map((job, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Circle node on the pathway */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Award size={24} />
                    </div>
                    {/* Connecting line to card */}
                    <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                  </div>
                  
                  {/* Experience card */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
                    <h3 className="text-2xl mb-2">{job.title}</h3>
                    <p className="text-purple-400 mb-2">{job.company}</p>
                    <p className="text-gray-400 mb-3">{job.period}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-2xl w-full">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 mb-8 text-center">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Mail className="text-purple-400" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex justify-center gap-6 mt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
