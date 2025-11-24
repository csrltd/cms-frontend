'use client';
import "./styles/button.css";

export default function Button({text, icon, onclick}) { 
  return (
    <button className="btn" onClick={onclick}>
        {text ? text : 'Click Me'}
        {icon && icon}
    </button>
  );
}
