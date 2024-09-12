import { useEffect, useState } from 'react';
import { Wallet } from "./services/near-wallet";
import SignIn from './components/SignIn';
import Messages from './components/Messages';
import { utils } from 'near-api-js';
import './LoginRegister.css';
import LoginRegister from './Pages/Login';
import HomePage from './Pages/HomePage';


const CONTRACT_NAME = "guestbook.near-examples.testnet";
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME });

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initFunction = async () => {
      try {
        const isSignedIn = await wallet.startUp();
        const messages = await getLast10Messages();

        setIsSignedIn(isSignedIn);
        setMessages(messages.reverse());
      } catch (error) {
        console.error("Error during initialization:", error);
      } 
    }
    initFunction();
  }, []);

  const getLast10Messages = async () => {
    try {
      const total_messages = await wallet.viewMethod({ contractId: CONTRACT_NAME, method: "total_messages" });
      const from_index = total_messages >= 10 ? total_messages - 10 : 0;
      return wallet.viewMethod({ contractId: CONTRACT_NAME, method: "get_messages", args: { from_index: String(from_index), limit: "10" } });
    } catch (error) {
      console.error("Error fetching messages:", error);
      return [];
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const { fieldset, message, donation } = e.target.elements;
    fieldset.disabled = true;

    try {
      const deposit = utils.format.parseNearAmount(donation.value);
      await wallet.callMethod({ contractId: CONTRACT_NAME, method: "add_message", args: { text: message.value }, deposit });
      const messages = await getLast10Messages();
      setMessages(messages.reverse());
      message.value = '';
      donation.value = '0';
      message.focus();
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      fieldset.disabled = false;
    }
  };

  const signIn = () => { wallet.signIn() }
  const signOut = () => { 
    wallet.signOut();
    setIsSignedIn(false);  
  }

  return (
    <div>
      {isSignedIn ? (
        <>
          <HomePage signOut={signOut} />
          {!!messages.length && <Messages messages={messages} />}
        </>
      ) : (
        <>
          <SignIn />
          <LoginRegister
            isSignedIn={isSignedIn}
            signIn={signIn}
            signOut={signOut}
            onSubmit={onSubmit}
          />
        </>
      )}
    </div>
  );
}

export default App;
