/* */ 
"format cjs";
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import requiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import uncontrollable from 'uncontrollable';

import Nav from './Nav';
import NavItem from './NavItem';
import UncontrolledTabContainer from './TabContainer';
import TabContent from './TabContent';
import { bsClass as setBsClass } from './utils/bootstrapUtils';
import ValidComponentChildren from './utils/ValidComponentChildren';

var TabContainer = UncontrolledTabContainer.ControlledComponent;

var propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any,

  /**
   * Navigation style
   */
  bsStyle: PropTypes.oneOf(['tabs', 'pills']),

  animation: PropTypes.bool,

  id: requiredForA11y(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: PropTypes.bool
};

var defaultProps = {
  bsStyle: 'tabs',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey = void 0;
  ValidComponentChildren.forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Tabs.prototype.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return React.createElement(
      NavItem,
      { eventKey: eventKey, disabled: disabled, className: tabClassName },
      title
    );
  };

  Tabs.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        onSelect = _props.onSelect,
        animation = _props.animation,
        mountOnEnter = _props.mountOnEnter,
        unmountOnExit = _props.unmountOnExit,
        bsClass = _props.bsClass,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        _props$activeKey = _props.activeKey,
        activeKey = _props$activeKey === undefined ? getDefaultActiveKey(children) : _props$activeKey,
        props = _objectWithoutProperties(_props, ['id', 'onSelect', 'animation', 'mountOnEnter', 'unmountOnExit', 'bsClass', 'className', 'style', 'children', 'activeKey']);

    return React.createElement(
      TabContainer,
      {
        id: id,
        activeKey: activeKey,
        onSelect: onSelect,
        className: className,
        style: style
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          Nav,
          _extends({}, props, { role: 'tablist' }),
          ValidComponentChildren.map(children, this.renderTab)
        ),
        React.createElement(
          TabContent,
          {
            bsClass: bsClass,
            animation: animation,
            mountOnEnter: mountOnEnter,
            unmountOnExit: unmountOnExit
          },
          children
        )
      )
    );
  };

  return Tabs;
}(React.Component);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

setBsClass('tab', Tabs);

export default uncontrollable(Tabs, { activeKey: 'onSelect' });