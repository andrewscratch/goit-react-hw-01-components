import upcomingData from '../../components/data.json';
import { StatisticsWrapper, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';
import PropTypes from 'prop-types'
export const Statistics = () => {
    return (
        <StatisticsWrapper>
            <Title>UPLOAD STATS</Title>
            <StatisticsList data={upcomingData} />
        </StatisticsWrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};