import React from 'react'
import styles from '../../card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>
}

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`${styles.cardHeader} ${className}`}>{children}</div>
}

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`${styles.cardContent} ${className}`}>{children}</div>
}

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return <h3 className={`${styles.cardTitle} ${className}`}>{children}</h3>
}