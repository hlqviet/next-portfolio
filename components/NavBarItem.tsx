import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import { PureComponent, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface INavBarItemProps {
  theme: string;
  href: string;
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      li {
        display: inline;

        list-style: none;

        margin: 0 0.2rem;
      }

      a {
        text-decoration: none;

        padding: 0.5rem;

        border-radius: 50% 50% 0 0;

        transition: all 0.2s ease-in-out;
      }

      a:hover {
        background-color: #2aa4cf;
      }

      a.active {
        background-color: #2aa4cf;
      }

      .light {
        background-color: #eeeeee;
        color: #474747;
      }

      .dark {
        background-color: #474747;
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

class NavBarItem extends PureComponent {
  public props: WithRouterProps & INavBarItemProps;

  constructor(props: WithRouterProps & INavBarItemProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <li className={scoped.className}>
          <Link href={this.props.href} prefetch>
            <a
              className={`${scoped.className} ${this.props.theme} ${
                this.props.router.pathname === this.props.href ? "active" : ""
              }`}
            >
              {this.props.children}
            </a>
          </Link>
        </li>
        {scoped.styles}
      </>
    );
  }
}

export default withRouter(NavBarItem);
