import Header from "../../components/Header/Header";
// import { motion } from "framer-motion";

const MainLayout = ({ children }) => {
  return (
    // <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth }}>
      <div className="animate-in fade-in-95 dark:bg-dark-hard bg-white">
        <Header />
        {children}
      </div>
    // </motion.div>
  );
};

export default MainLayout;
