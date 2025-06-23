'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const funFacts = [
    {
      icon: "☕",
      title: "Coffee Addict",
      description: "Can't code without my daily dose of caffeine"
    },
    {
      icon: "🎮",
      title: "Problem Solver",
      description: "Love tackling complex challenges and debugging marathons"
    },
    {
      icon: "🌱",
      title: "Continuous Learner",
      description: "Always exploring new technologies and frameworks"
    },
    {
      icon: "🚀",
      title: "Innovation Enthusiast",
      description: "Passionate about creating solutions that make a difference"
    }
  ];

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

  return (
    <div className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Sidharth GK</span>, 
                    a passionate developer from India, exploring the fascinating intersections of{' '}
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">Software Development</span>,{' '}
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">AI</span>, and{' '}
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">IoT</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Currently pursuing my B.Tech in Computer Science at{' '}
                    <span className="font-semibold text-foreground">APJ Abdul Kalam Technological University</span>{' '}
                    with a CGPA of <span className="text-green-600 dark:text-green-400 font-bold">8.5/10</span>. 
                    I believe in the power of technology to solve real-world problems and create meaningful impact.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My journey has been driven by curiosity and a desire to build innovative solutions. 
                    From developing AI-powered applications to creating IoT devices that help people, 
                    I'm always excited about the next challenge. <span className="font-semibold text-foreground">Always curious, always building.</span>
                  </p>
                </div>

                {/* Education & Location Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                    <CardContent className="p-6 text-center">
                      <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">Education</h3>
                      <p className="text-sm text-muted-foreground">B.Tech Computer Science</p>
                      <p className="text-xs text-muted-foreground">CGPA: 8.5/10</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">Location</h3>
                      <p className="text-sm text-muted-foreground">Kerala, India</p>
                      <p className="text-xs text-muted-foreground">Open to remote work</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Fun Facts & Quirks */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-pink-800 dark:text-pink-200 font-medium">Quirky Corner</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Fun Facts About Me</h3>
              </div>

              <div className="grid gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group"
                  >
                    <Card className="border-2 border-transparent hover:border-accent transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {fact.icon}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {fact.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {fact.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What Drives Me */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6 text-center">
                    <Lightbulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-3">What Drives Me</h4>
                    <p className="text-sm text-muted-foreground">
                      "The intersection of creativity and logic in programming fascinates me. 
                      Every line of code is an opportunity to solve a problem and make someone's life better."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}