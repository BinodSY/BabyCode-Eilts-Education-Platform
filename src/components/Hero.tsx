import React from 'react';
import { ArrowRight, Star, Award, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">Rated 4.9/5 by 1000+ students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">95% Students Achieve</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Target Band Score
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Master IELTS with AI-powered learning, expert mentorship, and personalized feedback. 
              Join thousands of successful students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student studying IELTS"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Band 8.5</div>
                    <div className="text-sm text-gray-500">Average Score</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">95%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 transform translate-y-4 hover:translate-y-2 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">10K+</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>
              </div>

              {/* Floating Score Cards */}
              <div className="absolute top-8 right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="text-center">
                  <div className="font-bold text-lg">9.0</div>
                  <div className="text-xs opacity-90">IELTS</div>
                </div>
              </div>

              <div className="absolute bottom-1/3 -left-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <div className="text-center">
                  <div className="font-bold text-lg">8.5</div>
                  <div className="text-xs opacity-90">Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;