import {Avatar as UserAvatar} from "components/user"
import {Avatar} from "components/organizer"

export default function Post(props) {
  return (
    <>
      <UserAvatar {...props?.user?.avatar} />
      <Avatar {...props?.org?.avatar} />
    </>
  )
}