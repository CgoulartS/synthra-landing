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
  Heart,
  Zap,
  Shield,
  TrendingUp,
  MessageSquare,
  Cpu,
  Network,
  Eye,
  Layers
} from 'lucide-react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // SALVAR REFERÊNCIA DO FORM ANTES DO AWAIT
    const form = e.currentTarget

    const formData = new FormData(form)

    // Capturar todos os dados explicitamente
    const nome = formData.get('nome') || ''
    const email = formData.get('email') || ''
    const empresa = formData.get('empresa') || ''
    const cargo = formData.get('cargo') || ''
    const telefone = formData.get('telefone') || ''
    const mensagem = formData.get('mensagem') || ''

    // Usar URLSearchParams para garantir compatibilidade com Google Apps Script
    const params = new URLSearchParams()
    params.append('nome', nome)
    params.append('email', email)
    params.append('empresa', empresa)
    params.append('cargo', cargo)
    params.append('telefone', telefone)
    params.append('mensagem', mensagem)

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw_yJW-cDeV8067TzYGgK5wJ6cbgd8n1Yr3ymu3si4UF0475EMFoC6ngy-MIqUbYqJz4Q/exec", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      })

      const responseText = await response.text()

      if (response.ok || responseText.includes('Sucesso')) {
        setSubmitMessage("Mensagem enviada com sucesso!")
        form.reset()
      } else {
        setSubmitMessage("Erro ao enviar mensagem. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      setSubmitMessage("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }
  }

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Generativa Empresarial",
      description: "Implementamos soluções de IA generativa que vão além de chatbots simples. Criamos agentes inteligentes que compreendem contexto, aprendem continuamente e geram valor real para seu negócio."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Agentes Inteligentes",
      description: "Desenvolvemos agentes de IA autônomos que tomam decisões complexas, integram-se aos seus sistemas e executam tarefas sofisticadas. Não são bots de WhatsApp - são colaboradores virtuais."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "Automatizamos processos empresariais com IA multimodal, análise preditiva e tomada de decisões em tempo real. Reduzimos custos e aumentamos eficiência operacional."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Dados com IA",
      description: "Transformamos seus dados em insights acionáveis usando processamento de linguagem natural. Consultas em tempo real, relatórios automáticos e análise preditiva."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Treinamentos Especializados",
      description: "Capacitamos sua equipe para usar IA de forma estratégica. Ensinamos a diferença entre automação simples e inteligência artificial real."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Consultoria Estratégica",
      description: "Diagnóstico completo de como a IA pode transformar seu negócio. Identificamos oportunidades reais de ROI e criamos roadmaps de implementação."
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "IA com Propósito Real",
      description: "Não seguimos trends vazias. Criamos soluções com intenção clara, ROI mensurável e resultados práticos para seu negócio."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Diferenciação Técnica",
      description: "Sabemos a diferença entre um bot de WhatsApp e um agente de IA. Implementamos tecnologia de ponta, não soluções superficiais."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Resultados Mensuráveis",
      description: "75% das empresas já adotaram IA generativa. Nós garantimos que você esteja entre os líderes, não apenas seguindo a multidão."
    }
  ]

  const differentiators = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Bot de WhatsApp ≠ IA",
      description: "Bots seguem scripts fixos e respostas pré-programadas. Nossos agentes de IA compreendem contexto, aprendem continuamente e tomam decisões complexas."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IA Multimodal",
      description: "Processamos texto, imagem e áudio simultaneamente. Criamos sistemas que entendem o mundo como humanos, não apenas palavras-chave."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integração Empresarial",
      description: "Nossos agentes se conectam aos seus sistemas (CRM, ERP, BI) e trabalham como membros da equipe, não como ferramentas isoladas."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Aprendizado Contínuo",
      description: "Diferente de automações estáticas, nossos sistemas evoluem com seu negócio, melhorando performance e adaptando-se a novas situações."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO TechCorp",
      content: "A Synthra nos mostrou a diferença entre automação simples e IA real. Nossos agentes inteligentes reduziram custos em 40% e aumentaram satisfação do cliente.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Inovação",
      content: "Finalmente uma empresa que entende que IA vai além de chatbots. Os agentes que desenvolveram tomam decisões complexas e se integram perfeitamente aos nossos sistemas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente de Processos",
      content: "A automação inteligente da Synthra transformou nossa operação. Não é só eficiência - é inteligência real aplicada aos nossos desafios.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-300 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#diferenciais" className="text-gray-300 hover:text-cyan-400 transition-colors">Diferenciais</a>
              <a href="#contato" className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</a>
            </nav>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
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
            <img src="/logo-transparent.png" alt="Synthra Logo" className="h-64 w-auto mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
              A IA que pensa com você
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Cansamos de ver "IA" sendo usada para descrever bots simples de WhatsApp.
              <br className="hidden md:block" />
              A Synthra cria agentes inteligentes reais: sistemas que compreendem, aprendem e decidem.
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
              Em 2024, 75% das empresas adotaram "IA generativa". Mas a maioria está apenas seguindo trends, 
              implementando chatbots simples e chamando de inteligência artificial. 
              Nós criamos agentes que realmente pensam, aprendem e geram valor mensurável.
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
              Nossas Especialidades
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em Inteligência Artificial real, não automações disfarçadas de IA.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Differentiators Section */}
      <section id="diferenciais" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              IA Real vs. Automação Simples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entenda por que nem tudo que se chama "IA" é realmente inteligência artificial.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-cyan-400">{diff.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-white">{diff.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {diff.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Resultados Reais de Clientes Reais
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como empresas líderes estão usando IA real para transformar seus negócios.
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
                    "{testimonial.content}"
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
      <section id="contato" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pronto para IA Real?
              </h2>
              <p className="text-xl text-gray-300">
                Vamos conversar sobre como agentes inteligentes podem transformar seu negócio.
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
                  <h4 className="font-semibold mb-3 text-white">Nossa Metodologia</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">1.</span>
                      <span><strong>Diagnóstico Técnico:</strong> Identificamos onde IA real pode gerar ROI mensurável.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">2.</span>
                      <span><strong>Prova de Conceito:</strong> Desenvolvemos um agente piloto para validar resultados.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-cyan-400">3.</span>
                      <span><strong>Implementação Escalável:</strong> Expandimos a solução para toda a operação.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Fale conosco</CardTitle>
                    <CardDescription className="text-gray-400">
                      Conte-nos sobre seu desafio. Vamos mostrar como IA real pode resolvê-lo.
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
                          placeholder="Descreva seu desafio ou como podemos ajudar..." 
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
          <p className="mt-2 text-sm">Inteligência Artificial Real • Agentes Inteligentes • Automação com Propósito</p>
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

