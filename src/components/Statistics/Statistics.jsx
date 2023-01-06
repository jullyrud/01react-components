import PropTypes from 'prop-types'
import {
    CardStatistics, StatList, StatItem,
    StatItemLaebl, StatItemQuantity, StatTittle
} from './Statistics.styled'



export function Statistics({ title="Upload stats", stats}) {
    return (
      
    <CardStatistics>
        {title && <StatTittle>{title}</StatTittle>}
        <StatList>
                {stats.map(({id, label, percentage}) => (
                    <StatItem
                        key={id}>
                        <StatItemLaebl>{label}</StatItemLaebl>
                        <StatItemQuantity>{percentage}%</StatItemQuantity>
                    </StatItem>
                ))}
    
        </StatList>
    </CardStatistics>

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