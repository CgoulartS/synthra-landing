import React, { useState, useEffect } from 'react'
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
  Layers,
  Calendar,
  Settings,
  Rocket,
  Instagram,
  Linkedin,
  Send,
  Play,
  ExternalLink,
  ChevronRight,
  Globe,
  Headphones,
  FileText,
  Newspaper,
  ChevronUp,
  RefreshCw,
  Edit,
  Plus,
  Database,
  Search,
  DollarSign,
  Gauge,
  Code,
  Smartphone,
  Monitor,
  Workflow,
  PieChart,
  BarChart,
  LineChart,
  Calculator,
  Briefcase,
  Award,
  Handshake,
  Megaphone
} from 'lucide-react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [economyCounter, setEconomyCounter] = useState(0)
  const [timeCounter, setTimeCounter] = useState(0)
  const [projectsCounter, setProjectsCounter] = useState(0)

  // Animação dos contadores
  useEffect(() => {
    const interval = setInterval(() => {
      setEconomyCounter(prev => prev < 50 ? prev + 1 : 50)
      setTimeCounter(prev => prev < 80 ? prev + 2 : 80)
      setProjectsCounter(prev => prev < 100 ? prev + 3 : 100)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const nome = formData.get('nome') || ''
    const email = formData.get('email') || ''
    const empresa = formData.get('empresa') || ''
    const cargo = formData.get('cargo') || ''
    const telefone = formData.get('telefone') || ''
    const mensagem = formData.get('mensagem') || ''

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

  const agents = [
    {
      icon: <Search className="w-12 h-12 text-cyan-400" />,
      title: "Agente Analista",
      subtitle: "Inteligência que nunca dorme",
      description: "Monitora gastos em tempo real, identifica padrões de desperdício, sugere otimizações automáticas e gera relatórios inteligentes 24/7.",
      benefits: ["Economia automática 24/7", "Análise de padrões", "Relatórios inteligentes"],
      result: "Identifica R$ 50k+ em economia por mês"
    },
    {
      icon: <Handshake className="w-12 h-12 text-purple-400" />,
      title: "Agente Negociador",
      subtitle: "Melhores preços automaticamente",
      description: "Pesquisa fornecedores automaticamente, compara preços e condições, sugere renegociações e monitora contratos e vencimentos.",
      benefits: ["Pesquisa automática", "Comparação inteligente", "Monitoramento contínuo"],
      result: "Reduz 20-35% custos com fornecedores"
    },
    {
      icon: <Workflow className="w-12 h-12 text-green-400" />,
      title: "Agente Otimizador",
      subtitle: "Eficiência operacional máxima",
      description: "Automatiza processos repetitivos, elimina gargalos operacionais, otimiza fluxos de trabalho e reduz tempo de execução.",
      benefits: ["Automação completa", "Eliminação de gargalos", "Otimização contínua"],
      result: "Acelera processos em 60-80%"
    }
  ]

  const developmentModes = [
    {
      icon: <Rocket className="w-12 h-12 text-cyan-400" />,
      title: "RÁPIDO",
      subtitle: "No-Code + IA",
      time: "3-7 dias",
      price: "A partir de R$ 3k",
      description: "De ideia a aplicação em dias",
      cases: ["Sites institucionais", "Dashboards", "Apps simples", "E-commerce básico"],
      benefits: ["10x mais rápido", "70% mais barato", "Manutenção simples"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      title: "INTELIGENTE",
      subtitle: "Low-Code + IA",
      time: "2-4 semanas",
      price: "A partir de R$ 15k",
      description: "Complexidade empresarial com simplicidade visual",
      cases: ["ERPs customizados", "CRMs especializados", "Sistemas complexos", "Integrações"],
      benefits: ["Escalabilidade ilimitada", "50% mais barato", "Performance otimizada"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-12 h-12 text-green-400" />,
      title: "AUTÔNOMO",
      subtitle: "Código + IA",
      time: "4-8 semanas",
      price: "A partir de R$ 30k",
      description: "Agentes de IA que programam para você",
      cases: ["Sistemas críticos", "Alta performance", "Soluções customizadas", "Inovações"],
      benefits: ["Qualidade superior", "30% mais barato", "Manutenção automatizada"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const results = [
    {
      title: "E-commerce Criado em 5 Dias",
      type: "No-Code + IA",
      before: { time: "3 meses", cost: "R$ 50k" },
      after: { time: "5 dias", cost: "R$ 8k" },
      savings: { time: "94%", cost: "84%" },
      description: "Loja completa com pagamentos, estoque e automação"
    },
    {
      title: "ERP Customizado em 3 Semanas",
      type: "Low-Code + IA",
      before: { time: "8 meses", cost: "R$ 200k" },
      after: { time: "3 semanas", cost: "R$ 45k" },
      savings: { time: "91%", cost: "77%" },
      description: "Sistema completo de gestão com integrações"
    },
    {
      title: "Automação Completa",
      type: "Consultoria + IA",
      company: "Distribuidora 45 funcionários",
      result: "35% redução custos operacionais",
      roi: "ROI positivo em 60 dias",
      description: "Agentes monitorando e otimizando continuamente"
    }
  ]

  const valueProps = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      text: "Agentes de IA trabalhando 24/7 para sua empresa"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      text: "30-50% redução de custos operacionais garantida"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      text: "Desenvolvimento 10x mais rápido com IA"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      text: "ROI positivo em 90 dias ou seu dinheiro de volta"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO TechDistribuidora",
      content: "Os agentes da Synthra identificaram R$ 80k em economia mensal que passava despercebida. Agora eles monitoram tudo automaticamente.",
      rating: 5,
      result: "35% redução custos"
    },
    {
      name: "Ana Rodrigues",
      role: "Diretora Operacional",
      content: "Criaram nosso ERP em 3 semanas com IA. O que levaria 8 meses custando R$ 200k, fizeram por R$ 45k. Inacreditável!",
      rating: 5,
      result: "77% economia"
    },
    {
      name: "João Silva",
      role: "Fundador StartupTech",
      content: "A automação inteligente me devolveu 25 horas por semana. Agora posso focar no que realmente importa: crescer o negócio.",
      rating: 5,
      result: "25h/semana liberadas"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="Synthra Logo" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#agentes" className="text-gray-300 hover:text-cyan-400 transition-colors">Agentes IA</a>
              <a href="#desenvolvimento" className="text-gray-300 hover:text-cyan-400 transition-colors">Desenvolvimento</a>
              <a href="#resultados" className="text-gray-300 hover:text-cyan-400 transition-colors">Resultados</a>
              <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            </nav>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-6 py-3"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="mr-2 w-4 h-4" />
              Análise Gratuita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
            🤖 A Primeira Consultoria com IA Autônoma
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Automação Inteligente que Reduz Custos Automaticamente
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Agentes de IA trabalhando <span className="text-cyan-400 font-semibold">24/7</span> para sua empresa economizar <span className="text-green-400 font-semibold">30-50%</span> sem perder qualidade
          </p>

          {/* Contadores Animados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{economyCounter}%</div>
              <div className="text-gray-300">Redução de Custos</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">{timeCounter}%</div>
              <div className="text-gray-300">Menos Tempo Manual</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">+{projectsCounter}</div>
              <div className="text-gray-300">Empresas Transformadas</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Análise Gratuita com IA
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg"
              onClick={() => document.getElementById('agentes').scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Value Props */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                {prop.icon}
                <span className="text-sm text-gray-300">{prop.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Agentes de IA */}
      <section id="agentes" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              🤖 Nossos Agentes de IA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Conheça os Agentes que Trabalham para Você
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enquanto outras consultorias fazem análises pontuais, nossos agentes de IA trabalham continuamente para identificar oportunidades e automatizar melhorias
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {agent.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{agent.title}</CardTitle>
                  <CardDescription className="text-cyan-400 font-semibold">{agent.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{agent.description}</p>
                  
                  <div className="space-y-2">
                    {agent.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20 mt-6">
                    <div className="text-green-400 font-semibold text-center">{agent.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Desenvolvimento Inteligente */}
      <section id="desenvolvimento" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
              💻 Desenvolvimento Inteligente
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Desenvolvimento que Pensa por Você
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IA + No-Code + Low-Code = Aplicações em dias, não meses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {developmentModes.map((mode, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${mode.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    {mode.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{mode.title}</CardTitle>
                  <CardDescription className="text-purple-400 font-semibold">{mode.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-white">{mode.time}</div>
                    <div className="text-lg text-gray-300">{mode.price}</div>
                    <div className="text-sm text-gray-400">{mode.description}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-300 mb-2">Ideal para:</div>
                    {mode.cases.map((case_, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">{case_}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-300 mb-2">Benefícios:</div>
                    {mode.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 text-white border-0 mt-6`}>
                    Quero Este Desenvolvimento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Resultados */}
      <section id="resultados" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30">
              📈 Resultados Reais
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Cases de Sucesso Comprovados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como transformamos empresas com automação inteligente e desenvolvimento híbrido
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white mb-2">{result.title}</CardTitle>
                  <Badge className="w-fit bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30">
                    {result.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{result.description}</p>
                  
                  {result.before && result.after && (
                    <div className="space-y-3">
                      <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                        <div className="text-red-400 font-semibold text-sm mb-1">Antes (Tradicional)</div>
                        <div className="text-gray-300 text-sm">{result.before.time} • {result.before.cost}</div>
                      </div>
                      
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <div className="text-green-400 font-semibold text-sm mb-1">Depois (Synthra)</div>
                        <div className="text-gray-300 text-sm">{result.after.time} • {result.after.cost}</div>
                      </div>

                      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-3 border border-cyan-500/20">
                        <div className="text-cyan-400 font-semibold text-sm mb-1">Economia Total</div>
                        <div className="text-gray-300 text-sm">{result.savings.time} tempo • {result.savings.cost} custo</div>
                      </div>
                    </div>
                  )}

                  {result.company && (
                    <div className="space-y-3">
                      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-blue-400 font-semibold text-sm mb-1">Empresa</div>
                        <div className="text-gray-300 text-sm">{result.company}</div>
                      </div>
                      
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <div className="text-green-400 font-semibold text-sm mb-1">Resultado</div>
                        <div className="text-gray-300 text-sm">{result.result}</div>
                      </div>

                      <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                        <div className="text-yellow-400 font-semibold text-sm mb-1">ROI</div>
                        <div className="text-gray-300 text-sm">{result.roi}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre a Synthra */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
              🏢 Nossa História
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Da Insatisfação à Inovação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Como transformamos frustração em solução
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <span className="text-orange-400 font-semibold">A Synthra nasceu da insatisfação com o comum.</span> Começamos como uma consultoria de TI e Processos tradicional, focada em sustentação e redução de custos. Mas rapidamente percebemos que havia uma forma melhor de fazer as coisas.
                </p>
                
                <p>
                  <span className="text-cyan-400 font-semibold">Nossa base foi construída dentro de grandes empresas</span>, onde aprendemos as melhores práticas (e também as nem tão boas). Essa experiência nos ensinou não apenas o que funciona, mas principalmente o que precisa ser transformado.
                </p>
                
                <p>
                  <span className="text-purple-400 font-semibold">Consideramos as pessoas a parte mais importante</span> de toda e qualquer empresa. Nosso objetivo não é substituir equipes, mas dar ferramentas e potencializar talentos através de automações e IA generativa.
                </p>
                
                <p>
                  <span className="text-green-400 font-semibold">Queremos pessoas mais estratégicas</span>, que fazem o sistema trabalhar para elas e têm tempo de cuidar do que realmente importa: seu negócio, sua inovação, seu crescimento.
                </p>
              </div>

              {/* Pilares da Synthra */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                  <Building className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Nossa Origem</h3>
                  <p className="text-gray-300 text-sm">Grandes empresas, aprendizado real, experiência prática</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Nossa Filosofia</h3>
                  <p className="text-gray-300 text-sm">Pessoas em primeiro, potencialização através de IA</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                  <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Nossa Visão</h3>
                  <p className="text-gray-300 text-sm">Futuro estratégico, automação inteligente</p>
                </div>
              </div>

              {/* Números de Impacto */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">+100</div>
                  <div className="text-gray-300 text-sm">Empresas Transformadas</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">+500</div>
                  <div className="text-gray-300 text-sm">Pessoas Potencializadas</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">+1000</div>
                  <div className="text-gray-300 text-sm">Processos Automatizados</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4"
                  onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="mr-2 w-5 h-5" />
                  Faça Parte Desta Transformação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30">
              ⭐ Depoimentos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-semibold text-sm">{testimonial.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Blog */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30">
              📚 Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Insights sobre IA e Automação
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="text-center">
              <Newspaper className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Blog em Construção</h3>
              <p className="text-gray-300 mb-6">
                Em breve, compartilharemos insights valiosos sobre IA, automação e transformação digital.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0"
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              >
                <Bell className="mr-2 w-4 h-4" />
                Seja Notificado
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              🚀 Comece Agora
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transforme Sua Empresa Hoje
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Análise gratuita de 30 minutos + relatório de oportunidades
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">Análise Gratuita com IA</CardTitle>
                <CardDescription className="text-gray-300">
                  Descubra quanto sua empresa pode economizar com automação inteligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-gray-300">Nome Completo</Label>
                      <Input 
                        id="nome" 
                        name="nome" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="empresa" className="text-gray-300">Empresa</Label>
                      <Input 
                        id="empresa" 
                        name="empresa" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cargo" className="text-gray-300">Cargo</Label>
                      <Input 
                        id="cargo" 
                        name="cargo" 
                        className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500"
                        placeholder="Seu cargo"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-gray-300">Telefone</Label>
                    <Input 
                      id="telefone" 
                      name="telefone" 
                      className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-gray-300">Principal Desafio</Label>
                    <Textarea 
                      id="mensagem" 
                      name="mensagem" 
                      className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500 min-h-[100px]"
                      placeholder="Conte-nos qual é o principal desafio da sua empresa..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="mr-2 w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Solicitar Análise Gratuita
                      </>
                    )}
                  </Button>

                  {submitMessage && (
                    <div className={`text-center p-4 rounded-lg ${
                      submitMessage.includes('sucesso') 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </form>

                {/* Garantias */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Análise 100% gratuita</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Relatório detalhado em 24h</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>ROI positivo em 90 dias</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Suporte especializado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src="/logo.png" alt="Synthra Logo" className="h-12 w-auto" />
              <p className="text-gray-400 text-sm">
                A primeira consultoria com inteligência artificial autônoma. Transformando empresas através de automação inteligente.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#agentes" className="hover:text-cyan-400 transition-colors">Agentes de IA</a></li>
                <li><a href="#desenvolvimento" className="hover:text-cyan-400 transition-colors">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Automação</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Consultoria</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><a href="#resultados" className="hover:text-cyan-400 transition-colors">Cases</a></li>
                <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@synthra.com.br</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Synthra Tecnologia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-full p-3 shadow-lg z-50"
          size="sm"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

export default App

