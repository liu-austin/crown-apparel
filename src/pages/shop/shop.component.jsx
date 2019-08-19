// jshint esversion:6
import React from 'react';
import { SHOP_DATA } from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        };
    }

    componentDidMount() {
        this.setState({ collections: SHOP_DATA});
    }

    render() {
        return (<div className="shop-page">
        {
            this.state.collections.map(({ id, ...otherSectionProps}) => (
                <PreviewCollection key={id} {...otherSectionProps} />))
        }
        </div>);
    }
}

export default ShopPage;