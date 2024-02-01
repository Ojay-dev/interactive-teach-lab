import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC, PropsWithChildren } from "react";

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
