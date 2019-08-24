// jshint esversion:6
import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Category from '../category/category.component';

const ShopPage = ({match}) => {
    return (<div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>);
}



export default ShopPage;