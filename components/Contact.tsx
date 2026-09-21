import { Mail, Phone, MapPin, Globe } from "lucide-react";
export default function Contact() {
  return (
    <><section
      id="kontakt"
      className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="section-title text-center">
          Kontakt
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="contact-card">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6">
              <Mail size={28} className="text-white" />
            </div>
            <h3>E-mail</h3>
            <p>info@premo.net.pl</p>
          </div>

          <div className="contact-card">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6">
              <Phone size={28} className="text-white" />
            </div>
            <h3>Telefony</h3>
            <p>+48 502 683 752</p>
            <p>+48 25 798 53 35</p>
          </div>

          <div className="contact-card">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6">
              <MapPin size={28} className="text-white" />
            </div>
            <h3>Adres</h3>
            <p>ul. Boczna Browarnej 3</p>
            <p>21-400 Łuków</p>
          </div>

          <div className="contact-card">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6">
              <Globe size={28} className="text-white" />
            </div>
            <h3>Dane</h3>
            <p>NIP: 8251834422</p>
            <p>REGON: 060342047</p>
          </div>

        </div>

      </div>
    </section><section className="bg-white py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.3153016008946!2d22.37537587675228!3d51.928202171912126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472201dfde05299b%3A0xfc4ded7cd01a356e!2sPremo%20Rados%C5%82aw%20Wi%C4%85cek!5e0!3m2!1spl!2spl!4v1783593377731!5m2!1spl!2spl"
          width="100%"
          height="400"
          style={{
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section></>
  );
}