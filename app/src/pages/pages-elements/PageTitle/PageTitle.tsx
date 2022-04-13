import './styles.scss';

interface ComponentInterface {
  title: string;
}

const PageTitle: React.FC<ComponentInterface> = ({ title }): JSX.Element => {
  return <h1 className="page-title">{title}</h1>;
};

export default PageTitle;
