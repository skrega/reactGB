import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'

export const Chats = ({ chat }) => {
  const chats = [
    {
      name: 'Chat1',
      id: '1',
    },
    {
      name: 'Chat2',
      id: '2',
    },
  ]
  return (
    <List className="chatsList">
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <ListItemAvatar>
            <Avatar>
              <CommentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={chat.name} secondary="Jan 9, 2022" />
        </ListItem>
      ))}
    </List>
  )
}
