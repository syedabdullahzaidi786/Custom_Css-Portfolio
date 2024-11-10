import React, { TextareaHTMLAttributes } from 'react'
import styles from '.././textarea.module.css'

export const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ 
  className = '', 
  ...props 
}) => {
  return <textarea className={`${styles.textarea} ${className}`} {...props} />
}