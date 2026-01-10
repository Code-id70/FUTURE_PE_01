import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-narrow section-padding">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Clinic info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">RC</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-background">Rosslyn Clinic</h3>
                <p className="text-sm text-background/70">Public Healthcare Facility</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Serving the Rosslyn and Akasia community with dignity, transparency, and quality primary healthcare.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-background/70 hover:text-background transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/patient-info" className="text-sm text-background/70 hover:text-background transition-colors">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-background/70">
                  Rosslyn, Akasia<br />
                  City of Tshwane, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-background/70">Mon–Fri: 7:00 AM – 4:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-background/70">Emergency: 10177</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Rosslyn Clinic. A public healthcare facility serving the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
