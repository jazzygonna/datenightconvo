import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { playCardFlip } from '../data/mock';

const GameCard = ({ card, onFlip, isFlipped }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    playCardFlip();
    
    setTimeout(() => {
      onFlip();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="perspective-1000 w-full max-w-md mx-auto">
      <div 
        className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        } ${isAnimating ? 'animate-pulse' : ''}`}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-amber-100 to-yellow-200 border-2 border-yellow-400 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="flex items-center justify-center h-full p-8 text-center">
            <div>
              <div className="text-6xl mb-4">💕</div>
              <h3 className="text-2xl font-bold text-amber-900 font-serif leading-tight">
                {card?.front || 'Click to Start'}
              </h3>
              <p className="text-sm text-amber-700 mt-4 font-serif italic">
                Tap to reveal the question
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-amber-400 shadow-xl">
          <CardContent className="flex items-center justify-center h-full p-6 text-center">
            <div>
              <div className="text-3xl mb-4">✨</div>
              <p className="text-lg text-amber-900 font-serif leading-relaxed">
                {card?.back || 'Draw a card to begin your conversation journey'}
              </p>
              <p className="text-xs text-amber-600 mt-4 font-serif italic">
                Take your time to share and listen
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default GameCard;
