export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 md:mb-8 space-y-3">
      {eyebrow ? (
        <p className="section-kicker">{eyebrow}</p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-copy">{subtitle}</p> : null}
    </div>
  )
}
