'use client'
import { XIcon } from "@/icons";
import React from "react";

interface NoticeProps {
    title: string;
    message: string;
    variant?: "info" | "success" | "warning" | "danger";
    onClose?: () => void;
}

export default function Notice({ title, message, variant = "info", onClose }: NoticeProps) {
    // Define styles for each variant
    const variantStyles = {
        info: {
            text: "text-blue-300",
            background: "bg-blue-900",
            buttonHover: "hover:bg-blue-700",
            title: "text-blue-500",
        },
        success: {
            text: "text-green-300",
            background: "bg-green-900",
            buttonHover: "hover:bg-green-700",
            title: "text-green-500",
        },
        warning: {
            text: "text-yellow-300",
            background: "bg-yellow-900",
            buttonHover: "hover:bg-yellow-700",
            title: "text-yellow-500",
        },
        danger: {
            text: "text-red-300",
            background: "bg-red-900",
            buttonHover: "hover:bg-red-700",
            title: "text-red-500",
        },
    };

    const styles = variantStyles[variant];

    return (
        <div className={`col-span-2 rounded-lg p-2 ${styles.text} ${styles.background}`}>
            <div className="flex justify-between">
                <b className={styles.title}>{title}</b>
                <button
                    className={`w-6 h-6 hover:scale-105 rounded-md ${styles.buttonHover} transition-all`}
                    type="button"
                    onClick={onClose}
                >
                    <XIcon />
                </button>
            </div>
            <p>{message}</p>
        </div>
    );
}
