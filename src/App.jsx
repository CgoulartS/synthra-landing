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
  Award,
  Handshake,
  MessageCircle
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
      createdAt: Date.now() - 86400000 // 1 dia atrás
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
      createdAt: Date.now() - 172800000 // 2 dias atrás
    }
  ]

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

  // Controle do botão voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Carregar script da Kommo
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      (function(a,m,o,c,r,m){
        a[m]={
          id:"1047378",
          hash:"6dd7e40dff8df4b354fcb8ee068b507b4830e1e9525ba8b5ad0e22072ca29a19",
          locale:"pt",
          setMeta:function(p){this.params=(this.params||[]).concat([p])}
        };
        a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
        var d=a.document,s=d.createElement('script');
        s.async=true;
        s.id=m+'_script';
        s.src='https://gso.kommo.com/js/button.js';
        d.head&&d.head.appendChild(s)
      }(window,0,'crmPlugin',0,0,'crm_plugin'));
    `
    document.head.appendChild(script)

    return () => {
      // Cleanup se necessário
      const existingScript = document.getElementById('crm_plugin_script')
      if (existingScript) {
        existingScript.remove()
      }
    }
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
      setLoginError('Senha incorreta. Tente novamente.')
      setLoginPassword('')
    }
  }

  // Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setShowBlogAdmin(false)
  }

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Função para newsletter SEM REDIRECIONAMENTO
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterSubmitting(true)
    setNewsletterMessage('')

    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMessage('❌ Por favor, insira um email válido.')
      setNewsletterSubmitting(false)
      return
    }

    try {
      // Criar iframe oculto para envio SEM redirecionamento
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.name = 'hidden-mailchimp-form'
      document.body.appendChild(iframe)
      
      // Criar formulário temporário
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://synthraia.us14.list-manage.com/subscribe/post?u=a816257ff44d8ef7acb18ebc1&id=619bb23d0a&f_id=004ac2e1f0'
      form.target = 'hidden-mailchimp-form' // Enviar para iframe oculto
      
      // Adicionar campo de email
      const emailInput = document.createElement('input')
      emailInput.type = 'email'
      emailInput.name = 'EMAIL'
      emailInput.value = newsletterEmail
      form.appendChild(emailInput)
      
      // Honeypot (anti-spam)
      const honeypot = document.createElement('input')
      honeypot.type = 'text'
      honeypot.name = 'b_a816257ff44d8ef7acb18ebc1_619bb23d0a'
      honeypot.value = ''
      honeypot.style.display = 'none'
      form.appendChild(honeypot)
      
      // Adicionar formulário ao DOM e enviar
      document.body.appendChild(form)
      form.submit()
      
      // Limpar após 2 segundos
      setTimeout(() => {
        if (document.body.contains(form)) document.body.removeChild(form)
        if (document.body.contains(iframe)) document.body.removeChild(iframe)
      }, 2000)
      
      // Sucesso - usuário fica no site!
      setNewsletterMessage('✅ Inscrição realizada com sucesso! Bem-vindo à Newsletter IA Estratégica.')
      setNewsletterEmail('')
      
    } catch (error) {
      console.error('Erro newsletter:', error)
      setNewsletterMessage('❌ Erro temporário. Tente novamente em alguns minutos.')
    } finally {
      setNewsletterSubmitting(false)
      setTimeout(() => setNewsletterMessage(''), 8000)
    }
  }

  // Função para adicionar novo post PERMANENTE
  const handleAddPost = () => {
    if (!newPost.title || !newPost.content) {
      alert('Título e conteúdo são obrigatórios!')
      return
    }

    const post = {
      id: `post-${Date.now()}`,
      title: newPost.title,
      excerpt: newPost.excerpt || newPost.content.substring(0, 150) + '...',
      content: `
        <div class="article-header">
          <h1>${newPost.title}</h1>
          <div class="article-meta">
            <span class="author">Por Camila Goulart</span>
            <span class="date">${new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span class="read-time">${newPost.readTime}</span>
          </div>
        </div>
        <div class="article-content">
          ${newPost.content.split('\n').map(paragraph => {
            const trimmed = paragraph.trim()
            if (!trimmed) return ''
            if (trimmed.startsWith('### ')) {
              return `<h3>${trimmed.substring(4)}</h3>`
            }
            if (trimmed.startsWith('#### ')) {
              return `<h4>${trimmed.substring(5)}</h4>`
            }
            if (trimmed.startsWith('> ')) {
              return `<blockquote>${trimmed.substring(2)}</blockquote>`
            }
            if (trimmed === '---') {
              return '<hr>'
            }
            return `<p>${trimmed}</p>`
          }).join('')}
        </div>
      `,
      author: 'Camila Goulart',
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: newPost.readTime,
      category: 'Artigo',
      createdAt: Date.now()
    }

    const updatedPosts = [post, ...blogPosts]
    setBlogPosts(updatedPosts)
    savePosts(updatedPosts) // SALVAR PERMANENTEMENTE
    
    setNewPost({ title: '', excerpt: '', content: '', readTime: '5 min' })
    setShowBlogAdmin(false)
    alert('✅ Artigo publicado com sucesso e salvo permanentemente!')
  }

  // Função para deletar post
  const handleDeletePost = (postId) => {
    if (window.confirm('Tem certeza que deseja deletar este artigo?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== postId)
      setBlogPosts(updatedPosts)
      savePosts(updatedPosts)
      alert('Artigo deletado com sucesso!')
    }
  }

  // Função para formulário de contato
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

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consultoria Estratégica em Inteligência Artificial",
      description: "Diagnóstico de maturidade em IA, identificação de oportunidades com retorno mensurável, roadmap de transformação e treinamento de times para adoção segura e consciente.",
      cta: "Quero uma consultoria estratégica"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automação Inteligente de Processos (IPA + RPA com IA)",
      description: "Automatização de tarefas repetitivas com IA generativa, robôs que tomam decisões baseadas em contexto e integração com sistemas legados, CRMs, ERPs e APIs.",
      cta: "Quero automatizar processos"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Criação de Dashboards Inteligentes e Insights com IA",
      description: "Dashboards dinâmicos com análises preditivas e prescritivas, visualização de dados com apoio de LLMs para tomada de decisão e chatbots analíticos.",
      cta: "Quero dashboards inteligentes"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Desenvolvimento de Agentes Autônomos",
      description: "Criação de IAs personalizadas que executam tarefas de ponta a ponta, bots multi-plataforma (WhatsApp, Telegram, Notion, CRMs) que aprendem com o uso.",
      cta: "Quero agentes autônomos"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Treinamentos e Formação em IA para Equipes e Líderes",
      description: "Formação prática em uso estratégico de IA no trabalho, workshops sobre IA generativa, automação e ética, trilha de aprendizado customizada por perfil e área.",
      cta: "Quero treinamentos em IA"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Soluções Personalizadas com IA Generativa",
      description: "Desenvolvimento de APIs com modelos customizados (LLMs privados ou públicos), construção de apps, plataformas e ferramentas baseadas em IA.",
      cta: "Quero soluções personalizadas"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatbots Inteligentes e Suporte com IA",
      description: "Atendimento com IA treinada no contexto do negócio, capacidade de interpretar documentos, PDFs, planilhas e chatbots conectados a CRMs e WhatsApp.",
      cta: "Quero chatbots inteligentes"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding com IA: Posicionamento, Copywriting e Lançamentos",
      description: "Criação de narrativas, nomes e identidades com apoio de IA, copywriting avançado (VSL, pitch, sequências de e-mail) e suporte a lançamentos com automações.",
      cta: "Quero branding com IA"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Governança, Ética e Segurança em IA",
      description: "Implantação de boas práticas e uso ético da IA, diretrizes para evitar vieses, garantir transparência e conformidade com LGPD e normas internacionais.",
      cta: "Quero governança em IA"
    }
  ]

  const valueProps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Consultoria estratégica para transformação com IA"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Automação inteligente de processos complexos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Desenvolvimento de agentes autônomos personalizados"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Treinamento e capacitação de equipes em IA"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO TechCorp",
      content: "A consultoria estratégica da Synthra Tecnologia transformou nossa visão sobre IA. Implementamos soluções que geraram 400% de ROI no primeiro ano.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Operações",
      content: "A automação inteligente de processos reduziu 80% do trabalho manual. Nossos colaboradores agora focam em atividades estratégicas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Fundadora StartupX",
      content: "Os agentes autônomos criados pela Synthra funcionam 24/7. É como ter uma equipe trabalhando enquanto dormimos.",
      rating: 5
    }
  ]

  // Modal de Login
  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700 w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <CardTitle className="text-white">Acesso Administrativo</CardTitle>
            <CardDescription className="text-gray-400">
              Digite a senha para acessar o painel de administração do blog
            </CardDescription>
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
                  placeholder="Digite a senha"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}
              <div className="flex gap-4">
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                >
                  Entrar
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setShowLogin(false)}
                  className="border-gray-600 text-gray-400"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Se um artigo está selecionado, mostrar apenas ele
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Header simplificado para artigo */}
        <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/logo-synthra.png" alt="Synthra Tecnologia" className="h-16 w-auto" />
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  onClick={() => setSelectedArticle(null)}
                >
                  ← Voltar ao Blog
                </Button>
                {isAuthenticated && (
                  <Button 
                    variant="outline"
                    onClick={handleLogout}
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo do artigo */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div 
            className="article-wrapper"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
          
          {/* CTA no final do artigo */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Gostou do conteúdo?
              </h3>
              <p className="text-gray-300 mb-6">
                Vamos conversar sobre como implementar IA na sua empresa
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                onClick={() => {
                  setSelectedArticle(null)
                  setTimeout(() => {
                    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
              >
                Falar com especialista
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Botão voltar ao topo */}
        {showBackToTop && (
          <Button
            className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full w-12 h-12 shadow-lg z-50"
            onClick={scrollToTop}
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        )}

        {/* Widget WhatsApp */}
        <div className="fixed bottom-6 left-6 z-40">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
            onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Vi seu site e gostaria de saber mais sobre consultoria em IA.', '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo-synthra.png" alt="Synthra Tecnologia" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-300 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#parcerias" className="text-gray-300 hover:text-cyan-400 transition-colors">Parcerias</a>
              <a href="#cases" className="text-gray-300 hover:text-cyan-400 transition-colors">Cases</a>
              <a href="#comunidade" className="text-gray-300 hover:text-cyan-400 transition-colors">Comunidade</a>
              <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-6 py-3"
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              >
                <Lightbulb className="mr-2 w-4 h-4" />
                Agende uma conversa
              </Button>
              {isAuthenticated && (
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
              A IA que pensa com você
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Consultoria estratégica, automação inteligente e soluções personalizadas em IA para transformar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg px-8 py-4 border-0"
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
              >
                <Lightbulb className="mr-2 w-5 h-5" />
                Agende uma conversa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4"
                onClick={() => document.getElementById('cases').scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 w-5 h-5" />
                Ver nossos cases
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              O que fazemos na prática
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-center space-x-4 text-left">
                  {prop.icon}
                  <span className="text-lg text-gray-300">{prop.text}</span>
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em IA para transformar sua empresa com estratégia, tecnologia e resultados mensuráveis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">{service.icon}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white text-center mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed mb-6 text-center">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cases & Resultados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformações reais de empresas que implementaram IA com estratégia e resultados mensuráveis.
            </p>
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

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            >
              Quero resultados como estes
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidade" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Participe da maior comunidade de IA do Brasil
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Práticas semanais • Automação com propósito • Cases reais • Networking qualificado
              </p>
              <p className="text-lg text-cyan-400 mb-8 italic">
                "Aqui, a IA não substitui. Ela conecta e transforma."
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

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sobre Camila Goulart
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Fundadora da Synthra Tecnologia. Especialista em consultoria estratégica, automação inteligente e implementação de IA em negócios.
                </p>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Une visão estratégica, conhecimento técnico e experiência prática para ajudar empresas a transformarem seus negócios com IA de forma consciente e rentável.
                </p>
                <blockquote className="text-2xl text-cyan-400 italic mb-8 border-l-4 border-cyan-400 pl-6">
                  "A IA não substitui. Ela conecta pessoas, processos e possibilidades."
                </blockquote>
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                  onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero uma consultoria estratégica
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 rounded-full overflow-hidden mx-auto border-4 border-cyan-400/30">
                  <img 
                    src="/camila-goulart.png" 
                    alt="Camila Goulart - Fundadora da Synthra Tecnologia" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              Blog de IA Estratégica
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights práticos, estratégias comprovadas e cases reais para você dominar a IA no seu negócio.
            </p>
            
            {/* Botão para adicionar post (admin) - VISUAL LIMPO */}
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                variant="outline"
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={() => {
                  if (isAuthenticated) {
                    setShowBlogAdmin(!showBlogAdmin)
                  } else {
                    setShowLogin(true)
                  }
                }}
              >
                {isAuthenticated ? (
                  <>
                    <Plus className="mr-2 w-4 h-4" />
                    Adicionar novo artigo
                  </>
                ) : (
                  <>
                    <User className="mr-2 w-4 h-4" />
                    Acesso administrativo
                  </>
                )}
              </Button>
              {isAuthenticated && (
                <div className="flex items-center text-sm text-cyan-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Admin logado
                </div>
              )}
            </div>

            {/* Painel de administração do blog */}
            {showBlogAdmin && isAuthenticated && (
              <Card className="bg-gray-800/50 border-gray-700 mb-8 text-left">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Edit className="w-5 h-5 text-cyan-400" />
                    Adicionar Novo Artigo
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Preencha as informações abaixo. O artigo será salvo automaticamente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Título</Label>
                    <Input 
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="Título do artigo"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Resumo (opcional)</Label>
                    <Input 
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                      placeholder="Breve descrição do artigo"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Tempo de leitura</Label>
                    <Input 
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                      placeholder="5 min"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Conteúdo</Label>
                    <Textarea 
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      placeholder="Escreva o conteúdo do artigo aqui. Use ### para títulos, #### para subtítulos, > para citações."
                      className="bg-gray-700 border-gray-600 text-white h-40"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Dica: Use ### para títulos, #### para subtítulos, > para citações, --- para separadores
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleAddPost}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                    >
                      <Save className="mr-2 w-4 h-4" />
                      Publicar Artigo
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setShowBlogAdmin(false)}
                      className="border-gray-600 text-gray-400"
                    >
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(0, 6).map((post, index) => (
              <Card key={post.id || index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    {post.category === 'Consultoria' && <Brain className="w-16 h-16 text-cyan-400" />}
                    {post.category === 'Automação' && <Cog className="w-16 h-16 text-cyan-400" />}
                    {!['Consultoria', 'Automação'].includes(post.category) && <BookOpen className="w-16 h-16 text-cyan-400" />}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors flex-1">
                      {post.title}
                    </CardTitle>
                    {isAuthenticated && post.id.startsWith('post-') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeletePost(post.id)
                        }}
                        className="border-red-400/30 text-red-400 hover:bg-red-400 hover:text-white ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-gray-400">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => setSelectedArticle(post)}
                  >
                    Ler artigo completo
                    <BookOpen className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              onClick={() => {
                // Scroll para o topo da seção blog para ver todos
                document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver todos os artigos ({blogPosts.length})
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - SEM REDIRECIONAMENTO */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Newsletter IA Estratégica
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Receba semanalmente insights práticos, estratégias comprovadas e tendências de IA que realmente transformam negócios.
              </p>
              
              {/* FORMULÁRIO SEM REDIRECIONAMENTO */}
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <Input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6"
                    disabled={newsletterSubmitting}
                  >
                    {newsletterSubmitting ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Assinar
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
                {newsletterMessage && (
                  <p className={`text-sm mt-4 ${newsletterMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                    {newsletterMessage}
                  </p>
                )}
                <p className="text-sm text-gray-400 mt-4">
                  Sem spam. Apenas conteúdo estratégico que agrega valor. Cancele quando quiser.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vamos transformar seu negócio?
              </h2>
              <p className="text-xl text-gray-300">
                Conte-nos seu desafio. Vamos criar uma estratégia de IA que gera resultados reais.
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
                      <p className="text-gray-400">+55 (51) 99186-7042</p>
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
                      Conte-nos sobre seu desafio. Vamos criar uma estratégia de IA personalizada.
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

      {/* Footer */}
      <footer className="bg-black/70 py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo-synthra.png" alt="Synthra Tecnologia" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                A IA que pensa com você. Consultoria estratégica e soluções inteligentes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="text-gray-400 hover:text-cyan-400 transition-colors">Sobre a Synthra Tecnologia</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-cyan-400 transition-colors">Nossos Serviços</a></li>
                <li><a href="#parcerias" className="text-gray-400 hover:text-cyan-400 transition-colors">Parcerias</a></li>
                <li><a href="#cases" className="text-gray-400 hover:text-cyan-400 transition-colors">Cases & Resultados</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://t.me/+pa-ZYAu6siU1YThh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Entre na comunidade</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-cyan-400 transition-colors">Fale com a equipe</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog de IA estratégica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">IA Estratégica</p>
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
            <p className="mt-2 text-sm">A IA não substitui. Ela conecta e transforma.</p>
          </div>
        </div>
      </footer>

      {/* Botão voltar ao topo */}
      {showBackToTop && (
        <Button
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full w-12 h-12 shadow-lg z-50"
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}

      {/* Widget WhatsApp */}
      <div className="fixed bottom-6 left-6 z-40">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
          onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Vi seu site e gostaria de saber mais sobre consultoria em IA.', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

export default App

