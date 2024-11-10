import React, { ButtonHTMLAttributes } from 'react'
import styles from '../../button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'link'
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}