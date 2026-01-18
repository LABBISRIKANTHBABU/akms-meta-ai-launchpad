import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Briefcase, Globe, Smartphone, Users, TrendingUp, 
  Headphones, Cog, Code, ArrowRight 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic technology advisory to align your IT infrastructure with business objectives. We help you make informed decisions about technology investments and digital transformation initiatives.",
    features: ["Technology Assessment", "Digital Strategy", "IT Roadmap Planning", "Vendor Selection"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom website and web application development using modern frameworks and best practices. From corporate sites to complex web platforms, we build solutions that perform.",
    features: ["Custom Websites", "Web Applications", "E-commerce Solutions", "CMS Development"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that engage users and drive business growth.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
  },
  {
    icon: Code,
    title: "Freelance Works",
    description: "Flexible technical expertise for your short-term projects and specialized needs. Our freelance specialists integrate seamlessly with your team.",
    features: ["Project-Based Work", "Staff Augmentation", "Technical Consulting", "Code Reviews"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence, generate quality leads, and maximize ROI across digital channels.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
  },
  {
    icon: Users,
    title: "BPO Projects",
    description: "Streamline your operations with our business process outsourcing services. We handle non-core functions so you can focus on what matters most.",
    features: ["Data Entry & Processing", "Customer Support", "Back-Office Operations", "Quality Assurance"],
  },
  {
    icon: Cog,
    title: "Automations",
    description: "Intelligent automation solutions to eliminate repetitive tasks, reduce errors, and boost productivity. From simple workflows to complex AI-driven processes.",
    features: ["Workflow Automation", "RPA Solutions", "API Integrations", "Custom Scripts"],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Reliable 24/7 technical support to keep your systems running smoothly. Our team provides prompt assistance for all your IT support needs.",
    features: ["Help Desk Services", "Remote Support", "System Maintenance", "Troubleshooting"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | AKMS meta.ai - IT Consulting & Digital Solutions</title>
        <meta 
          name="description" 
          content="Explore our 8 service verticals: IT Consulting, Web Development, App Development, Digital Marketing, BPO, Automation, Technical Support, and Freelance Works." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-card border-b border-border">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Comprehensive IT &{" "}
                <span className="gradient-text">Digital Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to execution, we offer end-to-end services across 8 verticals 
                to help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 card-hover group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs font-medium px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">
                          Enquire Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card">
          <div className="container-width text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Let our experts analyze your requirements and recommend the best solutions for your business.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
