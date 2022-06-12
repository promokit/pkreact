import { Component } from 'react';
import { ErrorBoundaryMode, NotificationType } from '../../../model/enums';

import Notification from '../../notifications/Notification/Notification';

interface ErrorBoundaryProps {
  mode?: ErrorBoundaryMode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.mode === ErrorBoundaryMode.Silent ? null : (
        <Notification type={NotificationType.Error} message="Unable to load component" />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
