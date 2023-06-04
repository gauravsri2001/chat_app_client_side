import React, { useState } from 'react'
import { getChannel } from 'stream-chat-react';
import SearchIcon from '../assets/SearchIcon';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState('false');

    const getChannels = async(text) => {
        try{
            //Fetch Channels
        }
        catch(error){
                setQuery('')
        }
    }


    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

  return (
    <div className='hannel-search__container'>
    <div className='channel-search__input__wrapper'>
    <div className='channel-search__input__icon'>
    <SearchIcon />
    </div>
    <input 
    className='channel-search__input__text' 
    placeholder='Search here..' 
    type='text' 
    value={query}  
    onChange={onSearch}
    />

    </div>
    {/* ChannelSearch */}
    </div>
  )
}

export default ChannelSearch;