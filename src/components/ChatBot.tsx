import { useEffect } from 'react';

const ChatBot = () => {
  // prevent duplicate elements dl-messenger-list
  useEffect(() => {
    if (!window.dfMessengerLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
      window.dfMessengerLoaded = true;
    }
    // customize chat widget height
    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger.addEventListener('df-messenger-loaded', function () {
      const dfMessengerChat =
        dfMessenger.shadowRoot.querySelector('df-messenger-chat');
      const style = document.createElement('style');
      style.innerHTML =
        'div.chat-wrapper[opened="true"]{ height:470px; max-height:470px; }';
      dfMessengerChat.shadowRoot.appendChild(style);
    });
  }, []);

  return (
    <>
      <df-messenger
        intent='WELCOME'
        chat-title='Emmy'
        chat-icon='https://img.icons8.com/material-outlined/36/ffffff/filled-chat.png'
        agent-id={import.meta.env.VITE_APP__DIALOG_ID}
        language-code='en'
      ></df-messenger>
    </>
  );
};

export default ChatBot;
