import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Rocket, 
  Brain, 
  Heart, 
  Sparkles, 
  BookOpen, 
  Users, 
  Mail, 
  Phone, 
  Calendar,
  Instagram,
  MessageCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Zap,
  Globe,
  Target,
  Compass
} from 'lucide-react'
import './App.css'

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizResult, setQuizResult] = useState(null)

  const questions = [
    "Costumo conectar ideias de áreas muito diferentes e criar algo novo com isso.",
    "Me sinto desconfortável em fazer sempre a mesma coisa da mesma forma.",
    "Já me disseram que penso demais ou complico o que é simples.",
    "Gosto de observar sistemas como um todo antes de tentar resolver um problema.",
    "Tenho facilidade em conversar com pessoas de diferentes áreas ou perfis.",
    "Muitas vezes percebo padrões ou relações que outras pessoas não notam.",
    "Fico entediado(a) em ambientes que não estimulam minha criatividade.",
    "Me emociono com frequência, mas também sei ser racional quando preciso.",
    "Gosto de estudar temas diversos — mesmo que não pareçam 'úteis' de imediato.",
    "Me interesso por resolver problemas que parecem difíceis ou sem solução.",
    "Já criei soluções misturando saberes ou ferramentas improváveis.",
    "Acredito que intuição e lógica podem caminhar juntas.",
    "Sinto que muitas vezes não sou compreendido(a) nos ambientes convencionais.",
    "Já fui chamado de 'esquisito(a)' ou 'diferente' — e vi isso como elogio.",
    "Acredito que toda boa solução nasce da escuta profunda e da conexão humana."
  ]

  const handleAnswerSelect = (value) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (allAnswers) => {
    const total = allAnswers.reduce((sum, answer) => sum + answer, 0)
    
    let result = {}
    if (total >= 15 && total <= 30) {
      result = {
        type: "Explorador Racional",
        description: "Você tem traços nexialistas, mas ainda atua com foco mais técnico ou lógico. Costuma buscar segurança, mas está abrindo espaço para o novo.",
        color: "from-blue-500 to-cyan-500"
      }
    } else if (total >= 31 && total <= 50) {
      result = {
        type: "Conector Intuitivo", 
        description: "Você transita bem entre razão e intuição, conecta ideias com sensibilidade e costuma trazer visões originais. Já demonstra claramente o pensar nexialista.",
        color: "from-purple-500 to-pink-500"
      }
    } else {
      result = {
        type: "Nexialista Pleno",
        description: "Você enxerga o mundo como uma teia interconectada. Resolve problemas com criatividade, escuta com empatia e pensa além do óbvio. Sua mente é uma constelação viva.",
        color: "from-amber-500 to-orange-500"
      }
    }
    
    setQuizResult(result)
  }

  const resetQuiz = () => {
    setShowQuiz(false)
    setCurrentQuestion(0)
    setAnswers([])
    setQuizResult(null)
  }

  if (showQuiz && !quizResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Você pensa como um(a) Nexialista?
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Responda com sinceridade. Não há respostas certas ou erradas — apenas formas diferentes de enxergar o mundo.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                Pergunta {currentQuestion + 1} de {questions.length}
              </Badge>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  {questions[currentQuestion]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button
                      key={value}
                      onClick={() => handleAnswerSelect(value)}
                      className="h-16 text-lg bg-gray-700 hover:bg-purple-600 border border-gray-600 hover:border-purple-500 transition-all"
                    >
                      {value}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-4">
                  <span>Discordo totalmente</span>
                  <span>Concordo totalmente</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (quizResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-block p-8 rounded-2xl bg-gradient-to-r ${quizResult.color} mb-8`}>
              <Sparkles className="w-16 h-16 text-white mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {quizResult.type}
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {quizResult.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-4"
                onClick={() => window.open('https://chat.whatsapp.com/BgRgC0mETusFEDRnx0ZVzR', '_blank')}
              >
                <Users className="mr-2 w-5 h-5" />
                Entre na Nave
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black text-lg px-8 py-4"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Conheça meus serviços
              </Button>
            </div>

            <Button 
              onClick={resetQuiz}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              Refazer o teste
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nexialismo não é só um conceito.
              </span>
              <br />
              <span className="text-white">
                É uma forma de existir.
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed space-y-2">
              <p>Se você já ouviu que pensa demais...</p>
              <p>Se já tentaram te convencer a escolher só uma área...</p>
              <p>Se o seu coração pulsa por conexões que ninguém mais vê...</p>
              <br />
              <p className="text-purple-400 font-semibold">Temos um nome para isso: <span className="text-pink-400">Nexialista</span>.</p>
              <p>E temos um lugar para você: <span className="text-cyan-400">a bordo da nave Synthra</span>.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl px-10 py-6"
                onClick={() => setShowQuiz(true)}
              >
                <Rocket className="mr-3 w-6 h-6" />
                Descubra se você é Nexialista
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black text-xl px-10 py-6"
              >
                <Target className="mr-3 w-6 h-6" />
                Conheça meus serviços
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-xl px-10 py-6"
                onClick={() => window.open('https://chat.whatsapp.com/BgRgC0mETusFEDRnx0ZVzR', '_blank')}
              >
                <Sparkles className="mr-3 w-6 h-6" />
                Entre na nave
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é Nexialismo */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Uma nova forma de pensar, sentir e resolver problemas
            </h2>
            
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 mb-12">
              <p>
                <span className="text-cyan-400 font-semibold">Nexialismo vem do latim nexus</span> — conexão.
                <br />Mas virou muito mais do que isso.
              </p>
              
              <p>
                É a arte de integrar saberes distintos, ouvir o invisível dos sistemas e criar soluções onde outros só veem caos.
              </p>
              
              <p>
                É <span className="text-purple-400">intuição e análise</span>. <span className="text-pink-400">Emoção e estratégia</span>. <span className="text-cyan-400">Gente e tecnologia</span>.
              </p>
              
              <p className="text-xl font-semibold text-white">
                É para quem nunca se encaixou totalmente — e por isso mesmo nasceu para costurar o novo.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-8 py-4"
            >
              <Globe className="mr-2 w-5 h-5" />
              Quero entender melhor
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Você se reconhece aqui? */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Você se reconhece aqui?
            </h2>
            
            <div className="text-xl text-gray-300 mb-12 space-y-4">
              <p>Você sente que pensa diferente?</p>
              <p>Conecta áreas improváveis?</p>
              <p>Resolve problemas como quem dança no meio da bagunça?</p>
              <br />
              <p className="text-2xl font-semibold text-purple-400">
                Talvez você seja um(a) Nexialista.
              </p>
              <p className="text-lg">Mas só tem um jeito de saber:</p>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-2xl px-12 py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all"
              onClick={() => setShowQuiz(true)}
            >
              <Brain className="mr-3 w-8 h-8" />
              Faça o teste e descubra
              <Zap className="ml-3 w-8 h-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultoria & Mentoria */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Conectar pessoas, processos e tecnologia.
            </h2>
            <p className="text-xl text-gray-300">
              Esse é o meu trabalho. E minha missão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Target className="mr-3 w-8 h-8 text-purple-400" />
                  Empresas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg leading-relaxed mb-6">
                  Diagnóstico profundo de processos, implantação de IA com propósito, transformação cultural.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Conheça a Consultoria Nexialista
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Compass className="mr-3 w-8 h-8 text-cyan-400" />
                  Profissionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg leading-relaxed mb-6">
                  Mentoria 1:1 para quem pensa diferente e quer fazer disso um diferencial estratégico.
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  Quero minha mentoria
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O Manual Nexialista */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              O Manual Nexialista
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Um guia para quem vive entre mundos.
              <br />E quer fazer disso um mapa de potência.
            </p>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Escrevi este livro como ponto de apoio, espelho e bússola para mentes inquietas.
              <br />Ele é parte estudo, parte manifesto — e completamente conversado com você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Leia um trecho gratuito
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <Mail className="mr-2 w-5 h-5" />
                Entrar na lista de espera
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Entre na Nave */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Mais do que um site. Uma nave.
              <br />Mais do que uma comunidade. Um chamado.
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Criamos um espaço para trocas entre Nexialistas — gente como você, que vê o todo, sente fundo e resolve profundo.
              <br /><br />
              Não é uma escola. Não é um curso.
              <br />É um espaço vivo, interdimensional e provocador.
            </p>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl px-10 py-6"
              onClick={() => window.open('https://chat.whatsapp.com/BgRgC0mETusFEDRnx0ZVzR', '_blank')}
            >
              <Rocket className="mr-3 w-6 h-6" />
              Quero embarcar
              <Sparkles className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Nexialismo na prática
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "A falácia da especialização: por que pensar amplo virou um ato revolucionário",
                excerpt: "Explorando como a hiperespecialização pode limitar nossa capacidade de inovação..."
              },
              {
                title: "IA, processos e alma: dá pra juntar tudo?",
                excerpt: "Uma reflexão sobre como integrar tecnologia sem perder a essência humana..."
              },
              {
                title: "O que a Grécia antiga pode nos ensinar sobre educação no século XXI",
                excerpt: "Conectando saberes milenares com os desafios educacionais contemporâneos..."
              }
            ].map((article, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Ver todos os artigos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Quer bater um papo interdimensional?
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white flex flex-col items-center py-8"
                onClick={() => window.open('https://wa.me/5551991867042?text=Olá! Vi seu site sobre Nexialismo e gostaria de saber mais.', '_blank')}
              >
                <MessageCircle className="w-8 h-8 mb-2" />
                WhatsApp
              </Button>
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center py-8"
                onClick={() => window.open('mailto:contato@synthraia.com.br?subject=Interesse em Nexialismo', '_blank')}
              >
                <Mail className="w-8 h-8 mb-2" />
                E-mail
              </Button>
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white flex flex-col items-center py-8"
                onClick={() => window.open('https://calendly.com/synthra', '_blank')}
              >
                <Calendar className="w-8 h-8 mb-2" />
                Agendar
              </Button>
              <Button 
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white flex flex-col items-center py-8"
                onClick={() => window.open('https://instagram.com/synthraia', '_blank')}
              >
                <Instagram className="w-8 h-8 mb-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Synthra Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Nexialismo: onde conexões impossíveis se tornam soluções inevitáveis.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

