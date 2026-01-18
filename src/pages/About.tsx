import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become a global leader in IT consulting and digital transformation, recognized for innovation, reliability, and exceptional client partnerships.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, innovation, and client-centricity guide everything we do. We believe in transparent communication and delivering measurable results.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AKMS meta.ai - Your Trusted IT Partner</title>
        <meta 
          name="description" 
          content="Learn about AKMS meta.ai, a multi-service IT and consulting startup delivering innovative solutions for B2B and B2C clients worldwide." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-card border-b border-border">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About AKMS meta.ai
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Pioneering the Future of{" "}
                <span className="gradient-text">Digital Business</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AKMS meta.ai is a dynamic IT and consulting startup dedicated to transforming 
                how businesses leverage technology. We combine deep technical expertise with 
                strategic thinking to deliver solutions that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Built on Expertise, Driven by Innovation
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to bridge the gap between complex technology and 
                    business success, AKMS meta.ai has rapidly grown into a trusted partner 
                    for organizations seeking digital transformation.
                  </p>
                  <p>
                    Our team brings together professionals from diverse backgrounds – software 
                    engineering, digital marketing, business consulting, and automation – to 
                    provide comprehensive solutions under one roof.
                  </p>
                  <p>
                    Whether you're a startup looking to build your first product or an enterprise 
                    seeking to modernize your operations, we have the expertise and passion to 
                    help you succeed.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-8 lg:p-12 border border-border">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "2020", label: "Founded" },
                    { value: "100+", label: "Projects Completed" },
                    { value: "50+", label: "Happy Clients" },
                    { value: "8", label: "Service Verticals" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Our foundation is built on clear purpose and unwavering principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="bg-secondary rounded-lg p-8 border border-border hover:border-primary/30 text-center card-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-width text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ready to start your digital transformation journey? 
              Our team is here to help you every step of the way.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
