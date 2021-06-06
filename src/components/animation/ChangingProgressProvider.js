import React from 'react';

class ChangingProgressProvider extends React.Component {
    static defaultProps ={
        interval: 1000
    };

    state= {
        valuesIndes: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length});
        }, this.props.interval);
    }

    render() {
        return this.props.childre(this.props.values[this.state.valueIndex]);
    }
}

export default ChanginProgressProvider;