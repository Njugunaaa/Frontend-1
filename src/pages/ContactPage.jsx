import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import BreadCrumb from '../components/BreadCrump';

export default function ChurchContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [prayerData, setPrayerData] = useState({
    name: '',
    email: '',
    request: ''
  });
  
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePrayerChange = (e) => {
    setPrayerData({
      ...prayerData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handlePrayerSubmit = () => {
    if (!prayerData.request) {
      alert('Please share your prayer request.');
      return;
    }
    alert('Thank you for sharing your prayer request. Our prayer team will lift you up in prayer.');
    setPrayerData({ name: '', email: '', phone: '', request: '' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your service times?",
      answer: "We have Sunday services at 9:00 AM and 11:00 AM, with Wednesday evening Bible study at 7:00 PM."
    },
    {
      question: "How can I become a member?",
      answer: "We'd love to have you join our church family! Please speak with one of our pastors after service or contact our office to learn about our membership process."
    },
    {
      question: "Do you have programs for children?",
      answer: "Yes! We offer Sunday School for all ages, children's church during services, and various youth programs throughout the week."
    },
    {
      question: "What should I wear to church?",
      answer: "Come as you are! We welcome people in all types of attire. Some prefer casual dress while others dress more formally - what matters most is your heart."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
        <BreadCrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' },
        ]}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              We'd love to hear from you! Whether you have questions about our services, 
              want to learn more about our community, or need prayer support, don't hesitate to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">info@gracechurch.org</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pastor's Office</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">(555) 123-4568</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">pastor@gracechurch.org</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <div>Mon - Thu: 9AM - 4PM</div>
                  <div>Friday: 9AM - 2PM</div>
                  <div>Sat - Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prayer Request Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Prayer</h2>
            <p className="text-gray-600 mb-6 text-sm">
              We believe in the power of prayer. Share your prayer request with us and our prayer team will lift you up.
            </p>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name (Optional)"
                  value={prayerData.name}
                  onChange={handlePrayerChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (Optional)"
                  value={prayerData.email}
                  onChange={handlePrayerChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="request"
                  placeholder="Please share your prayer request..."
                  rows="5"
                  value={prayerData.request}
                  onChange={handlePrayerChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-600">I would like updates on how God answers this prayer</label>
              </div>
              <button
                onClick={handlePrayerSubmit}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
              >
                Submit Prayer Request
              </button>
            </div>
          </div>
        </div>

        {/* Get in Touch Form */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-center">
              Have questions about our church, want to learn more about our ministries, or need assistance? We're here to help!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-500">
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Membership Information</option>
                  <option>Ministry Information</option>
                  <option>Event Information</option>
                  <option>Volunteer Opportunities</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  onClick={handleContactSubmit}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
              <p className="text-gray-600 mb-6">
                Join us for worship every Sunday! We're located in the heart of the community 
                and look forward to welcoming you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Grace Community Church</div>
                    <div className="text-gray-600">123 Faith Avenue<br />Springfield, IL 62701</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Service Times</div>
                    <div className="text-gray-600">
                      Sunday: 9:00 AM & 11:00 AM<br />
                      Wednesday: 7:00 PM (Bible Study)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="min-h-64 flex items-center justify-center">
              <div className="text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127644.42040949062!2d36.8247986!3d-1.237239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13eab5cf2b77%3A0xedd0d1c3e4ff8ab0!2sElim%20Pentecostal%20Church!5e0!3m2!1sen!2ske!4v1757836267602!5m2!1sen!2ske" width="600" height="450" style={{'border':'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}