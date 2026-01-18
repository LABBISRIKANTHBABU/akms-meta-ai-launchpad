import { Shield, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile methodology ensures fast turnaround without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Industry-standard security practices to protect your data and systems.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with diverse expertise across technology domains.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients across industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner for Digital Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At AKMS meta.ai, we combine technical expertise with business acumen to deliver 
              solutions that not only meet your current needs but also scale for future growth. 
              Our commitment to innovation and client success sets us apart.
            </p>
            <div className="space-y-4">
              {["B2B & B2C Solutions", "Flexible Engagement Models", "24/7 Technical Support", "Transparent Communication"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/30 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
