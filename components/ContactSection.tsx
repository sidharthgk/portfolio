'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Coffee, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sidharthgk2003@gmail.com',
      href: 'mailto:sidharthgk2003@gmail.com',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      description: 'Send me an email for detailed discussions'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/sidharthgk',
      href: 'https://github.com/sidharthgk',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20',
      description: 'Check out my code and projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sidharthgk',
      href: 'https://linkedin.com/in/sidharthgk',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      description: 'Connect with me professionally'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kerala, India',
      href: '#',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      description: 'Open to remote opportunities'
    }
  ];

  const collaborationAreas = [
    'AI & Machine Learning Projects',
    'IoT Solutions & Hardware',
    'Web Application Development',
    'Open Source Contributions',
    'Research & Innovation',
    'Startup Opportunities'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Collaboration Inquiry');
    const body = encodeURIComponent(
      `Hi Sidharth,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:sidharthgk2003@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Let&apos;s Collaborate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in AI, IoT, or innovative tech solutions? Let&apos;s connect and create something amazing together!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Methods & Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Methods */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block group"
                  >
                    <Card className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className={`w-6 h-6 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {method.label}
                            </h4>
                            <p className="text-sm text-muted-foreground truncate">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </motion.div>

              {/* Collaboration Areas */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Collaboration Areas</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {collaborationAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants}>
                <Card className="border-2 border-border">
                  <CardContent className="p-6 text-center space-y-4">
                    <MessageSquare className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400"></p>
                      <p className="text-sm text-muted-foreground">
                        I typically respond within a day
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border-2 border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Send a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as soon as possible!
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          required
                          className="border-2 border-border focus:border-blue-400 dark:focus:border-blue-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-2 border-border focus:border-blue-400 dark:focus:border-blue-600"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        className="border-2 border-border focus:border-blue-400 dark:focus:border-blue-600"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, idea, or how we can collaborate..."
                        rows={6}
                        required
                        className="border-2 border-border focus:border-blue-400 dark:focus:border-blue-600 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  {/* Quick Contact Buttons */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Or reach out directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="flex-1 border-2 hover:bg-accent"
                      >
                        <a href="mailto:sidharthgk2003@gmail.com" className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Email Me</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="flex-1 border-2 hover:bg-accent"
                      >
                        <a
                          href="https://linkedin.com/in/sidharthgk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 space-y-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you have a project in mind, want to collaborate on research, 
                  or just want to chat about technology, I&apos;m always excited to connect 
                  with fellow innovators and creators.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">AI & Machine Learning</Badge>
                  <Badge variant="outline">IoT Solutions</Badge>
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Startups</Badge>
                  <Badge variant="outline">Research</Badge>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl"
                  >
                    <a href="mailto:sidharthgk2003@gmail.com?subject=Let&apos;s Collaborate!">
                      <Calendar className="w-5 h-5 mr-2" />
                      Let&apos;s Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}