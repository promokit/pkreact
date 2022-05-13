import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCmsPage } from '../../hooks/useCmsPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const Cms = () => {
  const { id } = useParams();
  const { fetchCmsPage, cms } = useCmsPage();
  const { content, status } = cms;
  const cmsId = Number(id);

  useEffect(() => {
    fetchCmsPage({ cmsId });
  }, [fetchCmsPage, cmsId]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !cms) {
    return <Notification type={NotificationType.Error} message="Unable to load CMS Page" />;
  }

  return (
    <div className="cms-page">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Cms;
