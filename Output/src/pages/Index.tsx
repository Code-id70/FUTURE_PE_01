import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Baby, 
  Syringe, 
  HeartPulse, 
  Clock, 
  Users, 
  MapPin,
  ArrowRight,
  FileText,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultations",
      description: "Primary healthcare consultations for common illnesses, chronic conditions, and general health concerns.",
    },
    {
      icon: Baby,
      title: "Maternal & Child Health",
      description: "Antenatal care, postnatal support, and comprehensive child health services including growth monitoring.",
    },
    {
      icon: Syringe,
      title: "Immunisations",
      description: "Routine vaccinations for children and adults following the national immunisation schedule.",
    },
    {
      icon: HeartPulse,
      title: "Health Screenings",
      description: "Basic health screenings including blood pressure, glucose, and HIV testing services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground section-padding">
          <div className="container-narrow">
            <div className="max-w-2xl animate-slide-up">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Quality Primary Healthcare for Our Community
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-3">
                Serving the residents of Rosslyn and Akasia, City of Tshwane
              </p>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                At Rosslyn Clinic, we are committed to providing accessible, dignified healthcare 
                to every patient. As a public health facility, we serve our community with 
                transparency and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="font-medium">
                  <Link to="/services">
                    View Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium">
                  <Link to="/patient-info">
                    Patient Information
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-secondary border-b border-border">
          <div className="container-narrow py-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-secondary-foreground">
                  <strong>Please note:</strong> Our clinic experiences high patient volumes. 
                  We encourage early arrival for the best chance of being seen during operating hours. 
                  Patients are assisted based on medical priority, and we appreciate your patience and understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Healthcare Services
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We provide essential primary healthcare services to support the health and 
                wellbeing of our community.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Learn More About Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Operating Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday to Friday<br />
                  7:00 AM – 4:00 PM
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Rosslyn, Akasia<br />
                  City of Tshwane
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  Serving all residents<br />
                  with dignity and care
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Bring CTA */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 text-center card-elevated">
              <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                Planning Your Visit?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Learn what documents to bring, when to arrive, and what to expect 
                during your visit to help make your experience as smooth as possible.
              </p>
              <Button asChild size="lg">
                <Link to="/patient-info">
                  View Patient Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
