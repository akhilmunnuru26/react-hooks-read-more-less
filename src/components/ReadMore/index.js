import {useState} from 'react'
import {
  Card,
  BgContainer,
  Image,
  ReadMoreButton,
  Description,
  Title,
  TagLine,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const shortContent = reactHooksDescription.slice(0, 170)

  const [showContent, setShowContent] = useState(false)

  const remainingContent = reactHooksDescription.slice(170)

  const getContent = () => {
    setShowContent(prevState => !prevState)
  }

  const content = showContent === true ? remainingContent : ''
  const buttonText = showContent === true ? 'Read Less' : 'Read More'

  return (
    <BgContainer>
      <Card>
        <Title>React Hooks</Title>
        <TagLine>Hooks are a new addition to React</TagLine>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{shortContent + content}</Description>
        <ReadMoreButton type="button" onClick={getContent}>
          {buttonText}
        </ReadMoreButton>
      </Card>
    </BgContainer>
  )
}

export default ReadMore
