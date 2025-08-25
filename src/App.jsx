import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import logoSynthra from './assets/logo-synthra.png'
import { 
  Search,
  Share2,
  Megaphone,
  Monitor,
  Calendar,
  TrendingUp,
  Menu,
  X,
  ChevronUp,
  Send,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  Users,
  Zap,
  Target,
  Shield,
  Clock,
  Award,
  Lightbulb,
  Settings,
  BarChart3,
  Smartphone,
  Cpu,
  Bot,
  Briefcase,
  GraduationCap,
  Building,
  Rocket,
  Star,
  Eye,
  Heart,
  Brain,
  Sparkles
} from 'lucide-react'
import './App.css'

function App() {
  // Estados
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '', company: '' })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [visibleSection, setVisibleSection] = useState('inicio')

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
      
      // Detectar seção visível
      const sections = ['inicio', 'consultoria', 'automacao', 'social', 'sites', 'branding', 'sobre', 'contato']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setVisibleSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Funções utilitárias
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const showNotification = (message, type = 'success') => {
    if (type === 'success') {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    } else {
      setErrorMessage(message)
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Funções de formulário
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Validações
    if (!formData.name.trim()) {
      showNotification('Nome é obrigatório', 'error')
      setIsLoading(false)
      return
    }
    
    if (!validateEmail(formData.email)) {
      showNotification('E-mail inválido', 'error')
      setIsLoading(false)
      return
    }
    
    if (!formData.message.trim()) {
      showNotification('Mensagem é obrigatória', 'error')
      setIsLoading(false)
      return
    }
    
    // Simular envio
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsLoading(false)
      showNotification('Mensagem enviada com sucesso! Retornaremos em breve.')
      setFormData({ name: '', email: '', message: '', phone: '', company: '' })
    } catch (error) {
      setIsLoading(false)
      showNotification('Erro ao enviar mensagem. Tente novamente.', 'error')
    }
  }

  // Componentes
  const Header = () => (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="flex items-center space-x-2">
              <img 
                src={logoSynthra} 
                alt="Synthra Tecnologia" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { id: 'consultoria', label: 'CONSULTORIA ESTRATÉGICA' },
              { id: 'automacao', label: 'AUTOMAÇÃO E AGENTES INTELIGENTES' },
              { id: 'social', label: 'SOCIAL INTELIGENTE' },
              { id: 'sites', label: 'SITES, PÁGINAS E MVPS' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`text-gray-300 hover:text-cyan-400 transition-colors text-xs text-center leading-tight px-3 py-2 rounded-lg hover:bg-gray-800/50 ${
                  visibleSection === item.id ? 'text-cyan-400 bg-gray-800/50' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-4">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'consultoria', label: 'Consultoria Estratégica' },
                { id: 'automacao', label: 'Automação e Agentes Inteligentes' },
                { id: 'social', label: 'Social Inteligente' },
                { id: 'sites', label: 'Sites, Páginas e MVPs' },
                { id: 'branding', label: 'Branding, Marketing e Treinamentos' },
                { id: 'sobre', label: 'Sobre a Synthra' },
                { id: 'contato', label: 'Contato' }
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-left py-2 px-4 rounded-lg hover:bg-gray-800/50"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )

  const BackToTopButton = () => (
    showBackToTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all transform hover:scale-110 z-40 group"
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    )
  )

  const NotificationSystem = () => (
    <>
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-6 h-6 mr-3" />
          <span>Sucesso! Ação realizada com êxito.</span>
        </div>
      )}
      {showError && (
        <div className="fixed top-20 right-4 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center animate-in slide-in-from-right duration-300">
          <X className="w-6 h-6 mr-3" />
          <span>{errorMessage}</span>
        </div>
      )}
    </>
  )

  // Site Principal
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <NotificationSystem />
      <BackToTopButton />

      {/* Hero Section */}
      <section id="inicio" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Tecnologia, pessoas e estratégia conectadas para potencializar seu negócio
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Somos uma empresa IA First, mas não fazemos só com IA: temos especialistas humanos que trabalham lado a lado com a tecnologia para garantir segurança, personalização e agilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 transform hover:scale-105 transition-all shadow-2xl hover:shadow-cyan-500/25 group w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Gostaria de agendar um diagnóstico gratuito.', '_blank')}
              >
                <Rocket className="mr-2 lg:mr-3 w-5 lg:w-7 h-5 lg:h-7 group-hover:animate-bounce" />
                Agendar diagnóstico gratuito
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 transform hover:scale-105 transition-all shadow-2xl hover:shadow-purple-500/25 group w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero automatizar meu negócio.', '_blank')}
              >
                <TrendingUp className="mr-2 lg:mr-3 w-5 lg:w-7 h-5 lg:h-7 group-hover:animate-pulse" />
                Quero automatizar meu negócio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
              O QUE FAZEMOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Consultoria Estratégica */}
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:animate-pulse">
                  <Search className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-white text-lg lg:text-xl mb-4">Consultoria Estratégica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed text-sm lg:text-base">
                  Descobrimos se o gargalo está em pessoas, processos ou tecnologia.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Automação & Agentes Inteligentes */}
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:animate-pulse">
                  <Share2 className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-white text-lg lg:text-xl mb-4">Automação & Agentes Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed text-sm lg:text-base">
                  Bots, integrações, relatórios e funis de vendas automatizados.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Social Inteligente */}
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:animate-pulse">
                  <Megaphone className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-white text-lg lg:text-xl mb-4">Social Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed text-sm lg:text-base">
                  Criação de conteúdo, anúncios e presença digital com IA + estratégia humana.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Criação de Sites, Páginas e MVPs */}
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:animate-pulse">
                  <Monitor className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-white text-lg lg:text-xl mb-4">Criação de Sites, Páginas e MVPs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed text-sm lg:text-base">
                  Valide ideias, crie produtos e venda mais, rápido.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Synthra */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              DIFERENCIAIS SYNTHRA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">IA First com especialistas humanos</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Soluções personalizadas para cada negócio</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Agilidade com segurança</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Soluções personalizadas para cada negócio</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Diagnóstico profundo antes da execução</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Experiência multissetorial</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Pronto para sair do operacional e focar na estratégia?
          </h2>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all group"
            onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero falar com a Synthra sobre estratégia.', '_blank')}
          >
            <Rocket className="mr-3 w-8 h-8 group-hover:animate-bounce" />
            Quero falar com a Synthra
          </Button>
        </div>
      </section>

      {/* Páginas Internas */}
      
      {/* Consultoria Estratégica */}
      <section id="consultoria" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Descubra onde está o gargalo do seu negócio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nossa consultoria identifica se o problema está em tecnologia, processos ou pessoas. Com uma visão 360°, criamos um plano estratégico personalizado para desbloquear o crescimento da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Diagnóstico 360°</h3>
                <p className="text-gray-300">Análise completa de processos, tecnologia e pessoas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Plano Estratégico</h3>
                <p className="text-gray-300">Roadmap personalizado para seu crescimento</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Implementação</h3>
                <p className="text-gray-300">Acompanhamento na execução das soluções</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xl px-12 py-6"
              onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Gostaria de agendar um diagnóstico gratuito.', '_blank')}
            >
              <Target className="mr-2 w-6 h-6" />
              Agendar diagnóstico gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Automação e Agentes Inteligentes */}
      <section id="automacao" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Liberte sua equipe do operacional
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Criamos agentes de atendimento, funis de vendas inteligentes e integrações completas para otimizar processos, aumentar conversões e gerar relatórios claros para decisões rápidas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Bot className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Agentes Inteligentes</h3>
                <p className="text-gray-300">Chatbots e assistentes virtuais que realmente funcionam</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Funis Automatizados</h3>
                <p className="text-gray-300">Vendas que acontecem enquanto você dorme</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Settings className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Integrações</h3>
                <p className="text-gray-300">Conectamos todos os seus sistemas</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl px-12 py-6"
              onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero automatizar meu negócio.', '_blank')}
            >
              <Bot className="mr-2 w-6 h-6" />
              Quero automatizar meu negócio
            </Button>
          </div>
        </div>
      </section>

      {/* Social Inteligente */}
      <section id="social" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Conteúdo que conecta. Estratégia que converte.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Posicionamos sua marca e criamos conteúdo com propósito usando IA para potencializar resultados. Do planejamento às campanhas, cuidamos de tudo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Megaphone className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Criação de Conteúdo</h3>
                <p className="text-gray-300">Posts, vídeos e campanhas que engajam</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Anúncios Inteligentes</h3>
                <p className="text-gray-300">Campanhas otimizadas com IA para máximo ROI</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Análise de Resultados</h3>
                <p className="text-gray-300">Relatórios claros para decisões estratégicas</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xl px-12 py-6"
              onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero acelerar minhas redes sociais.', '_blank')}
            >
              <TrendingUp className="mr-2 w-6 h-6" />
              Quero acelerar minhas redes
            </Button>
          </div>
        </div>
      </section>

      {/* Sites, Páginas e MVPs */}
      <section id="sites" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Seu produto no ar em semanas, não meses
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desenvolvemos sites modernos, páginas de venda otimizadas e MVPs inteligentes para validar ideias e vender mais, unindo design + copy + IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Monitor className="w-16 h-16 text-amber-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Sites Modernos</h3>
                <p className="text-gray-300">Design responsivo e otimizado para conversão</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Globe className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Landing Pages</h3>
                <p className="text-gray-300">Páginas que vendem enquanto você dorme</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">MVPs Inteligentes</h3>
                <p className="text-gray-300">Valide sua ideia rapidamente no mercado</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xl px-12 py-6"
              onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero meu site agora.', '_blank')}
            >
              <Globe className="mr-2 w-6 h-6" />
              Quero meu site agora
            </Button>
          </div>
        </div>
      </section>

      {/* Branding, Marketing e Treinamentos */}
      <section id="branding" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Posicione sua marca e equipe para o futuro
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Construímos marcas fortes, campanhas assertivas e treinamentos corporativos para times que querem liderar com inteligência e performar com IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Branding Estratégico</h3>
                <p className="text-gray-300">Identidade visual que marca e posiciona</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Marketing Inteligente</h3>
                <p className="text-gray-300">Campanhas que geram resultados reais</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <GraduationCap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Treinamentos IA</h3>
                <p className="text-gray-300">Capacite sua equipe para o futuro</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl px-12 py-6"
              onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Quero fortalecer minha marca.', '_blank')}
            >
              <Award className="mr-2 w-6 h-6" />
              Quero fortalecer minha marca
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Synthra */}
      <section id="sobre" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Sobre a Synthra
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa de tecnologia focada em conectar pessoas, processos e IA para potencializar negócios. Nossa missão é democratizar o acesso à inteligência artificial de forma humanizada e estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">IA Humanizada</h3>
                <p className="text-gray-300">Tecnologia que serve às pessoas, não o contrário</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Time Especializado</h3>
                <p className="text-gray-300">Profissionais experientes em IA e estratégia</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">Resultados Rápidos</h3>
                <p className="text-gray-300">Implementação ágil com impacto mensurável</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Vamos conversar?
            </h2>
            <p className="text-xl text-gray-300">
              Entre em contato e descubra como podemos potencializar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <Card className="bg-slate-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Envie sua mensagem</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Conte-nos sobre seu projeto ou desafio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu e-mail *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Telefone (opcional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Empresa (opcional)"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem *"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white h-12 text-lg"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30 backdrop-blur-sm group hover:scale-105 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 text-cyan-400 mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="text-white font-semibold text-lg">WhatsApp</span>
                      <div className="text-cyan-200 text-sm">Resposta rápida e direta</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Canal preferencial para conversas rápidas e agendamentos.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Vi o site da Synthra e gostaria de conversar.', '_blank')}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    +55 51 99186-7042
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-8 h-8 text-purple-400 mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="text-white font-semibold text-lg">E-mail</span>
                      <div className="text-purple-200 text-sm">Para propostas e parcerias</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Canal oficial para comunicações formais e propostas comerciais.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                    onClick={() => window.open('mailto:contato@synthraia.com.br?subject=Contato via Site', '_blank')}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    contato@synthraia.com.br
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30 backdrop-blur-sm group hover:scale-105 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Instagram className="w-8 h-8 text-green-400 mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="text-white font-semibold text-lg">Instagram</span>
                      <div className="text-green-200 text-sm">Conteúdo e bastidores</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Acompanhe nossos projetos e insights sobre IA e estratégia.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    onClick={() => window.open('https://instagram.com/synthra.ia', '_blank')}
                  >
                    <Instagram className="mr-2 w-5 h-5" />
                    @synthra.ia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-900 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <img 
                    src={logoSynthra} 
                    alt="Synthra Tecnologia" 
                    className="h-10 w-auto"
                  />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Tecnologia, pessoas e estratégia conectadas para potencializar seu negócio. 
                IA First com especialistas humanos.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('consultoria')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Consultoria Estratégica
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('automacao')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Automação e IA
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('social')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Social Inteligente
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('sites')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Sites e MVPs
                  </button>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/5551991867042" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@synthraia.com.br" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/synthra.ia" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <button 
                onClick={() => window.open('https://wa.me/5551991867042', '_blank')}
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open('mailto:contato@synthraia.com.br', '_blank')}
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/synthra.ia', '_blank')}
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Synthra Tecnologia. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

