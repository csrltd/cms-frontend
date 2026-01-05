import "./styles/sectionTitle.css";

export default function SectionTitle({ text }) {
  return (
    <div className="section-title">
      <span className="bullet"></span>
      <p>{text}</p>
    </div>
  );
}
