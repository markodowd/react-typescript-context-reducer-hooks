import { memo, FC } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'

const TwitterNode: FC<NodeProps> = ({ id }) => (
  <CustomNodeWrapper id={id}>
    <TwitterTweetEmbed tweetId='463440424141459456' />
  </CustomNodeWrapper>
)

export default memo(TwitterNode)
