import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export default function Statistics({ title, items }) {
  console.log(items);
  const listItem = items.map(item => {
    return (
      <li key={item.id} className={styles.item}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}</span>
      </li>
    );
  });

  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>{listItem}</ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
