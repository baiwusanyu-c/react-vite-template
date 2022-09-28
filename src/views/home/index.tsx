import { Button } from 'antd'
import { useState } from 'react'
export function Home() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
        <div className="card">
            <Button size="large" onClick={handleClick}>
                count is { count }
            </Button>
            <Button size="large" type="primary">
                click to hello page
            </Button>
        </div>
  )
}
