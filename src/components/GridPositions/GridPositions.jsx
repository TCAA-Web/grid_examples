import style from './GridPositions.module.scss'

export const GridPositions = () => {

    return (
        <>
        <h3>Grid positions</h3>
        <section className={style.gridPositions}>
            <div className={style.alignLeft}>align-items: start</div>
            <div className={style.alignCenter}>align-items: center</div>
            <div className={style.alignRight}>align-items: end</div>
            <div className={style.justifyLeft}>justify-content: start</div>
            <div className={style.justifyCenter}>justify-items: center</div>
            <div className={style.justifyRight}>justify-items: right</div>
        </section>
        </>
    )
}