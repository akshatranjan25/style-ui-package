import { useState } from 'react'
import './App.css'
import { Button, Card, Input, ErrorMessage } from 'style-ui-package';
import '../dist/style-ui-package.css'
function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState({ message: 'An error occurred!' }) // Ensure error is an object

  return (
    <>
      <h1>Components of style-ui-package</h1>
      
      <div className="button">
        <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>
        <p>
          The Button component can be used as it is or with modifications.
          Required props: <code>onClick</code>, <code>label</code>
        </p>
      </div>

      <div className="input">
        <Input
          type="text"
          label="Your Name"
          value={inputValue}
          name="Name"
          placeholder="Enter your name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}

        />
        <p>
          The Input component allows users to enter text and supports various modifications.
          Required props: <code>type</code>, <code>label</code>, <code>value</code>, <code>name</code>, <code>onChange</code>
        </p>
      </div>

      <div className="card">
        <Card
          title="Card Component"
          subtitle="A prototype for the card section of your website"
          description="Saves time for basic designing and lets you modify the design according to your use."
        />
        <p>
          The Card component can be used as it is or with modifications. Adding an image is optional.
          Required props: <code>title</code>, <code>subtitle</code>, <code>description</code>
        </p>
      </div>

      <div className="error-message">
        <ErrorMessage error={error || "This is an ErrorBox!!!"} onClose={() => setError({ message: '' })} />
        <p>
          The ErrorMessage component displays error messages with an option to close.
          Required props: <code>error</code> (object), <code>onClose</code> (function)
        </p>
      </div>

      <p className="read-the-docs">
        This page showcases the components <strong>Button, Card, ErrorMessage,</strong> and <strong>Input</strong> from my npm package 
        <code>"style-ui-package"</code>, designed for hassle-free usage in React projects while saving time on basic design.
      </p>
    </>
  )
}

export default App
