import { useRoute } from '@react-navigation/core';
import React from 'react';
import { DetailHeader } from '../../molecules';

const DestinationDetail = () => {
  const { params } = useRoute();
  const destinationId = (params as any)?.itemId;
  return <DetailHeader destinationId={destinationId} />;
};

export default DestinationDetail;
