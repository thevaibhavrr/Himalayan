import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Calendar, User, ArrowRight, Search, Clock, 
  Heart, Share2, BookOpen, TrendingUp, Star
} from 'lucide-react';

const BlogPage = () => {
  const { navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Health Benefits of Traditional Kolhu Extraction",
      excerpt: "Discover why traditional cold-press extraction methods preserve more nutrients and provide better health benefits compared to refined oils.",
      content: "Traditional Kolhu extraction has been used for centuries to extract oil from seeds and nuts. This method preserves the natural nutrients, antioxidants, and essential fatty acids that are often lost in modern refining processes...",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      category: "Health",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      tags: ["Health", "Traditional Methods", "Nutrition"]
    },
    {
      id: 2,
      title: "Cooking with Mustard Oil: Traditional Recipes",
      excerpt: "Learn authentic recipes that showcase the unique flavor and health benefits of mustard oil in traditional Indian cooking.",
      content: "Mustard oil has been a staple in Indian kitchens for generations. Its distinctive flavor and health benefits make it perfect for various cooking methods...",
      author: "Chef Priya Sharma",
      date: "2024-01-10",
      category: "Recipes",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Recipes", "Cooking", "Traditional"]
    },
    {
      id: 3,
      title: "Understanding Oil Smoke Points for Better Cooking",
      excerpt: "Master the art of cooking by understanding different oil smoke points and choosing the right oil for each cooking method.",
      content: "The smoke point of an oil is the temperature at which it starts to break down and produce smoke. Understanding this is crucial for healthy cooking...",
      author: "Nutritionist Anjali Patel",
      date: "2024-01-08",
      category: "Cooking Tips",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Cooking Tips", "Health", "Science"]
    },
    {
      id: 4,
      title: "The Science Behind Cold-Pressed Oils",
      excerpt: "Explore the scientific benefits of cold-pressed oils and why they are considered superior to refined oils for health and nutrition.",
      content: "Cold-pressed oils are extracted using mechanical pressure without heat, preserving the natural nutrients and antioxidants...",
      author: "Dr. Meera Singh",
      date: "2024-01-05",
      category: "Health",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Science", "Health", "Nutrition"]
    },
    {
      id: 5,
      title: "Sustainable Oil Production: Our Commitment",
      excerpt: "Learn about our commitment to sustainable and environmentally friendly oil production practices.",
      content: "At Bharat Agro Oil, we are committed to sustainable practices that protect the environment while delivering quality products...",
      author: "Environmental Team",
      date: "2024-01-03",
      category: "Sustainability",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzU3NDg1Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Sustainability", "Environment", "Company"]
    },
    {
      id: 6,
      title: "Choosing the Right Oil for Your Kitchen",
      excerpt: "A comprehensive guide to help you choose the best cooking oil based on your cooking needs and health requirements.",
      content: "With so many cooking oils available, choosing the right one can be overwhelming. Here's a guide to help you make informed decisions...",
      author: "Nutrition Expert",
      date: "2024-01-01",
      category: "Cooking Tips",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Guide", "Cooking", "Health"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'Health', name: 'Health' },
    { id: 'Recipes', name: 'Recipes' },
    { id: 'Cooking Tips', name: 'Cooking Tips' },
    { id: 'Sustainability', name: 'Sustainability' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Latest News & 
            <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Health Insights
            </span>
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Stay updated with the latest information about edible oils, health benefits, 
            cooking tips, and industry insights from our experts.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              Expert Articles & Tips
            </Badge>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B2E2B] opacity-60 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-[#FFD233] focus:border-[#4B2E2B]"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-[#FFD233] text-[#4B2E2B]" 
                    : "border-[#FFD233] text-[#4B2E2B] hover:bg-[#FFD233]"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#FFD233] text-[#4B2E2B] mb-4">Featured Article</Badge>
              <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
                Editor's Pick
              </h2>
            </div>

            <Card className="overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFF8E1] to-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl text-[#4B2E2B] mb-2 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-[#FFD233]" />
                      {featuredPost.title}
                    </h3>
                    <p className="text-[#4B2E2B] opacity-80 mb-4">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex gap-6 text-sm text-[#4B2E2B]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#FFD233]" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FFD233]" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFD233]" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full himalayan-gradient text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Full Article
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Discover insights, tips, and expert advice on edible oils and healthy cooking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 rounded px-2 py-1">
                      <Clock className="w-3 h-3 text-[#FFD233]" />
                      <span className="text-xs text-[#4B2E2B] font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#FFD233]" />
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#4B2E2B] opacity-80 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex gap-4 text-sm text-[#4B2E2B]">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-[#FFD233]" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#FFD233]" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 himalayan-gradient text-white hover:opacity-90">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                    <Button variant="outline" size="icon" className="border-[#FFD233] text-[#4B2E2B] hover:bg-[#FFD233]">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#4B2E2B] opacity-60">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="himalayan-golden-gradient shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl text-[#4B2E2B] mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-[#4B2E2B] opacity-80 mb-6">
                Subscribe to our newsletter for the latest health insights, cooking tips, and product updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 border-[#4B2E2B] focus:border-[#FFD233]"
                />
                <Button className="bg-[#4B2E2B] text-white hover:bg-[#3A221F] px-8 py-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Cook Healthier?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get our premium oils and start creating delicious, nutritious meals for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Shop Our Oils
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/recipes')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              View Recipes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
