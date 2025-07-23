"use client"
import styles from "./Home.module.css";
import TopBar from "@/components/TopBar/TobBar";
import Message from "../../components/Message/Message";
import Timestamp from "../../components/Timestamp/Timestamp";
import Typing from "../../components/Typing/Typing";
import Type from "../../components/Type/Type";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showTyping, setShowTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [messageQueue, setMessageQueue] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sentMessages, setSentMessages] = useState([
    "My boss stormed into the morning meeting today complaining about how we are never on time...",
    "Like relax, I arrived at 9:03...",
  ]);

  const [sentAfterMessages, setSentAfterMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sentAudioRef = useRef<HTMLAudioElement | null>(null);
  const receivedAudioRef = useRef<HTMLAudioElement | null>(null);

  const allReceivedMessages = [
    "Lol that sucks",
    "My boss doesn't even care, half of us walk in like 30 minutes late. He's super chill.",
    "Tell him whats his problem"
  ];

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/sounds/key.mov');
    sentAudioRef.current = new Audio('/sounds/sent.mp3');
    receivedAudioRef.current = new Audio('/sounds/received.mp3');
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      if (sentAudioRef.current) {
        sentAudioRef.current.pause();
        sentAudioRef.current = null;
      }
    };
  }, []);

  const playKeySound = (type: string) => {
    if (type === "key") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Rewind to start
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }

    if (type === "sent") {
      if (sentAudioRef.current) {
        sentAudioRef.current.currentTime = 0; // Rewind to start
        sentAudioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }

    if (type === "received") {
      if (receivedAudioRef.current) {
        receivedAudioRef.current.currentTime = 0; // Rewind to start
        receivedAudioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {

      // Play sound for any key press except modifier keys
      if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && e.key !== 'Enter') {
        playKeySound("key");
      }

      // Ctrl to trigger received messages
      if (e.ctrlKey && !isProcessing && messageQueue.length === 0) {
        setMessageQueue([...allReceivedMessages]);
      }
      
      // Enter to send new message
      if (e.key === 'Enter' && !e.ctrlKey) {
        e.preventDefault();
        const inputValue = inputRef.current?.value.trim();
        const newMessage = inputValue;
        if (newMessage) {
          setSentAfterMessages(prev => [...prev, newMessage]);
          playKeySound("sent");
          if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.focus(); // Keep focus on input after sending
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProcessing, messageQueue.length]);

  useEffect(() => {
    if (messageQueue.length > 0 && !isProcessing) {
      const processMessage = async () => {
        setIsProcessing(true);
        
        // Show typing indicator
        setShowTyping(true);
        
        // Wait for typing duration
        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowTyping(false);
        
        // Add the next message
        const [nextMessage, ...remainingMessages] = messageQueue;
        setDisplayedMessages(prev => [...prev, nextMessage]);
        playKeySound("received");
        setMessageQueue(remainingMessages);
        
        // Wait before processing next message
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsProcessing(false);
      };

      processMessage();
    }
  }, [messageQueue, isProcessing]);

  return (
    <div className={styles.chat}>
      <TopBar />
      <Timestamp timestamp="Yesterday" margin={true} />
      
      {sentMessages.map((message, index) => 
        <Message key={`sent-${index}`} message={message} sentFromYou={true} />
      )}
      
      {displayedMessages.length > 0 && (
        <>
          <Timestamp timestamp="10:06" margin={true} />
          {displayedMessages.map((message, index) => (
            <Message key={`received-${index}`} message={message} sentFromYou={false} />
          ))}
        </>
      )}

      {sentAfterMessages.length > 0 && (
        <>
          {sentAfterMessages.map((message, index) => (
            <Message key={`received-${index}`} message={message} sentFromYou={true} />
          ))}
        </>
      )}
      
      {showTyping && <Typing destroyAfterMs={2000} />}
      
      <Type ref={inputRef} />
    </div>
  );
}