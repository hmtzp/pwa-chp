import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { Link, Route } from 'react-router-dom';

import Logo from '../Logo';
import AccountTrigger from './accountTrigger';
import CartTrigger from './cartTrigger';
import NavTrigger from './navTrigger';
import OnlineIndicator from './onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import { useStyle } from '../../classify';
import defaultClasses from './header.module.css';
import StoreSwitcher from './storeSwitcher';
import MegaMenu from '../MegaMenu';
import PageLoadingIndicator from '../PageLoadingIndicator';
import { useIntl } from 'react-intl';

const SearchBar = React.lazy(() => import('../SearchBar'));

const Header = props => {
    const {
        hasBeenOffline,
        isOnline,
        searchRef
    } = useHeader();

    const classes = useStyle(defaultClasses, props.classes);

    const searchBarFallback = (
        <div className={classes.searchFallback} ref={searchRef}>
            <div className={classes.input}>
                <div className={classes.loader}>
                    <div className={classes.loaderBefore} />
                    <div className={classes.loaderAfter} />
                </div>
            </div>
        </div>
    );

    const searchBar = (
        <Suspense fallback={searchBarFallback}>
            <Route>
                <SearchBar isOpen={false} ref={searchRef} />
            </Route>
        </Suspense>
    );

    const { formatMessage } = useIntl();
    const title = formatMessage({ id: 'logo.title', defaultMessage: 'Venia' });

    return (
        <Fragment>
            <div className={classes.switchersContainer}>
                <div className={classes.switchers} data-cy="Header-switchers">
                    <StoreSwitcher />
                </div>
            </div>
            <header className={classes.closed} data-cy="Header-root">
                <div className={classes.headerCustomContents}>
                    {/* Navigation and Logo Section */}
                    <div className={classes.navLogoSection}>
                        <div className={classes.primaryActions}>
                            <NavTrigger />
                        </div>
                        <Link
                            aria-label={title}
                            to={resourceUrl('/')}
                            className={classes.logoContainer}
                            data-cy="Header-logoContainer"
                        >
                            <Logo classes={{ logo: classes.logo }} />
                        </Link>
                    </div>

                    {/* Search and Account Section */}
                    <div className={classes.searchAccountSection}>
                        {searchBar}
                        <div className={classes.secondaryActions}>
                            <AccountTrigger />
                            <CartTrigger />
                    </div>
                    </div>
                </div>
                <div>
                    <MegaMenu />
                </div>
            </header>
            <OnlineIndicator
                hasBeenOffline={hasBeenOffline}
                isOnline={isOnline}
            />
        </Fragment>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        headerCustomContents: string,
        switchers: string,
        switchersContainer: string,
        navLogoSection: string,
        searchAccountSection: string
    })
};

export default Header;