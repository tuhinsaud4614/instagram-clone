import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <div
            id="presentational"
            className="relative"
            role="presentation"
          ></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
