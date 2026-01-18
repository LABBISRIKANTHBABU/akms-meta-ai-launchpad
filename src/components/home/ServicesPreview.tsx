import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize your business operations and drive digital transformation.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence and generate quality leads.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive IT & Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From consulting to execution, we provide end-to-end services to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All 8 Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
