import { Link } from "react-router-dom";
import { 
  FileText, 
  Clock, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Baby
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

const PatientInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="hero-gradient text-primary-foreground py-12 md:py-16">
          <div className="container-narrow">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Patient Information
            </h1>
            <p className="text-primary-foreground/90 max-w-xl">
              Everything you need to know before visiting Rosslyn Clinic. 
              We want to make your experience as smooth as possible.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* What to Bring */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    What to Bring
                  </h2>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Please bring the following documents when visiting the clinic. 
                  This helps us provide you with the best care and maintain accurate records.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">South African ID Document</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Original ID book, smart ID card, or valid passport
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Clinic Card</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        If you have one from a previous visit. New patients will receive one.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex items-start gap-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">Road to Health Booklet</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          For children under 5 years – essential for immunisations and growth monitoring
                        </p>
                      </div>
                      <Baby className="h-4 w-4 text-accent flex-shrink-0" />
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Current Medications</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Bring any medications you are currently taking, or a list of them
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Arrival & Waiting */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Arrival & Waiting Times
                  </h2>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  We experience high patient volumes, especially in the mornings. 
                  Here's what to expect when you visit.
                </p>

                <div className="space-y-5">
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Recommended Arrival Time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We encourage patients to arrive early, ideally before 8:00 AM, 
                      for the best chance of being seen during operating hours.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Operating Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monday to Friday: 7:00 AM – 4:00 PM<br />
                      <span className="text-xs">Closed on weekends and public holidays</span>
                    </p>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        Please note that waiting times may vary depending on the number of 
                        patients and the complexity of cases being seen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How Patients Are Seen */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    How Patients Are Seen
                  </h2>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  At Rosslyn Clinic, we follow a triage system to ensure that patients 
                  with the most urgent needs receive timely care.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Registration</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Upon arrival, you will register at the front desk with your documents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Vital Signs</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        A nurse will take your vital signs and assess your condition.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Medical Priority</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Patients are seen based on medical priority, not strictly arrival order.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Consultation</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        You will be called for your consultation with a healthcare professional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Commitment */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Our Commitment to You
                  </h2>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  As a public healthcare facility, we are committed to treating every 
                  patient with dignity and respect.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      All patients are treated equally, regardless of background
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Your privacy and confidentiality are always protected
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      We strive for transparency in all our communications
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Your feedback helps us improve our services
                    </p>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground mt-5 pt-4 border-t border-border">
                  We appreciate your patience and understanding as we work to serve 
                  all members of our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow text-center">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              Need to Find Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              View our location and contact information to plan your visit.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                View Location & Contact
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

export default PatientInfo;
