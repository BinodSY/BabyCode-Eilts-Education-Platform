import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home', 'Courses', 'Mock Tests', 'Practice Tests', 
    'Study Materials', 'About Us', 'Success Stories', 'Blog'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">BabyCode</span>
                <div className="text-blue-400 font-medium">IELTS Institute</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering students worldwide to achieve their IELTS goals through innovative 
              AI-powered learning solutions and expert guidance. Your success is our mission.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-gray-800 p-3 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-300">hello@babycode-ielts.com</div>
                  <div className="text-sm text-gray-400">Email us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                  <div className="text-sm text-gray-400">Mon-Fri 9AM-6PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-300">123 Education St.</div>
                  <div className="text-sm text-gray-400">New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BabyCode IELTS Institute. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;