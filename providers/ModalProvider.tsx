"use client";

import AuthModel from "@/components/AuthModel";
import UploadModel from "@/components/UploadModel";
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
      <UploadModel />
    </>
  );
};

export default ModalProvider;
