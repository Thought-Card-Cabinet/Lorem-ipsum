import './styles.css'
export interface ILinkProps {
    href?: string;
    target?: string;
    children: React.ReactNode;
}

export const Link: React.FC<ILinkProps> = ({ href, target, children }) => {
    return <a href={href} target={target} className={'Link'}>{children}</a>
}