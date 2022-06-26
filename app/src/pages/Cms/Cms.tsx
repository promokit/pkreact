import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCmsPage } from '../../hooks/useCmsPage';

import PageWrapper from '../../components/pages-elements/PageWrapper/PageWrapper';

import './styles.scss';

const Cms = () => {
  const { id } = useParams();
  const { fetchCmsPage, cms } = useCmsPage();
  const { content, status } = cms;
  const cmsId = Number(id);

  useEffect(() => {
    fetchCmsPage({ cmsId });
  }, [fetchCmsPage, cmsId]);

  return (
    <PageWrapper status={status}>
      <div className="cms-page">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </PageWrapper>
  );
};

export default Cms;
