import { useState } from 'react';
import { Home, User, Code, Briefcase, Award, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profilePic from "../assets/prakash-kpmg.jpeg";

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
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
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
      <div className="fixed top-0 left-0 z-50 h-full flex flex-col justify-end bg-slate-900 p-4 shadow-2xl border-r border-purple-500/30 w-20">
        <div className="flex flex-col items-center gap-4 pb-6">
          {/* Line extending upward from the bottom */}
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
              Hello, I'm Prakash Behuria
            </h1>
            
            {/* Title */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer
            </p>
            
            {/* Resume Button */}
            <div>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/50"
              >
                Resume
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a passionate developer with a love for creating beautiful and functional web experiences.
                With expertise in modern web technologies, I bring ideas to life through clean code and innovative design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'SQL', 'Git', 'UI/UX Design'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <h3 className="text-xl">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <div
                  key={project}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300" />
                  <div className="p-6">
                    <h3 className="text-xl mb-2">Project {project}</h3>
                    <p className="text-gray-400">A brief description of this amazing project and what it does.</p>
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
