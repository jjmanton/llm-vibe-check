import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Brain, Star, AlertTriangle } from 'lucide-react';

const LLMRankings = () => {
  const rankings = [
    {
      name: "Claude-3",
      vibeRating: "Immaculate Vibes",
      description: "Zero misses, straight fire responses",
      score: 98,
      strengths: ["Creative writing", "Technical analysis", "Empathy"]
    },
    {
      name: "GPT-4",
      vibeRating: "Good Vibes",
      description: "Solid performer, rarely misses",
      score: 92,
      strengths: ["Complex reasoning", "Code generation", "Versatility"]
    },
    {
      name: "Gemini Ultra",
      vibeRating: "Decent Vibes",
      description: "Has its moments, but inconsistent",
      score: 85,
      strengths: ["Multi-modal", "Quick responses", "Mathematics"]
    },
    {
      name: "GPT-3.5",
      vibeRating: "Mid Vibes",
      description: "Gets the job done... sometimes",
      score: 75,
      strengths: ["Speed", "Basic tasks", "Accessibility"]
    },
    {
      name: "Claude-2",
      vibeRating: "Past Prime",
      description: "Was good for its time",
      score: 70,
      strengths: ["Safety", "Long contexts", "Analysis"]
    },
    {
      name: "Llama 2",
      vibeRating: "Dog Water",
      description: "Trying its best, but...",
      score: 60,
      strengths: ["Open source", "Local running", "Community support"]
    }
  ];

  const getVibeColor = (score) => {
    if (score >= 95) return 'bg-purple-500';
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getVibeEmoji = (score) => {
    if (score >= 95) return '🔥';
    if (score >= 90) return '✨';
    if (score >= 80) return '👍';
    if (score >= 70) return '😐';
    return '💀';
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">LLM Vibe Check Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rankings.map((llm) => (
            <div 
              key={llm.name} 
              className="p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-semibold">{llm.name}</h3>
                </div>
                <span className="text-2xl">{getVibeEmoji(llm.score)}</span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${getVibeColor(llm.score).replace('bg-', 'text-')}`}>
                    {llm.vibeRating}
                  </span>
                  <span className="text-sm text-gray-500">{llm.score}/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-full rounded-full ${getVibeColor(llm.score)}`}
                    style={{ width: `${llm.score}%` }}
                  />
                </div>
              </div>
              
              <p className="text-gray-600 mb-2">{llm.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {llm.strengths.map((strength) => (
                  <span 
                    key={strength}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LLMRankings;
