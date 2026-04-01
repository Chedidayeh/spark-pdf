import { DesktopNav } from "@/components/hero/desktop-nav";
import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.div 
      className="mt-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <DesktopNav className="flex" />
    </motion.div>
  );
}
