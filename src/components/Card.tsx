import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Card = (props: Props) => {
  const { children } = props

  return (
    <div className="card" style={{ width: '350px' }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

interface CardBodyProps {
  title: string
  text?: string
}

export const CardBody = (props: CardBodyProps) => {
  const { title, text } = props
  return (<>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
  </>)
}
