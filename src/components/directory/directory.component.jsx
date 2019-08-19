// jshint esversion:6
import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { sections } from './directory.data.js';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: []
        }
    }

    componentDidMount() {
      this.setState({ sections: sections});
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>))
                }
            </div>
        );
    }
}

export default Directory;