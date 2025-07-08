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
  FileText,
  Newspaper,
  ChevronUp,
  RefreshCw,
  Edit,
  Plus,
  Database,
  PieChart,
  GraduationCap,
  Puzzle,
  ShieldCheck,
  Palette,
  Lock,
  LogOut,
  User,
  Save,
  Trash2,
  Search,
  DollarSign,
  Code,
  Smartphone,
  Monitor,
  Workflow,
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
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [blogPosts, setBlogPosts] = useState([])
  const [showBlogAdmin, setShowBlogAdmin] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    readTime: '5 min'
  })

  // Estados de autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // Contadores animados
  const [economyCounter, setEconomyCounter] = useState(0)
  const [timeCounter, setTimeCounter] = useState(0)
  const [projectsCounter, setProjectsCounter] = useState(0)

  // Senha do admin
  const ADMIN_PASSWORD = 'Synthra2025!'

  // Chave para localStorage
  const BLOG_STORAGE_KEY = 'synthra_blog_posts'
  const AUTH_STORAGE_KEY = 'synthra_admin_auth'

  // Posts padrão do blog
  const defaultPosts = [
    {
      id: 'consultoria-ia-estrategica',
      title: 'Como a Consultoria em IA Transforma Negócios',
      excerpt: 'Descubra como um diagnóstico de maturidade em IA pode identificar oportunidades com retorno mensurável.',
      content: `
        <div class="article-header">
          <h1>Como a Consultoria em IA Transforma Negócios</h1>
          <div class="article-meta">
            <span class="author">Por Camila Goulart</span>
            <span class="date">4 de Janeiro, 2025</span>
            <span class="read-time">8 min de leitura</span>
          </div>
        </div>

        <div class="article-content">
          <h3>O Diagnóstico que Muda Tudo</h3>
          <p>Muitas empresas investem em IA sem saber por onde começar. O resultado? Projetos que não geram retorno e equipes frustradas. A <strong>Consultoria Estratégica em IA</strong> resolve esse problema com uma abordagem estruturada.</p>

          <h3>Diagnóstico de Maturidade em IA</h3>
          <p>Avaliamos 4 dimensões críticas:</p>
          <ul>
            <li><strong>Dados:</strong> Qualidade, estrutura e disponibilidade</li>
            <li><strong>Tecnologia:</strong> Infraestrutura e ferramentas existentes</li>
            <li><strong>Pessoas:</strong> Competências e cultura organizacional</li>
            <li><strong>Processos:</strong> Maturidade e padronização</li>
          </ul>

          <h3>Identificação de Oportunidades</h3>
          <p>Com base no diagnóstico, mapeamos oportunidades com <strong>retorno mensurável</strong>:</p>
          <ul>
            <li>Automação de processos repetitivos</li>
            <li>Otimização de tomada de decisão</li>
            <li>Personalização em escala</li>
            <li>Previsão e prevenção de problemas</li>
          </ul>

          <h3>Roadmap de Transformação</h3>
          <p>Criamos um plano estruturado em fases:</p>
          <ol>
            <li><strong>Quick Wins (0-3 meses):</strong> Resultados rápidos para gerar momentum</li>
            <li><strong>Prova de Conceito (3-6 meses):</strong> Validação de conceitos</li>
            <li><strong>Escala (6-12 meses):</strong> Expansão para toda organização</li>
            <li><strong>Inovação (12+ meses):</strong> Diferenciação competitiva</li>
          </ol>

          <h3>Treinamento para Adoção Segura</h3>
          <p>A tecnologia é apenas 30% do sucesso. Os outros 70% são pessoas e processos. Por isso, incluímos:</p>
          <ul>
            <li>Workshops práticos por área</li>
            <li>Mentoria para líderes</li>
            <li>Diretrizes de uso ético</li>
            <li>Governança e compliance</li>
          </ul>

          <h3>Resultados Esperados</h3>
          <p>Empresas que seguem nossa consultoria alcançam:</p>
          <ul>
            <li><strong>40-60% redução</strong> em tarefas manuais</li>
            <li><strong>25-35% aumento</strong> na produtividade</li>
            <li><strong>ROI de 300-500%</strong> no primeiro ano</li>
            <li><strong>Time to market 50% menor</strong> para novos produtos</li>
          </ul>

          <p>A IA não é sobre tecnologia. É sobre <strong>transformação inteligente</strong> que coloca pessoas no centro.</p>
        </div>
      `,
      author: 'Camila Goulart',
      date: '4 de Janeiro, 2025',
      readTime: '8 min',
      category: 'Consultoria',
      createdAt: Date.now() - 86400000
    },
    {
      id: 'automacao-inteligente-processos',
      title: 'Automação Inteligente: Além do RPA Tradicional',
      excerpt: 'Como combinar RPA com IA generativa para criar robôs que tomam decisões baseadas em contexto.',
      content: `
        <div class="article-header">
          <h1>Automação Inteligente: Além do RPA Tradicional</h1>
          <div class="article-meta">
            <span class="author">Por Camila Goulart</span>
            <span class="date">2 de Janeiro, 2025</span>
            <span class="read-time">7 min de leitura</span>
          </div>
        </div>

        <div class="article-content">
          <h3>A Evolução da Automação</h3>
          <p>RPA tradicional automatiza tarefas repetitivas, mas não consegue lidar com exceções ou tomar decisões. A <strong>Automação Inteligente de Processos (IPA)</strong> combina RPA com IA para criar robôs verdadeiramente inteligentes.</p>

          <h3>IPA + RPA com IA: A Combinação Perfeita</h3>
          <p>Nossa abordagem integra:</p>
          <ul>
            <li><strong>RPA:</strong> Para tarefas estruturadas e repetitivas</li>
            <li><strong>IA Generativa:</strong> Para interpretação e tomada de decisão</li>
            <li><strong>Machine Learning:</strong> Para aprendizado contínuo</li>
            <li><strong>OCR Inteligente:</strong> Para documentos não estruturados</li>
          </ul>

          <h3>Robôs que Tomam Decisões</h3>
          <p>Nossos <strong>Intelligent Agents</strong> conseguem:</p>
          <ul>
            <li>Analisar emails e extrair informações relevantes</li>
            <li>Classificar documentos por contexto, não apenas por formato</li>
            <li>Tomar decisões baseadas em regras de negócio complexas</li>
            <li>Adaptar-se a mudanças nos processos automaticamente</li>
          </ul>

          <h4>Exemplo Prático: Processamento de Faturas</h4>
          <p><strong>RPA Tradicional:</strong> Processa apenas faturas no formato padrão</p>
          <p><strong>IPA com IA:</strong> Processa qualquer formato, identifica inconsistências, sugere correções e aprende com exceções</p>

          <h3>Integração com Sistemas Legados</h3>
          <p>Conectamos a automação com:</p>
          <ul>
            <li><strong>CRMs:</strong> Salesforce, HubSpot, Kommo</li>
            <li><strong>ERPs:</strong> SAP, Oracle, Totvs</li>
            <li><strong>APIs:</strong> Qualquer sistema com interface</li>
            <li><strong>Bancos de Dados:</strong> SQL, NoSQL, Cloud</li>
          </ul>

          <h3>Implementação Gradual</h3>
          <p>Nossa metodologia garante sucesso:</p>
          <ol>
            <li><strong>Mapeamento:</strong> Identificação de processos candidatos</li>
            <li><strong>Prova de Conceito:</strong> Validação em ambiente controlado</li>
            <li><strong>Piloto:</strong> Implementação em processo real</li>
            <li><strong>Escala:</strong> Expansão para outros processos</li>
            <li><strong>Otimização:</strong> Melhoria contínua com IA</li>
          </ol>

          <h3>ROI Comprovado</h3>
          <p>Clientes que implementaram IPA alcançaram:</p>
          <ul>
            <li><strong>80% redução</strong> no tempo de processamento</li>
            <li><strong>95% precisão</strong> em tarefas automatizadas</li>
            <li><strong>60% economia</strong> em custos operacionais</li>
            <li><strong>24/7 operação</strong> sem intervenção humana</li>
          </ul>

          <p>A automação inteligente não substitui pessoas. Ela <strong>libera talentos</strong> para atividades estratégicas e criativas.</p>
        </div>
      `,
      author: 'Camila Goulart',
      date: '2 de Janeiro, 2025',
      readTime: '7 min',
      category: 'Automação',
      createdAt: Date.now() - 172800000
    }
  ]

  // Animação dos contadores
  useEffect(() => {
    const interval = setInterval(() => {
      setEconomyCounter(prev => prev < 50 ? prev + 1 : 50)
      setTimeCounter(prev => prev < 80 ? prev + 2 : 80)
      setProjectsCounter(prev => prev < 100 ? prev + 3 : 100)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Carregar posts do localStorage ou usar padrão
  useEffect(() => {
    const savedPosts = localStorage.getItem(BLOG_STORAGE_KEY)
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts)
        setBlogPosts(parsedPosts)
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
        setBlogPosts(defaultPosts)
        savePosts(defaultPosts)
      }
    } else {
      setBlogPosts(defaultPosts)
      savePosts(defaultPosts)
    }
  }, [])

  // Verificar se já está logado
  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_STORAGE_KEY)
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [])

  // Carregar script do Kommo após o componente montar
  useEffect(() => {
  if (document.getElementById('kommo_script')) return;

  const script = document.createElement('script');
  script.id = 'kommo_script';
  script.innerHTML = `(function(a,m,o,c,r,m){
    a[m]={
      id:"1047378",
      hash:"6dd7e40dff8df4b354fcb8ee068b507b4830e1e9525ba8b5ad0e22072ca29a19",
      locale:"pt",
      setMeta:function(p){
        this.params=(this.params||[]).concat([p])
      }
    };
    a[o]=a[o]||function(){
      (a[o].q=a[o].q||[]).push(arguments)
    };
    var d=a.document,
    s=d.createElement('script');
    s.async=true;
    s.id=m+'_script';
    s.src='https://gso.kommo.com/js/button.js';
    d.head&&d.head.appendChild(s)
  })(window,0,'crmPlugin',0,0,'crm_plugin');`;

  document.body.appendChild(script);
}, []);


  // Controle do botão voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para salvar posts no localStorage
  const savePosts = (posts) => {
    try {
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts))
    } catch (error) {
      console.error('Erro ao salvar posts:', error)
    }
  }

  // Função de login
  const handleLogin = (e) => {
    e.preventDefault()
    if (loginPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(AUTH_STORAGE_KEY, 'authenticated')
      setShowLogin(false)
      setLoginPassword('')
      setLoginError('')
    } else {
      setLoginError('Senha incorreta')
    }
  }

  // Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setShowBlogAdmin(false)
  }

  // Função para adicionar novo post
  const handleAddPost = (e) => {
    e.preventDefault()
    if (!newPost.title || !newPost.excerpt || !newPost.content) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    const post = {
      id: newPost.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'),
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: `
        <div class="article-header">
          <h1>${newPost.title}</h1>
          <div class="article-meta">
            <span class="author">Por Camila Goulart</span>
            <span class="date">${new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span class="read-time">${newPost.readTime} de leitura</span>
          </div>
        </div>
        <div class="article-content">
          ${newPost.content.replace(/\n/g, '<br>')}
        </div>
      `,
      author: 'Camila Goulart',
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: newPost.readTime,
      category: 'IA',
      createdAt: Date.now()
    }

    const updatedPosts = [post, ...blogPosts]
    setBlogPosts(updatedPosts)
    savePosts(updatedPosts)
    
    setNewPost({ title: '', excerpt: '', content: '', readTime: '5 min' })
    alert('Post adicionado com sucesso!')
  }

  // Função para deletar post
  const handleDeletePost = (postId) => {
    if (window.confirm('Tem certeza que deseja deletar este post?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== postId)
      setBlogPosts(updatedPosts)
      savePosts(updatedPosts)
    }
  }

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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail) return

    setNewsletterSubmitting(true)

    try {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.name = 'hidden_iframe'
      document.body.appendChild(iframe)

      const form = document.createElement('form')
      form.action = 'https://synthraia.us14.list-manage.com/subscribe/post?u=33948c53290674560b9ba9e61dc00974&id=e5c7b5b5e5'
      form.method = 'POST'
      form.target = 'hidden_iframe'

      const emailInput = document.createElement('input')
      emailInput.type = 'email'
      emailInput.name = 'EMAIL'
      emailInput.value = newsletterEmail

      form.appendChild(emailInput)
      document.body.appendChild(form)
      form.submit()

      setTimeout(() => {
        setNewsletterMessage('Inscrição realizada com sucesso!')
        setNewsletterEmail('')
        document.body.removeChild(form)
        document.body.removeChild(iframe)
      }, 2000)

    } catch (error) {
      console.error('Erro na newsletter:', error)
      setNewsletterMessage('Erro ao se inscrever. Tente novamente.')
    } finally {
      setNewsletterSubmitting(false)
      setTimeout(() => setNewsletterMessage(''), 5000)
    }
  }

  // Serviços originais mantidos
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

  // Novos agentes de IA adicionados
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

  // Novos modos de desenvolvimento
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

  // Value props atualizadas
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

  // Testimonials originais mantidos
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO TechCorp",
      content: "O Agente Estratégico da Synthra revolucionou nossa operação. É como ter uma versão digital da Camila trabalhando 24/7 na nossa empresa.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Vendas",
      content: "A IA de Atendimento aumentou nossa conversão em 300%. Nossos leads são qualificados e nutridos automaticamente com qualidade humana.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Fundadora StartupX",
      content: "A Automação Total da Synthra me devolveu 20 horas por semana. Agora posso focar no que realmente importa: estratégia e crescimento.",
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
              <img src="/logo.png" alt="Synthra Logo" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-300 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#agentes" className="text-gray-300 hover:text-cyan-400 transition-colors">Agentes IA</a>
              <a href="#desenvolvimento" className="text-gray-300 hover:text-cyan-400 transition-colors">Desenvolvimento</a>
              <a href="#cases" className="text-gray-300 hover:text-cyan-400 transition-colors">Cases</a>
              <a href="#comunidade" className="text-gray-300 hover:text-cyan-400 transition-colors">Comunidade</a>
              <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            </nav>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-6 py-3"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              <Lightbulb className="mr-2 w-4 h-4" />
              Agende uma conversa
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Atualizado com novo posicionamento */}
      <section id="inicio" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
              🤖 A Primeira Consultoria com IA Autônoma
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
              Automação Inteligente
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg px-8 py-4 border-0"
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 w-5 h-5" />
                Análise Gratuita com IA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4"
                onClick={() => document.getElementById('cases').scrollIntoView({ behavior: 'smooth' })}
              >
                <Settings className="mr-2 w-5 h-5" />
                Explore nossos cases
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Atualizada */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              O que fazemos na prática
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  {prop.icon}
                  <span className="text-sm text-gray-300">{prop.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mantida original */}
      <section id="servicos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções autorais que combinam tecnologia de ponta com propósito humano.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                    onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                  >
                    {service.cta}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  {/* Partnerships Section */}
      <section id="parcerias" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Parcerias Estratégicas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certificações e parcerias que garantem excelência e confiabilidade em nossas soluções.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-6">
                      <Award className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">Parceira Oficial Kommo</h3>
                    </div>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Somos <strong className="text-cyan-400">parceiros certificados da Kommo</strong>, uma das principais plataformas de CRM e automação de vendas do mundo. Esta certificação nos permite oferecer:
                    </p>
                    <ul className="text-gray-300 space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Implementação especializada</strong> do Kommo CRM</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Automações avançadas</strong> de vendas e marketing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Integração com IA</strong> para potencializar resultados</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Suporte técnico especializado</strong> e treinamento</span>
                      </li>
                    </ul>
                    <Button 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                      onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Handshake className="mr-2 w-4 h-4" />
                      Implementar Kommo + IA
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-2xl p-8 inline-block shadow-lg">
                      <img 
                        src="/Badgelight.png" 
                        alt="Kommo Partner Badge" 
                        className="h-24 w-auto mx-auto"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Certificação oficial Kommo Partner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Por que escolher um parceiro certificado?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Expertise Validada</h4>
                    <p className="text-gray-400 text-sm">Conhecimento técnico certificado e atualizado</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Implementação Rápida</h4>
                    <p className="text-gray-400 text-sm">Processos otimizados e melhores práticas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Suporte Garantido</h4>
                    <p className="text-gray-400 text-sm">Acesso direto ao suporte técnico oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção Agentes de IA */}
      <section id="agentes" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              🤖 Nossos Agentes de IA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

      {/* Nova Seção Desenvolvimento Inteligente */}
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

                  <Button 
                    className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 text-white border-0 mt-6`}
                    onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Quero Este Desenvolvimento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section - Mantida original */}
      <section id="cases" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cases & Projetos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados reais de quem já transformou seu negócio com IA.
            </p>
          </div>

          {/* Case em Desenvolvimento */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/30">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30">
                    Case em desenvolvimento
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  O Agente Social da Synthra
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Um agente que cria, agenda e publica conteúdo automaticamente, aliviando a sobrecarga da founder.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-6 h-6 text-pink-400" />
                    <span className="text-gray-300">Carrossel no Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Texto no LinkedIn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Send className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">Resumo no Telegram</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                    onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Quero um agente como este
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
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

      {/* Community Section - Mantida original */}
      <section id="comunidade" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
                <Users className="w-12 h-12 text-cyan-400" />
                Participe da maior comunidade de IA do Brasil
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Práticas semanais • Automação com propósito • Cases reais
              </p>
              <p className="text-lg text-cyan-400 mb-8 italic">
                "Aqui, a IA não substitui. Ela expande."
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg px-8 py-4 border-0"
                onClick={() => window.open('https://t.me/+pa-ZYAu6siU1YThh', '_blank')}
              >
                Entrar na Comunidade
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Reformulada para Synthra */}
      <section id="sobre" className="py-20 px-4 bg-gray-900/50">
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

      {/* Blog Section - Mantida original com funcionalidades */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog de IA Prática
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutoriais e cases reais para você dominar a IA no seu negócio.
            </p>
            
            {/* Botão Admin */}
            <div className="mt-8">
              {!isAuthenticated ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:bg-gray-700"
                  onClick={() => setShowLogin(true)}
                >
                  <Lock className="mr-2 w-4 h-4" />
                  Admin
                </Button>
              ) : (
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => setShowBlogAdmin(!showBlogAdmin)}
                  >
                    <Edit className="mr-2 w-4 h-4" />
                    {showBlogAdmin ? 'Fechar Admin' : 'Gerenciar Blog'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Modal de Login */}
          {showLogin && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="bg-gray-800 border-gray-700 w-full max-w-md mx-4">
                <CardHeader>
                  <CardTitle className="text-white">Login Admin</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="password" className="text-white">Senha</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Digite a senha"
                      />
                    </div>
                    {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1 bg-cyan-500 hover:bg-cyan-600">
                        Entrar
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setShowLogin(false)
                          setLoginPassword('')
                          setLoginError('')
                        }}
                        className="border-gray-600 text-gray-400"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Painel Admin */}
          {showBlogAdmin && isAuthenticated && (
            <div className="mb-12">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Plus className="mr-2 w-5 h-5" />
                    Adicionar Novo Post
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddPost} className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-white">Título *</Label>
                      <Input
                        id="title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Título do post"
                      />
                    </div>
                    <div>
                      <Label htmlFor="excerpt" className="text-white">Resumo *</Label>
                      <Textarea
                        id="excerpt"
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white h-20"
                        placeholder="Breve descrição do post"
                      />
                    </div>
                    <div>
                      <Label htmlFor="content" className="text-white">Conteúdo *</Label>
                      <Textarea
                        id="content"
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white h-40"
                        placeholder="Conteúdo completo do post (pode usar HTML)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="readTime" className="text-white">Tempo de Leitura</Label>
                      <Input
                        id="readTime"
                        value={newPost.readTime}
                        onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="5 min"
                      />
                    </div>
                    <Button type="submit" className="bg-green-500 hover:bg-green-600">
                      <Save className="mr-2 w-4 h-4" />
                      Publicar Post
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Modal do Artigo */}
          {selectedArticle && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">Artigo</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedArticle(null)}
                    className="border-gray-600 text-gray-400"
                  >
                    Fechar
                  </Button>
                </div>
                <div className="p-6">
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Lista de Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                      onClick={() => setSelectedArticle(post)}
                    >
                      Ler artigo
                      <BookOpen className="ml-2 w-4 h-4" />
                    </Button>
                    {isAuthenticated && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-red-400/30 text-red-400 hover:bg-red-400 hover:text-black"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
            >
              Ver todos os artigos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Mantida original com funcionalidades */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Newsletter IA com Propósito
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Receba semanalmente insights práticos, cases reais e tendências de IA que realmente importam para o seu negócio.
              </p>
              <div className="max-w-md mx-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
                  <Input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1"
                  />
                  <Button 
                    type="submit"
                    disabled={newsletterSubmitting}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6"
                  >
                    {newsletterSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </form>
                <p className="text-sm text-gray-400 mt-4">
                  Sem spam. Apenas conteúdo que agrega valor. Cancele quando quiser.
                </p>
                {newsletterMessage && (
                  <p className="text-sm text-green-400 mt-2">{newsletterMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Mantida original */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vamos pensar juntos?
              </h2>
              <p className="text-xl text-gray-300">
                Conte-nos seu desafio. Vamos criar uma solução que faz sentido para você.
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
                      <p className="text-gray-400">contato@synthraia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-gray-400">+55 (51) 9 9186-7042</p>
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
              </div>
              
              <div>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Fale conosco</CardTitle>
                    <CardDescription className="text-gray-400">
                      Conte-nos sobre seu desafio. Vamos criar uma solução que faz sentido.
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
                          placeholder="Conte-nos seu desafio ou como podemos ajudar..." 
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

      {/* Footer - Mantido original */}
      <footer className="bg-black/70 py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Synthra Logo" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                A primeira consultoria com inteligência artificial autônoma. Transformando empresas através de automação inteligente.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="text-gray-400 hover:text-cyan-400 transition-colors">Sobre a Synthra</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-cyan-400 transition-colors">Nossos Serviços</a></li>
                <li><a href="#cases" className="text-gray-400 hover:text-cyan-400 transition-colors">Cases & Projetos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://t.me/+pa-ZYAu6siU1YThh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Entre na comunidade</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-cyan-400 transition-colors">Fale com a equipe</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog de IA prática</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">IA com Propósito</p>
              <Button 
                className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={() => document.querySelector('input[type="email"]').focus()}
              >
                <Newspaper className="mr-2 w-4 h-4" />
                Assinar
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Synthra Tecnologia. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">A IA não substitui. Ela conecta.</p>
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

      {/* Chat Kommo */}
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,u,b){w['KommoWidgetSettings']={
              id: 'your-kommo-id',
              locale: 'pt'
            };
            var s=d.createElement('script');s.async=1;s.src=u+'?'+b;
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
            })(window,document,'https://widget.kommo.com/widget/widget.js','v=2');
          `
        }}
      />


    </div>
  )
}

export default App

