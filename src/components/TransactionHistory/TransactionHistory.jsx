import PropTypes from 'prop-types';
import { TransactionCard, TableHead, TableHeadName, TableBodyRow, TableBodyRowName } from './TransactionHistory.styled'


export function TransactionHistory({items}) {
    return (
        <TransactionCard>
            <TableHead>
                <tr>
                    <TableHeadName>Type</TableHeadName>
                    <TableHeadName>Amount</TableHeadName>
                    <TableHeadName>Currency</TableHeadName>
                </tr>
            </TableHead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                <TableBodyRow key={id}>
                    <TableBodyRowName >{type}</TableBodyRowName>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </TableBodyRow>
                ))}
            </tbody>
            </TransactionCard>
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
  
