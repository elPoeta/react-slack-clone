import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const sidebarItems = [
    { id: 1, icon: <MessageIcon />, text: 'Thread' },
    { id: 2, icon: <InboxIcon />, text: 'All DMs' },
    { id: 3, icon: <DraftsIcon />, text: 'Mentions & Reactions' },
    { id: 4, icon: <BookmarkBorderIcon />, text: 'Save Items' },
    { id: 5, icon: <PeopleIcon />, text: 'Peoples & Groups' },
    { id: 6, icon: <MoreHorizIcon />, text: 'More' }
];