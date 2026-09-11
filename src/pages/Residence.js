import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProject, getCategory, getSiblings } from '../data/projects'

export default function Residence() {
    const { projectId } = useParams()
    const [currentIndex, setCurrentIndex] = useState(0)

    const project = getProject(projectId)
    const images = project ? project.images : []
    const { prev, next } = getSiblings(projectId)

    // 換作品時回到第一張，否則會停在上一件的索引位置
    useEffect(() => { setCurrentIndex(0) }, [projectId])

    function scroll(step) {
        setCurrentIndex((i) => (i + step + images.length) % images.length)
    }

    if (!project) {
        return (
            <div className="work-detail__missing">
                <h1 className="work-detail__title">找不到這件作品</h1>
                <Link className="work-detail__back" to="/project">← 回作品總覽</Link>
            </div>
        )
    }

    const category = getCategory(project.category)

    return (
        <article className="work-detail">
            <header className="work-detail__head">
                <Link className="work-detail__back" to="/project">← 回作品總覽</Link>

                <h1 className="work-detail__title">{project.name}</h1>

                <dl className="work-detail__meta">
                    <div>
                        <dt>類型</dt>
                        <dd>{category ? category.title : '—'}</dd>
                    </div>
                    {project.meta && project.meta.size && (
                        <div><dt>坪數</dt><dd>{project.meta.size}</dd></div>
                    )}
                    {project.meta && project.meta.location && (
                        <div><dt>地點</dt><dd>{project.meta.location}</dd></div>
                    )}
                    {project.meta && project.meta.year && (
                        <div><dt>完工</dt><dd>{project.meta.year}</dd></div>
                    )}
                </dl>
            </header>

            <div className="work-detail__stage">
                <button className="work-detail__nav work-detail__nav--prev"
                    onClick={() => scroll(-1)} aria-label="上一張">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>

                <img src={images[currentIndex]}
                    alt={`${project.name} 第 ${currentIndex + 1} 張，共 ${images.length} 張`} />

                <button className="work-detail__nav work-detail__nav--next"
                    onClick={() => scroll(1)} aria-label="下一張">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>

                <p className="work-detail__count">{currentIndex + 1} / {images.length}</p>
            </div>

            <div className="work-detail__thumbs scrollX">
                {images.map((image, index) => (
                    <button key={image}
                        className={`work-detail__thumb ${currentIndex === index ? 'is-current' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`第 ${index + 1} 張`}
                        aria-current={currentIndex === index}>
                        <img src={image} alt="" loading="lazy" />
                    </button>
                ))}
            </div>

            {(prev || next) && (
                <nav className="work-detail__siblings">
                    {prev
                        ? <Link to={`/project/${prev.id}`}>← {prev.name}</Link>
                        : <span />}
                    {next
                        ? <Link to={`/project/${next.id}`}>{next.name} →</Link>
                        : <span />}
                </nav>
            )}
        </article>
    )
}
