import React, { useState } from 'react';
import { bool, shape, string } from 'prop-types';
import { Form } from 'informed';
import { useIntl } from 'react-intl';
import { useSearchBar } from '@magento/peregrine/lib/talons/SearchBar';

import { useStyle } from '../../classify';
import Autocomplete from './autocomplete';
import SearchField from './searchField';
import defaultClasses from './searchBar.module.css';

import amazonLogo from './Amazon_logo.png';
import ebayLogo from './eb.png';
import walmartLogo from './wm.png';
import homeDepotLogo from './hdep.png';

const SearchBar = React.forwardRef((props, ref) => {
    const { isOpen } = props;
    const talonProps = useSearchBar();
    const {
        containerRef,
        handleChange,
        handleFocus,
        handleSubmit,
        initialValues,
        isAutoCompleteOpen,
        setIsAutoCompleteOpen,
        valid
    } = talonProps;

    const [activeTab, setActiveTab] = useState('amazon');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = isOpen ? classes.root_open : classes.root;
    const { formatMessage } = useIntl();

    return (
        <div className={rootClassName} data-cy="SearchBar-root" ref={ref}>
            <div className={classes.tabs}>
                <button
                    onClick={() => handleTabChange('amazon')}
                    className={activeTab === 'amazon' ? classes.active : ''}
                >
                    <img
                        src={amazonLogo}
                        alt="Amazon"
                        className={activeTab === 'amazon' ? classes.activeImg : classes.inactiveImg}
                    />
                </button>
                <button
                    onClick={() => handleTabChange('ebay')}
                    className={activeTab === 'ebay' ? classes.active : ''}
                >
                    <img
                        src={ebayLogo}
                        alt="Ebay"
                        className={activeTab === 'ebay' ? classes.activeImg : classes.inactiveImg}
                    />
                </button>
                <button
                    onClick={() => handleTabChange('walmart')}
                    className={activeTab === 'walmart' ? classes.active : ''}
                >
                    <img
                        src={walmartLogo}
                        alt="Walmart"
                        className={activeTab === 'walmart' ? classes.activeImg : classes.inactiveImg}
                    />
                </button>
                <button
                    onClick={() => handleTabChange('homedepot')}
                    className={activeTab === 'homedepot' ? classes.active : ''}
                >
                    <img
                        src={homeDepotLogo}
                        alt="Home Depot"
                        className={activeTab === 'homedepot' ? classes.activeImg : classes.inactiveImg}
                    />
                </button>
            </div>
            <div ref={containerRef} className={classes.container}>
                <Form
                    autoComplete="off"
                    className={classes.form}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <div className={classes.search}>
                        <SearchField
                            addLabel={formatMessage({
                                id: 'global.clearText',
                                defaultMessage: 'Clear Text'
                            })}
                            isSearchOpen={isOpen}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                        <div className={classes.autocomplete}>
                            <Autocomplete
                                setVisible={setIsAutoCompleteOpen}
                                valid={valid}
                                visible={isAutoCompleteOpen}
                            />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
});

SearchBar.propTypes = {
    classes: shape({
        autocomplete: string,
        container: string,
        form: string,
        root: string,
        root_open: string,
        search: string,
        tabs: string,
        active: string,
        activeImg: string,
        inactiveImg: string
    }),
    isOpen: bool
};

export default SearchBar;
