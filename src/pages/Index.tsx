import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";
import logo from "@/assets/logo-comunicacion.png";

interface Question {
  id: number;
  module: string;
  moduleNumber: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correct: string;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    moduleNumber: 1,
    question: "Un cliente plantea una queja directamente al vigilante, quien le promete resolver el problema. El director comercial no estaba al tanto. ¿Qué debe hacerse primero según el proceso de comunicación organizacional?",
    options: [
      { label: "A", text: "Reprender al vigilante por intervenir." },
      { label: "B", text: "Aclarar quiénes son los interlocutores internos y externos y quién responde a cada uno." },
      { label: "C", text: "Dejar que todos los colaboradores respondan si tienen buena disposición." },
      { label: "D", text: "Crear un chat general para atender consultas de clientes." }
    ],
    correct: "B",
    explanation: "Identificar actores internos/externos y definir roles de respuesta garantiza coherencia comunicacional. Revisa Clase 1 del módulo 1."
  },
  {
    id: 2,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    moduleNumber: 1,
    question: "Durante una reunión interna, usas siglas que solo conoce tu área y el resto del equipo no entiende. ¿En qué elemento del proceso de comunicación se produjo el fallo principal?",
    options: [
      { label: "A", text: "Emisor, por elegir un código no compartido." },
      { label: "B", text: "Canal, por usar un medio incorrecto." },
      { label: "C", text: "Contexto, por falta de orden." },
      { label: "D", text: "Receptor, por no prestar atención." }
    ],
    correct: "A",
    explanation: "El emisor debe usar un código compartido para lograr comprensión. Revisa Clase 2 del módulo 1."
  },
  {
    id: 3,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    moduleNumber: 1,
    question: "En una empresa de servicios, cada área usa su propio lenguaje interno y eso retrasa las tareas conjuntas. ¿Qué acción corresponde al enfoque de comunicación interna?",
    options: [
      { label: "A", text: "Exigir que todos se adapten al argot de cada área." },
      { label: "B", text: "Crear un glosario compartido de términos clave." },
      { label: "C", text: "Enviar correos masivos con recordatorios." },
      { label: "D", text: "Establecer reuniones más largas." }
    ],
    correct: "B",
    explanation: "La comunicación interna busca cultura compartida y lenguaje común. Revisa Clase 3 del módulo 1."
  },
  {
    id: 4,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    moduleNumber: 1,
    question: "Un jefe interrumpe constantemente a sus colaboradores, aunque la empresa promueve el valor del respeto. ¿Qué acción es más coherente con los valores organizacionales?",
    options: [
      { label: "A", text: "Evitar las reuniones con él." },
      { label: "B", text: "Corregirlo en público." },
      { label: "C", text: "Establecer reglas de interacción alineadas a los valores." },
      { label: "D", text: "Ignorar la situación para no confrontar." }
    ],
    correct: "C",
    explanation: "Los valores deben reflejarse en conductas comunicacionales. Revisa Clase 4 del módulo 1."
  },
  {
    id: 5,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    moduleNumber: 1,
    question: "En un grupo de trabajo, cada jefe usa un canal distinto (WhatsApp, correo, pizarrón) y el personal recibe mensajes contradictorios. ¿Qué debe hacerse según buenas prácticas de flujos y canales?",
    options: [
      { label: "A", text: "Unificar criterios y definir canales oficiales por tipo de mensaje." },
      { label: "B", text: "Usar todos los medios para cubrirse." },
      { label: "C", text: "Prohibir mensajería instantánea." },
      { label: "D", text: "Pedir a cada colaborador que revise todos los canales." }
    ],
    correct: "A",
    explanation: "La organización debe definir y documentar los canales formales. Revisa Clases 6 y 7 del módulo 1."
  },
  {
    id: 6,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    moduleNumber: 2,
    question: "En un correo de equipo, un colaborador usa lenguaje técnico que otros no entienden. Según las 7C, ¿qué principio está siendo vulnerado?",
    options: [
      { label: "A", text: "Claridad." },
      { label: "B", text: "Corrección." },
      { label: "C", text: "Cortesía." },
      { label: "D", text: "Coherencia." }
    ],
    correct: "A",
    explanation: "El principio de claridad implica usar palabras comprensibles para todos. Revisa Clase 1 del módulo 2."
  },
  {
    id: 7,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    moduleNumber: 2,
    question: "En una reunión, un compañero se muestra agresivo y eleva la voz. ¿Cuál sería la respuesta asertiva más adecuada?",
    options: [
      { label: "A", text: "Responderle con el mismo tono para que entienda tu punto." },
      { label: "B", text: "Retirarte de inmediato sin decir nada." },
      { label: "C", text: "Esperar una pausa y expresar tu posición con calma y respeto." },
      { label: "D", text: "Hacerle ver en público que está fuera de control." }
    ],
    correct: "C",
    explanation: "La asertividad implica expresar sin agredir ni someterse. Revisa Clase 2 del módulo 2."
  },
  {
    id: 8,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    moduleNumber: 2,
    question: "Un colega insiste varias veces en que aceptes una tarea que no te corresponde. ¿Qué técnica asertiva te ayuda a mantener tu límite sin discutir?",
    options: [
      { label: "A", text: "Repetir con serenidad tu negativa usando la misma frase (técnica del disco rayado)." },
      { label: "B", text: "Guardar silencio para evitar conflicto." },
      { label: "C", text: "Decir que lo pensarás más tarde." },
      { label: "D", text: "Cambiar de tema." }
    ],
    correct: "A",
    explanation: "El disco rayado mantiene el mensaje firme y tranquilo ante insistencias. Revisa Clase 3 del módulo 2, minuto 16:45."
  },
  {
    id: 9,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    moduleNumber: 2,
    question: "Estás por responder un mensaje que te molesta. ¿Qué técnica deberías aplicar antes de contestar?",
    options: [
      { label: "A", text: "Pausa consciente o retiro estratégico." },
      { label: "B", text: "Lenguaje \"yo\"." },
      { label: "C", text: "Disco rayado." },
      { label: "D", text: "Refuerzo positivo." }
    ],
    correct: "A",
    explanation: "La pausa o retiro consciente permite responder desde la calma, no desde la emoción. Revisa Clase 3 del módulo 2."
  },
  {
    id: 10,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    moduleNumber: 2,
    question: "Un compañero te acusa injustamente de no entregar una tarea. ¿Qué técnica permite defenderte sin agredir?",
    options: [
      { label: "A", text: "Lenguaje \"yo\": expresar cómo te afecta la situación sin culpar." },
      { label: "B", text: "Contraatacar con argumentos." },
      { label: "C", text: "Guardar silencio para no discutir." },
      { label: "D", text: "Ironizar la situación." }
    ],
    correct: "A",
    explanation: "El lenguaje \"yo\" comunica sentimientos sin juicio ni ataque. Revisa Clase 3 del módulo 2."
  }
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowExplanation(prev => ({ ...prev, [questionId]: true }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct * 10;
  };

  const getFailedModules = () => {
    const module1Fails: number[] = [];
    const module2Fails: number[] = [];
    
    questions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correct) {
        if (q.moduleNumber === 1) {
          module1Fails.push(q.id);
        } else {
          module2Fails.push(q.id);
        }
      }
    });
    
    return { module1Fails, module2Fails };
  };

  const getPerformanceLevel = (score: number) => {
    if (score >= 80) {
      return {
        level: "Dominio sólido",
        description: "Comprendes bien cómo aplicar los conceptos del programa. Refuerza la práctica consciente para consolidar tu estilo comunicacional."
      };
    } else if (score >= 50) {
      return {
        level: "Comprensión intermedia",
        description: "Demuestras buena comprensión general, pero conviene repasar técnicas específicas."
      };
    } else {
      return {
        level: "Revisión recomendada",
        description: "Revisa nuevamente los módulos para reforzar los conceptos fundamentales."
      };
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setQuizCompleted(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full">
          <CardHeader className="space-y-6 text-center">
            <div className="mx-auto">
              <img src={logo} alt="Comunicación que Conecta" className="w-full max-w-md mx-auto" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Evaluación Integral de Comprensión Aplicada
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-secondary">
              Comunicación que Conecta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Esta evaluación integral mide tu comprensión práctica de los dos módulos del programa "Comunicación que Conecta":
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Comunicación Organizacional</li>
                <li>Comunicación Efectiva y Asertiva</li>
              </ol>
              <p>
                Cada pregunta describe una situación laboral real. Elige la opción que mejor refleje los principios vistos en clase.
              </p>
              <p className="font-medium text-foreground">
                No se evalúa memoria, sino tu capacidad para aplicar lo aprendido a contextos reales.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-primary text-lg">Regla de calificación:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>10 preguntas. Cada respuesta correcta vale 10 puntos.</li>
                <li>Resultado final sobre 100 puntos.</li>
                <li>El sistema mostrará feedback automático por tema para reforzar el aprendizaje.</li>
              </ul>
            </div>

            <Button 
              onClick={() => setQuizStarted(true)} 
              className="w-full"
              size="lg"
            >
              Comenzar Evaluación
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    const score = calculateScore();
    const performance = getPerformanceLevel(score);
    const { module1Fails, module2Fails } = getFailedModules();
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Evaluación Completada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">
                {score}
              </div>
              <div className="text-muted-foreground">puntos de 100</div>
            </div>

            <div className="bg-muted p-6 rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Nivel: {performance.level}
              </h3>
              <p className="text-muted-foreground">
                {performance.description}
              </p>
            </div>

            {(module1Fails.length > 0 || module2Fails.length > 0) && (
              <div className="bg-muted p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                  Recomendaciones automáticas:
                </h3>
                {module1Fails.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-medium">
                      Módulo 1 - Comunicación Organizacional:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Revisa el módulo 1, especialmente los conceptos de proceso, roles, valores y canales de comunicación.
                    </p>
                  </div>
                )}
                {module2Fails.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-medium">
                      Módulo 2 - Comunicación Efectiva y Asertiva:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Revisa el módulo 2, especialmente los principios de comunicación efectiva, estilos comunicacionales y técnicas asertivas.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Resumen de respuestas:</h4>
              <div className="space-y-2">
                {questions.map((q, idx) => {
                  const isCorrect = selectedAnswers[q.id] === q.correct;
                  return (
                    <div key={q.id} className="flex items-center gap-3 text-sm">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">
                        Pregunta {idx + 1}: {isCorrect ? "Correcta" : "Incorrecta"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t space-y-4">
              <p className="text-center text-muted-foreground text-sm">
                Gracias por completar la Evaluación Integral de Comprensión Aplicada del programa "Comunicación que Conecta".
                Este instrumento te ayuda a identificar qué conceptos necesitas revisar antes de aplicar las técnicas en entornos reales.
              </p>
              <p className="text-center text-secondary font-medium">
                Autora: MSc María Auxiliadora Vielma U.
              </p>
            </div>

            <Button onClick={restartQuiz} className="w-full" variant="outline">
              Realizar evaluación nuevamente
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = showExplanation[question.id];
  const selectedAnswer = selectedAnswers[question.id] || "";
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}% completado</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardDescription className="text-xs font-semibold text-secondary uppercase">
              {question.module}
            </CardDescription>
            <CardTitle className="text-xl leading-relaxed text-foreground">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedAnswer}
              onValueChange={(value) => handleAnswerSelect(question.id, value)}
              disabled={isAnswered}
            >
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div
                    key={option.label}
                    className={`flex items-start space-x-3 border rounded-lg p-4 transition-colors ${
                      isAnswered
                        ? option.label === question.correct
                          ? "border-green-600 bg-green-50 dark:bg-green-950"
                          : option.label === selectedAnswer
                          ? "border-destructive bg-red-50 dark:bg-red-950"
                          : "border-border"
                        : "border-border hover:border-primary cursor-pointer"
                    }`}
                  >
                    <RadioGroupItem value={option.label} id={option.label} />
                    <Label
                      htmlFor={option.label}
                      className="flex-1 cursor-pointer font-normal leading-relaxed"
                    >
                      <span className="font-semibold">{option.label})</span> {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {isAnswered && (
              <div
                className={`p-4 rounded-lg border ${
                  isCorrect
                    ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                    : "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">
                      {isCorrect ? "Respuesta correcta" : `Respuesta incorrecta. La respuesta correcta es ${question.correct}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1"
              >
                Anterior
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex-1"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
