import React from 'react';
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react';
import CreateChannel from './CreateChannel';
import EditChannel from './EditChannel';
import ChannelInner from './ChannelInner';
//import TeamMessage from './TeamMessage';


const ChannelContainer = ({isCreating, setIsCreating, isEditing, setIsEditing, createType}) => {
  const {channel} = useChatContext();
  if(isCreating) {
    return(
      <div className='channek__container'>
        <CreateChannel createType = {createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing){
    return (
      <div className='channek__container'>
        <EditChannel setIsEditing = {setIsEditing} />
      </div>
    )
  }

  const EmptyState = () => (
    <div className='channel-empty__container'>
      <p className='channel-empty__first'> This is the beginning of our chat history .</p>
      <p className='channel-empty__second'> Send messages, attachments, links, emojis, and more ! </p>
    </div>
  )

  return (
    <div className='channel__container'>
      <Channel 
      EmptyStateIndicator={EmptyState}
      Message={(messageProps, i) => <MessageTeam key={i} {...messageProps}/>}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    
    </div>
  )
}

export default ChannelContainer