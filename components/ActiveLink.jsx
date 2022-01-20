import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({
  children, activeClassName, segmented, ...props
}) => {
  const { pathname } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const currentPaths = pathname.split('/').filter((_, i) => i !== 0);
  const currentLength = currentPaths.length;
  const targetPaths = props.href.split('/').filter((_, i) => i !== 0);
  const targetLength = targetPaths.length;
  const samePath = currentLength > targetLength
    ? targetPaths.reduce(
      (prev, next, index) => prev && next === currentPaths[index],
    )
    : false;

  const isActive = pathname === props.href
    || pathname === props.as
    || (segmented ? samePath : false);
  const className = isActive
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  segmented: PropTypes.bool,
  isRoot: PropTypes.bool,
};

export default ActiveLink;
