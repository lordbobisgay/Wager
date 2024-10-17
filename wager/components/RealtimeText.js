// components/RealtimeText.js
import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../firebase';

const RealtimeText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textRef = ref(database, 'comments/vercel/string');

    // Listen for changes to the value at the reference
    const unsubscribe = onValue(textRef, (snapshot) => {
      console.log(snapshot.val());
      setText(snapshot.val());
    });

    // Clean up the listener on component unmount
    return () => off(textRef, 'value', unsubscribe);
  }, []);

  return <h1 id="changingText">{text}</h1>;
};

export default RealtimeText;
