// import { parser } from "@/lib/markdown/parser";
import { renderer } from '@/lib/markdown/renderer'
import Markdown from 'marked-react'
import '../app/globals.css'

const markdownSource = "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)."
export default function Page() {
 
  return (
    // <ThemeProvider>
      <Markdown renderer={renderer}>{markdownSource}</Markdown>
    // </ThemeProvider>
  )
}