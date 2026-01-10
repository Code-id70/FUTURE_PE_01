import { 
  MapPin, 
  Clock, 
  Phone,
  AlertTriangle,
  Info,
  Navigation,
  Building2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const clinicAddress = "Rosslyn Clinic, Piet Rautenbach St, Rosslyn, Akasia, 0200";
  const clinicCoords = "-25.6167,28.0833"; // Approximate coordinates for Rosslyn, Pretoria
  
  const handleShowDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicAddress)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="hero-gradient text-primary-foreground py-12 md:py-16">
          <div className="container-narrow">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Contact & Location
            </h1>
            <p className="text-primary-foreground/90 max-w-xl">
              Find us in Rosslyn, Akasia. We're here to serve the local community 
              with accessible primary healthcare.
            </p>
          </div>
        </section>

        {/* Clinic Info Card */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Rosslyn Clinic
                  </h2>
                  <p className="text-sm text-muted-foreground">Clinics - Public</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Telephone</p>
                    <a 
                      href="tel:+27123589544" 
                      className="text-primary hover:underline font-medium"
                    >
                      +27 12 358 9544
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      1 Piet Rautenbach Steet,<br />
                      Rosslyn, Akasia, 0200
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pb-6 border-b border-border">
                <Navigation className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground">
                    Akasia, Gauteng, South Africa
                  </p>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-6">
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <iframe
                    title="Rosslyn Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.1!2d28.0833!3d-25.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzAwLjEiUyAyOMKwMDUnMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <Button 
                  onClick={handleShowDirections}
                  className="w-full md:w-auto"
                  size="lg"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Show Directions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Location Info */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Operating Hours
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Monday</span>
                      <span className="text-sm text-muted-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Tuesday</span>
                      <span className="text-sm text-muted-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Wednesday</span>
                      <span className="text-sm text-muted-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Thursday</span>
                      <span className="text-sm text-muted-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Friday</span>
                      <span className="text-sm text-muted-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-foreground">Saturday</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-foreground">Sunday & Public Holidays</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>

                    <p className="text-xs text-muted-foreground pt-2">
                      * We recommend arriving early as the clinic can get busy. 
                      Last registration may be earlier depending on patient volume.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Info className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Community We Serve
                    </h2>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-secondary-foreground">
                      We serve residents of Rosslyn, Akasia, and the surrounding 
                      areas in the City of Tshwane.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency & Additional Info */}
              <div className="space-y-6">
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Medical Emergencies
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-5">
                    For medical emergencies, please call the emergency services immediately. 
                    Do not wait to visit the clinic if you have a life-threatening condition.
                  </p>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Emergency Number</p>
                        <p className="text-2xl font-display font-bold text-foreground">10177</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    This number connects you to emergency medical services in South Africa.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    Important Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 pb-4 border-b border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">No appointment needed:</strong> Walk-in 
                        patients are welcome during operating hours.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 pb-4 border-b border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Services are free:</strong> As a public 
                        clinic, our services are provided at no cost.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 pb-4 border-b border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Bring your documents:</strong> ID, clinic 
                        card, and Road to Health booklet for children.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Arrive early:</strong> The clinic 
                        experiences high volumes. Early arrival is recommended.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-xl p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Thank you for choosing Rosslyn Clinic.<br />
                    We are proud to serve our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
