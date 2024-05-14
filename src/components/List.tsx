import { useState } from "react"

interface Props {
  data: string[]
  onSelect?: (item: string) => void
}

export const List = ({ data, onSelect }: Props) => {

  const [index, setIndex] = useState(1)

  const handleClick = (i: number, item: string) => {
    setIndex(i)
    onSelect?.(item)
  }

  return (<ul className="list-group">
    {data.map((item, i) => (
      <li
        onClick={() => handleClick(i, item)}
        key={item} className={`list-group-item ${i === index ? 'active' : ''} `}>{item}</li>
    ))}
  </ul>)
}
