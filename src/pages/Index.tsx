import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Brain, ArrowRight, Factory, Wrench, HardHat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/Implora_Logo.svg" 
                alt="Implora Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Implora</span>
            </div>
            <a href="mailto:kontakt@implora.de">
              <Button 
                className="bg-[#AF42AF] hover:bg-[#9A3A9A] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Kontaktieren Sie uns
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sichern Sie das
              <span className="text-[#AF42AF] block">Wissen Ihrer Experten</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bevor wertvolle Mitarbeiter in Rente gehen, bewahren wir ihr spezialisiertes 
              Wissen für Ihr Unternehmen. Professionelles Wissensmanagement für die Industrie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:kontakt@implora.de">
                <Button 
                  size="lg" 
                  className="bg-[#AF42AF] hover:bg-[#9A3A9A] text-white px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Vereinbaren Sie einen Termin mit uns
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <p className="text-sm text-gray-500">Unverbindlich • 30 Minuten • Sofort verfügbar</p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mb-20">
            <div className="bg-gradient-to-r from-[#AF42AF]/10 via-gray-100/50 to-[#AF42AF]/10 rounded-2xl p-12 text-center">
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <Factory className="w-8 h-8 text-[#AF42AF]" />
                </div>
                <div className="bg-white p-4 rounded-full shadow-md">
                  <HardHat className="w-8 h-8 text-[#AF42AF]" />
                </div>
                <div className="bg-white p-4 rounded-full shadow-md">
                  <Wrench className="w-8 h-8 text-[#AF42AF]" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Für deutsche Industrieunternehmen entwickelt
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Speziell für Betriebe mit schweren Maschinen, Werkstätten und Produktionsstätten, 
                wo erfahrene Fachkräfte unverzichtbares Wissen besitzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Das Problem, das wir lösen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wenn erfahrene Mitarbeiter das Unternehmen verlassen, geht oft kritisches 
              Fachwissen unwiederbringlich verloren.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-100 hover:border-[#AF42AF]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#AF42AF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#AF42AF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Demografischer Wandel</h3>
                <p className="text-gray-600">
                  Viele erfahrene Fachkräfte gehen in den nächsten Jahren in Rente und nehmen 
                  ihr Wissen mit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#AF42AF]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#AF42AF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-[#AF42AF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verstecktes Wissen</h3>
                <p className="text-gray-600">
                  Jahrzehntelange Erfahrung mit Maschinen und Prozessen ist oft nicht 
                  dokumentiert oder systematisch erfasst.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#AF42AF]/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-[#AF42AF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#AF42AF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sicherer Transfer</h3>
                <p className="text-gray-600">
                  Wir erfassen, strukturieren und sichern dieses Wissen professionell 
                  für Ihr Unternehmen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#AF42AF]/5 via-gray-50 to-[#AF42AF]/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit, Ihr Wissen zu sichern?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Lösung für Ihr Unternehmen entwickeln. 
              Unverbindlicher Austausch, keine Verpflichtungen.
            </p>
            <a href="mailto:kontakt@implora.de">
              <Button 
                size="lg" 
                className="bg-[#AF42AF] hover:bg-[#9A3A9A] text-white px-10 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Kontaktieren Sie uns jetzt
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/Implora_Logo_white.svg" 
                alt="Implora Logo white" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">Implora</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Wissensmanagement für die deutsche Industrie</p>
              <p className="text-sm text-gray-500">
                © 2025 Implora. Professionell. Sicher. Vertrauenswürdig.
              </p>
              <div className="mt-4 flex justify-center md:justify-end gap-6">
                <a
                  href="/Impressum.html"
                  className="text-gray-400 hover:text-white underline transition-colors"
                >
                  Impressum
                </a>
                <a
                  href="/Datenschutz.html"
                  className="text-gray-400 hover:text-white underline transition-colors"
                >
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
