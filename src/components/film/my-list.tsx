export enum Action{
  Add,
  InList
}
interface MyListProps {
  action: Action;
}
export const MyList = ({action} : MyListProps) => (
  <button className="btn btn--list film-card__button" type="button">
    {action === Action.Add && <svg viewBox="0 0 19 20" width={19} height={20}><use xlinkHref="#add"/></svg>}
    {action === Action.InList && <svg viewBox="0 0 18 14" width={18} height={14}><use xlinkHref="#in-list" /></svg>}
    <span>My list</span>
    <span className="film-card__count">9</span>
  </button>
);
