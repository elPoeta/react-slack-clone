import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../data/sidebarItems';
import { channelsList } from '../data/channels';

const SideBar = (): JSX.Element => {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Bitfeather_
              </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {sidebarItems.map(item =>
                    <MainChannelItem key={item.id}>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                )}
            </MainChannels>
            <ChannelsContainer>
                <NewChannelsContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelsContainer>
            </ChannelsContainer>
            <ChannelsList>
                {channelsList.map(channel =>
                    <Channel key={channel.id}>{channel.title}</Channel>
                )}
            </ChannelsList>
        </Container>
    )
}

export default SideBar;


const Container = styled.div`
  background: #3f1040;
`
const WorkspaceContainer = styled.div`
  color: #fff;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  border-bottom: .5px solid #532753;
`

const Name = styled.div`
  margin-left: 20px;
  font-weight: bold;
`

const NewMessage = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
 width: 36px;
 height: 36px;
 background: #fff;
 color: #3f1040;
 fill: #3f1040;
 border-radius: 50%;
 cursor: pointer;
`

const MainChannels = styled.div`
  color: #bcabbc;
  margin-top: 20px;
`

const MainChannelItem = styled.div`
   display: grid;
   grid-template-columns: 15% auto;
   height: 30px;
   align-items: center;
   padding-left: 20px;
   cursor: pointer;
   :hover {
    background: #350D36;
}
`
const ChannelsContainer = styled.div`
  margin-top: 10px;
  color: #bcabbc;
 
`;

const NewChannelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding-left: 20px;
  padding-right: 12px; 
  cursor: pointer;    
 `;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  color: #bcabbc;
  :hover {
      background: #350D36;
  }
`;