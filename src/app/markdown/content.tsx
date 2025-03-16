'use client'

import { useMarkdownContext } from "./context"
import { use } from 'react'

export const MarkdownContent = () => {
    const promise = useMarkdownContext();

    const content = use(promise);

    if (!content) return <>Nothing...</>

    return <>{content}</>
}