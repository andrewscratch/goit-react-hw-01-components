import upcomingData from '../../components/data.json';
import { StatisticsWrapper, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';
import PropTypes from 'prop-types'
export const Statistics = ({title}) => {
    return (
        <StatisticsWrapper>
            {title && <Title>{title}</Title>}
            <StatisticsList data={upcomingData} />
        </StatisticsWrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};