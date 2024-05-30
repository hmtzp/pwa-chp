import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useStyle } from '../../classify';
import Image from '../Image';
import logo from './ChupapreciosLogotipo.png';
import defaultClasses from './logo.module.css';

const Logo = (props) => {
    const { height = "100%", width = "100%" } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const { formatMessage } = useIntl();

    const title = formatMessage({ id: 'logo.title', defaultMessage: 'Venia' });

    return (
        <Image
            classes={{ image: classes.logo }}
            height={height}
            src={logo}
            alt={title}
            title={title}
            width={width}
            style={{ maxWidth: '323px' }}
            customClass={classes.customLogoClass}
        />
    );
};

Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string,
        customLogoClass: PropTypes.string
    }),
    height: PropTypes.string,
    width: PropTypes.string,
};

export default Logo;