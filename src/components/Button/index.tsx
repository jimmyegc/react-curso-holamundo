import { ReactNode } from "react"
//import styles from './Button.module.css'
import styled from 'styled-components'

type BtnProps = {
  isLoading: boolean
}

const Btn = styled.button<BtnProps>`
  background-color: ${props => props.isLoading ? 'gray' : 'crimson'};
  color: #e0caec;
`

type Props = {
  children: ReactNode
  isLoading?: boolean
  onClick: () => void
}

/*
const styles = {
  backgroundColor: '#85c010',
  color: '#fff',
  margin: '2px'
} */

//console.log(styles)

export const Button = ({ children, isLoading, onClick }: Props) => {

  return <Btn
    disabled={isLoading} onClick={onClick}
    isLoading={isLoading}
  //className={[styles.button, styles.padded].join(' ')}
  //className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}
  >
    {isLoading ? 'Cargando...' : children}
  </Btn >
}