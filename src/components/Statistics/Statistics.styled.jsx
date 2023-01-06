import styled from '@emotion/styled'


export const CardStatistics = styled.section`
      margin-top: 30px;
    width: 350px;

    background-color: var(--BgcOrange);
    margin-right: auto;
    margin-left: auto;

    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.25);
`

export const StatTittle = styled.h2`
    background-color: var(--mainBgc);
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin: 0;
    padding: 15px 0;
`

export const StatList = styled.ul`
    display: flex;
    padding: 0;
`
export const StatItem = styled.li`
    width: 20%;
    padding: 5px 0 15px 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StatItemLaebl = styled.span`
    font-size: 18px;
    color: var(--mainTextColor);
    margin-bottom: 10px;
`
export const StatItemQuantity = styled.span`
    
`