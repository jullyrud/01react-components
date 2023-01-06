import styled from '@emotion/styled'


export const TransactionCard = styled.table`
    margin-top: 30px;
    width: 350px;

    margin-right: auto;
    margin-left: auto;

    box-shadow: 10px 6px 8px rgba(0, 0, 0, 0.25);
`
export const TableHead = styled.thead`
    background-color: var(--BgcOrange);
    font-size: 20px;
`

export const TableHeadName = styled.th`
    font-weight: normal;
    padding: 10px;  
`
export const TableBodyRow = styled.tr`
    text-align: center;

    &:nth-of-type(2n){
        background-color: var(--mainBgc);
}

 
}
`
export const TableBodyRowName = styled.td`
    text-align: left;
    text-transform: capitalize;
`

