# style-ui-package

**style-ui-package** is a customizable React component library designed to provide reusable UI components such as buttons, input fields, cards, and error messages. It enhances UI consistency and reduces development time in React applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Installation
To install the package, use npm:

```sh
npm install style-ui-package
```

Visit the website for any issues - [https://www.npmjs.com/package/style-ui-package](https://www.npmjs.com/package/style-ui-package)

## Usage
Import the required components into your React project and use them seamlessly.

### **Example Usage:**
#### **Using Input Component**
```jsx
import React, { useState } from "react";
import { Input } from "style-ui-package";
import "style-ui-package/dist/style.css";

const App = () => {
  const [value, setValue] = useState("");
  
  return (
    <Input 
      type="text" 
      label="Enter Name" 
      value={value} 
      name="name" 
      placeholder="John Doe" 
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default App;
```

#### **Using Button Component**
```jsx
import React from "react";
import { Button } from "style-ui-package";
import "style-ui-package/dist/style.css";

const App = () => {
  return (
    <Button color="bg-blue-500" onClick={() => alert("Button Clicked!")}>Click Me</Button>
  );
};

export default App;
```

#### **Using Card Component**
```jsx
import React from "react";
import { Card } from "style-ui-package";
import "style-ui-package/dist/style.css";

const App = () => {
  return (
    <Card 
      title="Card Title" 
      subtitle="Subtitle" 
      description="This is a sample card description."
    />
  );
};

export default App;
```

#### **Using ErrorMessage Component**
```jsx
import React, { useState } from "react";
import { ErrorMessage } from "style-ui-package";
import "style-ui-package/dist/style.css";

const App = () => {
  const [showError, setShowError] = useState(true);

  return (
    <>
      {showError && (
        <ErrorMessage error={{ message: "Something went wrong!" }} onClose={() => setShowError(false)} />
      )}
    </>
  );
};

export default App;
```

## Features
The **style-ui-package** provides reusable UI components with customization options, including:

### **Available Components:**

| Component       | Props                                  | Description                                  |
|--------------- |---------------------------------|----------------------------------|
| **Input**      | `type`, `label`, `value`, `name`, `placeholder`, `error`, `disabled`, `onChange` | Customizable input field component |
| **Button**     | `color`, `radius`, `onClick` | Reusable button with hover effects |
| **Card**       | `title`, `subtitle`, `description` | Styled card for displaying content |
| **ErrorMessage** | `error`, `onClose` | Error message with a close button |

## Project Structure
```
style-ui-package/
│
├── lib/                      # Package files
│   ├── components/           # UI components
│   |   ├── Input/            # Input component
│   |   ├── Button/           # Button component
│   |   ├── Card/             # Card component
│   |   ├── ErrorMessage/     # Error message component
│   └── index.ts              # Exports components
├── public/                   # Public files
├── src/                      # Source files for testing
│   ├── App.ts                # Example application
│   ├── main.ts              # Entry point
├── package.json              # Package dependencies and scripts
├── README.md                 # Documentation
└── ...                       # Other essential files
```

## Contact
📧 Email: ranjanaksh25@gmail.com  
🔗 LinkedIn: [akshatranjan25](https://www.linkedin.com/in/akshatranjan25)

