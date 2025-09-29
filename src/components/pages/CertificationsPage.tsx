import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Award, Shield, CheckCircle, ArrowRight, 
  Download, FileText, Calendar, Star,
  FileCheck, Users, Globe, Target
} from 'lucide-react';

const CertificationsPage = () => {
  const { navigate } = useRouter();

  const certifications = [
    {
      name: "FSSAI License",
      number: "10017051002014",
      issuingAuthority: "Food Safety and Standards Authority of India",
      description: "Certification ensuring compliance with food safety standards and regulations",
      validity: "Valid",
      category: "Food Safety",
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />
    },
    {
      name: "ISO 22000:2018",
      number: "ISO-FSMS-2024",
      issuingAuthority: "International Organization for Standardization",
      description: "Food Safety Management System certification for international standards",
      validity: "Valid",
      category: "Quality Management",
      icon: <Award className="w-8 h-8 text-[#FFD233]" />
    },
    {
      name: "AGMARK Certification",
      number: "AGMARK-PREMIUM-2024",
      issuingAuthority: "Directorate of Marketing & Inspection",
      description: "Agricultural marketing certification ensuring premium quality standards",
      validity: "Valid",
      category: "Quality Assurance",
      icon: <FileCheck className="w-8 h-8 text-[#FFD233]" />
    },
    {
      name: "HACCP Certification",
      number: "HACCP-FS-2024",
      issuingAuthority: "Hazard Analysis Critical Control Points",
      description: "Systematic preventive approach to food safety from biological, chemical, and physical hazards",
      validity: "Valid",
      category: "Food Safety",
      icon: <CheckCircle className="w-8 h-8 text-[#FFD233]" />
    },
    {
      name: "ISO 9001:2015",
      number: "ISO-QMS-2024",
      issuingAuthority: "International Organization for Standardization",
      description: "Quality Management System certification for consistent quality delivery",
      validity: "Valid",
      category: "Quality Management",
      icon: <Target className="w-8 h-8 text-[#FFD233]" />
    },
    {
      name: "Export License",
      number: "EXP-2024-001",
      issuingAuthority: "Directorate General of Foreign Trade",
      description: "License for international trade and export of edible oils",
      validity: "Valid",
      category: "Export",
      icon: <Globe className="w-8 h-8 text-[#FFD233]" />
    }
  ];

  const qualityStandards = [
    {
      parameter: "Acidity Level",
      standard: "≤ 0.5%",
      ourValue: "0.3%",
      status: "Excellent"
    },
    {
      parameter: "Peroxide Value",
      standard: "≤ 10 meq/kg",
      ourValue: "6 meq/kg",
      status: "Excellent"
    },
    {
      parameter: "Moisture Content",
      standard: "≤ 0.1%",
      ourValue: "0.05%",
      status: "Excellent"
    },
    {
      parameter: "FFA (Free Fatty Acids)",
      standard: "≤ 2%",
      ourValue: "1.2%",
      status: "Excellent"
    },
    {
      parameter: "Color (Lovibond)",
      standard: "≤ 5.0",
      ourValue: "3.2",
      status: "Excellent"
    },
    {
      parameter: "Smoke Point",
      standard: "≥ 200°C",
      ourValue: "220°C",
      status: "Excellent"
    }
  ];

  const testingFacilities = [
    {
      name: "Chemical Analysis Lab",
      description: "Advanced equipment for testing oil composition and quality parameters",
      equipment: ["Gas Chromatography", "Spectrophotometer", "pH Meter"]
    },
    {
      name: "Microbiological Testing",
      description: "Comprehensive testing for microbial contamination and food safety",
      equipment: ["Incubators", "Microscopes", "Sterilization Units"]
    },
    {
      name: "Physical Testing",
      description: "Testing for physical properties like color, viscosity, and density",
      equipment: ["Colorimeter", "Viscometer", "Density Meter"]
    },
    {
      name: "Sensory Evaluation",
      description: "Professional taste and aroma testing by certified panelists",
      equipment: ["Tasting Booths", "Aroma Chambers", "Evaluation Forms"]
    }
  ];

  const achievements = [
    {
      year: "2024",
      achievement: "Zero Defect Certification",
      description: "Achieved zero defects in quality audits for the third consecutive year"
    },
    {
      year: "2023",
      achievement: "Export Excellence Award",
      description: "Recognized for outstanding export performance in edible oil sector"
    },
    {
      year: "2022",
      achievement: "Quality Excellence Award",
      description: "Awarded by Food Safety Authority for maintaining highest quality standards"
    },
    {
      year: "2021",
      achievement: "Innovation in Processing",
      description: "Recognized for implementing advanced processing techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Certifications & 
            <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quality Standards
            </span>
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Our commitment to quality is validated by multiple certifications and rigorous 
            quality control measures. Every product meets the highest international standards.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              FSSAI License: 10017051002014
            </Badge>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Validated by leading authorities and regulatory bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="bg-[#FFF8E1]">
                  <div className="flex items-center gap-3">
                    {cert.icon}
                    <div>
                      <CardTitle className="text-[#4B2E2B]">{cert.name}</CardTitle>
                      <Badge className="bg-[#FFD233] text-[#4B2E2B] text-xs">{cert.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#4B2E2B] opacity-60">License Number:</span>
                      <span className="text-sm font-medium text-[#4B2E2B]">{cert.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#4B2E2B] opacity-60">Status:</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">{cert.validity}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#4B2E2B] opacity-80">{cert.description}</p>
                  
                  <div className="text-xs text-[#4B2E2B] opacity-60">
                    Issued by: {cert.issuingAuthority}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Quality Parameters
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Our products consistently exceed industry standards in all quality parameters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((param, index) => (
              <Card key={index} className="shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg text-[#4B2E2B]">{param.parameter}</h3>
                    <Badge className="bg-green-100 text-green-700">{param.status}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4B2E2B] opacity-60">Industry Standard:</span>
                      <span className="text-[#4B2E2B]">{param.standard}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4B2E2B] opacity-60">Our Value:</span>
                      <span className="text-[#FFD233] font-bold">{param.ourValue}</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FFD233] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Testing Facilities
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              State-of-the-art testing facilities ensuring comprehensive quality control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingFacilities.map((facility, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl text-[#4B2E2B] flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#FFD233]" />
                    {facility.name}
                  </h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{facility.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm text-[#4B2E2B] font-medium">Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.equipment.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Recent Achievements
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Recognition for our commitment to quality and excellence
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-[#4B2E2B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge className="bg-[#4B2E2B] text-white">{achievement.year}</Badge>
                        <h3 className="text-xl text-[#4B2E2B]">{achievement.achievement}</h3>
                      </div>
                      <p className="text-sm text-[#4B2E2B] opacity-80">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Certificates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="himalayan-golden-gradient shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl text-[#4B2E2B] mb-4">
                Download Certificates
              </h2>
              <p className="text-lg text-[#4B2E2B] opacity-80 mb-6">
                Access our complete certification portfolio and quality documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#4B2E2B] text-white hover:bg-[#3A221F] px-8 py-6">
                  <Download className="w-5 h-5 mr-2" />
                  Download All Certificates
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline" 
                  className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Request Specific Certificate
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
            Quality Assured Products
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Experience the confidence that comes with certified quality and safety standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Shop Certified Products
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Contact Quality Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
