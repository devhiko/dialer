import styles from "../../styles/scss/modules/layout/Layout.module.css";
import Navbar from "./Navbar";
import { LayoutProps } from "../../types/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
