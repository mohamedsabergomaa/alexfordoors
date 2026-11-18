interface PageHeroProps {
  title: string
  description: string
  eyebrow?: string
  image?: string
  note?: string
}

export function PageHero({ title, description, eyebrow, image, note }: PageHeroProps) {
  return (
    <section className="page-hero">
      {image ? (
        <div
          className="page-hero__image"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      ) : null}
      <div className="container page-hero__inner">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__description">{description}</p>
        {note ? <p className="page-hero__note">{note}</p> : null}
      </div>
    </section>
  )
}
