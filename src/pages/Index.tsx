import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, BookOpen } from "lucide-react";

interface Question {
  id: number;
  module: string;
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
    question: "En tu equipo se han producido malentendidos porque algunos miembros reciben información por distintos canales (mensajes, correo, comentarios informales). ¿Qué deberías hacer como primer paso?",
    options: [
      { label: "A", text: "Pedirle al jefe que decida qué canal usar." },
      { label: "B", text: "Reunir al grupo y definir un canal único y oficial de comunicación interna." },
      { label: "C", text: "Esperar que la confusión se resuelva sola." },
      { label: "D", text: "Corregir los mensajes cuando alguien se equivoque." }
    ],
    correct: "B",
    explanation: "La gestión de canales es clave en la comunicación organizacional. Revisa el módulo 1, apartado sobre \"flujos y canales de comunicación interna\"."
  },
  {
    id: 2,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    question: "Un compañero interpreta mal tu mensaje porque usaste un término técnico que él no conoce. Según las 7C de la comunicación, ¿qué principio no cumpliste?",
    options: [
      { label: "A", text: "Concisión." },
      { label: "B", text: "Claridad." },
      { label: "C", text: "Coherencia." },
      { label: "D", text: "Cortesía." }
    ],
    correct: "B",
    explanation: "El principio de claridad implica usar un lenguaje comprensible para el receptor. Revisa las \"7C de la comunicación efectiva\" en el módulo 1, minuto 05:20."
  },
  {
    id: 3,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    question: "En una presentación ante tu equipo, hablas sin una estructura clara y tus ideas se perciben desordenadas. ¿Qué deberías reforzar?",
    options: [
      { label: "A", text: "El principio de concreción." },
      { label: "B", text: "El principio de completitud." },
      { label: "C", text: "El principio de coherencia." },
      { label: "D", text: "El principio de corrección." }
    ],
    correct: "C",
    explanation: "La coherencia implica que el mensaje siga un orden lógico. Revisa el ejercicio sobre estructura de mensajes organizacionales."
  },
  {
    id: 4,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    question: "Durante una reunión, notas que algunos colaboradores se sienten incómodos porque el líder interrumpe constantemente. ¿Qué podrías proponer para mejorar la situación?",
    options: [
      { label: "A", text: "Pedir que todos se limiten a hablar una vez." },
      { label: "B", text: "Guardar silencio para no generar conflicto." },
      { label: "C", text: "Implementar reglas de comunicación y turnos de palabra." },
      { label: "D", text: "Hablar con el líder en público para corregirlo." }
    ],
    correct: "C",
    explanation: "Las reglas de participación fortalecen la comunicación organizacional. Revisa el segmento sobre \"entornos de diálogo abierto\"."
  },
  {
    id: 5,
    module: "MÓDULO 1 – COMUNICACIÓN ORGANIZACIONAL",
    question: "Una persona de tu equipo evita compartir información importante por temor a la reacción de otros. ¿Qué tipo de barrera está afectando la comunicación?",
    options: [
      { label: "A", text: "Barrera técnica." },
      { label: "B", text: "Barrera psicológica." },
      { label: "C", text: "Barrera semántica." },
      { label: "D", text: "Barrera temporal." }
    ],
    correct: "B",
    explanation: "Las emociones, miedos o juicios internos son barreras psicológicas. Revisa el punto sobre \"barreras emocionales en el clima laboral\"."
  },
  {
    id: 6,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    question: "Recibes una crítica injusta y te sientes irritado. ¿Qué técnica asertiva te permitiría responder de manera respetuosa sin reprimirte?",
    options: [
      { label: "A", text: "Técnica del espejo." },
      { label: "B", text: "Lenguaje \"yo\"." },
      { label: "C", text: "Pausa estratégica o retiro consciente." },
      { label: "D", text: "Disco rayado." }
    ],
    correct: "B",
    explanation: "El \"lenguaje yo\" permite expresar emociones sin culpar. Revisa el módulo 2, apartado \"Lenguaje Yo y comunicación emocional\"."
  },
  {
    id: 7,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    question: "Un compañero insiste repetidamente en que tomes una tarea que no te corresponde. ¿Qué técnica podrías usar para mantener tu límite sin entrar en conflicto?",
    options: [
      { label: "A", text: "Repetir con serenidad tu negativa usando la misma frase clave (técnica del disco rayado)." },
      { label: "B", text: "Guardar silencio para evitar el conflicto (técnica del silencio empático)." },
      { label: "C", text: "Decir que lo pensarás más tarde para evitar decir que no (técnica de la dilación)." },
      { label: "D", text: "Responder con una frase positiva para suavizar la tensión (técnica del filtro positivo)." }
    ],
    correct: "A",
    explanation: "El disco rayado consiste en repetir con calma tu mensaje sin ceder ni confrontar. Revisa la clase 2, minuto 16:45."
  },
  {
    id: 8,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    question: "Estás por tener una conversación difícil y sientes tensión. ¿Qué deberías aplicar antes de responder?",
    options: [
      { label: "A", text: "La técnica del retiro estratégico o pausa consciente." },
      { label: "B", text: "La técnica del refuerzo positivo." },
      { label: "C", text: "El lenguaje indirecto." },
      { label: "D", text: "La crítica constructiva." }
    ],
    correct: "A",
    explanation: "La pausa consciente te permite evitar respuestas impulsivas. Revisa la técnica del \"retiro estratégico\" en el módulo 2."
  },
  {
    id: 9,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    question: "En una discusión laboral, la otra persona eleva el tono y tú también comienzas a alterarte. ¿Qué principio de la comunicación efectiva estás rompiendo?",
    options: [
      { label: "A", text: "Cortesía." },
      { label: "B", text: "Concisión." },
      { label: "C", text: "Corrección." },
      { label: "D", text: "Completitud." }
    ],
    correct: "A",
    explanation: "La cortesía implica respeto y control emocional incluso en desacuerdos. Revisa la infografía de las \"7C\"."
  },
  {
    id: 10,
    module: "MÓDULO 2 – COMUNICACIÓN EFECTIVA Y ASERTIVA",
    question: "Al expresar una idea, notas que el otro no comprende bien lo que quisiste decir. ¿Qué podrías hacer según los principios de la escucha activa?",
    options: [
      { label: "A", text: "Repetir lo mismo más fuerte." },
      { label: "B", text: "Preguntar qué parte no entendió." },
      { label: "C", text: "Parafrasear y confirmar la comprensión del otro." },
      { label: "D", text: "Terminar la conversación." }
    ],
    correct: "C",
    explanation: "Parafrasear confirma entendimiento mutuo. Revisa el módulo 2, sección sobre \"escucha activa y retroalimentación empática\"."
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

  const getPerformanceLevel = (score: number) => {
    if (score >= 80) {
      return {
        level: "Dominio sólido",
        description: "Comprendes bien cómo aplicar los conceptos del programa. Refuerza la práctica consciente para consolidar tu estilo comunicacional."
      };
    } else if (score >= 50) {
      return {
        level: "Comprensión intermedia",
        description: "Demuestras buena comprensión general, pero conviene repasar técnicas específicas como el disco rayado o la pausa consciente."
      };
    } else {
      return {
        level: "Revisión recomendada",
        description: "Revisa nuevamente los módulos, especialmente los conceptos de las 7C y las técnicas asertivas básicas."
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
        <Card className="max-w-2xl w-full">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Evaluación de Comprensión Aplicada
            </CardTitle>
            <CardDescription className="text-2xl font-semibold text-secondary">
              Comunicación que Conecta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Evalúa cuánto has comprendido de los dos módulos del programa "Comunicación que Conecta".
              </p>
              <p>
                Cada pregunta plantea una situación práctica en la que deberás identificar la acción o respuesta más adecuada según los conceptos aprendidos.
              </p>
              <p>
                No se evalúa tu experiencia personal, sino tu comprensión de las técnicas y principios vistos en clase.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">Escala de calificación:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cada pregunta vale 10 puntos</li>
                <li>• Resultado final sobre 100 puntos</li>
                <li>• 10 preguntas en total (5 por módulo)</li>
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
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
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

            <div className="space-y-3 pt-4">
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
                Gracias por completar tu Evaluación de Comprensión Aplicada.
                El propósito de esta herramienta es ayudarte a reforzar los aspectos clave 
                de la comunicación organizacional y asertiva antes de ponerlos en práctica.
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
            <CardDescription className="text-xs font-semibold text-accent uppercase">
              {question.module}
            </CardDescription>
            <CardTitle className="text-xl leading-relaxed text-primary">
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
                          ? "border-green-600 bg-green-50"
                          : option.label === selectedAnswer
                          ? "border-destructive bg-red-50"
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
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
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
