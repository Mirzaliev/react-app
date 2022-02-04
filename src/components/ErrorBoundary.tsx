import React, { Component, ErrorInfo } from 'react';

interface Props {
  name: string
}

interface State {
  error?: Error;
  hasError: boolean;
  errorInfo?: ErrorInfo;
}


const ErrorBoundaryContext = React.createContext((error: unknown) => {});

export const useErrorHandling = () => {
  return React.useContext(ErrorBoundaryContext);
};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  triggerError = (error: unknown)=> {
    console.log(error);
    this.setState({ hasError: true });
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }
  // bf1db3204379c9f7bbe02e5d9b16286a6be0f0aa93ce2a690d18fe11c26cde6e

  render() {
    return (
        <ErrorBoundaryContext.Provider value={this.triggerError}>
          {this.state.hasError
              ? <h1>Oops, we done goofed up</h1>
              : this.props.children
          }
        </ErrorBoundaryContext.Provider>
    );
  }
}

export default ErrorBoundary;