import React from 'react'
import './styles.css'

export interface IStrongProps {
    children: React.ReactNode
}

export const Strong: React.FC<IStrongProps> = (props) => {
    return <strong className={'Strong'} {...props} />
}