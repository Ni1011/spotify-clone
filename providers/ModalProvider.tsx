"use client";

import AuthModel from "@/components/AuthModel";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel />
    </>
  );
};

export default ModalProvider;
