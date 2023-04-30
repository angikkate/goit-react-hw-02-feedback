import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.title}>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;