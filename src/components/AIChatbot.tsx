
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, Loader2, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface AIChatbotProps {
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI Study Assistant from Abroad Academics! 🎓 I'm here to help you with questions about studying abroad, scholarships, universities, and visa processes. How can I assist you on your educational journey today?",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('Sending message to groq-chat function...');
      
      const { data, error } = await supabase.functions.invoke('groq-chat', {
        body: {
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Function error: ${error.message}`);
      }

      console.log('Response from groq-chat:', data);

      const aiResponse = data?.choices?.[0]?.message?.content || 
                        data?.message?.content ||
                        "I'm sorry, I couldn't process that request. Please try again or contact our support team for immediate assistance.";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to get AI response. Please try again.');
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm experiencing some technical difficulties at the moment. Please try again in a few seconds, or feel free to register for a free consultation with our human experts who can provide immediate assistance! 🎯",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-gray-900 border-orange-500 shadow-2xl shadow-orange-500/20 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-black p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <CardTitle className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="bg-black/20 p-3 rounded-xl backdrop-blur-sm">
              <Bot className="h-7 w-7 text-black" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl">AI Study Assistant</span>
                <Sparkles className="h-5 w-5 text-black animate-pulse" />
              </div>
              <p className="text-sm opacity-80 font-medium">Powered by Advanced AI • Always Ready to Help</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-black hover:bg-black/20 h-10 w-10 p-0 rounded-xl font-bold text-lg"
          >
            ×
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        <ScrollArea className="flex-1 p-6 relative z-10" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 shadow-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black'
                      : 'bg-gray-800 text-white border border-orange-500/30 shadow-orange-500/10'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {message.role === 'assistant' && (
                      <div className="bg-orange-500/20 p-2 rounded-full">
                        <Bot className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      </div>
                    )}
                    {message.role === 'user' && (
                      <div className="bg-black/20 p-2 rounded-full">
                        <User className="h-4 w-4 flex-shrink-0" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">
                        {message.content}
                      </p>
                      <p className="text-xs opacity-70 mt-3 font-medium">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl p-4 bg-gray-800 text-white border border-orange-500/30 shadow-lg shadow-orange-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500/20 p-2 rounded-full">
                      <Bot className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                      <span className="text-sm font-medium">AI is thinking...</span>
                      <Zap className="h-4 w-4 text-orange-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-6 border-t border-orange-500/20 bg-gray-800/80 backdrop-blur-sm relative z-10">
          <div className="flex space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about studying abroad, scholarships, visas, universities..."
              className="flex-1 bg-gray-800 border-orange-500/40 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl h-12 px-4 font-medium"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-6 h-12 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <MessageSquare className="h-4 w-4 text-orange-500" />
            <p className="text-xs text-gray-400 text-center font-medium">
              For detailed consultation, register for a free call with our expert counselors
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChatbot;
