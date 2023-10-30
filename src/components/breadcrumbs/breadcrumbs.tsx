import {Link} from 'react-router-dom';

interface BreadcrumbsProps {
  pageName: string;
  pageUrl: string;
}

export const Breadcrumbs = ({pageName, pageUrl}: BreadcrumbsProps) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={pageUrl} className="breadcrumbs__link">{pageName}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);
