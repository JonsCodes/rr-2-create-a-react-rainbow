import React, { useState } from 'react';

function ColorForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(input);
    setInput(''); // Resetting the input state to an empty string
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input} // Bind the input value to the state
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
