import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Baby, 
  Syringe, 
  HeartPulse, 
  ArrowRight,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medical Consultations",
      description: "Our healthcare professionals provide primary care consultations for a wide range of health concerns. We are here to help with common illnesses, ongoing health conditions, and general wellness advice.",
      includes: [
        "Assessment and treatment of common illnesses (flu, infections, injuries)",
        "Management of chronic conditions (hypertension, diabetes, asthma)",
        "Health advice and referrals to specialists when needed",
        "Prescription of essential medications",
        "Follow-up care and monitoring"
      ]
    },
    {
      icon: Baby,
      title: "Maternal & Child Health Services",
      description: "We support mothers and children through pregnancy, birth, and early childhood development. Our team provides caring, professional services to ensure the health of both mother and baby.",
      includes: [
        "Antenatal (pregnancy) care and monitoring",
        "Postnatal check-ups for mothers and newborns",
        "Growth monitoring and developmental assessments",
        "Nutritional advice and supplementation",
        "Road to Health booklet updates and immunisations"
      ]
    },
    {
      icon: Syringe,
      title: "Immunisations",
      description: "Vaccinations protect individuals and our community from preventable diseases. We provide immunisations as part of the national immunisation schedule for children and adults.",
      includes: [
        "Routine childhood vaccinations (birth to 12 years)",
        "Catch-up vaccinations for missed doses",
        "Adult immunisations as required",
        "Vaccination card updates and records",
        "Information about vaccine safety and importance"
      ]
    },
    {
      icon: HeartPulse,
      title: "Basic Health Screenings",
      description: "Early detection of health conditions can help you stay healthier. We offer basic screening services to identify common health issues and provide appropriate guidance.",
      includes: [
        "Blood pressure measurement",
        "Blood glucose testing",
        "HIV counselling and testing (HCT)",
        "TB screening and referral",
        "Basic wellness assessments"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="hero-gradient text-primary-foreground py-12 md:py-16">
          <div className="container-narrow">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Our Healthcare Services
            </h1>
            <p className="text-primary-foreground/90 max-w-xl">
              Rosslyn Clinic provides essential primary healthcare services to our community. 
              All services are provided free of charge as part of public healthcare.
            </p>
          </div>
        </section>

        {/* Service Availability Notice */}
        <section className="bg-secondary border-b border-border">
          <div className="container-narrow py-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-foreground">
                <strong>Service availability:</strong> All services depend on clinic capacity, 
                staffing, and stock availability on any given day. We strive to assist as many 
                patients as possible within our operating hours.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="space-y-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.title}
                    className="bg-card border border-border rounded-xl p-6 md:p-8 card-elevated"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {service.description}
                        </p>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">
                            What this service includes:
                          </h3>
                          <ul className="space-y-2">
                            {service.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow text-center">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to Visit?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Before visiting, please review our patient information to know what to bring 
              and what to expect during your visit.
            </p>
            <Button asChild size="lg">
              <Link to="/patient-info">
                View Patient Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
