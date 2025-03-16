import React from 'react'
import './styles.css'

export interface ICodeSpanProps {
    children: React.ReactNode
}

export const CodeSpan: React.FC<ICodeSpanProps> = (props) => {
    return <code className={'CodeSpan'} {...props} />
}