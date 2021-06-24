import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);

  const onClose = () => setIsOpen(false);

  const onOpen = () => setIsOpen(true);

  return {
    isOpen,
    onToggle,
    onClose,
    onOpen,
  };
};

export default useDisclosure;
