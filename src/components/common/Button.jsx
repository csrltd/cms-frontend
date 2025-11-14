'use client'
import '@/styles/components/common/button.css'
import React from 'react'

const Button = ({ buttonText, icon, onClick }) => {
    return (
        <button onClick={onClick}>
            {icon && icon}
            {buttonText ? buttonText : 'Are you crazy, add text please!'}
        </button>
    )
}

export default Button