import PropTypes from 'prop-types';
import { Transaction, Head, Line, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <Head>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Head>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <Type>{type}</Type>
            <Type>{amount}</Type>
            <Type>{currency}</Type>
          </Line>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
