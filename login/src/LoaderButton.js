import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";

export default function LoaderButton({
    isLoading,
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <Button
            className={`LoaderButton ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <i className="glyphicon glyphicon-refresh"></i>}
            {props.children}
        </Button>
    );
}