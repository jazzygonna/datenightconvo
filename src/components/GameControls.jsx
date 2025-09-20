import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Shuffle, RotateCcw, Play } from 'lucide-react';
import { playShuffle } from '../data/mock';

const GameControls = ({ 
  onShuffle, 
  onDrawCard, 
  onReset, 
  availableCards, 
  drawnCards, 
  gameStarted,
  currentCard 
}) => {
  const totalCards = availableCards.length + drawnCards.length;
  const cardsRemaining = availableCards.length;
  const cardsPlayed = drawnCards.length;

  const handleShuffle = () => {
    playShuffle();
    onShuffle();
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Progress Tracker */}
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
        <CardContent className="p-4 text-center">
          <div className="flex justify-between items-center text-sm font-serif text-amber-800">
            <span>Cards Played: {cardsPlayed}</span>
            <span>Remaining: {cardsRemaining}</span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-amber-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${totalCards > 0 ? (cardsPlayed / totalCards) * 100 : 0}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Game Controls */}
      <div className="grid grid-cols-1 gap-3">
        {!gameStarted ? (
          <Button
            onClick={onDrawCard}
            disabled={cardsRemaining === 0}
            className="w-full h-14 text-lg font-serif bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Date Night
          </Button>
        ) : (
          <>
            <Button
              onClick={onDrawCard}
              disabled={cardsRemaining === 0}
              className="w-full h-12 font-serif bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {cardsRemaining === 0 ? 'No Cards Left' : `Draw Next Card (${cardsRemaining} left)`}
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleShuffle}
                variant="outline"
                className="h-10 font-serif border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Shuffle
              </Button>
              
              <Button
                onClick={onReset}
                variant="outline"
                className="h-10 font-serif border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Game Status Message */}
      {cardsRemaining === 0 && gameStarted && (
        <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-rose-800 font-serif">
              You've completed all conversation cards! 
              <br />
              <span className="text-sm">Reset to play again or shuffle for a new order.</span>
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GameControls;
