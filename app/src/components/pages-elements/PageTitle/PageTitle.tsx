import './styles.scss';

interface ComponentInterface {
  title: string;
}

const PageTitle = ({ title }: ComponentInterface) => <h1 className="page-title">{title}</h1>;

export default PageTitle;
