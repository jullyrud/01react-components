import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'


export function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.tableHeadName}>Type</th>
                    <th className={css.tableHeadName}>Amount</th>
                    <th className={css.tableHeadName}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                <tr className={css.tableBody} key={id}>
                    <td className={css.tableBodyName}>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                ))}
            </tbody>
            </table>
    )
}



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired, 
            type: PropTypes.string.isRequired, 
            amount: PropTypes.string.isRequired, 
            currency: PropTypes.string.isRequired,
        })
    )
      
}
  
