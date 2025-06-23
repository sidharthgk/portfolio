'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Award, Users, Zap, Heart, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'EduLex AI',
      subtitle: 'AI & AR for Dyslexia Support',
      description: 'An innovative AI-powered application that uses Augmented Reality to help children with dyslexia improve their reading skills through interactive learning experiences.',
      longDescription: 'EduLex AI combines cutting-edge artificial intelligence with augmented reality to create personalized learning experiences for children with dyslexia. The application uses computer vision to track reading patterns, provides real-time feedback, and adapts content difficulty based on individual progress.',
      technologies: ['React', 'TensorFlow', 'AR.js', 'Python', 'Machine Learning'],
      category: 'AI/ML',
      featured: true,
      achievements: [
        '🏆 First Prize at Spark Venture 2024 Ignite Innovation Challenge',
        '💰 Secured ₹1 Lakh INR funding',
        '👥 Helping 100+ children improve reading skills'
      ],
      impact: 'Funded startup project making education accessible',
      github: 'https://github.com/sidharthgk',
      demo: '#',
      image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active Development'
    },
    {
      id: 2,
      title: 'Smart Shoe for Visually Impaired',
      subtitle: 'IoT Assistive Technology',
      description: 'An intelligent wearable device that uses ultrasonic sensors and haptic feedback to help visually impaired individuals navigate safely.',
      longDescription: 'This IoT-based smart shoe system integrates multiple ultrasonic sensors, Arduino microcontrollers, and vibration motors to create a comprehensive navigation aid. The device detects obstacles at various heights and provides intuitive haptic feedback patterns to guide users safely.',
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensors', 'IoT', 'Embedded Systems'],
      category: 'IoT',
      featured: true,
      achievements: [
        '🔧 Working prototype completed',
        '🧪 Tested with 20+ visually impaired volunteers',
        '📊 95% accuracy in obstacle detection'
      ],
      impact: 'Assistive technology for enhanced mobility',
      github: 'https://github.com/sidharthgk',
      demo: '#',
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Prototype Ready'
    },
    {
      id: 3,
      title: 'Desktop Voice Assistant',
      subtitle: 'AI-Powered Desktop Automation',
      description: 'A sophisticated voice assistant built with Python that can control desktop applications, manage files, and provide intelligent responses.',
      longDescription: 'This comprehensive voice assistant leverages speech recognition, natural language processing, and system APIs to create a seamless desktop automation experience. Features include voice-controlled file management, application launching, web searches, and smart scheduling.',
      technologies: ['Python', 'Speech Recognition', 'NLP', 'APIs', 'GUI Development'],
      category: 'Desktop App',
      featured: true,
      achievements: [
        '🎯 500+ voice commands supported',
        '⚡ <2 second response time',
        '🔧 Cross-platform compatibility'
      ],
      impact: 'Productivity enhancement through voice control',
      github: 'https://github.com/sidharthgk',
      demo: '#',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Complete'
    },
    {
      id: 4,
      title: 'Discord Community Bot',
      subtitle: 'Python-Powered Community Management',
      description: 'A feature-rich Discord bot that enhances community engagement with moderation tools, games, and utility commands.',
      longDescription: 'Built using Discord.py, this bot provides comprehensive community management features including automated moderation, custom commands, member engagement activities, and server analytics. Designed to scale across multiple servers with customizable configurations.',
      technologies: ['Python', 'Discord.py', 'SQLite', 'APIs', 'Cloud Hosting'],
      category: 'Bot Development',
      featured: false,
      achievements: [
        '👥 Active in 10+ Discord servers',
        '📈 Managing 1000+ community members',
        '🤖 50+ custom commands'
      ],
      impact: 'Enhanced community engagement and moderation',
      github: 'https://github.com/sidharthgk',
      demo: '#',
      image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Live'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const displayProjects = showAllProjects ? projects : featuredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Prototype Ready':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Live':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions that showcase my passion for technology and problem-solving
            </p>
          </motion.div>

          {/* Project Showcase */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="lg:col-span-1 space-y-4">
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProject === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <Card className={`border-2 transition-all duration-300 ${
                    selectedProject === index 
                      ? 'border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-950/20' 
                      : 'border-border hover:border-accent'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">
                            {project.category === 'AI/ML' && '🤖'}
                            {project.category === 'IoT' && '📡'}
                            {project.category === 'Desktop App' && '🖥️'}
                            {project.category === 'Bot Development' && '🤖'}
                          </span>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground">{project.title}</h3>
                            {project.featured && (
                              <Award className="w-4 h-4 text-yellow-500" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                          <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Show More/Less Button */}
              <motion.div variants={itemVariants} className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="flex items-center space-x-2"
                >
                  {showAllProjects ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{showAllProjects ? 'Show Featured Only' : 'Show All Projects'}</span>
                </Button>
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full border-2 border-border">
                    <CardHeader className="pb-4">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
                        <Image
                          src={displayProjects[selectedProject].image}
                          alt={displayProjects[selectedProject].title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 700px"
                          priority
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Project Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {displayProjects[selectedProject].title}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              {displayProjects[selectedProject].subtitle}
                            </p>
                          </div>
                          <Badge className={`${getStatusColor(displayProjects[selectedProject].status)}`}>
                            {displayProjects[selectedProject].status}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {displayProjects[selectedProject].longDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {displayProjects[selectedProject].technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {displayProjects[selectedProject].achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <span className="mt-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Impact</h4>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          <span className="text-muted-foreground">{displayProjects[selectedProject].impact}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                        <Button asChild className="flex-1">
                          <a
                            href={displayProjects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                          <a
                            href={displayProjects[selectedProject].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}