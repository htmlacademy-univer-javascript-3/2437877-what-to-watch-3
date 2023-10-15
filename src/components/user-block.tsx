interface UserBlockProps{
  avatarUrl: string;
}
export const UserBlock = ({avatarUrl}: UserBlockProps) => (
  <ul className="user-block">
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img
          src={avatarUrl}
          alt="User avatar"
          width={63}
          height={63}
        />
      </div>
    </li>
    <li className="user-block__item">
      <a className="user-block__link">Sign out</a>
    </li>
  </ul>
);
