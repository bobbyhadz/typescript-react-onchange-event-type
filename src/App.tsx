import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  // 👇️ type as React.ChangeEvent<HTMLInputElement>
  // or React.ChangeEvent<HTMLTextAreaElement> (for textarea elements)
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default App;
