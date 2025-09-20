// Mock data for Date Night Digital Card Game
export const conversationCards = [
  {
    id: 1,
    front: "First Impressions",
    back: "What was the first thing you noticed about me that made you think 'I need to get to know this person better'?",
    category: "connection"
  },
  {
    id: 2,
    front: "Dream Date",
    back: "If money wasn't an object, describe the most romantic date you'd plan for us in your hometown or a place that's special to you.",
    category: "romance"
  },
  {
    id: 3,
    front: "Family Legacy",
    back: "What tradition from your family do you want us to carry forward, and what new tradition should we create together?",
    category: "family"
  },
  {
    id: 4,
    front: "Support System",
    back: "Tell me about a time when you felt most supported by someone who looked like us. How can I show up for you in that same way?",
    category: "support"
  },
  {
    id: 5,
    front: "Cultural Pride",
    back: "What aspect of our culture are you most proud of, and how do you want to celebrate it together?",
    category: "culture"
  },
  {
    id: 6,
    front: "Childhood Dreams",
    back: "What did you dream of becoming when you were little? Do you still carry any part of that dream today?",
    category: "dreams"
  },
  {
    id: 7,
    front: "Strength & Beauty",
    back: "What's something about being Black that you find beautiful and want our future children (or community) to embrace?",
    category: "identity"
  },
  {
    id: 8,
    front: "Music & Memories",
    back: "Play a song that represents your childhood or family gatherings. What memories does it bring back?",
    category: "memories"
  },
  {
    id: 9,
    front: "Safe Spaces",
    back: "Where do you feel most authentically yourself? How can I help create that feeling when we're together?",
    category: "comfort"
  },
  {
    id: 10,
    front: "Future Vision",
    back: "When you imagine us 10 years from now, what are we doing? Where are we? What kind of love are we showing the world?",
    category: "future"
  },
  {
    id: 11,
    front: "Gratitude & Growth",
    back: "What's something I've done that made you feel truly seen and appreciated? How can I do more of that?",
    category: "gratitude"
  },
  {
    id: 12,
    front: "Community Love",
    back: "Who in your life loves the hardest? What have you learned about love from watching them?",
    category: "community"
  },
  {
    id: 13,
    front: "Overcoming Together",
    back: "What's a challenge you've faced that made you stronger? How can we support each other through difficult times?",
    category: "strength"
  },
  {
    id: 14,
    front: "Celebration Style",
    back: "How do you like to celebrate your wins? What's your favorite way to be celebrated by the people you love?",
    category: "celebration"
  },
  {
    id: 15,
    front: "Spiritual Connection",
    back: "What gives your life meaning and purpose? How can we nurture that together?",
    category: "spiritual"
  },
  {
    id: 16,
    front: "Comfort Food",
    back: "What dish reminds you of home and family? Can you teach me how to make it or share the story behind it?",
    category: "comfort"
  },
  {
    id: 17,
    front: "Hidden Talents",
    back: "What's something you're really good at that might surprise me? Show me if you can!",
    category: "discovery"
  },
  {
    id: 18,
    front: "Love Languages",
    back: "How did your family show love when you were growing up? What felt most meaningful to you then and now?",
    category: "love"
  },
  {
    id: 19,
    front: "Adventure Together",
    back: "What's on your bucket list that we could experience together? What would make it even more special?",
    category: "adventure"
  },
  {
    id: 20,
    front: "Daily Appreciation",
    back: "What's something small I do that brightens your day? How can we create more moments like that?",
    category: "appreciation"
  },
  {
    id: 21,
    front: "Legacy Building",
    back: "What impact do you want us to have on our community? How can our love inspire others?",
    category: "legacy"
  },
  {
    id: 22,
    front: "Beautiful Moments",
    back: "Describe a moment with me that you want to remember forever. What made it so special?",
    category: "memories"
  }
];

// Audio effect functions (CSS-based)
export const playCardFlip = () => {
  // Create a simple beep sound using Web Audio API
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const playShuffle = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.05);
  oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.15);
};
