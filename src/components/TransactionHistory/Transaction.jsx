import PropTypes from 'prop-types';
import styles from './transaction.module.css';

export default function Transaction({ transactions }) {
  const transactionData = transactions.map(transaction => {
    return (
      <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  });

  return (
    <>
      <table className={styles.transaction}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{transactionData}</tbody>
      </table>
    </>
  );
}

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
