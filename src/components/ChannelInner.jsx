// import React, { useState } from 'react'

// import { MessageList, MessageInput, Thread, Window, useChannelActionContext, Avatar, useChannelStateContext, useChatContext } from 'stream-chat-react'
// export const GiphyContext = React.createContext({});

// const ChannelInner = ({setIsEditing}) => {
//     const [giphyState, setGiphystate] = useState(false);
//     const {sendMessage} = useChannelActionContext();

//     const overrideSubmitHandler = (message) => {
//         let updatedMessage = {
//             attachments: message.attachments,
//             mentioned_users: message.mentioned_users,
//             parent_id: message.parent?.id,
//             parent: message.parent,
//             text: message.text,
//         };

//         if(giphyState) {
//             updatedMessage = { ...updatedMessage, text: `giphy ${message.text}`};
//         }

//         if (sendMessage) {
//             sendMessage(updatedMessage);
//             setGiphystate(false);
//         }
//      };

//   return (
//     <GiphyContext.Provider value={{giphyState, setGiphystate}}>
//         <div style={{display: 'flex', width: '100%'}}>
//             <Window>
//                 <TeamChannelHeader setIsEditing = {setIsEditing} />
//                 <MessageList />
//                 <MessageInput overrideSubmitHandler = {overrideSubmitHandler} />
//             </Window>
//             <Thread />
//         </div>
//     </GiphyContext.Provider>
//   );
// };

// export default ChannelInner




