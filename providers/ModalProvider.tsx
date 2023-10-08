"use client";

import AuthModel from "@/components/AuthModel";
import SubscribeModel from "@/components/SubscribeModel";
import UploadModel from "@/components/UploadModel";
import { ProductWithPrice } from "@/types";
import { useState, useEffect } from "react";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
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
      <SubscribeModel products={products} />
    </>
  );
};

export default ModalProvider;
