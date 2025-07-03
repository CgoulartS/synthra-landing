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
  RefreshCw
} from 'lucide-react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [blogPosts, setBlogPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  // API URL - ajuste conforme necessário
  const API_URL = 'https://synthra-blog-api.onrender.com/api'

  // Carregar posts do blog da API
  useEffect(() => {
    loadBlogPosts()
  }, [])

  const loadBlogPosts = async () => {
    try {
      setLoadingPosts(true)
      const response = await fetch(`${API_URL}/posts`)
      const data = await response.json()
      
      if (data.success) {
        setBlogPosts(data.posts)
      } else {
        console.error('Erro ao carregar posts:', data.error)
        // Fallback para posts estáticos se API não estiver disponível
        setBlogPosts(getStaticPosts())
      }
    } catch (error) {
      console.error('Erro ao conectar com API:', error)
      // Fallback para posts estáticos
      setBlogPosts(getStaticPosts())
    } finally {
      setLoadingPosts(false)
    }
  }

  // Posts estáticos como fallback
  const getStaticPosts = () => [
    {
      id: 'static-1',
      title: "Como criar seu primeiro Agente de IA",
      excerpt: "Guia completo para implementar um agente inteligente que trabalha por você, desde o planejamento até a execução.",
      content: `
        <h3>Por que criar um Agente de IA?</h3>
        <p>Em um mundo onde a eficiência determina o sucesso, ter um agente de IA trabalhando por você não é mais luxo - é necessidade. Um agente bem configurado pode executar tarefas complexas, tomar decisões baseadas em dados e trabalhar 24/7 sem parar.</p>
        
        <h3>O que é um Agente de IA?</h3>
        <p>Um agente de IA é um sistema inteligente que pode:</p>
        <ul>
          <li>Analisar dados e tomar decisões</li>
          <li>Executar tarefas automaticamente</li>
          <li>Aprender com interações passadas</li>
          <li>Integrar com suas ferramentas existentes</li>
        </ul>
        
        <h3>Passo a Passo para Criar seu Agente</h3>
        
        <h4>1. Defina o Objetivo</h4>
        <p>Antes de qualquer coisa, seja específico sobre o que seu agente deve fazer. Exemplos:</p>
        <ul>
          <li>Qualificar leads automaticamente</li>
          <li>Responder dúvidas de clientes</li>
          <li>Analisar dados de vendas</li>
          <li>Gerenciar agenda e compromissos</li>
        </ul>
        
        <h4>2. Escolha a Plataforma</h4>
        <p>Para iniciantes, recomendamos:</p>
        <ul>
          <li><strong>Make.com:</strong> Para automações visuais</li>
          <li><strong>OpenAI API:</strong> Para inteligência</li>
          <li><strong>Zapier:</strong> Para integrações simples</li>
        </ul>
        
        <h3>Próximos Passos</h3>
        <p>Quer implementar um agente de IA na sua empresa? A Synthra pode ajudar você a criar uma solução personalizada que funciona desde o primeiro dia.</p>
      `,
      author: "Camila Goulart",
      date: "15 de dezembro, 2024",
      readTime: "8 min",
      category: "Tutorial",
      tags: ["IA", "Tutorial", "Agentes"]
    },
    {
      id: 'static-2',
      title: "Bot vs IA: Qual a diferença real?",
      excerpt: "Entenda as diferenças fundamentais entre bots tradicionais e agentes de IA, e quando usar cada um.",
      content: `
        <h3>A Confusão do Mercado</h3>
        <p>No mercado brasileiro, existe uma confusão generalizada entre "bot" e "IA". Muitas empresas vendem bots simples como se fossem inteligência artificial avançada.</p>
        
        <h3>Bot Tradicional: O que é?</h3>
        <p>Um bot tradicional é um programa que segue regras pré-definidas:</p>
        <ul>
          <li>Funciona com "se isso, então aquilo"</li>
          <li>Respostas limitadas e pré-programadas</li>
          <li>Não aprende com interações</li>
          <li>Quebra facilmente com perguntas inesperadas</li>
        </ul>
        
        <h3>Agente de IA: O que faz a diferença?</h3>
        <p>Um agente de IA verdadeiro tem capacidades avançadas:</p>
        <ul>
          <li>Entende contexto e nuances da linguagem</li>
          <li>Gera respostas únicas para cada situação</li>
          <li>Aprende e melhora com o tempo</li>
          <li>Lida com perguntas complexas e inesperadas</li>
        </ul>
        
        <h3>Nossa Recomendação</h3>
        <p>Na Synthra, acreditamos que 2024 é o ano para investir em IA real. Os custos diminuíram drasticamente e a tecnologia amadureceu.</p>
      `,
      author: "Camila Goulart", 
      date: "12 de dezembro, 2024",
      readTime: "6 min",
      category: "Educação",
      tags: ["IA", "Bot", "Comparação"]
    }
  ]

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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterSubmitting(true)
    
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMessage("Por favor, insira um email válido.")
      setNewsletterSubmitting(false)
      setTimeout(() => setNewsletterMessage(''), 5000)
      return
    }

    try {
      // Integração REAL com Mailchimp usando JSONP
      const script = document.createElement('script')
      const callbackName = 'mailchimpCallback' + Date.now()
      
      window[callbackName] = function(data) {
        document.head.removeChild(script)
        delete window[callbackName]
        
        if (data.result === 'success') {
          setNewsletterMessage("🎉 Sucesso! Você receberá nossa newsletter semanalmente com insights práticos de IA.")
          setNewsletterEmail('')
        } else {
          if (data.msg && data.msg.includes('already subscribed')) {
            setNewsletterMessage("✅ Este email já está inscrito! Você receberá nossa newsletter semanalmente.")
            setNewsletterEmail('')
          } else {
            setNewsletterMessage("Erro ao se inscrever. Tente novamente ou entre em contato conosco.")
          }
        }
        setNewsletterSubmitting(false)
        setTimeout(() => setNewsletterMessage(''), 8000)
      }
      
      const mailchimpUrl = `https://synthraia.us14.list-manage.com/subscribe/post-json?u=33948c53290674560b9ba9e61dc00974&id=619bb23d0a&EMAIL=${encodeURIComponent(newsletterEmail)}&c=${callbackName}`
      
      script.src = mailchimpUrl
      document.head.appendChild(script)
      
      setTimeout(() => {
        if (window[callbackName]) {
          document.head.removeChild(script)
          delete window[callbackName]
          setNewsletterMessage("Timeout na inscrição. Tente novamente.")
          setNewsletterSubmitting(false)
          setTimeout(() => setNewsletterMessage(''), 5000)
        }
      }, 10000)
      
    } catch (error) {
      console.error("Erro ao se inscrever:", error)
      setNewsletterMessage("Erro ao se inscrever. Tente novamente ou entre em contato conosco.")
      setNewsletterSubmitting(false)
      setTimeout(() => setNewsletterMessage(''), 5000)
    }
  }

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agente Estratégico",
      description: "Criamos uma IA que pensa e executa como você. Toma decisões, analisa dados e executa tarefas complexas com sua personalidade e critérios.",
      cta: "Quero criar minha IA pessoal"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "IA de Atendimento",
      description: "Fluxo completo com GPT + WhatsApp + CRM. Atende, qualifica, agenda e nutre leads 24/7 com a qualidade do seu melhor vendedor.",
      cta: "Quero automatizar meu atendimento"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automação Total",
      description: "Conectamos Make, Kommo, Notion e IA para criar fluxos que trabalham sozinhos. Sua empresa funcionando enquanto você dorme.",
      cta: "Quero automatizar minha empresa"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "IA para Lançamentos",
      description: "Funis, conteúdo, automação e análise por IA. Do planejamento à execução, sua IA cuida de cada detalhe do seu lançamento.",
      cta: "Quero lançar com IA"
    }
  ]

  const valueProps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Automatizamos atendimento com IA"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Criamos agentes que trabalham por você"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Integramos tudo com suas ferramentas"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Resultados em 30 dias ou menos"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      content: "A Synthra transformou nossa operação. Nosso agente de IA atende 200+ leads por dia com qualidade superior ao humano.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Diretora de Marketing, Scale Co",
      content: "ROI de 400% em 3 meses. A automação da Synthra nos permitiu escalar sem contratar mais pessoas.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Fundador, Growth Labs",
      content: "Camila e equipe entregaram exatamente o que prometeram. Nossa IA funciona 24/7 e converte melhor que nossa equipe.",
      rating: 5
    }
  ]

  // Função para obter ícone baseado na categoria
  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'tutorial':
        return <Bot className="w-6 h-6" />
      case 'educação':
        return <Brain className="w-6 h-6" />
      case 'métricas':
        return <BarChart3 className="w-6 h-6" />
      default:
        return <FileText className="w-6 h-6" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Synthra.IA</h1>
                <p className="text-xs text-slate-400">A IA que pensa com você</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#blog" className="text-slate-300 hover:text-cyan-400 transition-colors">Blog</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Fale Conosco
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              🚀 Transforme sua empresa com IA
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              A IA que pensa com você
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Criamos agentes de IA que trabalham 24/7, automatizam processos complexos e escalam seu negócio sem aumentar custos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-3">
                <Rocket className="w-5 h-5 mr-2" />
                Quero automatizar minha empresa
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Ver como funciona
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  {prop.icon}
                  <span className="text-sm text-slate-400">{prop.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Soluções que <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">funcionam</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Não vendemos tecnologia. Vendemos resultados. Cada solução é projetada para gerar ROI real desde o primeiro mês.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Participe da maior comunidade de IA do Brasil
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Práticas semanais • Automação com propósito • Cases reais
              </p>
            </div>
            
            <div className="text-center mb-8">
              <blockquote className="text-xl md:text-2xl text-cyan-400 italic font-medium">
                "Aqui, a IA não substitui. Ela expande."
              </blockquote>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-3"
                onClick={() => window.open('https://t.me/+pa-ZYAu6siU1YThh', '_blank')}
              >
                <Send className="w-5 h-5 mr-2" />
                Entrar na comunidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sobre Camila Goulart
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Fundadora da Synthra. Especialista em liderança, processos e IA aplicada.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Une alma, estratégia e tecnologia para ajudar pessoas e empresas a fazerem mais com sentido.
              </p>
              <blockquote className="border-l-4 border-cyan-400 pl-6 mb-8">
                <p className="text-xl text-cyan-400 italic font-medium">
                  "A IA não substitui. Ela conecta."
                </p>
              </blockquote>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Quero aprender a liderar com IA
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/camila-goulart.png" 
                      alt="Camila Goulart - Fundadora"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{paddingBottom: '8px'}}>
              Blog de IA Prática
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights semanais, tutoriais práticos e cases reais de implementação de IA em negócios brasileiros.
            </p>
            
            {/* Botão para recarregar posts */}
            <div className="mt-6">
              <Button 
                onClick={loadBlogPosts}
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
                disabled={loadingPosts}
              >
                {loadingPosts ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Carregando...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Atualizar posts
                  </>
                )}
              </Button>
            </div>
          </div>

          {selectedPost ? (
            // Visualização do artigo individual
            <div className="max-w-4xl mx-auto">
              <Button 
                onClick={() => setSelectedPost(null)}
                variant="outline" 
                className="mb-8 border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Voltar para o blog
              </Button>
              
              <article className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700">
                {/* Header do artigo */}
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                      {getCategoryIcon(selectedPost.category)}
                    </div>
                    <div>
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-2">
                        {selectedPost.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span>{selectedPost.author}</span>
                        <span>•</span>
                        <span>{selectedPost.date}</span>
                        <span>•</span>
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                </div>

                {/* Conteúdo do artigo */}
                <div 
                  className="article-content prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* CTA final */}
                <div className="mt-12 pt-8 border-t border-slate-700 text-center">
                  <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-8 border border-slate-600/50">
                    <h3 className="text-2xl font-bold text-white mb-4">Gostou do conteúdo?</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Quer implementar essas estratégias na sua empresa? Nossa equipe pode ajudar você a transformar teoria em resultados práticos.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Falar com especialista
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            // Lista de artigos
            <div>
              {loadingPosts ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-300">Carregando artigos...</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {blogPosts.map((post) => (
                    <Card 
                      key={post.id} 
                      className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                      onClick={() => setSelectedPost(post)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                            {getCategoryIcon(post.category)}
                          </div>
                          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors leading-tight">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                          <span>{post.author}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">Ler artigo</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {!loadingPosts && blogPosts.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Nenhum artigo encontrado.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Newsletter "IA com Propósito"
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Receba semanalmente insights práticos, tutoriais exclusivos e cases reais de IA aplicada em negócios brasileiros.
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={newsletterSubmitting}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 whitespace-nowrap"
                  >
                    {newsletterSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Inscrevendo...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Quero receber
                      </>
                    )}
                  </Button>
                </div>
                {newsletterMessage && (
                  <p className={`mt-4 text-sm ${newsletterMessage.includes('🎉') || newsletterMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                    {newsletterMessage}
                  </p>
                )}
              </form>
              
              <div className="mt-6 text-sm text-slate-400">
                <p>✨ Conteúdo exclusivo • 📊 Cases reais • 🚀 Zero spam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Resultados que <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">falam</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empresas que transformaram seus negócios com nossas soluções de IA.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vamos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">conversar</span>
            </h2>
            <p className="text-xl text-slate-300">
              Conte-nos sobre seu desafio e vamos criar uma solução de IA que funciona para você.
            </p>
          </div>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="nome" className="text-slate-300">Nome completo</Label>
                    <Input 
                      id="nome" 
                      name="nome" 
                      required 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="empresa" className="text-slate-300">Empresa</Label>
                    <Input 
                      id="empresa" 
                      name="empresa" 
                      required 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="cargo" className="text-slate-300">Cargo</Label>
                    <Input 
                      id="cargo" 
                      name="cargo" 
                      required 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="telefone" className="text-slate-300">Telefone</Label>
                  <Input 
                    id="telefone" 
                    name="telefone" 
                    required 
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="mensagem" className="text-slate-300">Conte-nos sobre seu desafio</Label>
                  <Textarea 
                    id="mensagem" 
                    name="mensagem" 
                    rows={4} 
                    required 
                    className="bg-slate-700/50 border-slate-600 text-white"
                    placeholder="Descreva qual processo você gostaria de automatizar ou que tipo de IA você precisa..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
                
                {submitMessage && (
                  <p className={`text-center ${submitMessage.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Synthra.IA</h3>
                  <p className="text-xs text-slate-400">A IA que pensa com você</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Soluções inteligentes e humanas para automatizar, escalar e criar com propósito.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:bg-slate-800">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:bg-slate-800">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-slate-600 text-slate-400 hover:bg-slate-800"
                  onClick={() => window.open('https://t.me/+pa-ZYAu6siU1YThh', '_blank')}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Agente Estratégico</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">IA de Atendimento</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Automação Total</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">IA para Lançamentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@synthraia.com.br</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>synthraia.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Synthra.IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

