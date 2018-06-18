/**
 * menu
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './link';
import {setMedium} from './utils';

const Menu = props => {
    const {items, className, align, medium} = props;

    const availableIn = setMedium(medium);

    return (
        <table
            align={align}
            className={classNames('htmplar-menu', className, availableIn)}
            border="0"
            cellPadding={0}
            cellSpacing={0}
        >
            <tr>
                {
                    items.map((item, index) => {
                        const {link, label, id, medium} = item;

                        const itemAvailableIn = setMedium(medium);

                        return (
                            <td key={index} className={classNames('htmplar-menu-container', itemAvailableIn)}>
                                <a href={link} id={id}>{label}</a>
                            </td>
                        );
                    })
                }
            </tr>
        </table>
    );
};

Menu.defaultProps = {
    align: 'center',
    medium: 'both'
};

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    align: PropTypes.string,
    medium: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
    ])
};

export default Menu;