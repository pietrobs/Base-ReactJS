import React, { Component } from 'react';
import { Button } from 'antd';

class Other extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goBack: false
        }

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.setState({ goBack: true })
    }

    render() {
        const { goBack } = this.state;
        const { history } = this.props;

        if (goBack) {
            history.goBack();
        }

        return (
            <div>
                <h1>Other</h1>

                <Button type="default" onClick={this.goBack}>Voltar</Button>
            </div>
        )
    }
}

export default Other;
