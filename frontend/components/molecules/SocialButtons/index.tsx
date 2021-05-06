import React from 'react';
import { SocialButton } from '../../atom/Button';

interface SocialButtonsProps {
  option: 'login' | 'register';
}
const SocialButtons: React.FC<SocialButtonsProps> = ({ option }) => {
  return (
    <>
      {option === 'login' ? (
        <>
          <SocialButton type="google" title="Masuk dengan Google" button />
          <SocialButton type="facebook" title="Masuk dengan Facebook" button />
        </>
      ) : (
        <>
          <SocialButton type="google" title="Daftar dengan Google" button />
          <SocialButton type="facebook" title="Daftar dengan Facebook" button />
        </>
      )}
    </>
  );
};

export default SocialButtons;
