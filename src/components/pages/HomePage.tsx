import Hero from '../Hero';
import ProductShowcase from '../home/produdtdata';
import { useRouter } from '../Router';
import OurProductPage from '../home/ourproduct';
import PhilosophyPage from '../home/homeproduct';
import LatestUpdates from '../home/latestupdate';
import BrandStory from '../home/BrandStory';

const HomePage = () => {
  const { navigate } = useRouter();

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Heart Healthy", "Rich in Omega-3"],
      description: "Traditional cold-pressed mustard oil with authentic taste"
    },
    {
      id: 2,
      name: "Pure Sunflower Oil",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Vitamin E", "Light Taste", "High Smoke Point"],
      description: "Premium sunflower oil perfect for all cooking methods"
    },
    {
      id: 3,
      name: "Natural Groundnut Oil",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Aromatic", "Traditional Taste"],
      description: "Pure groundnut oil with rich flavor and nutrition"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      <ProductShowcase />
      <OurProductPage/>
      <PhilosophyPage/>
      <LatestUpdates/>
      <BrandStory/>









    </div>
  );
};

export default HomePage;