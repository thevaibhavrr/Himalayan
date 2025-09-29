import React from 'react';
import { RouterProvider, Route } from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import HealthBenefitsPage from './components/pages/HealthBenefitsPage';
import RecipesPage from './components/pages/RecipesPage';
import InfrastructurePage from './components/pages/InfrastructurePage';
import CertificationsPage from './components/pages/CertificationsPage';
import DistributionPage from './components/pages/DistributionPage';
import DistributorPage from './components/pages/DistributorPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';


export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Route path="/" children={<HomePage />} />
          <Route path="/about" children={<AboutPage />} />
          <Route path="/products" children={<ProductsPage />} />
          <Route path="/health-benefits" children={<HealthBenefitsPage />} />
          <Route path="/recipes" children={<RecipesPage />} />
          <Route path="/infrastructure" children={<InfrastructurePage />} />
          <Route path="/certifications" children={<CertificationsPage />} />
          <Route path="/distribution" children={<DistributionPage />} />
          <Route path="/distributor" children={<DistributorPage />} />
          <Route path="/blog" children={<BlogPage />} />
          <Route path="/contact" children={<ContactPage />} />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}