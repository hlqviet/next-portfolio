import { NextContext } from "next";
import Head from "next/head";
import { Component } from "react";

import { getCanonicalUrl } from "../common/helpers";

interface IIndexProps {
  canonicalUrl: string;
}

export default class Index extends Component {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getCanonicalUrl(ctx.pathname) };
  }

  public props: IIndexProps;

  constructor(props: IIndexProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <p>About</p>
      </>
    );
  }
}
