'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Wrench, Layers, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Python', level: 90, experience: '3+ years', projects: 8 },
        { name: 'JavaScript', level: 85, experience: '2+ years', projects: 6 },
        { name: 'C/C++', level: 80, experience: '2+ years', projects: 4 },
        { name: 'SQL', level: 75, experience: '1+ years', projects: 5 },
        { name: 'HTML/CSS', level: 85, experience: '2+ years', projects: 7 }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'purple',
      skills: [
        { name: 'React', level: 85, experience: '1+ years', projects: 5 },
        { name: 'Node.js', level: 75, experience: '1+ years', projects: 4 },
        { name: 'Express.js', level: 70, experience: '1+ years', projects: 3 },
        { name: 'TensorFlow', level: 65, experience: '6 months', projects: 2 },
        { name: 'Discord.py', level: 80, experience: '1+ years', projects: 2 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'teal',
      skills: [
        { name: 'Arduino', level: 85, experience: '2+ years', projects: 3 },
        { name: 'Git/GitHub', level: 80, experience: '2+ years', projects: 10 },
        { name: 'VS Code', level: 90, experience: '3+ years', projects: 15 },
        { name: 'Figma', level: 70, experience: '1+ years', projects: 4 },
        { name: 'Postman', level: 75, experience: '1+ years', projects: 5 }
      ]
    },
    databases: {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'MySQL', level: 75, experience: '1+ years', projects: 4 },
        { name: 'SQLite', level: 80, experience: '1+ years', projects: 5 },
        { name: 'Firebase', level: 70, experience: '6 months', projects: 2 },
        { name: 'MongoDB', level: 65, experience: '6 months', projects: 2 }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" }
    })
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-600'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-600'
      },
      teal: {
        bg: 'from-teal-500 to-teal-600',
        text: 'text-teal-600 dark:text-teal-400',
        border: 'border-teal-200 dark:border-teal-800',
        hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-600'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800',
        hoverBorder: 'hover:border-orange-400 dark:hover:border-orange-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-24 bg-gradient-to-br from-background via-muted/5 to-background">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical expertise and tools I work with
            </p>
          </motion.div>

          {/* Category Selector */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(skillCategories).map(([key, category]) => {
                const colors = getColorClasses(category.color);
                const Icon = category.icon;
                return (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(key)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === key
                        ? `${colors.border} bg-gradient-to-r ${colors.bg} text-white shadow-lg`
                        : `border-border bg-card hover:bg-accent ${colors.hoverBorder}`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                    {selectedCategory === key && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 space-y-4">
                        {/* Skill Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(skill.level / 20)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Proficiency</span>
                            <span className="font-semibold text-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              custom={skill.level}
                              variants={progressVariants}
                              initial="hidden"
                              animate="visible"
                              className={`h-full bg-gradient-to-r ${getColorClasses(skillCategories[selectedCategory as keyof typeof skillCategories].color).bg} rounded-full`}
                            />
                          </div>
                        </div>

                        {/* Skill Details */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Badge variant="secondary" className="text-xs">
                              {skill.experience}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {skill.projects} projects
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Learning Status */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Currently Exploring</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['React Native', 'TensorFlow', 'Cloud Computing', 'Machine Learning', 'DevOps'].map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1 border-blue-300 dark:border-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Always expanding my toolkit with emerging technologies and industry best practices
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}