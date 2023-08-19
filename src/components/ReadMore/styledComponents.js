import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 25px;
`

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 90%;
  text-align: center;
  padding: 25px;
`

export const Image = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`
export const ReadMoreButton = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  font-size: 12px;
`
export const Description = styled.p`
  color: #334155;
  font-size: 12px;
  text-align: center;
`
export const Title = styled.h1`
  color: #1e293b;
  font-size: 25px;
  font-family: 'Roboto';
`
export const TagLine = styled.p`
  color: #334155;
  font-size: 15px;
`
