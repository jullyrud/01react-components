import css from './Statistics.module.css'
import PropTypes from 'prop-types'




export function Statistics({ title="Upload stats", stats}) {
    return (
      
    <section className={css.statistics}>
        {title && <h2 className={css.title} >{title}</h2>}
        <ul className={css.statList}>
          {stats.map(st => (
              <li className={css.item}
                  key={st.id}>
                <span className={css.label}>{st.label}</span>
                <span className={css.percentage}>{st.percentage}%</span>
              </li>
          )
   
   )}
    
  </ul>
</section>

   ) 
} 

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,}
    ))
   
};