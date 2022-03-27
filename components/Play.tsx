import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import styles from "../styles/Play.module.css";
import PlayButtons from "./PlayButtons";

type PlayProps = {
    advanced: boolean;
    setselected?: any;
};

export const Play: FunctionComponent<PlayProps> = ({ 
    advanced,
    setselected,
 }) => {
    return ( 
        <motion.div
            initial={{ rotate: 1360, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 2360, scale: 0, opacity: 0 }}
            className={styles.container}
        >
            {advanced ? (
              <img src="/bg-pentagon.svg"/>
            ) : (
              <img src="/bg-triangle.svg"/>
            )}
            <PlayButtons
                onCLick={(value) => setselected(value)} 
                advanced={advanced} 
            />
        </motion.div>
    );
};