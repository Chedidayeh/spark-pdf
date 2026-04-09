import { DesktopNav } from "@/components/hero/desktop-nav";
import { MobileNav } from "@/components/hero/mobile-nav";
import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.div 
      className="mt-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <DesktopNav className="flex" />
      </div>
      
      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <MobileNav className="flex" />
      </div>
    </motion.div>
  );
}
