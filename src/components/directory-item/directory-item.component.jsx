import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  ShopNowLink
} from './directory-item.styles.jsx';

const DirectoryItem = ({directory}) => {
    const { imageUrl, title, route } = directory;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <ShopNowLink to={`shop/${title}`}>Shop Now</ShopNowLink>
          </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
