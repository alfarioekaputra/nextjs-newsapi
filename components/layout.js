import Head from 'next/head'
import Link from 'next/link'

export default ({ children }) => {
    /*
     * Added this to toggle the is-active class. See:
     * 
     * https://bulma.io/documentation/components/navbar/#navbar-menu
     * https://github.com/jgthms/bulma/issues/856
     */
    const toggleStyles = (event) => {
      document.querySelector('#burger').classList.toggle('is-active')
      document.querySelector('#navbarmenu').classList.toggle('is-active')
    }
  
    return (
      <div>
        <Head>
          <title>News</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
          <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item">
                React News
              </a>
              <a id="burger" onClick={toggleStyles} 
                  role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarmenu" className="navbar-menu">
              <div className="navbar-start">
                <Link href="/">
                  <a className="navbar-item">Home</a>
                </Link>
                <Link href="/news/business">
                  <a className="navbar-item">Bisnis</a>
                </Link>
              </div>
              
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="content has-text-centered">
            <span>I'm the footer</span>
          </div>
        </footer>
      </div>
    )
}