'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, TrendingUp, DollarSign, Users, AlignCenterVertical as Certificate, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: 'Spark Venture 2024 Ignite Innovation Challenge',
      subtitle: 'First Prize Winner',
      description: 'Won first place with EduLex AI, an innovative solution for dyslexia support using AI and AR technology.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      value: '₹1 Lakh',
      metric: 'Funding Secured',
      category: 'Competition',
      date: '2024',
      impact: 'Secured funding to develop EduLex AI into a commercial product',
      featured: true
    },
    {
      id: 2,
      title: 'College Bug Hunt Competition',
      subtitle: 'First Prize Winner',
      description: 'Demonstrated exceptional debugging and problem-solving skills in a competitive programming environment.',
      icon: Target,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      value: '1st',
      metric: 'Position',
      category: 'Competition',
      date: '2024',
      impact: 'Showcased technical problem-solving abilities',
      featured: true
    },
    {
      id: 3,
      title: 'NPTEL Python Programming Certification',
      subtitle: 'Programming, Data Structures, and Algorithms',
      description: 'Successfully completed comprehensive Python programming course covering advanced concepts and algorithms.',
      icon: Certificate,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      value: 'Certified',
      metric: 'Achievement',
      category: 'Certification',
      date: '2023',
      impact: 'Enhanced programming expertise and algorithmic thinking',
      featured: false
    }
  ];

  const stats = [
    {
      icon: Trophy,
      value: '2',
      label: 'Competition Wins',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: DollarSign,
      value: '₹1L',
      label: 'Funding Secured',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Star,
      value: '8.5',
      label: 'CGPA',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      value: '100+',
      label: 'People Impacted',
      color: 'text-purple-600 dark:text-purple-400'
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

  const countUpVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
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
              Achievements & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that reflect my dedication to excellence and innovation
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={countUpVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <Card className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                      <div className="space-y-1">
                        <div className={`text-3xl font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Achievements */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={achievement.featured ? "md:col-span-2" : ""}
                >
                  <Card className={`h-full border-2 ${achievement.borderColor} hover:shadow-xl transition-all duration-300 group`}>
                    <CardContent className="p-8 space-y-6">
                      {/* Header */}
                      <div className="flex items-start space-x-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                          <achievement.icon className={`w-8 h-8 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{achievement.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                            {achievement.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Metrics */}
                      <div className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${achievement.bgColor} border ${achievement.borderColor}`}>
                        <div className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                            {achievement.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.metric}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground text-right max-w-md">
                          <strong>Impact:</strong> {achievement.impact}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {achievement.featured && (
                        <div className="flex justify-center">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2">
                            ⭐ Featured Achievement
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 space-y-4">
                <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">
                  Always Striving for Excellence
                </h3>
                <p className="text-muted-foreground">
                  These achievements represent just the beginning of my journey. 
                  I'm constantly pushing boundaries and seeking new challenges 
                  to grow both personally and professionally.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  <Badge variant="outline">Innovation</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Technical Excellence</Badge>
                  <Badge variant="outline">Impact Creation</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}