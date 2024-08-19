import React, { useState, useEffect } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    let timeout: any;
    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300);
    } else {
      setCurrentIndex(0);
      setCurrentText("");
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return <span className="text-4xl leading-[58px]">{currentText + '|'}</span>;
};

export default Typewriter;
