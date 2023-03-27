'use client'

import React from 'react'

export default function CounterButton() {
  const [count, setCount] = React.useState<number>(0)
  const [by, setBy] = React.useState<number>(1)

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setCount(count + by)}>Press me</button>
      <input
        type="number"
        onChange={(e) => setBy(parseInt(e.target.value) || 1)}
      />
    </div>
  )
}
