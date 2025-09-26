import React from 'react';
import { RouterProvider, Route } from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import RecipesPage from './components/pages/RecipesPage';
import DistributorPage from './components/pages/DistributorPage';
import Certifications from './components/Certifications';
import ContactPage from './components/pages/ContactPage';

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/recipes">
            <RecipesPage />
          </Route>
          <Route path="/distributor">
            <DistributorPage />
          </Route>
          <Route path="/certifications">
            <Certifications />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}