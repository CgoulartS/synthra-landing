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
  Newspaper
} from 'lucide-react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)

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
    
    // Simulação de envio para newsletter (pode ser integrado com Mailchimp depois)
    try {
      setNewsletterMessage("Obrigado! Você receberá nossa newsletter semanalmente.")
      setNewsletterEmail('')
      setTimeout(() => setNewsletterMessage(''), 5000)
    } catch (error) {
      setNewsletterMessage("Erro ao se inscrever. Tente novamente.")
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
      text: "Construímos fluxos com Make, Notion, Kommo e GPT"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      text: "Educamos sua equipe para usar IA no dia a dia"
    }
  ]

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

  const blogPosts = [
    {
      id: 1,
      title: "Como criar seu primeiro Agente de IA",
      excerpt: "Guia prático para desenvolver um agente inteligente que trabalha por você 24/7.",
      content: `
        <h3>Introdução</h3>
        <p>Criar um agente de IA não é mais ficção científica. Com as ferramentas certas e a metodologia adequada, qualquer empresa pode ter seu próprio agente inteligente trabalhando 24/7.</p>
        
        <h3>O que é um Agente de IA?</h3>
        <p>Um agente de IA é diferente de um chatbot simples. Enquanto bots seguem scripts pré-definidos, agentes de IA:</p>
        <ul>
          <li>Tomam decisões baseadas em contexto</li>
          <li>Aprendem com interações anteriores</li>
          <li>Executam tarefas complexas de forma autônoma</li>
          <li>Integram-se com múltiplas ferramentas e sistemas</li>
        </ul>
        
        <h3>Passo a Passo para Criar seu Agente</h3>
        <h4>1. Defina o Propósito</h4>
        <p>Antes de começar, seja claro sobre o que seu agente deve fazer. Exemplos:</p>
        <ul>
          <li>Qualificar leads automaticamente</li>
          <li>Gerenciar agenda e compromissos</li>
          <li>Analisar dados e gerar relatórios</li>
          <li>Criar e publicar conteúdo</li>
        </ul>
        
        <h4>2. Escolha as Ferramentas</h4>
        <p>Na Synthra, utilizamos uma stack comprovada:</p>
        <ul>
          <li><strong>GPT-4:</strong> Para processamento de linguagem natural</li>
          <li><strong>Make:</strong> Para automação e integrações</li>
          <li><strong>Notion:</strong> Como base de conhecimento</li>
          <li><strong>Kommo:</strong> Para gestão de relacionamento</li>
        </ul>
        
        <h4>3. Treine com seus Dados</h4>
        <p>O diferencial está no treinamento personalizado:</p>
        <ul>
          <li>Use conversas reais da sua empresa</li>
          <li>Inclua seu tom de voz e personalidade</li>
          <li>Defina regras de negócio específicas</li>
          <li>Teste com cenários diversos</li>
        </ul>
        
        <h3>Resultados Esperados</h3>
        <p>Nossos clientes relatam:</p>
        <ul>
          <li>80% de redução no tempo de qualificação de leads</li>
          <li>300% de aumento na conversão</li>
          <li>24/7 de disponibilidade sem custo adicional</li>
          <li>Consistência na comunicação da marca</li>
        </ul>
        
        <h3>Próximos Passos</h3>
        <p>Quer criar seu próprio agente de IA? Entre em contato conosco. Oferecemos:</p>
        <ul>
          <li>Consultoria estratégica gratuita</li>
          <li>Prova de conceito em 7 dias</li>
          <li>Implementação completa</li>
          <li>Treinamento da sua equipe</li>
        </ul>
      `,
      icon: <Brain className="w-16 h-16 text-cyan-400" />,
      date: "2 de Janeiro, 2025",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Bot vs IA: Qual a diferença real?",
      excerpt: "Entenda por que nem todo chatbot é IA e como identificar soluções realmente inteligentes.",
      content: `
        <h3>A Confusão do Mercado</h3>
        <p>No mercado atual, muitas empresas vendem "bots de WhatsApp" como se fossem IA. Essa confusão prejudica empresários que investem em soluções limitadas achando que estão comprando inteligência artificial.</p>
        
        <h3>Bot Tradicional: O que é?</h3>
        <p>Um bot tradicional é como um atendente que só sabe responder perguntas específicas:</p>
        <ul>
          <li><strong>Scripts fixos:</strong> Respostas pré-programadas</li>
          <li><strong>Fluxos lineares:</strong> Se > Então > Senão</li>
          <li><strong>Sem contexto:</strong> Não lembra conversas anteriores</li>
          <li><strong>Limitado:</strong> Quebra facilmente com perguntas inesperadas</li>
        </ul>
        
        <h3>IA Real: O que faz a diferença?</h3>
        <p>Uma IA verdadeira é como ter um assistente inteligente:</p>
        <ul>
          <li><strong>Compreensão contextual:</strong> Entende nuances e intenções</li>
          <li><strong>Aprendizado contínuo:</strong> Melhora com cada interação</li>
          <li><strong>Tomada de decisão:</strong> Avalia cenários e escolhe a melhor resposta</li>
          <li><strong>Integração inteligente:</strong> Conecta informações de múltiplas fontes</li>
        </ul>
        
        <h3>Exemplo Prático</h3>
        <p><strong>Pergunta do cliente:</strong> "Preciso de uma solução para minha empresa, mas não sei bem o que vocês fazem"</p>
        
        <h4>Bot Tradicional responderia:</h4>
        <p>"Desculpe, não entendi. Digite 1 para Serviços, 2 para Contato..."</p>
        
        <h4>IA Real responderia:</h4>
        <p>"Entendo que você está explorando soluções para sua empresa. Para te ajudar melhor, me conte: qual é o principal desafio que vocês enfrentam hoje? É relacionado a atendimento, vendas, processos internos ou algo específico do seu setor?"</p>
        
        <h3>Como Identificar IA Real</h3>
        <p>Faça estas perguntas ao fornecedor:</p>
        <ol>
          <li><strong>"A solução entende contexto?"</strong> - IA real mantém contexto da conversa</li>
          <li><strong>"Aprende com interações?"</strong> - IA real melhora continuamente</li>
          <li><strong>"Lida com perguntas inesperadas?"</strong> - IA real adapta-se a cenários novos</li>
          <li><strong>"Integra com nossos sistemas?"</strong> - IA real conecta dados de múltiplas fontes</li>
        </ol>
        
        <h3>O Custo da Escolha Errada</h3>
        <p>Investir em um bot simples quando você precisa de IA resulta em:</p>
        <ul>
          <li>Clientes frustrados com respostas robóticas</li>
          <li>Perda de leads por falta de qualificação adequada</li>
          <li>Necessidade de retrabalho e novo investimento</li>
          <li>Descrédito da tecnologia internamente</li>
        </ul>
        
        <h3>Nossa Abordagem na Synthra</h3>
        <p>Não vendemos bots. Criamos agentes inteligentes que:</p>
        <ul>
          <li>Entendem seu negócio profundamente</li>
          <li>Falam com a personalidade da sua marca</li>
          <li>Tomam decisões baseadas em dados reais</li>
          <li>Evoluem constantemente</li>
        </ul>
        
        <p><strong>A diferença é clara:</strong> enquanto bots executam, IA pensa.</p>
      `,
      icon: <MessageSquare className="w-16 h-16 text-cyan-400" />,
      date: "28 de Dezembro, 2024",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "ROI de IA: Como medir resultados",
      excerpt: "Métricas práticas para avaliar o retorno dos seus investimentos em inteligência artificial.",
      content: `
        <h3>Por que medir ROI de IA?</h3>
        <p>Investir em IA sem medir resultados é como navegar sem bússola. Muitas empresas implementam soluções de IA mas não conseguem provar o valor gerado, dificultando novos investimentos e expansões.</p>
        
        <h3>Métricas Fundamentais</h3>
        
        <h4>1. Eficiência Operacional</h4>
        <ul>
          <li><strong>Tempo economizado:</strong> Horas/semana liberadas da equipe</li>
          <li><strong>Redução de erros:</strong> % de diminuição em retrabalho</li>
          <li><strong>Velocidade de resposta:</strong> Tempo médio de atendimento</li>
          <li><strong>Capacidade de escala:</strong> Volume processado sem aumento de equipe</li>
        </ul>
        
        <h4>2. Impacto Comercial</h4>
        <ul>
          <li><strong>Taxa de conversão:</strong> % de leads que viram clientes</li>
          <li><strong>Ticket médio:</strong> Valor médio por venda</li>
          <li><strong>Ciclo de vendas:</strong> Tempo do lead ao fechamento</li>
          <li><strong>Retenção de clientes:</strong> % de clientes que permanecem</li>
        </ul>
        
        <h4>3. Satisfação e Qualidade</h4>
        <ul>
          <li><strong>NPS (Net Promoter Score):</strong> Satisfação dos clientes</li>
          <li><strong>CSAT:</strong> Avaliação do atendimento</li>
          <li><strong>Tempo de resolução:</strong> Rapidez na solução de problemas</li>
          <li><strong>Taxa de escalação:</strong> % de casos que precisam de humanos</li>
        </ul>
        
        <h3>Fórmula de ROI para IA</h3>
        <p><strong>ROI = (Benefícios - Custos) / Custos × 100</strong></p>
        
        <h4>Benefícios incluem:</h4>
        <ul>
          <li>Receita adicional gerada</li>
          <li>Custos operacionais economizados</li>
          <li>Valor do tempo liberado da equipe</li>
          <li>Redução de perdas por erros</li>
        </ul>
        
        <h4>Custos incluem:</h4>
        <ul>
          <li>Investimento inicial na solução</li>
          <li>Custos de implementação</li>
          <li>Treinamento da equipe</li>
          <li>Manutenção e atualizações</li>
        </ul>
        
        <h3>Caso Real: Cliente da Synthra</h3>
        <p><strong>Empresa:</strong> E-commerce de moda (50 funcionários)</p>
        <p><strong>Solução:</strong> Agente de IA para atendimento e vendas</p>
        
        <h4>Resultados em 6 meses:</h4>
        <ul>
          <li><strong>Conversão:</strong> 15% → 45% (+200%)</li>
          <li><strong>Tempo de resposta:</strong> 4h → 30s (-99%)</li>
          <li><strong>Equipe liberada:</strong> 120h/semana</li>
          <li><strong>Receita adicional:</strong> R$ 180.000/mês</li>
        </ul>
        
        <h4>Cálculo do ROI:</h4>
        <ul>
          <li><strong>Investimento:</strong> R$ 25.000 (setup + 6 meses)</li>
          <li><strong>Benefícios:</strong> R$ 1.080.000 (6 meses de receita adicional)</li>
          <li><strong>ROI:</strong> 4.220% em 6 meses</li>
        </ul>
        
        <h3>Ferramentas para Medição</h3>
        
        <h4>Dashboards Recomendados:</h4>
        <ul>
          <li><strong>Google Analytics:</strong> Para métricas de conversão web</li>
          <li><strong>Kommo/CRM:</strong> Para acompanhar pipeline de vendas</li>
          <li><strong>Notion:</strong> Para centralizar KPIs e relatórios</li>
          <li><strong>Make:</strong> Para automatizar coleta de dados</li>
        </ul>
        
        <h3>Cronograma de Medição</h3>
        
        <h4>Primeiros 30 dias:</h4>
        <ul>
          <li>Estabelecer baseline (métricas antes da IA)</li>
          <li>Configurar ferramentas de medição</li>
          <li>Definir metas específicas</li>
        </ul>
        
        <h4>30-90 dias:</h4>
        <ul>
          <li>Monitorar métricas semanalmente</li>
          <li>Ajustar estratégias conforme necessário</li>
          <li>Documentar primeiros resultados</li>
        </ul>
        
        <h4>90+ dias:</h4>
        <ul>
          <li>Análise completa de ROI</li>
          <li>Identificar oportunidades de expansão</li>
          <li>Planejar próximos investimentos</li>
        </ul>
        
        <h3>Erros Comuns na Medição</h3>
        <ol>
          <li><strong>Não estabelecer baseline:</strong> Sem dados anteriores, impossível medir melhoria</li>
          <li><strong>Focar apenas em custos:</strong> Ignorar benefícios intangíveis</li>
          <li><strong>Medir muito cedo:</strong> IA precisa de tempo para otimizar</li>
          <li><strong>Métricas irrelevantes:</strong> Medir o que é fácil, não o que importa</li>
        </ol>
        
        <h3>Conclusão</h3>
        <p>Medir ROI de IA não é opcional - é essencial. Com as métricas certas e ferramentas adequadas, você pode provar o valor da IA e justificar novos investimentos.</p>
        
        <p><strong>Quer ajuda para medir o ROI da sua IA?</strong> Nossa equipe pode configurar dashboards personalizados e acompanhar seus resultados mensalmente.</p>
      `,
      icon: <TrendingUp className="w-16 h-16 text-cyan-400" />,
      date: "20 de Dezembro, 2024",
      readTime: "10 min"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo-transparent.png" alt="Synthra Logo" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-300 hover:text-cyan-400 transition-colors">Serviços</a>
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

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
              A IA que pensa com você
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Soluções inteligentes e humanas para automatizar, escalar e criar com propósito.
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
                <Settings className="mr-2 w-5 h-5" />
                Explore nossos cases
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

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

      {/* Community Section */}
      <section id="comunidade" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
                <Headphones className="w-12 h-12 text-cyan-400" />
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

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sobre Camila Goulart
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Fundadora da Synthra. Especialista em liderança, processos e IA aplicada.
                </p>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Une alma, estratégia e tecnologia para ajudar pessoas e empresas a fazerem mais com sentido.
                </p>
                <blockquote className="text-2xl text-cyan-400 italic mb-8 border-l-4 border-cyan-400 pl-6">
                  "A IA não substitui. Ela conecta."
                </blockquote>
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                  onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero aprender a liderar com IA
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 rounded-full overflow-hidden mx-auto border-4 border-cyan-400/30">
                  <img 
                    src="/upload/Designsemnome(6).png" 
                    alt="Camila Goulart - Fundadora da Synthra" 
                    className="w-full h-full object-cover"
                  />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog de IA Prática
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutoriais e cases reais para você dominar a IA no seu negócio.
            </p>
          </div>
          
          {!selectedPost ? (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer" onClick={() => setSelectedPost(post)}>
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                        {post.icon}
                      </div>
                      <CardTitle className="text-white">{post.title}</CardTitle>
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
                      <Button variant="outline" className="w-full border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                        Ler artigo
                        <BookOpen className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="outline" 
                className="mb-8 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={() => setSelectedPost(null)}
              >
                ← Voltar para o blog
              </Button>
              
              <article className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-6">{selectedPost.title}</h1>
                
                <div 
                  className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Gostou do conteúdo?</h3>
                    <p className="text-gray-300 mb-4">
                      Quer implementar essas estratégias na sua empresa? Nossa equipe pode ajudar você a transformar teoria em resultados práticos.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                      onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Falar com especialista
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
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
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
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
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6"
                  >
                    Assinar
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Sem spam. Apenas conteúdo que agrega valor. Cancele quando quiser.
                </p>
                {newsletterMessage && (
                  <p className="text-center mt-4 text-sm text-green-400">{newsletterMessage}</p>
                )}
              </form>
            </div>
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
                      <p className="text-gray-400">+55 (51) 9 9472-4351</p>
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

      {/* Footer */}
      <footer className="bg-black/70 py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo-transparent.png" alt="Synthra Logo" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                A IA que pensa com você. Soluções inteligentes e humanas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="text-gray-400 hover:text-cyan-400 transition-colors">Sobre a Synthra.ia</a></li>
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
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                onClick={() => document.querySelector('section:has(#newsletter)').scrollIntoView({ behavior: 'smooth' })}
              >
                Assinar Newsletter
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Synthra.ia. Todos os direitos reservados. • A IA não substitui. Ela conecta.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

