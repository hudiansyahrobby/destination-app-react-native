import React from 'react';
import { DetailHeader } from '../../molecules';
import { IDestination } from '../../../types/DestinationType';

type DestinationDetailProps = {
  destination: IDestination;
};

const DestinationDetail: React.FC<DestinationDetailProps> = (props) => {
  return <DetailHeader {...props} />;
};

export default DestinationDetail;
