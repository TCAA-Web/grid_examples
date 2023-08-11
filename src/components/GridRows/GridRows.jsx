import style from './GridRows.module.scss'

export const GridRows = () => {

  return (
    <section>
      <h3>Grid Rows example</h3>
      <div className={style.gridRow}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo
          quam libero ipsam, quae rem sapiente minus dolore a, voluptatem sit.
          Obcaecati culpa totam quo! Ut eaque ad commodi. Veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo
          quam libero ipsam, quae rem sapiente minus dolore a, voluptatem sit.
          Obcaecati culpa totam quo! Ut eaque ad commodi. Veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo
          quam libero ipsam, quae rem sapiente minus dolore a, voluptatem sit.
          Obcaecati culpa totam quo! Ut eaque ad commodi. Veritatis?
        </p>
      </div>
    </section>
  );
};
