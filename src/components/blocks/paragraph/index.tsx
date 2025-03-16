import './styles.css'

export interface IParagraphProps {
    children: React.ReactNode
}

export const Paragraph: React.FC<IParagraphProps> = (props) => {
    return (
        <p className={'Paragraph'}>
            {props.children}
        </p>
    )
}