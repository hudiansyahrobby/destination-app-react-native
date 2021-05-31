import React from 'react';
import { Modal, Text } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

interface ImageLightBoxProps {
  isVisible: boolean;
  images: Array<any>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageLightBox: React.FC<ImageLightBoxProps> = ({
  isVisible,
  setIsVisible,
  images,
}) => {
  const closeImage = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };
  return (
    <Modal visible={isVisible} transparent={false}>
      <ImageViewer
        imageUrls={images}
        enableSwipeDown
        onSwipeDown={closeImage}
        saveToLocalByLongPress
      />
    </Modal>
  );
};

export default ImageLightBox;
