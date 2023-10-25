interface BreadcrumbsProps {
  pageName: string;
  pageUrl: string;
}

export const Breadcrumbs = ({pageName, pageUrl}: BreadcrumbsProps) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <a href={pageUrl} className="breadcrumbs__link">{pageName}</a>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);
