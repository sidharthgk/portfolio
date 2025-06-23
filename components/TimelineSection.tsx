'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Code, Lightbulb, Calendar, MapPin, Star, Award, BookOpen, Zap, Target, Rocket, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function TimelineSection() {
  const timelineEvents = [
    {
      id: 1,
      year: '2021',
      month: 'August',
      title: 'Started B.Tech Journey',
      subtitle: 'APJ Abdul Kalam Technological University',
      description: 'Began my Computer Science journey with a passion for technology and innovation. Enrolled in one of Kerala\'s premier technological universities.',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      category: 'Education',
      location: 'Kerala, India',
      highlights: [
        'Started programming journey with C and Python',
        'Discovered passion for AI and IoT technologies',
        'Joined coding clubs and tech communities',
        'Built first "Hello World" program'
      ],
      achievements: [
        'Maintained 8.5+ CGPA from first semester',
        'Active participation in college tech events',
        'Started learning data structures and algorithms'
      ],
      status: 'milestone',
      impact: 'Foundation for my entire tech career'
    },
    {
      id: 2,
      year: '2022',
      month: 'March',
      title: 'First Programming Competition',
      subtitle: 'College-Level Coding Contest',
      description: 'Participated in my first programming competition, marking the beginning of my competitive coding journey.',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      category: 'Competition',
      location: 'University Campus',
      highlights: [
        'Solved 3 out of 5 problems in time limit',
        'Learned importance of algorithmic thinking',
        'Met like-minded coding enthusiasts',
        'Discovered love for problem-solving'
      ],
      achievements: [
        'Finished in top 20% of participants',
        'Gained confidence in competitive programming',
        'Started daily coding practice routine'
      ],
      status: 'achievement',
      impact: 'Sparked interest in algorithmic problem-solving'
    },
    {
      id: 3,
      year: '2022',
      month: 'July',
      title: 'First IoT Project Conception',
      subtitle: 'Smart Shoe for Visually Impaired - Initial Idea',
      description: 'Conceived the idea for a smart navigation system for visually impaired individuals after meeting a visually impaired student on campus.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      category: 'Innovation',
      location: 'University Campus',
      highlights: [
        'Identified real-world problem through personal interaction',
        'Researched existing assistive technologies',
        'Started learning Arduino and sensor technologies',
        'Formed project team with classmates'
      ],
      achievements: [
        'Developed comprehensive project proposal',
        'Secured faculty mentor for guidance',
        'Began prototyping with basic sensors'
      ],
      status: 'project',
      impact: 'First step toward creating meaningful assistive technology'
    },
    {
      id: 4,
      year: '2022',
      month: 'December',
      title: 'Smart Shoe Prototype Development',
      subtitle: 'IoT-Based Navigation Aid',
      description: 'Successfully developed and tested the first working prototype of the smart shoe system using ultrasonic sensors and haptic feedback.',
      icon: Target,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
      borderColor: 'border-teal-200 dark:border-teal-800',
      category: 'Project',
      location: 'University Lab',
      highlights: [
        'Integrated multiple ultrasonic sensors',
        'Programmed Arduino for real-time processing',
        'Designed haptic feedback patterns',
        'Conducted initial user testing'
      ],
      achievements: [
        'Achieved 85% obstacle detection accuracy',
        'Positive feedback from test users',
        'Featured in college tech exhibition'
      ],
      status: 'project',
      impact: 'Demonstrated potential of IoT in assistive technology'
    },
    {
      id: 5,
      year: '2023',
      month: 'April',
      title: 'NPTEL Python Certification',
      subtitle: 'Programming, Data Structures, and Algorithms',
      description: 'Successfully completed comprehensive Python programming course covering advanced concepts, data structures, and algorithmic problem-solving.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      category: 'Certification',
      location: 'Online',
      highlights: [
        'Mastered advanced Python concepts',
        'Implemented complex data structures',
        'Solved 100+ algorithmic problems',
        'Achieved top 10% score in final exam'
      ],
      achievements: [
        'Certificate with distinction',
        'Enhanced programming expertise',
        'Improved algorithmic thinking skills'
      ],
      status: 'achievement',
      impact: 'Strengthened foundation for advanced programming projects'
    },
    {
      id: 6,
      year: '2023',
      month: 'August',
      title: 'Desktop Voice Assistant Development',
      subtitle: 'AI-Powered Desktop Automation',
      description: 'Built a sophisticated voice assistant using Python, speech recognition, and natural language processing for desktop automation.',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      category: 'Project',
      location: 'Personal Lab',
      highlights: [
        'Implemented speech-to-text conversion',
        'Integrated with system APIs for automation',
        'Added natural language command processing',
        'Created intuitive voice command interface'
      ],
      achievements: [
        'Supports 500+ voice commands',
        'Sub-2 second response time',
        'Cross-platform compatibility'
      ],
      status: 'project',
      impact: 'Demonstrated AI integration in practical applications'
    },
    {
      id: 7,
      year: '2023',
      month: 'November',
      title: 'Discord Community Bot Launch',
      subtitle: 'Python-Powered Community Management',
      description: 'Developed and deployed a feature-rich Discord bot for community management, moderation, and engagement across multiple servers.',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      category: 'Project',
      location: 'Cloud Deployment',
      highlights: [
        'Built using Discord.py framework',
        'Implemented automated moderation features',
        'Added custom commands and games',
        'Deployed on cloud infrastructure'
      ],
      achievements: [
        'Active in 10+ Discord servers',
        'Managing 1000+ community members',
        '50+ custom commands implemented'
      ],
      status: 'project',
      impact: 'Enhanced community engagement and management'
    },
    {
      id: 8,
      year: '2024',
      month: 'February',
      title: 'College Bug Hunt Victory',
      subtitle: 'First Prize in Programming Competition',
      description: 'Won first place in college-level debugging and problem-solving competition, demonstrating exceptional analytical and programming skills.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      category: 'Achievement',
      location: 'University',
      highlights: [
        'Debugged complex code in multiple languages',
        'Solved algorithmic challenges under pressure',
        'Demonstrated systematic problem-solving approach',
        'Competed against 100+ participants'
      ],
      achievements: [
        'First place finish',
        'Recognition for technical excellence',
        'Cash prize and certificate'
      ],
      status: 'achievement',
      impact: 'Validated problem-solving and debugging expertise'
    },
    {
      id: 9,
      year: '2024',
      month: 'June',
      title: 'EduLex AI Development Begins',
      subtitle: 'AI & AR for Dyslexia Support',
      description: 'Started development of innovative AI-powered application using augmented reality to help children with dyslexia improve their reading skills.',
      icon: Rocket,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      category: 'Project',
      location: 'Innovation Lab',
      highlights: [
        'Researched dyslexia and learning difficulties',
        'Integrated AI/ML for personalized learning',
        'Implemented AR for interactive experiences',
        'Conducted user research with educators'
      ],
      achievements: [
        'Developed working prototype',
        'Positive feedback from educators',
        'Validated concept with target users'
      ],
      status: 'project',
      impact: 'Created technology with potential for social impact'
    },
    {
      id: 10,
      year: '2024',
      month: 'September',
      title: 'Spark Venture 2024 Champion',
      subtitle: '₹1 Lakh Funding for EduLex AI',
      description: 'Won first prize at Spark Venture 2024 Ignite Innovation Challenge, securing significant funding for EduLex AI development and commercialization.',
      icon: Award,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      category: 'Achievement',
      location: 'Innovation Challenge',
      highlights: [
        'Pitched to panel of industry experts',
        'Demonstrated product viability and impact',
        'Secured ₹1 Lakh INR in funding',
        'Gained mentorship from industry leaders'
      ],
      achievements: [
        'First place among 200+ participants',
        'Startup funding secured',
        'Media coverage and recognition',
        'Validation of business model'
      ],
      status: 'achievement',
      impact: 'Transformed project into funded startup venture'
    },
    {
      id: 11,
      year: '2024',
      month: 'November',
      title: 'EduLex AI Beta Testing',
      subtitle: 'Real-World Impact Validation',
      description: 'Launched beta testing program for EduLex AI with schools and learning centers, gathering valuable feedback for product improvement.',
      icon: Star,
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      category: 'Milestone',
      location: 'Multiple Schools',
      highlights: [
        'Partnered with 5 educational institutions',
        'Tested with 100+ children',
        'Collected comprehensive user feedback',
        'Iterated based on real-world usage'
      ],
      achievements: [
        'Positive impact on reading skills',
        'High user engagement rates',
        'Valuable product insights gained'
      ],
      status: 'milestone',
      impact: 'Validated real-world effectiveness of the solution'
    },
    {
      id: 12,
      year: '2025',
      month: 'January',
      title: 'Current Focus & Future Goals',
      subtitle: 'Expanding Horizons',
      description: 'Currently focusing on scaling EduLex AI while exploring new technologies like React Native, advanced ML, and cloud computing for future innovations.',
      icon: Calendar,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      category: 'Current',
      location: 'Multiple Platforms',
      highlights: [
        'Scaling EduLex AI for broader reach',
        'Learning React Native for mobile development',
        'Exploring advanced ML techniques',
        'Building cloud-native applications'
      ],
      achievements: [
        'Continuous product improvement',
        'Expanding technical skill set',
        'Building industry connections'
      ],
      status: 'current',
      impact: 'Setting foundation for future technological innovations'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Education': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Project': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Achievement': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Certification': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Innovation': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Competition': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
      case 'Milestone': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'Current': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
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
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive timeline of growth, learning, and achievements that shaped my path in technology
            </p>
          </motion.div>

          {/* Timeline Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: '4+', label: 'Years Learning', icon: '📚' },
                { value: '12', label: 'Major Milestones', icon: '🎯' },
                { value: '6', label: 'Projects Built', icon: '🚀' },
                { value: '3', label: 'Awards Won', icon: '🏆' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <Card className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-3xl">{stat.icon}</div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 via-teal-500 to-pink-500 md:transform md:-translate-x-1/2 rounded-full"></div>

            {/* Timeline Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 md:transform md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg border-4 border-background`}
                    >
                      <event.icon className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Event Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group"
                    >
                      <Card className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
                        <CardContent className="p-8 space-y-6">
                          {/* Event Header */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div className="flex items-center space-x-3">
                                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                  {event.year}
                                </span>
                                <span className="text-lg text-muted-foreground">
                                  {event.month}
                                </span>
                              </div>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {event.title}
                            </h3>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                              {event.subtitle}
                            </p>
                          </div>

                          {/* Location */}
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground text-sm flex items-center space-x-2">
                              <Zap className="w-4 h-4" />
                              <span>Key Highlights:</span>
                            </h4>
                            <ul className="space-y-2">
                              {event.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground text-sm flex items-center space-x-2">
                              <Trophy className="w-4 h-4" />
                              <span>Achievements:</span>
                            </h4>
                            <ul className="space-y-2">
                              {event.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact & Status */}
                          <div className={`p-4 rounded-lg bg-gradient-to-r ${event.bgColor} border-l-4 border-gradient-to-b ${event.color.replace('from-', 'border-').replace(' to-' + event.color.split(' to-')[1], '')}`}>
                            <div className="flex items-start space-x-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.color} mt-1 ${
                                event.status === 'current' ? 'animate-pulse' : ''
                              }`}></div>
                              <div className="space-y-1">
                                <span className="text-sm font-medium text-foreground">
                                  {event.status === 'current' ? 'Ongoing' : 
                                   event.status === 'achievement' ? 'Achieved' :
                                   event.status === 'project' ? 'Completed' : 'Milestone Reached'}
                                </span>
                                <p className="text-sm text-muted-foreground">
                                  <strong>Impact:</strong> {event.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 space-y-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-3xl font-bold text-foreground">
                  The Journey Continues
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every milestone has been a stepping stone toward bigger goals. 
                  I'm excited about the future opportunities to create impactful 
                  solutions, contribute to the tech community, and push the boundaries 
                  of what's possible with technology.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                  {[
                    { icon: '🎯', label: 'Next Goals', desc: 'Scale EduLex AI globally' },
                    { icon: '🌟', label: 'Vision', desc: 'Tech for social impact' },
                    { icon: '🤝', label: 'Collaboration', desc: 'Open to partnerships' },
                    { icon: '📈', label: 'Growth', desc: 'Continuous learning' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  <Badge variant="outline">Innovation</Badge>
                  <Badge variant="outline">Growth</Badge>
                  <Badge variant="outline">Impact</Badge>
                  <Badge variant="outline">Learning</Badge>
                  <Badge variant="outline">Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}