import css from './FriendList.module.css'
import PropTypes from 'prop-types'


export function FriendList({friends}) {
    return (

    <ul className={css.friendList}>
            {friends.map(({id, name, avatar, isOnline}) =>
                (<li className={css.item}
                    key={id}>
                <span className={isOnline ? css.online : css.ofline}
                        ></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>))}
            
    </ul>
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