const React = require('react');
const ErrorTemplate = require('./ErrorTemplate');

function AccountUnavailable (props) {
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <div className="Web3Provider-wrapper">
        <div className="Web3Provider-image">
          <IconNoWeb3 />
        </div>
        <h1 className="Web3Provider-title">
          No Account Available
        </h1>
        <p className="Web3Provider-message">
          Please sign in to use this website.
        </p>
        <button
          onClick={(event) => {
            event.preventDefault()
            if (typeof window.ethereum === 'undefined') return
            window.ethereum.enable()
            .catch(console.error)
          }
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

module.exports = AccountUnavailable;
