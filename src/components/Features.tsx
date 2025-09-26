import React from 'react';
import { Mic, FileText, Brain, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'AI Speaking Practice',
      description: 'Practice speaking with our advanced AI that provides real-time pronunciation feedback and fluency scoring.',
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Comprehensive Mock Tests',
      description: 'Take unlimited mock tests that simulate the real IELTS exam environment with detailed performance analytics.',
      color: 'bg-green-500'
    },
    {
      icon: Brain,
      title: 'AI Band Score Prediction',
      description: 'Get accurate band score predictions using machine learning algorithms trained on thousands of test results.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Access personalized guidance from certified IELTS instructors with 1-on-1 sessions and group workshops.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">BabyCode</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge technology combined with proven teaching methodologies 
            to accelerate your IELTS success journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-50"
              >
                <div className={`${feature.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join over 10,000 students who have achieved their target band scores with BabyCode.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;