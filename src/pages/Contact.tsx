// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";
// import QuoteForm from "@/components/QuoteForm";
// import heroChamber from "@/assets/hero-chamber.jpg";

// const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

// const Contact = () => (
//   <div>
//     {/* Hero */}
//     <section className="relative h-[50vh] min-h-[350px] flex items-center">
//       <div className="absolute inset-0">
//         <img src={heroChamber} alt="Contact" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 gradient-overlay" />
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h1 {...fadeIn} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
//           Contact Us
//         </motion.h1>
//         <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg mt-4 max-w-xl">
//           Get in touch for expert testing solutions.
//         </motion.p>
//       </div>
//     </section>

//     {/* Contact Content */}
//     <section className="py-16 md:py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Info */}
//           <motion.div {...fadeIn} className="space-y-8">
//             <div>
//               <h2 className="font-display font-bold text-3xl text-primary mb-6">Get In Touch</h2>
//               <div className="w-16 h-1 bg-accent rounded-full mb-8" />
//             </div>

//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                   <Phone className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-primary mb-1">Phone</h4>
//                   <a href="tel:+919133316688" className="text-muted-foreground hover:text-accent transition-colors">
//                     +91 9133316688
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                   <Mail className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-primary mb-1">Email</h4>
//                   <a href="mailto:nepphnutechnologiespvtltd@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">
//                     nepphnutechnologiespvtltd@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                   <MapPin className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-primary mb-1">Address</h4>
//                   <p className="text-muted-foreground text-sm">
//                     Flat No. 201, Sai Bhargavi Residency,<br />
//                     Srinivas Colony East, Ameerpet,<br />
//                     Hyderabad – 500038
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                   <Clock className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
//                   <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
//                 </div>
//               </div>

//               <a
//                 href="https://www.linkedin.com/company/nepphnutechnologiespvtltd/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-blue-bright transition-colors"
//               >
//                 <Linkedin className="w-5 h-5" />
//                 Connect on LinkedIn
//               </a>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <div className="flex justify-center">
//             <QuoteForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default Contact;





import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import heroChamber from "@/assets/hero-chamber.jpg";

const fadeIn = { 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.5 } 
};

const Contact = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroChamber} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 {...fadeIn} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
          Contact Us
        </motion.h1>
        <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg mt-4 max-w-xl">
          Get in touch for expert testing solutions.
        </motion.p>
      </div>
    </section>

    {/* Contact Content */}
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6">Get In Touch</h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <a href="tel:+919133316688" className="text-muted-foreground hover:text-accent transition-colors">
                    +91 9133316688
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a href="mailto:nepphnutechnologiespvtltd@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    nepphnutechnologiespvtltd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Plot No.71, Near RIC front gate circle,<br />
                    Sulthanpur, Mallapur Village,<br />
                    Balapur mandal, Hyderabad 500005,<br />
                    Telangana.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/company/nepphnutechnologiespvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-blue-bright transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <div className="flex justify-center">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;