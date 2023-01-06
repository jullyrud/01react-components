import styled from '@emotion/styled'


export const CardProfile = styled.div`
    margin-top: 30px;
    width: 350px;

    background-color: var(--BgcOrange);
    margin-right: auto;
    margin-left: auto;

    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.25);
`
export const Description = styled.div`
    background-color: var(--mainBgc);
    padding-bottom: 20px;  
`
export const Avatar = styled.img`
    width: 60%;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    padding-top: 20px;
`
export const UserName = styled.p`
    font-size: 40px;
    text-align: center;
    margin-bottom: 0;

`

export const UserTag = styled.p`
    font-size: 25px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
    color: var(--mainTextColor);
`
export const UserLocation = styled.p`
    font-size: 25px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
    color: var(--mainTextColor);
`
export const Stats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`
export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33%;
    padding-top: 15px;
    padding-bottom: 15px;
    list-style: none;
`
export const Label = styled.span`
    font-size: 18px;
    color: var(--mainTextColor);
    margin-bottom: 10px;
`
export const Quantity = styled.span`
 
`