import {Avatar} from "components-user"

export default function UserProfile(props) {
  return (
    <div className="user-profile">
      <Avatar {...props?.avatar} />
      <div className="user-profile__info">
        <p className="user-profile__name">{props.name}</p>
        <p className="user-profile__status">{props.status}</p>
      </div>
    </div>
  );
}