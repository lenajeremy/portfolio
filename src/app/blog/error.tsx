'use client'

export default function ErrorComponent({
  reset,
  error,
}: {
  reset: () => void
  error: Error
}) {
  return (
    <div>
      <button onClick={() => reset()}>Reset</button>
      <pre>{JSON.stringify(error)}</pre>
    </div>
  )
}
