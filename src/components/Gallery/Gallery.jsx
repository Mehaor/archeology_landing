import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {parse} from 'qs';
import './Gallery.css';
import {GALLERY_LIST} from 'utils/constants';

export class GalleryLightBox extends Component {

    closeGallery() {
        console.log(this.props);
    }

    render() {
        let {index, imageList} = this.props;
        if (!imageList || !imageList.length || index > imageList.length) {
            return null;
        }
        let previousIndex = index - 1 >= 0 ? index - 1 : imageList.length - 1;
        let nextIndex = index + 1 < imageList.length ? index + 1 : 0;

        return <div id="gallery-lightbox">
            <Link to="" className="gallery-lightbox-close"><i className="fa fa-close" /></Link>
            <div className="gallery-lightbox-photo gallery-lightbox-current-photo" >
                <img src={`${process.env.PUBLIC_URL}/photos/${imageList[index]}`} alt=""/>
            </div>

            {
                imageList.length > 1 ? [
                    <Link className="gallery-lightbox-photo gallery-lightbox-photo-previous" key="prev" to={`?photo=${previousIndex}`}>
                        <img src={`${process.env.PUBLIC_URL}/photos/${imageList[previousIndex]}`} alt=""/>
                    </Link>,
                    <Link className="gallery-lightbox-photo gallery-lightbox-photo-next" key="next" to={`?photo=${nextIndex}`}>
                        <img src={`${process.env.PUBLIC_URL}/photos/${imageList[nextIndex]}`} alt=""/>
                    </Link>,
                ] : null
            }
        </div>;
    }
}

const GalleryLightBoxWithRouter = withRouter(GalleryLightBox);

export const Gallery = ({location}) => {
    const query = parse(location.search.substr(1));
    let isGalleryLightBox = query.photo !== undefined;
    return <div>
        {isGalleryLightBox ? <GalleryLightBoxWithRouter imageList={GALLERY_LIST} index={parseInt(query.photo) || 0} /> : null}
        <Link to="?photo=1">
            
            <img src={process.env.PUBLIC_URL + '/photos/1.jpg'} alt=""/>
        </Link>
</div>};

export default withRouter(Gallery);