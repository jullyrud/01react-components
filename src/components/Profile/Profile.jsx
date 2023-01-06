import PropTypes from 'prop-types'
import {
  CardProfile, Description, Avatar, UserName, UserTag,
  UserLocation, Stats, StatsItem, Label, Quantity
} from './Profile.styled'

export function Profile({avatar, username, tag, location, stats}) {
    return (
      <CardProfile>
          <Description>
              <Avatar
                src={avatar}
                alt="User avatar"
              />
              <UserName>{username}</UserName>
              <UserTag>@{tag}</UserTag>
              <UserLocation>{location}</UserLocation>
          </Description>

          <Stats>
            <StatsItem>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
            </StatsItem>
          </Stats>
      </CardProfile>
   ) 
} 

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};


