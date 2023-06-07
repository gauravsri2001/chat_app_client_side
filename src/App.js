import React from 'react';
import './App.css';
import {StreamChat} from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer';
import ChannelSearch from './components/ChannelSearch';
import Auth from './components/Auth';

const cookies = new Cookies();

const apiKey = '4asmmqkuvfcv';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'), 
    phoneNumber: cookies.get('phoneNumber'), 
    image: cookies.get('avatarURL'), 
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

const App = () => {
  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
    <Chat client={client} theme='team light'>
      <ChannelListContainer />
      <ChannelContainer />
      

    </Chat>
      
    </div>
  )
}

export default App;