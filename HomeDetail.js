import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class HomeDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderFlatNav() {
    return index.lists.map((list) => {
      var href = list.external ? list.path : '/index/' + list.path;
      return (
        <h3 key={list.path}>
          <a href={href}>
            <FormattedMessage id={list.label} />
          </a>
        </h3>
      );
    });
  }

  renderGroupedNav() {
    return (
      <div>
        {index.nav.sections.map((navSection) => {
          return (
            <div className="nav-section" key={navSection.key}>
              <h4>
                <FormattedMessage id={navSection.label} />
              </h4>
              <ul>
                {navSection.lists.map((list) => {
                  var href = list.external ? list.path : '/index/' + list.path;
                  return (
                    <li key={list.path}>
                      <a href={href}>
                        <FormattedMessage id={list.label}/>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {(() => {
          if (!index.orphanedLists.length) return;
          return (
            <div className="nav-section">
              <h4>
                <FormattedMessage id={'OTHERS'} />
              </h4>
              <ul>
                {index.orphanedLists.map((list) => {
                  return (
                    <li key={list.path}>
                      <a href={'/index/' + list.path}>
                        <FormattedMessage id={list.label}/>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>
            <FormattedMessage id={'BackManage'} />
          </h1>
        </div>
        <div className="index-lists">{index.nav.flat ? this.renderFlatNav() : this.renderGroupedNav()}</div>
      </div>
    );
  }

}