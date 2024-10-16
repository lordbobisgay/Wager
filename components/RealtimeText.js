// components/RealtimeText.js
import { useEffect, useState } from 'react';
import { database } from '../firebase';

const RealtimeText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textRef = database.ref('comments/vercel/string');

    textRef.on('value', (snapshot) => {
	console.log(snapshot.val());
      setText(snapshot.val());
    });

    // Clean up the listener on component unmount
    return () => textRef.off();
  }, []);

  return <h1 id="changingText">{text}</h1>;
};

export default RealtimeText;