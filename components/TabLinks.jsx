import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import styles from 'styles/TabLinks.module.css';
import ActiveLink from './ActiveLink';

function TabLinks({ items, className }) {
  const router = useRouter();

  return (
    <div className={`${className} ${styles.root}`}>
      {items.map((item) => (
        <ActiveLink
          key={item.href}
          activeClassName={styles.navActive}
          href={item.href}
        >
          <a
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              router.push(item.href, undefined, {
                scroll: false,
              });
            }}
          >
            {item.label}
          </a>
        </ActiveLink>
      ))}
    </div>
  );
}

TabLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }).isRequired,
  ),
  className: PropTypes.string,
};

export default TabLinks;
