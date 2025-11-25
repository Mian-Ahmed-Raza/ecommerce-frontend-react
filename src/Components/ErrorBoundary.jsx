import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                    <h1 style={{ 
                        fontSize: '48px', 
                        color: '#FF424D', 
                        marginBottom: '16px',
                        fontWeight: '600'
                    }}>
                        Oops!
                    </h1>
                    <p style={{ 
                        fontSize: '18px', 
                        color: '#1C1C1C', 
                        marginBottom: '24px',
                        maxWidth: '500px'
                    }}>
                        Something went wrong. Please refresh the page or try again later.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            padding: '12px 32px',
                            fontSize: '16px',
                            backgroundColor: '#0067FF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0052CC'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#0067FF'}
                    >
                        Go to Homepage
                    </button>
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <details style={{ 
                            marginTop: '32px', 
                            padding: '16px', 
                            backgroundColor: '#F5F5F5',
                            borderRadius: '6px',
                            textAlign: 'left',
                            maxWidth: '600px'
                        }}>
                            <summary style={{ cursor: 'pointer', fontWeight: '500', marginBottom: '8px' }}>
                                Error Details
                            </summary>
                            <pre style={{ 
                                fontSize: '12px', 
                                color: '#FF424D',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word'
                            }}>
                                {this.state.error.toString()}
                            </pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
