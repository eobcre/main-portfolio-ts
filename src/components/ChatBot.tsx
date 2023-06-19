import { useEffect } from 'react';

// global namespace and custom JSX interface
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': any;
    }
  }
}

const ChatBot = () => {
  // prevent duplicate elements dl-messenger-list
  useEffect(() => {
    if (!(window as any).dfMessengerLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
      (window as any).dfMessengerLoaded = true;
    }

    // customize chat widget height
    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger?.addEventListener('df-messenger-loaded', () => {
      // console.log('Dialogflow Messenger loaded');
      const dfMessengerChat = dfMessenger.shadowRoot?.querySelector(
        'df-messenger-chat'
      ) as HTMLElement;
      // if (dfMessengerChat.shadowRoot) {
      //   console.log('shadowRoot exists');
      // } else {
      //   console.log('shadowRoot does not exist');
      // }
      const style = document.createElement('style');
      style.innerHTML = 'div.chat-wrapper { height:470px; max-height:470px; }';
      dfMessengerChat.shadowRoot?.appendChild(style);
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
