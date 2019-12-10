import { useState } from 'react';

export const useDropdown = (ref, show = false) => {
  const [showDropdown, setShowDropdown] = useState(show);

  return {
    showDropdown,
    ref,
    toggleDropdown: () => setShowDropdown(!showDropdown),
    closeDropdown: () => setShowDropdown(false),
    openDropdown: () => setShowDropdown(true),
  };
};

export default useDropdown;
