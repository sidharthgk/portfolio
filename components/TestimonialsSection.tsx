'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      position: "Educational Technology Researcher",
      company: "MIT",
      content: "EduLex AI represents a breakthrough in assistive learning technology. Sidharth's innovative approach to combining AI with AR for dyslexia support is truly remarkable.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Raj Patel",
      position: "Senior Software Engineer",
      company: "Google",
      content: "Working with Sidharth on the smart shoe project was inspiring. His technical skills and dedication to creating meaningful impact through technology is exceptional.",
      rating: 5,
      avatar: "RP"
    },
    {
      name: "Prof. Maria Rodriguez",
      position: "Computer Science Department Head",
      company: "Stanford University",
      content: "Sidharth demonstrates remarkable problem-solving abilities and innovative thinking. His projects consistently show both technical excellence and social consciousness.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Alex Thompson",
      position: "Startup Mentor",
      company: "TechStars",
      content: "The pitch presentation for EduLex AI was outstanding. Sidharth's vision and execution capabilities make him a natural entrepreneur with strong technical foundations.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Dr. James Wilson",
      position: "IoT Systems Architect",
      company: "Microsoft",
      content: "Sidharth's IoT expertise, especially in assistive technology, is impressive for someone so young. His smart shoe prototype showed real engineering prowess and empathy.",
      rating: 5,
      avatar: "JW"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full">
              <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-200 font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Feedback from mentors, peers, and collaborators who&apos;ve witnessed my journey
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className={`
                        h-80 border-2 transition-all duration-500 hover:shadow-xl
                        ${current === index + 1 
                          ? 'border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 scale-105 shadow-lg transform' 
                          : 'border-border hover:border-accent'
                        }
                      `}>
                        <CardContent className="p-6 h-full flex flex-col justify-between">
                          {/* Quote Content */}
                          <div className="space-y-4 flex-1">
                            <div className="flex items-center justify-between">
                              <Quote className={`w-8 h-8 transition-colors duration-300 ${
                                current === index + 1 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-muted-foreground'
                              }`} />
                              <div className="flex items-center space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 fill-yellow-400 transition-colors duration-300 ${
                                      current === index + 1 
                                        ? 'text-yellow-400' 
                                        : 'text-yellow-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <blockquote className={`text-sm leading-relaxed transition-colors duration-300 ${
                              current === index + 1 
                                ? 'text-foreground' 
                                : 'text-muted-foreground'
                            }`}>
                              &ldquo;{testimonial.content}&rdquo;
                            </blockquote>
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                              current === index + 1 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110' 
                                : 'bg-gradient-to-r from-gray-600 to-gray-700'
                            }`}>
                              {testimonial.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-semibold transition-colors duration-300 ${
                                current === index + 1 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-foreground'
                              }`}>
                                {testimonial.name}
                              </h4>
                              <p className="text-xs text-muted-foreground truncate">
                                {testimonial.position}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-800/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join these amazing people in creating impactful technology solutions. 
                Let&apos;s build something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}