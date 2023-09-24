import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { id } from 'date-fns/locale';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map((stat, i) => {
          return (
            <StatisticItem
              key={stat.id}
              title={stat.title}
              total={stat.total}
              icon={icons[i]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
