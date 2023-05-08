import React, { useEffect } from 'react';

const CollectChatBot = () => {
  useEffect(() => {
    window.CollectId = "6455fb562f45336a3216812f";
    const h = document.getElementsByTagName('head')[0];
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.async = true;
    s.setAttribute('src', 'https://collectcdn.com/launcher.js');
    h.appendChild(s);
  }, []);

  return (
    <div id="collect-chatbot-container"></div>
  );
};

export default CollectChatBot;
