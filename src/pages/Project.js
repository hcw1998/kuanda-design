import { Link } from 'react-router-dom'
import { CATEGORIES, projects } from '../data/projects'

export default function Project() {
  return (
    <>
      {CATEGORIES.map((category) => {
        const samples = projects.filter((p) => p.category === category.key)
        if (samples.length === 0) return null

        // 單件作品用整排橫幅呈現，避免三欄網格右側空兩格
        const solo = samples.length === 1

        return (
          <section className="work-section" key={category.key}>
            <h2 className="work-section__title">{category.title}</h2>
            <p className="work-section__label">{category.label}</p>

            <div className={`row g-4 mt-1 ${solo ? 'row-cols-1' : 'row-cols-1 row-cols-md-3'}`}>
              {samples.map((project) => (
                <div className="col" key={project.id}>
                  <Link className={`work-card ${solo ? 'work-card--wide' : ''}`} to={`/project/${project.id}`}>
                    <div className="work-card__media">
                      <img src={project.images[0]} alt={project.name} loading="lazy" />
                    </div>
                    <h3 className="work-card__title">{project.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}
