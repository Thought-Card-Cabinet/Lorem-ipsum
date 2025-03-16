import { Heading, Paragraph } from "@/components/blocks"
import { HR, Link } from "@/components/inlines"
import { ReactRenderer as MarkdownReactRenderer } from "marked-react"
import { JSXElementConstructor, ReactElement, ReactNode } from "react"
export const renderer: Partial<MarkdownReactRenderer> = {
    // '#private': undefined,
    // elementId: 0,
    heading: function (children: ReactNode, level: 1 | 2 | 3 | 4 | 5 | 6): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
      return <Heading level={level}>{children}</Heading>
    },
    paragraph: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
      return <Paragraph>{children}</Paragraph>
    },
    link: function (href: string, text: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
      return <Link href={href} target={'_blank'}>{text}</Link>
    },
    text: function (text: ReactNode): ReactNode {
      return text
    },
    // image: function (src: string, alt: string, title?: string | null): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // codespan: function (code: ReactNode, lang?: string | null): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // code: function (code: ReactNode, lang: string | undefined): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // blockquote: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // list: function (children: ReactNode, ordered: boolean, start: number | undefined): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // listItem: function (children: ReactNode[]): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // checkbox: function (checked: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // table: function (children: ReactNode[]): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // tableHeader: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // tableBody: function (children: ReactNode[]): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // tableRow: function (children: ReactNode[]): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // tableCell: function (children: ReactNode[], flags: TableFlags): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // strong: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // em: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // del: function (children: ReactNode): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // },
    // text: function (text: ReactNode): ReactNode {
    //   throw new Error('Function not implemented.')
    // },
    // html: function (html: ReactNode): ReactNode {
    //   throw new Error('Function not implemented.')
    // },
    hr: function (): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
      return <HR />
    },
    // br: function (): ReactElement<React.ReactNode, string | JSXElementConstructor<React.ReactNode>> {
    //   throw new Error('Function not implemented.')
    // }
  }
   