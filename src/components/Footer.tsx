import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import umgLogo from 'figma:asset/2b1a586813fdad4d8704d743f7279830976b6a3f.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <img src={umgLogo} alt="UMG Mortgage" className="w-40 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner in home financing. Making homeownership dreams come true since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Loan Programs</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home Purchase</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Refinancing</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">FHA Loans</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">VA Loans</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Jumbo Loans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-400">Phone</p>
                <a href="tel:1-800-555-0123" className="hover:text-brand-400 transition-colors">1-800-555-0123</a>
              </li>
              <li>
                <p className="text-gray-400">Email</p>
                <a href="mailto:info@umgmortgage.com" className="hover:text-brand-400 transition-colors">info@umgmortgage.com</a>
              </li>
              <li>
                <p className="text-gray-400">Hours</p>
                <p>Mon-Fri: 8am - 6pm EST</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 UMG Mortgage. All rights reserved. Powered by Lending Heights.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-400 transition-colors">NMLS #123456</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Equal Housing Opportunity. UMG Mortgage is committed to providing equal housing opportunities to all persons.
          </p>
        </div>
      </div>
    </footer>
  );
}
