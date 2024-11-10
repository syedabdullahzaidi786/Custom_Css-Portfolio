import React, { InputHTMLAttributes } from 'react'
import styles from '../../input.module.css'

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ 
  className = '', 
  ...props 
}) => {
  return <input className={`${styles.input} ${className}`} {...props} />
}