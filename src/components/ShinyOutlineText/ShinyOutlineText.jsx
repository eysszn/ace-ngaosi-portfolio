import './ShinyOutlineText.css';

export default function ShinyOutlineText({ text, className = '' }) {
  return (
    <span className={`outline-text ${className}`} data-text={text}>
      {text}
    </span>
  );
}