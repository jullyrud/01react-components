import PropTypes from 'prop-types'
import { CardFriendList, CardItem, Cardame, CardAvatar, CardStatus } from './FriendList.styled'

export function FriendList({friends}) {
    return (

    <CardFriendList>
            {friends.map(({id, name, avatar, isOnline}) =>
                (<CardItem
                    key={id}>
                    <CardStatus isOnline={isOnline} 
                    ></CardStatus>
                    <CardAvatar src={avatar} alt="User avatar" width="48" />
                    <Cardame>{name}</Cardame>
                </CardItem>))}
            
    </CardFriendList>
)
    
    
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
   
};