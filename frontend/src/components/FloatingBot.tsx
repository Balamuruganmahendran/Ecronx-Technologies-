import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ArrowLeft, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface ProjectData {
  full_name: string;
  company: string;
  email: string;
  phone: string;
  project_type: string;
  timeline: string;
  budget: string;
  brief: string;
}

const FloatingBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your project assistant. I can help you get started with your project requirements. Would you like to begin?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [projectData, setProjectData] = useState<Partial<ProjectData>>({});
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions = [
    { 
      key: 'full_name', 
      question: "Great! Let's start with something simple. What should I call you? 😊", 
      type: 'text',
      quickReplies: [],
      followUp: (value: string) => `Nice to meet you, ${value.split(' ')[0]}! 👋`
    },
    { 
      key: 'company', 
      question: "And what's your company or organization name?", 
      type: 'text',
      quickReplies: ['Freelancer/Individual', 'Startup', 'Established Company'],
      followUp: (value: string) => `Got it! ${value} sounds interesting. 🚀`
    },
    { 
      key: 'email', 
      question: "What's the best email to reach you at?", 
      type: 'email',
      quickReplies: [],
      followUp: () => `Perfect! I'll make sure we reach you there. 📧`
    },
    { 
      key: 'phone', 
      question: "What's your phone number? (We'll only use it for important updates)", 
      type: 'tel',
      quickReplies: [],
      followUp: () => `Thanks! That'll help us stay in touch. 📱`
    },
    { 
      key: 'project_type', 
      question: "Now for the exciting part! What type of project are you dreaming of? ✨", 
      type: 'text',
      quickReplies: ['Website', 'Web App', 'Mobile App', 'E-commerce', 'Custom Software'],
      followUp: (value: string) => `A ${value.toLowerCase()}! That's going to be awesome. 💡`
    },
    { 
      key: 'timeline', 
      question: "When would you like to launch your project?", 
      type: 'text',
      quickReplies: ['ASAP', '1-2 weeks', '2-4 weeks', '1-2 months', 'Flexible'],
      followUp: (value: string) => `${value} - noted! ⏰`
    },
    { 
      key: 'budget', 
      question: "What's your approximate budget? This helps us tailor the perfect solution. 💰", 
      type: 'text',
      quickReplies: ['₹25,000-50,000', '₹50,000-1,00,000', '₹1,00,000+', 'Need consultation'],
      followUp: () => `Understood! We'll work something out. 💪`
    },
    { 
      key: 'brief', 
      question: "Finally, tell me about your vision! What's your project all about? 🎯", 
      type: 'textarea',
      quickReplies: [],
      followUp: () => `This sounds fantastic! Let me process all of this... 🤔`
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputValue;
    if (!messageToSend.trim()) return;

    addMessage(messageToSend, 'user');
    const userInput = messageToSend;
    setInputValue('');

    // Update project data
    const currentQuestion = questions[currentStep];
    if (currentQuestion) {
      setProjectData(prev => ({ ...prev, [currentQuestion.key]: userInput }));
      
      // Add follow-up acknowledgment
      if (currentQuestion.followUp) {
        setIsTyping(true);
        setTimeout(() => {
          addMessage(currentQuestion.followUp(userInput), 'bot');
          setIsTyping(false);
        }, 800);
      }
    }

    // Move to next step
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep < questions.length) {
      setIsTyping(true);
      setTimeout(() => {
        addMessage(questions[nextStep].question, 'bot');
        setIsTyping(false);
      }, currentQuestion.followUp ? 1600 : 1000);
    } else {
      // Submit data
      setIsTyping(true);
      setTimeout(async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/home/project/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectData),
          });

          if (response.ok) {
            setShowCelebration(true);
            addMessage("🎉 Amazing! Your project details have been submitted successfully! Our team will review everything and get back to you within 24 hours. Get ready to bring your vision to life! ✨", 'bot');
            setTimeout(() => setShowCelebration(false), 3000);
          } else {
            addMessage("Oops! 😅 Something went wrong on our end. Could you try again, or feel free to contact us directly?", 'bot');
          }
        } catch (error) {
          addMessage("Hmm, seems like there's a network hiccup. 🌐 Please check your connection and try again!", 'bot');
        }
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Remove last two messages (user answer and bot follow-up/next question)
      setMessages(prev => prev.slice(0, -2));
    }
  };

  const toggleBot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 1) {
      // Reset if reopening
      setCurrentStep(0);
      setProjectData({});
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleBot}
          className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[32rem] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 z-40 flex flex-col overflow-hidden">
          {/* Celebration Effect */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: '1s'
                  }}
                >
                  {['🎉', '✨', '🎊', '⭐', '💫'][Math.floor(Math.random() * 5)]}
                </div>
              ))}
            </div>
          )}
          
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative">
                <Bot size={16} className="text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Project Assistant</h3>
                <p className="text-teal-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online & ready to help
                </p>
              </div>
            </div>
            {currentStep > 0 && currentStep < questions.length && (
              <div className="flex items-center gap-2">
                <div className="text-white text-xs bg-white/20 px-2 py-1 rounded-full">
                  {currentStep}/{questions.length}
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {currentStep > 0 && currentStep <= questions.length && (
            <div className="bg-slate-800 h-1">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${(currentStep / questions.length) * 100}%` }}
              />
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-800 text-slate-100'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={14} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-slate-800 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep < questions.length && (
            <div className="p-4 border-t border-slate-700 space-y-3">
              {/* Quick Replies */}
              {questions[currentStep]?.quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {questions[currentStep].quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-teal-400 border border-slate-600 hover:border-teal-500 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="flex gap-2">
                {currentStep > 0 && (
                  <button
                    onClick={handleGoBack}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-lg transition-colors"
                    title="Go back"
                  >
                    <ArrowLeft size={16} />
                  </button>
                )}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your answer..."
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-teal-500 hover:bg-teal-600 disabled:bg-slate-600 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
          
          {/* Completion State */}
          {currentStep >= questions.length && (
            <div className="p-4 border-t border-slate-700 bg-slate-800/50">
              <div className="flex items-center justify-center gap-2 text-emerald-400">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Form completed!</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingBot;