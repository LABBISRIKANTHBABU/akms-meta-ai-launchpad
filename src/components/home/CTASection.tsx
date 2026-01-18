import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-width relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Let's discuss how AKMS meta.ai can help you achieve your technology goals. 
          Get a free consultation with our experts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl" 
            asChild
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
