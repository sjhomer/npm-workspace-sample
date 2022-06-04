import {stripTags} from "lib-utils"

/**
 *
 * @param {{src: string, alt: string}} props
 * @return {JSX.Element}
 * @constructor
 */
export default function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt={stripTags(props.alt)} />
    </div>
  )
}