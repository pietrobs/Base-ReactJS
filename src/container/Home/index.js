import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Wrapper from './Components/Wrapper';
import Logo from '../../components/Logo';
import ConfirmButton from './Components/ConfirmButton';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goToUrl: ''
        }

        this.nextPageUrl = '/other'

        this.changePage = this.changePage.bind(this);
    }

    changePage() {
        this.setState({ goToUrl: this.nextPageUrl })
    }

    render() {
        const { goToUrl } = this.state;
        const { location } = this.props;

        if (goToUrl !== '') {
            return <Redirect
                from={location}
                to={goToUrl}
            />
        }

        return (
            <Wrapper>
                <h1>Template Básico</h1>

                <ConfirmButton
                    name="Ir para próxima página"
                    title="Você realmente deseja ir para outra página?"
                    okText="Sim"
                    cancelText="Não"
                    onConfirm={this.changePage}
                />

                <Logo />
            </Wrapper>
        )
    }
}

export default Home;
