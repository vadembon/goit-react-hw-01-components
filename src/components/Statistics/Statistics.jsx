import PropTypes from 'prop-types';
import {
  StatistcsSection,
  Title,
  Item,
  StatList,
  Label,
  Percentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatistcsSection>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item style={{ backgroundColor: getRandomHexColor() }} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatistcsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
