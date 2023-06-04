import React from 'react';
import './App.css';
import {StreamChat} from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer';
import ChannelSearch from './components/ChannelSearch';

const apiKey = '4asmmqkuvfcv'

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
    <Chat client={client} theme='team light'>
      <ChannelListContainer />
      <ChannelContainer />
      <ChannelSearch />

    </Chat>
      
    </div>
  )
}

export default App;