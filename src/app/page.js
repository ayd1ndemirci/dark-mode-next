"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    console.log(theme)
    const newTheme = theme === "light" ? "dark": "light";
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme)
    } else localStorage("theme", "light")
    document.body.className = theme
  }, [theme]);
  

  return (
    <div className={`app`}>
      <span className="span" onClick={handleClick}>
        {theme === "light" ? (
          <img className="icon" src="/assets/sun.svg" alt="" />
        ) : (
          <img className="icon" src="/assets/moon.svg" alt="" />
        )}
      </span>
      <div>
        {' '}
        {theme === "light" ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>}
      </div>
    </div>
  );
}
