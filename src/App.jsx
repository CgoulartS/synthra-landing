import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import {
  Brain,
  Bot,
  BarChart3,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  Clock,
  BookOpen,
  Building,
  Cog,
  Sparkles,
  Target,
  Heart
} from 'lucide-react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.target)
    
    // Capturar todos os dados do formulário
    const nome = formData.get('nome') || ''
    const email = formData.get('email') || ''
    const empresa = formData.get('empresa') || ''
    const cargo = formData.get('cargo') || ''
    const telefone = formData.get('telefone') || ''
    const mensagem = formData.get('mensagem') || ''
    
    // Usar URLSearchParams para garantir que todos os parâmetros sejam enviados
    const params = new URLSearchParams()
    params.append('nome', nome)
    params.append('email', email)
    params.append('empresa', empresa)
    params.append('cargo', cargo)
    params.append('telefone', telefone)
    params.append('mensagem', mensagem)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw_yJW-cDeV8067TzYGgK5wJ6cbgd8n1Yr3ymu3si4UF0475EMFoC6ngy-MIqUbYqJz4Q/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      })
      
      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        e.target.reset()
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
    }
    
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Treinamentos e Cursos",
      description: "IA aplicada com propósito. Desenvolva sua inteligência com consciência digital e aprenda a usar a tecnologia de forma estratégica."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Consultorias para Empresas",
      description: "Diagnóstico estratégico, cultura digital e automação com sentido. Transformamos sua empresa com inteligência artificial aplicada."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Soluções Customizadas",
      description: "Automatize com inteligência. Reduza tarefas repetitivas e libere o potencial humano da sua equipe para atividades estratégicas."
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "IA com Propósito",
      description: "Não seguimos trends vazias. Criamos soluções com intenção clara e resultados mensuráveis."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Tecnologia Humanizada",
      description: "Combinamos inteligência artificial com emoção e estratégia humana."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Inovação Consciente",
      description: "Desenvolvemos sua inteligência com consciência digital e responsabilidade."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO TechCorp",
      content: "A Synthra.ia transformou nossa visão sobre IA. Não é apenas tecnologia, é estratégia com propósito.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Inovação",
      content: "Finalmente encontramos uma empresa que entende que IA deve ter emoção e intenção, não apenas automação.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente de Projetos",
      content: "O treinamento da Synthra mudou como nossa equipe pensa e usa IA. Resultados incríveis!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo removido do cabeçalho */}
            <div className="flex items-center">
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-300 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</a>
            </nav>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Logo adicionado na Hero Section */}
            <img src="/logo-transparent.png" alt="Synthra Logo" className="h-64 w-auto mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">              A IA que pensa com você
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Cansamos de ver a IA sendo usada apenas para seguir trends ou escrever e-mails bonitinhos.
              <br className="hidden md:block" />
              A Synthra nasce do encontro entre mente e tecnologia, criando soluções com intenção, emoção e estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg px-8 py-4 border-0"
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              >
                Quero conhecer a Synthra
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                  Vamos pensar juntos?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Por que a Synthra existe?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Cansamos de ver a IA sendo usada apenas para seguir trends ou escrever e-mails bonitinhos.
              A Synthra nasce do encontro entre mente e tecnologia, criando soluções com intenção, emoção e estratégia.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              O que fazemos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em Inteligência Artificial, sempre com propósito, emoção e estratégia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-cyan-400">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles falam sobre nossa parceria.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed italic">
                    " {testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vamos pensar juntos?
              </h2>
              <p className="text-xl text-gray-300">
                Conte pra gente o que você busca. Vamos criar algo incrível juntos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Entre em contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">contato@synthra.ia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Horário de Atendimento</p>
                      <p className="text-gray-400">Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-400/20">
                  <h4 className="font-semibold mb-3 text-white">Nossa Abordagem</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">1.</span>
                      <span><strong>Conversa Inicial:</strong> Entendemos seu negócio, seus desafios e suas metas.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">2.</span>
                      <span><strong>Análise Estratégica:</strong> Identificamos onde a IA pode gerar mais valor.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">3.</span>
                      <span><strong>Solução Personalizada:</strong> Criamos uma proposta com propósito e estratégia.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Fale conosco</CardTitle>
                    <CardDescription className="text-gray-400">
                      Preencha o formulário e entraremos em contato em breve.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="nome" className="text-white block">Nome</Label>
                        <Input 
                          id="nome" 
                          name="nome" 
                          placeholder="Seu nome" 
                          required 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-white block">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="seu@email.com" 
                          required 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="empresa" className="text-white block">Nome da Empresa</Label>
                        <Input 
                          id="empresa" 
                          name="empresa" 
                          placeholder="Nome da sua empresa" 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="cargo" className="text-white block">Cargo/Função</Label>
                        <Input 
                          id="cargo" 
                          name="cargo" 
                          placeholder="Seu cargo ou função" 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="telefone" className="text-white block">Telefone (opcional)</Label>
                        <Input 
                          id="telefone" 
                          name="telefone" 
                          type="tel" 
                          placeholder="(XX) XXXXX-XXXX" 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="mensagem" className="text-white block">Mensagem</Label>
                        <Textarea 
                          id="mensagem" 
                          name="mensagem" 
                          placeholder="Conte pra gente o que você busca..." 
                          required 
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-32 resize-y"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg py-3 border-0" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      {submitMessage && <p className="text-center mt-4 text-sm text-green-400">{submitMessage}</p>}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center text-gray-400">
          <img src="/logo-transparent.png" alt="Synthra Logo" className="h-12 mx-auto mb-4" />
          <p>&copy; {new Date().getFullYear()} Synthra.ia. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


