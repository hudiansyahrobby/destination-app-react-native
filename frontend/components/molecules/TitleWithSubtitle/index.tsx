import React from 'react';
import { Subtitle, Title } from '../../atom/Typography';

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
}
const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};

export default TitleWithSubtitle;
