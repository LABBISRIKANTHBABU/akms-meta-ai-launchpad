import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "IT Consulting",
  "Web Development",
  "App Development",
  "Freelance Works",
  "Digital Marketing",
  "BPO Projects",
  "Automations",
  "Technical Support",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/akmsmeta@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name}`,
        })
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We've sent a notification to our team at akmsmeta@gmail.com.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Error Sending Message",
        description: "Please copy your message and email us directly at akmsmeta@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AKMS meta.ai - Get in Touch</title>
        <meta
          name="description"
          content="Contact AKMS meta.ai for IT consulting, web development, app development, and digital solutions. Get a free consultation today."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-card border-b border-border">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Let's Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? Looking for a technology partner? We'd love to hear from you.
                Fill out the form below or reach out directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">
                    We're here to help and answer any question you might have.
                    We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:akmsmeta@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        akmsmeta@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+918886711092"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 88867 11092
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Business District, Tech City
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/company/akmsmetaai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    <h3 className="font-semibold text-foreground">Quick Chat</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer WhatsApp? Click below to start a conversation instantly.
                  </p>
                  <Button variant="secondary" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-0" asChild>
                    <a
                      href="https://wa.me/8886711092?text=Hello!%20I'm%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-secondary border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-secondary border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Service Interested In *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, service: value }))
                          }
                          required
                        >
                          <SelectTrigger className="bg-secondary border-border">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements..."
                        className="bg-secondary border-border focus:border-primary"
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
