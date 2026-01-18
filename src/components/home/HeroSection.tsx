import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoBg from "@/assets/Remove_Text_From_Animation.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="container-width relative z-10 py-20 md:py-32">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Next-Gen IT Solutions & Digital Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Empowering Your Business with{" "}
            <span className="gradient-text">Intelligent Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            From IT consulting to automation, web development to digital marketing –
            we deliver end-to-end technology solutions that drive growth and innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Get a Free Consultation
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-8">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Service Verticals" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
