"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, PenTool, BookOpen, Brain, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EstudaeLanding() {
  const handleCheckout = () => {
    // Substitua pela URL do seu checkout real
    window.open("https://checkout.estudae.com.br", "_blank")
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleCheckout}
          className="bg-[#0dff00] hover:bg-[#0dff00]/90 text-black font-bold px-6 py-3 rounded-full shadow-lg animate-pulse"
        >
          Assinar agora por R$5
        </Button>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo-estudae.png" alt="Logo Estudaê" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-bold text-gray-900">Estudaê</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#funcionalidades" className="text-gray-600 hover:text-[#0dff00] transition-colors">
              Funcionalidades
            </a>
            <a href="#precos" className="text-gray-600 hover:text-[#0dff00] transition-colors">
              Preços
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-[#0dff00] transition-colors">
              Sobre
            </a>
          </nav>
          <Button onClick={handleCheckout} className="bg-[#0dff00] hover:bg-[#0dff00]/90 text-black font-semibold">
            Começar agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center bg-[#0dff00]/10 text-[#0dff00] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Feito por estudante, para estudantes
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua aprovação no ENEM por apenas <span className="text-[#0dff00]">R$5/mês</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Correção de redação com nota ENEM, redação guiada e quiz inteligente. Tudo que você precisa para mandar bem
            na prova!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleCheckout}
              className="bg-[#0dff00] hover:bg-[#0dff00]/90 text-black font-bold px-8 py-4 text-lg"
            >
              Começar por R$5/mês
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-[#0dff00] mr-2" />
              Sem cartão de crédito • Pix ou cartão
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Interface do Estudaê"
              width={500}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Creator Section */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#0dff00] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-2xl">G</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Oi, eu sou o Gustavo!</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              "Sou Gustavo, tô no 3º ano como você, e criei o Estudaê porque também quero passar no ENEM. Sei como é
              difícil estudar sozinho e ter que pagar caro por cursinhos. Por isso criei uma plataforma que realmente
              funciona e cabe no seu bolso."
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <p className="text-gray-600 font-medium">Estudante do 3º ano da rede pública • Criador do Estudaê</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa para arrasar no ENEM</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Três funcionalidades poderosas que vão turbinar seus estudos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-100 hover:border-[#0dff00] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0dff00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="w-8 h-8 text-[#0dff00]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Correção de Redação</h3>
                <p className="text-gray-600 mb-6">
                  Correção automática com nota estilo ENEM e análise detalhada por competência. Saiba exatamente onde
                  melhorar!
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Nota por competência
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Feedback detalhado
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Correções ilimitadas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#0dff00] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0dff00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-[#0dff00]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Redação Guiada</h3>
                <p className="text-gray-600 mb-6">
                  Orientações linha por linha para escrever redações nota 1000. É como ter um professor particular!
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Passo a passo detalhado
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Dicas em tempo real
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Temas atualizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#0dff00] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0dff00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-[#0dff00]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quiz Inteligente</h3>
                <p className="text-gray-600 mb-6">
                  Sessões de estudo personalizadas baseadas nos seus erros. Foque no que realmente importa!
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    IA personalizada
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Foco nas dificuldades
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0dff00] mr-2 flex-shrink-0" />
                    Progresso em tempo real
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Um preço que cabe no seu bolso</h2>
          <p className="text-xl text-gray-600 mb-12">Sem pegadinhas, sem anuidade. Só R$5 por mês e pronto!</p>

          <div className="max-w-md mx-auto">
            <Card className="border-2 border-[#0dff00] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-[#0dff00] text-black text-center py-2 font-bold">
                MAIS POPULAR
              </div>
              <CardContent className="p-8 pt-16">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    R$5
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </div>
                  <p className="text-gray-600">Acesso completo à plataforma</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#0dff00] mr-3" />
                    <span>Correção ilimitada de redações</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#0dff00] mr-3" />
                    <span>Redação guiada completa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#0dff00] mr-3" />
                    <span>Quiz inteligente personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#0dff00] mr-3" />
                    <span>Suporte direto com o criador</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#0dff00] mr-3" />
                    <span>Cancele quando quiser</span>
                  </li>
                </ul>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#0dff00] hover:bg-[#0dff00]/90 text-black font-bold py-4 text-lg"
                >
                  Assinar por R$5/mês
                </Button>

                <p className="text-sm text-gray-500 mt-4">
                  Pague com Pix ou cartão • Sem cartão de crédito obrigatório
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0dff00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Bora passar juntos por só 5 reais por mês?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de estudantes que já estão usando o Estudaê para turbinar seus estudos e conquistar a
            aprovação no ENEM!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleCheckout}
              className="bg-black hover:bg-black/90 text-white font-bold px-8 py-4 text-lg"
            >
              Começar agora por R$5
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-black/70">✨ Primeira semana grátis para testar</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo-estudae.png" alt="Logo Estudaê" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold">Estudaê</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#0dff00] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-[#0dff00] transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#0dff00] transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Estudaê. Feito com ❤️ por um estudante para estudantes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
