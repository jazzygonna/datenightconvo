import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import GameControls from '../components/GameControls';
import { conversationCards } from '../data/mock';

const DateNightGame = () => {
  const [availableCards, setAvailableCards] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Load game state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('dateNightGameState');
    if (savedState) {
      try {
        const { 
          availableCards: savedAvailable, 
          drawnCards: savedDrawn, 
          currentCard: savedCurrent,
          gameStarted: savedGameStarted 
        } = JSON.parse(savedState);
        
        // Ensure we always have cards available
        const cardsToUse = savedAvailable && savedAvailable.length > 0 
          ? savedAvailable 
          : [...conversationCards];
        
        setAvailableCards(cardsToUse);
        setDrawnCards(savedDrawn || []);
        setCurrentCard(savedCurrent || null);
        setGameStarted(savedGameStarted || false);
      } catch (error) {
        console.error('Error loading saved game state:', error);
        // Reset to default state if there's an error
        setAvailableCards([...conversationCards]);
        setDrawnCards([]);
        setCurrentCard(null);
        setGameStarted(false);
      }
    } else {
      setAvailableCards([...conversationCards]);
    }
  }, []);

  // Save game state to localStorage whenever state changes
  useEffect(() => {
    const gameState = {
      availableCards,
      drawnCards,
      currentCard,
      gameStarted
    };
    localStorage.setItem('dateNightGameState', JSON.stringify(gameState));
  }, [availableCards, drawnCards, currentCard, gameStarted]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleShuffle = () => {
    setAvailableCards(shuffleArray(availableCards));
    setIsCardFlipped(false);
  };

  const handleDrawCard = () => {
    if (availableCards.length === 0) return;

    const newCard = availableCards[0];
    const remainingCards = availableCards.slice(1);
    
    setCurrentCard(newCard);
    setAvailableCards(remainingCards);
    setDrawnCards(prev => [...prev, newCard]);
    setIsCardFlipped(false);
    setGameStarted(true);
  };

  const handleFlipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const handleReset = () => {
    setAvailableCards(shuffleArray([...conversationCards]));
    setDrawnCards([]);
    setCurrentCard(null);
    setIsCardFlipped(false);
    setGameStarted(false);
    localStorage.removeItem('dateNightGameState');
  };

  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        background: `linear-gradient(135deg, 
          #40210e 0%, 
          #584c42 25%, 
          #cfa351 50%, 
          #584c42 75%, 
          #40210e 100%)`
      }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 drop-shadow-lg">
            Date Night Conversations
          </h1>
          <p className="text-xl text-amber-100 font-serif max-w-2xl mx-auto leading-relaxed">
            Deepen your connection through meaningful questions designed to spark 
            heartfelt conversations and celebrate your beautiful love story.
          </p>
        </div>

        {/* Game Area */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card Display */}
          <div className="order-2 md:order-1">
            <GameCard 
              card={currentCard}
              onFlip={handleFlipCard}
              isFlipped={isCardFlipped}
            />
          </div>

          {/* Game Controls */}
          <div className="order-1 md:order-2">
            <GameControls
              onShuffle={handleShuffle}
              onDrawCard={handleDrawCard}
              onReset={handleReset}
              availableCards={availableCards}
              drawnCards={drawnCards}
              gameStarted={gameStarted}
              currentCard={currentCard}
            />

            {/* Instructions */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white font-serif mb-3">How to Play:</h3>
              <ul className="text-amber-100 space-y-2 text-sm font-serif">
                <li>• Click "Start Date Night" to draw your first card</li>
                <li>• Tap the card to flip and reveal the conversation prompt</li>
                <li>• Take turns sharing and listening with love</li>
                <li>• Draw the next card when you're ready to continue</li>
                <li>• Your progress is automatically saved</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-amber-100/80 font-serif">
          <p className="text-sm">
            Created with love by Janay Trevillion, visit{' '}
            <a 
              href="https://beacons.ai/healedcoach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-white underline transition-colors duration-300"
            >
              https://beacons.ai/healedcoach
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateNightGame;
