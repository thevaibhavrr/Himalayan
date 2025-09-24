import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      review: "Himalayan mustard oil has become our family's favorite. The taste is authentic and pure. We use it for all our traditional cooking.",
      product: "Premium Mustard Oil",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Lucknow, UP",
      rating: 5,
      review: "Excellent quality sunflower oil. Perfect for daily cooking and frying. The packaging is also very convenient.",
      product: "Pure Sunflower Oil",
      verified: true
    },
    {
      id: 3,
      name: "Anita Gupta",
      location: "Patna, Bihar",
      rating: 4,
      review: "Good quality oil at reasonable price. Been using for 6 months now. Delivery is always on time through Amazon.",
      product: "Natural Soybean Oil",
      verified: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Gurgaon, Haryana",
      rating: 5,
      review: "The cold-pressed groundnut oil is fantastic. You can really taste the difference. Highly recommended for health-conscious families.",
      product: "Premium Groundnut Oil",
      verified: true
    },
    {
      id: 5,
      name: "Meera Joshi",
      location: "Noida, UP",
      rating: 5,
      review: "Love the traditional taste and quality. FSSAI certified gives confidence about purity. Will continue buying.",
      product: "Premium Mustard Oil",
      verified: true
    },
    {
      id: 6,
      name: "Amit Verma",
      location: "Delhi",
      rating: 4,
      review: "Great for restaurant use. Bulk packaging is convenient and cost-effective. Quality remains consistent.",
      product: "Blended Oil",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Trusted by thousands of families across India. Read genuine reviews from our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-6 h-6 text-[#FFD233] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'text-[#FFD233] fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-[#4B2E2B] opacity-80 mb-4 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                    <div className="space-y-1">
                      <div className="font-medium text-[#4B2E2B]">{testimonial.name}</div>
                      <div className="text-xs text-[#4B2E2B] opacity-60">{testimonial.location}</div>
                      <div className="text-xs text-[#FFD233] font-medium">{testimonial.product}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amazon Reviews CTA */}
        <div className="bg-[#FFD233] rounded-2xl p-8 text-center">
          <h3 className="text-2xl text-[#4B2E2B] mb-4">
            Read More Reviews on Amazon
          </h3>
          <p className="text-[#4B2E2B] opacity-80 mb-6">
            Join thousands of satisfied customers who trust Himalayan Oil for their daily cooking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#4B2E2B] fill-current" />
                ))}
              </div>
              <span className="text-[#4B2E2B] font-medium">4.5/5 Average Rating</span>
            </div>
            <div className="text-[#4B2E2B] opacity-80">
              Based on 1,200+ verified reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;