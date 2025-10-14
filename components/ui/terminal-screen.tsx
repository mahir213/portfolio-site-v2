"use client";

import { useEffect, useState, useRef } from "react";

interface TerminalLine {
  type: "command" | "output" | "comment";
  content: string;
  delay?: number;
  typingSpeed?: number;
}

const terminalContent: TerminalLine[] = [
  { type: "comment", content: "# Welcome to my portfolio", delay: 300, typingSpeed: 50 },
  { type: "command", content: "$ whoami", delay: 800, typingSpeed: 80 },
  { type: "output", content: "Full-stack developer & designer", delay: 400, typingSpeed: 40 },
  { type: "command", content: "$ ls skills/", delay: 1000, typingSpeed: 80 },
  { type: "output", content: "React.js  Next.js  TypeScript  Tailwind", delay: 400, typingSpeed: 35 },
  { type: "output", content: "Node.js Spring boot Angular   ", delay: 200, typingSpeed: 35 },
  { type: "command", content: "$ cat passion.txt", delay: 1200, typingSpeed: 80 },
  { type: "output", content: "Building beautiful, functional web experiences", delay: 400, typingSpeed: 40 },
  { type: "output", content: "that users love and businesses need.", delay: 200, typingSpeed: 40 },
  { type: "command", content: "$ status", delay: 1200, typingSpeed: 80 },
  { type: "output", content: "✓ Available for new projects", delay: 400, typingSpeed: 40 },
];

export const TerminalScreen = () => {
  const [lines, setLines] = useState<Array<{ line: TerminalLine; text: string; isComplete: boolean }>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentLineIndex >= terminalContent.length) return;

    const currentLine = terminalContent[currentLineIndex];
    const delay = currentLineIndex === 0 ? 500 : currentLine.delay || 800;

    delayTimeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      typeText(currentLine);
    }, delay);

    return () => {
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [currentLineIndex]);

  const typeText = (line: TerminalLine) => {
    let currentText = "";
    let i = 0;
    const speed = line.typingSpeed || 60;

    const type = () => {
      if (i < line.content.length) {
        currentText = line.content.slice(0, i + 1);
        
        setLines((prev) => {
          const newLines = [...prev];
          const existingIndex = newLines.findIndex(
            (l) => l.line === line && !l.isComplete
          );
          
          if (existingIndex >= 0) {
            newLines[existingIndex] = { line, text: currentText, isComplete: false };
          } else {
            newLines.push({ line, text: currentText, isComplete: false });
          }
          
          return newLines;
        });

        i++;
        typingTimeoutRef.current = setTimeout(type, speed);
      } else {
        setLines((prev) => {
          const newLines = [...prev];
          const existingIndex = newLines.findIndex(
            (l) => l.line === line && !l.isComplete
          );
          
          if (existingIndex >= 0) {
            newLines[existingIndex] = { line, text: currentText, isComplete: true };
          }
          
          return newLines;
        });
        
        setIsTyping(false);
        setCurrentLineIndex((prev) => prev + 1);
      }
    };

    type();
  };

  const isAllComplete = currentLineIndex >= terminalContent.length;
  const showCursorOnLine = !isAllComplete && lines.length > 0 && !lines[lines.length - 1].isComplete;

  return (
    <div className="h-full w-full bg-[#1e1e1e] rounded-lg overflow-hidden flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 bg-[#323233] px-4 py-2.5 border-b border-[#2d2d30]">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-[#cccccc] text-xs font-medium">
          terminal — zsh
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
        {lines.map((item, index) => (
          <div key={index} className="mb-1">
            {item.line.type === "command" && (
              <div className="flex items-start gap-2">
                <span className="text-[#4ec9b0] flex-shrink-0">→</span>
                <span className="text-[#dcdcaa]">
                  {item.text}
                  {index === lines.length - 1 && showCursorOnLine && (
                    <span className="inline-block w-2 h-4 bg-[#dcdcaa] ml-1 animate-blink" />
                  )}
                </span>
              </div>
            )}
            {item.line.type === "output" && (
              <div className="text-[#cccccc] pl-4">
                {item.text}
                {index === lines.length - 1 && showCursorOnLine && (
                  <span className="inline-block w-2 h-4 bg-[#cccccc] ml-1 animate-blink" />
                )}
              </div>
            )}
            {item.line.type === "comment" && (
              <div className="text-[#6a9955] italic">
                {item.text}
                {index === lines.length - 1 && showCursorOnLine && (
                  <span className="inline-block w-2 h-4 bg-[#6a9955] ml-1 animate-blink" />
                )}
              </div>
            )}
          </div>
        ))}
        {/* Blinking cursor at the end when everything is complete */}
        {isAllComplete && (
          <div className="flex items-start gap-2">
            <span className="text-[#4ec9b0] flex-shrink-0">→</span>
            <span className="inline-block w-2 h-4 bg-[#dcdcaa] animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
};
