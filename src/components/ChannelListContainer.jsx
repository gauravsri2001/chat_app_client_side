import React from 'react';
import College_Icon from '../pics/college_logo.png';
import Log_Out from '../pics/logout.png';
import ChannelSearch from './ChannelSearch';
import { ChannelList } from 'stream-chat-react';
import TeamChannelList from './TeamChannelList';
import TeamChannelPreview from './TeamChannelPreview';

const SideBar = () => (
    <div className='channel-list_sidebar'>

    <div className='channel-list_sidebar_icon1'>
        <div className='icon1_inner'>
            <img src={College_Icon} alt='College' width='30' />
        </div>
    </div>

    <div className='channel-list_sidebar_icon1'>
        <div className='icon1_inner'>
            <img src={Log_Out} alt='Logout' width='30' />
        </div>
    </div>

    </div>
);

const CompanyHeader = () => (
    <div className='channel-list__header'>
    <p className='channel-list__header__text'>College Pager</p>

    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type = 'team'
                    />
                )}

                Preview={(previewProps) => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type='team'
                    />
                )}
            />

            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type = 'messaging'
                    />
                )}

                Preview={(previewProps) => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type='messaging'
                    />
                )}
            />

        </div>
    </>
  )
}

export default ChannelListContainer