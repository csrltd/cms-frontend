import "./styles/sectionTitle.css";

export default function SectionTitle({ text }) {
  return (
    <div className="section-title">
      <span className="bullet"></span>
      <h2>{text}</h2>
    </div>
  );
}
