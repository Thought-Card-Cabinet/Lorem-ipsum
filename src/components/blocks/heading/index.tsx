import React from 'react'
import './styles.css'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface IHeadingProps {
    level: HeadingLevel
    children: React.ReactNode
}

export const Heading: React.FC<IHeadingProps> = (props) => {
    const tag = `h${props.level ?? 1}`
    return React.createElement(tag, {
        className: 'Heading',
        props
    })
}