import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'

const TelaInicial = styled.div`
  width: 100%;
  height: 100vh;
  background: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width:70%;
  max-width:200px;
  animation: fading 4s;
  @keyframes fading{
    0% { opacity: 0 };
    100% { opacity: 1 };
}
`
class FirstPage extends React.Component {

  componentDidMount() {
    setTimeout(
      () => this.props.goToLogin(),
      4000
    );
  }

  render() {
    return (
      <TelaInicial>
          <Logo src={require("../../images/LogoPage/logo-future-eats@3x.png")} />
      </TelaInicial>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
  }
}

export default connect(null, mapDispatchToProps)(FirstPage);