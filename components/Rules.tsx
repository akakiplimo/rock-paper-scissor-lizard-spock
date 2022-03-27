import { AnimatePresence, motion } from "framer-motion";
import React, { FunctionComponent, useState } from "react";
import styles from "../styles/Rules.module.css";

type RulesProps = {
    advanced: boolean;
    setopen?: any;
    open?: boolean;
};

export const Rules: FunctionComponent<RulesProps> = ({
    open,
    advanced,
    setopen
}) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles.rules}
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity:0 }}
                    onClick={() => setopen()}
                >
                    <div className={styles.title}>
                        <h1>Rules</h1>
                        <img height="100" width="100" src="/icon-close.svg" alt="close" />
                    </div>
                    <div className={styles.image}>
                        {advanced ? (
                            <img src="/image-rules-bonus.svg" alt="advanced rules" />
                        ) : (
                            <img src="/image-rules.svg" alt="normal rules" />
                        )}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};