import './styles.scss';

interface ComponentInterface {
  title: string;
  content: React.ReactNode;
}

const Details = ({ title, content }: ComponentInterface) => {
  return (
    <details className="details-section">
      <summary>{title}</summary>
      <div>{content}</div>
    </details>
  );
};

export default Details;
