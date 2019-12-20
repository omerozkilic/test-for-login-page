import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  TextInput,
  Checkbox,
  Tooltip,
  Button
} from "carbon-components-react";

const PagesContainer = styled.div`
  width: 100%;
  height: calc(100vh - 106px);
  background-color: #f4f4f4;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 568px;
`;

const FormContent = styled.div`
  background-color: #fff;
  padding: 32px 16px;
`;

const FormHeader = styled.div`
  font-size: 30px;
  padding-bottom: 15px;
  display: flex;
`;

const FormModel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  .bx--form-item {
    .bx--label {
      display: flex;
      margin-bottom: 5px;
    }
    .inputClass {
      webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid #959f9f;
      border-radius: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-shadow: 0 0 0 1px transparent inset;
      box-shadow: 0 0 0 1px transparent inset;
      font-style: normal;
      height: 2.5em;
      line-height: 2.5em;
      margin: 0;
      width: 100%;
      max-width: 100%;
      text-indent: 10px;
      -webkit-transition: 0.3s border-color, 0.3s background, 0.3s box-shadow;
      transition: 0.3s border-color, 0.3s background, 0.3s box-shadow;
      &:hover {
        border: 1px solid #3b6caa;
      }
    }
    .bx--form-item .bx--checkbox-wrapper {
      width: auto;
    }
  }
  .wrapperCheckBox {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const NoAccount = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #5a5a5a;
  padding: 25px 0 25px 0;
  .noAccount {
    display: flex;
    color: #5a5a5a;
    font-size: 16px;
  }
`;

const HelpSection = styled.div`
  display: flex;
  padding: 8px;
`;

class HomeRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondStep: false,
      mailValue: "",
      passwordValue: "",
      isNotLogin: false
    };

    this.auth = {
      email: "demo@demo.com",
      password: "pa55w0rd"
    };
  }

  onClickContinue = () => {
    this.setState({ secondStep: true });
  };

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  isEmail = val => {
    // eslint-disable-next-line no-useless-escape
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(val);
  };

  verifyUser = () => {
    if (
      this.state.mailValue === this.auth.email &&
      this.state.passwordValue === this.auth.password
    ) {
      console.log("login succes");
      let history = useHistory();
      history.push("/home");
      // history.push
    } else {
      this.setState({ isNotLogin: true });
      window.location.reload();
    }
  };

  render() {
    const { secondStep, mailValue, passwordValue, isNotLogin } = this.state;
    return (
      <PagesContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <FormContainer>
            <FormContent>
              <FormHeader>IBM'de oturum açın</FormHeader>
              {secondStep ? (
                <div style={{ display: "flex", margin: "10px 0 10px 0" }}>
                  {`${mailValue} olarak oturum açılıyor `}
                  <a
                    to="/"
                    href="/"
                    style={{ marginLeft: "5px", textDecoration: "none" }}
                  >
                    Siz değil misiniz?
                  </a>
                </div>
              ) : (
                ""
              )}
              <FormModel>
                {secondStep ? (
                  <TextInput
                    className="inputClass"
                    value={passwordValue}
                    disabled={false}
                    id="test2"
                    invalid={isNotLogin}
                    invalidText="Hatalı Email ya da parola. Lütfen yeniden deneyin!"
                    labelText={"Parola"}
                    type="password"
                    onChange={this.onChange("passwordValue")}
                  />
                ) : (
                  <TextInput
                    className="inputClass"
                    value={mailValue}
                    disabled={false}
                    id="test2"
                    invalid={
                      mailValue === "" ? false : !this.isEmail(mailValue)
                    }
                    invalidText="A valid value is required"
                    labelText={"Email"}
                    type="email"
                    onChange={this.onChange("mailValue")}
                    pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
                    required
                  />
                )}

                <div className="wrapperCheckBox">
                  <Checkbox
                    className="checkBoxClass"
                    defaultChecked
                    id="checkbox-label-1"
                    indeterminate={false}
                    labelText="Beni Hatırla"
                    wrapperClassName=""
                  />
                  <div>
                    <Tooltip direction="bottom" tabIndex={0}>
                      <p>
                        "Beni Hatırla" kutusunu işaretleyerek web sitemize bir
                        sonraki erişiminizde IBMid kimliğinizin hatırlanmasını
                        isteyebilirsiniz. Web sitemize bir sonraki erişiminizde
                        IBMid kimliğinizin hatırlanmasını istemiyorsanız "Beni
                        Hatırla" kutusunu işaretlemeyin.""
                      </p>
                    </Tooltip>
                  </div>
                </div>
                {!secondStep ? (
                  <Button
                    className="some-class"
                    disabled={!this.isEmail(mailValue)}
                    iconDescription="Button icon"
                    kind="primary"
                    onClick={this.onClickContinue}
                    renderIcon={undefined}
                    size="default"
                    tabIndex={0}
                    type="button"
                  >
                    Devam Et
                  </Button>
                ) : (
                  <Button
                    className="some-class"
                    disabled={false}
                    iconDescription="Button icon"
                    kind="primary"
                    onClick={() => this.verifyUser()}
                    renderIcon={undefined}
                    size="default"
                    tabIndex={0}
                    type="button"
                  >
                    Oturum Aç
                  </Button>
                )}
              </FormModel>
              <NoAccount>
                <div className="noAccount">Hesabınız yok mu ?</div>
                <a
                  to="/"
                  href="/"
                  style={{ marginLeft: "5px", textDecoration: "none" }}
                >
                  Hesap Oluşturun
                </a>
              </NoAccount>
            </FormContent>

            <HelpSection>
              <div>Yardım istiyor musunuz?</div>
              <a
                to="/"
                href="/"
                style={{
                  color: "#1268fb",
                  marginLeft: "5px",
                  textDecoration: "none"
                }}
              >
                IBMid yardım masası ile iletişim kurun
              </a>
            </HelpSection>
          </FormContainer>
        </div>
      </PagesContainer>
    );
  }
}

export default HomeRoute;
