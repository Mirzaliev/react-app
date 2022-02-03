import React, { Component, ErrorInfo } from 'react';

interface Props {
  name: string
}

interface State {
  error?: Error;
  hasError: boolean;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, we done goofed up</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;