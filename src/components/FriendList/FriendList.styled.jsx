import styled from '@emotion/styled'


export const CardFriendList = styled.ul`
    width: 350px;
    
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    
    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.25);

    list-style: none;  
`
export const CardItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    background-color: var(--BgcOrange);
   `
export const Cardame = styled.p`
    font-size: 25px;
    margin: 0 0 0 40px;
   `
export const CardAvatar = styled.img`
    background-color: var(--mainBgc);
    border-radius: 30%;
    margin-left: 20px;
   `
export const CardStatus = styled.span`
    margin-left: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: ${ props => {
    if (props.isOnline === true) {
            return 'green'; 
        } return 'red'
    }};
   `
