'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Code, Coffee, Cpu, Smartphone, Github, Linkedin, Mail, Download, Sparkles, Zap, Brain, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const [coffeeCount, setCoffeeCount] = useState(42);
  const [currentLearning, setCurrentLearning] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const learningTopics = [
    { text: 'React Native', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { text: 'TensorFlow', icon: '🧠', color: 'from-orange-500 to-red-500' },
    { text: 'Cloud Computing', icon: '☁️', color: 'from-purple-500 to-pink-500' },
    { text: 'Machine Learning', icon: '🤖', color: 'from-green-500 to-teal-500' },
    { text: 'IoT Development', icon: '📡', color: 'from-indigo-500 to-blue-500' }
  ];

  const techStack = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'JavaScript', icon: '⚡', level: 85 },
    { name: 'React', icon: '⚛️', level: 85 },
    { name: 'Arduino', icon: '🔧', level: 85 },
    { name: 'AI/ML', icon: '🧠', level: 75 }
  ];

  const floatingElements = [
    { Icon: Code, delay: 0, x: 100, y: 50, rotation: 15, color: 'text-blue-400' },
    { Icon: Cpu, delay: 0.5, x: -80, y: 80, rotation: -20, color: 'text-purple-400' },
    { Icon: Smartphone, delay: 1, x: 120, y: -30, rotation: 25, color: 'text-teal-400' },
    { Icon: Coffee, delay: 1.5, x: -100, y: -60, rotation: -15, color: 'text-orange-400' },
    { Icon: Brain, delay: 2, x: 150, y: 100, rotation: 30, color: 'text-pink-400' },
    { Icon: Wifi, delay: 2.5, x: -120, y: 40, rotation: -25, color: 'text-green-400' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentLearning((prev) => (prev + 1) % learningTopics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const coffeeInterval = setInterval(() => {
      setCoffeeCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(coffeeInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl"
        />

        {/* Floating Tech Icons */}
        {floatingElements.map(({ Icon, delay, x, y, rotation, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
              x: [0, x * 0.5, x, x * 0.3, 0],
              y: [0, y * 0.3, y, y * 0.7, 0],
              rotate: [0, rotation, rotation * 2, rotation, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${20 + index * 15}%`,
              top: `${25 + index * 12}%`
            }}
          >
            <Icon className={`w-8 h-8 ${color}/30`} />
          </motion.div>
        ))}

        {/* Particle System */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%'
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3"
              >
                <motion.div
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.div>
                <span className="text-blue-200 font-medium">Hello, I'm</span>
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
              
              {/* Name with Gradient Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent bg-300% animate-gradient">
                  Sidharth GK
                </span>
              </motion.h1>
              
              {/* Tagline with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl text-gray-300 font-medium">
                  Turning coffee into code{' '}
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block"
                  >
                    ☕
                  </motion.span>
                  →
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="inline-block"
                  >
                    💻
                  </motion.span>
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {['AI Enthusiast', 'IoT Developer', 'Problem Solver', 'Innovation Catalyst'].map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    >
                      <Badge variant="outline" className="text-blue-200 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate developer exploring the intersections of{' '}
                <span className="text-blue-400 font-semibold">Software Development</span>,{' '}
                <span className="text-purple-400 font-semibold">AI</span>, and{' '}
                <span className="text-teal-400 font-semibold">IoT</span>. 
                Currently pursuing B.Tech in Computer Science with a passion for innovation.
              </p>

              {/* Current Learning Widget */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span>Currently learning:</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLearning}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{learningTopics[currentLearning].icon}</span>
                    <span className={`text-xl font-bold bg-gradient-to-r ${learningTopics[currentLearning].color} bg-clip-text text-transparent`}>
                      {learningTopics[currentLearning].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={scrollToNext}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 hover:border-blue-400/50 backdrop-blur-sm transition-all duration-300"
              >
                Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              {[
                { Icon: Github, href: 'https://github.com/sidharthgk', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com/in/sidharthgk', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:sidharthgk2003@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            {/* Coffee Counter Easter Egg */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-2xl shadow-lg cursor-pointer z-10 backdrop-blur-sm"
              onClick={() => setCoffeeCount(prev => prev + 1)}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Coffee className="w-6 h-6 mx-auto mb-1" />
                </motion.div>
                <div className="text-lg font-bold">{coffeeCount}</div>
                <div className="text-xs">cups</div>
              </div>
            </motion.div>

            {/* Main Profile Card */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 shadow-2xl">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl opacity-20 animate-pulse" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl" />
              
              <div className="relative z-10 space-y-8">
                {/* Avatar */}
                <div className="relative mx-auto w-48 h-48">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full p-1"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        SG
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    AI
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    IoT
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="absolute top-1/2 -right-8 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    Dev
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '8.5', label: 'CGPA', color: 'text-blue-400', icon: '🎓' },
                    { value: '4+', label: 'Projects', color: 'text-purple-400', icon: '🚀' },
                    { value: '₹1L', label: 'Funding', color: 'text-teal-400', icon: '💰' },
                    { value: '2', label: 'Awards', color: 'text-orange-400', icon: '🏆' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/20"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-200 text-center">Tech Stack</h3>
                  <div className="space-y-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">{tech.name}</span>
                            <span className="text-gray-400">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ delay: 2 + index * 0.1, duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="text-center text-gray-400 flex items-center justify-center space-x-2"
                >
                  <span>📍</span>
                  <span>Kerala, India</span>
                  <Badge variant="outline" className="text-xs border-green-400/30 text-green-400">
                    Open to Remote
                  </Badge>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center space-y-2"
          onClick={scrollToNext}
        >
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
}